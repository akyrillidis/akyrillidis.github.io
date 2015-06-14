---
layout: post
categories: [cocoa, dropub, programming, software]
tumblr_id: 1102105505
disqus_comments: true
date: 2009-09-20 13:21:00 UTC
title: How I wrote DroPub in two days
---

Yesterday I wrote <a href="http://rsms.me/2009/09/20/dropub-1-0.html">DroPub</a> -- a simple but powerful little OS X application which transparently handles file transfers "from the desktop".

Even though it has a lot of features, have been tested, updates itself and so on, I only spent about two days on the whole project -- for me, this is the essence of <a href="http://en.wikipedia.org/wiki/Cocoa_(API)">Cocoa</a>.

DroPub is heavily based on `NSOperation`s and uses a hierarchy model for structuring operations. `NSOperation` hierarchies are powerful means for writing most types of "service" applications. The code can easily be followed by a Cocoa programmer and the operating system frameworks and libraries can give really good performance.

<!--more-->

## Practical implementation using NSOperationQueue

In almost all cases one process-global NSOperationQueue is enough and makes things much easier for you. In <a href="http://github.com/rsms/dropub/blob/v1.0/src/prefix.pch#L8">prefix.pch</a> we declare the instance and allocate it in <a href="http://github.com/rsms/dropub/blob/v1.0/src/main.m#L9">main.m</a>:

    NSOperationQueue *g_opq;
    
    int main(int argc, const char *argv[]) {
      g_opq = [[NSOperationQueue alloc] init];
      NSApplicationMain(argc, argv);
      return 0;
    }

<small>Note that the code snippets presented here are condensed versions of the actual code, for illustrative purposes</small>

### DroPub operation hierarchy

For each folder which is watched in DroPub, there is one <code>NSOperation</code> called <code><a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSupervisor.h#L1"> DPSupervisor</a></code>. Whenever the main "thread" detects that a folder should be watched (might have been added to the configuration or changed location), it calls <code><a href="http://github.com/rsms/dropub/blob/v1.0/src/DPAppDelegate.m#L520">startSupervising:</a></code> which starts a new <code><a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSupervisor.h#L1"> DPSupervisor</a></code>:

    DPSupervisor *sv = [[DPSupervisor alloc] initWithApp:self conf:conf];
    sv.delegate = self;
    [g_opq addOperation:sv];

Note here how `g_opq` refers to the global `NSOperationQueue` mentioned earlier. The `conf` argument is simply the per-watched folder configuration containing path, remote host, and so on.

The <code><a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSupervisor.h#L1"> DPSupervisor</a></code>s <code>main</code> method then looks at the designated folder for new files to appear:

    - (void)main {
      while ( !self.isCancelled && conf ) {
        // [sets up a NSDirectoryEnumerator here]
        while (filename = [dirEnum nextObject]) {
          // [continues if the file matches certain criteria (isn't hidden etc)]
          if (![filesInTransit containsObject:path])
            [self sendFile:path name:filename];
        }
        sleep(1);
      }
    }

The supervisor uses a <code>NSMutableSet</code> (<code>filesInTransit</code> in the code above) to keep track of which files are currently in transit. Here the question of robustness might occur — yes, this is actually a very robust construction. Since the nature of the application is to atomically transfer (to a temporary location then mv once completed successfully) files, so if a operation crashes or if the whole app crashes (oh noes!) the file will simply be transferred again a few seconds later or when the application is restarted. The only danger here is if we mess with our <code>NSMutableSet</code> of files in transit, then the worst case scenario is probably corrupt files, so let's not mess with it.

Next step is dispatching yet another <code>NSOperation</code>, subordinate to the <code><a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSupervisor.h#L1"> DPSupervisor</a></code>, which in DroPub is called <a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSendFileOp.m#L1"> <code>DPSendFileOp</code></a>. This is done in <code>DPSupervisor</code>s <a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSupervisor.h#L39"><code>sendFile:name:</code></a>

    - (void)sendFile:(NSString *)path name:(NSString *)name {
       // [make sure we can get an exclusive lock on the file here, 
      //  otherwise try again later]
      [filesInTransit addObject:path];
      DPSendFileOp *op = [[DPSendFileOp alloc] initWithPath:path name:name conf:conf];
      op.delegate = self;
      [g_opq addOperation:op];
    }

As you might have figured out, <a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSendFileOp.m#L1"> <code>DPSendFileOp</code></a> takes care of the actual transmission and reports back to it's parent (technically its delegate) <code><a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSupervisor.h#L61"> DPSupervisor</a></code>.

The <code><a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSendFileOp.m#L59">main</a></code> method of <a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSendFileOp.m#L1"> <code>DPSendFileOp</code></a> is too comprehensive for pasting here in this article but this is a summary of what it does:

<ol>
<li>Starts a new subordinate operation which watches the file being sent for deletion (called <a href="http://github.com/rsms/dropub/blob/v1.0/src/DSFileExistenceMonitor.m#L1"><code>DSFileExistenceMonitor</code></a>).</li>
<li>Constructs a temporary filename for the transfer -- basically the original name prefixed with <code>".dpupload_"</code>.</li>
<li>Constructs the <a href="http://en.wikipedia.org/wiki/Secure_copy" title="Secure Copy">SCP</a> program invocation arguments.</li>
<li>Executes the SCP program and supervises the process I/O and status -- this is where the actual transmission of the file is taking place and this step might take a long time.</li>
<li>The <a href="http://github.com/rsms/dropub/blob/v1.0/src/DSFileExistenceMonitor.m#L1"><code>DSFileExistenceMonitor</code></a> is cancelled.</li>
<li>If the transfer was successful (i.e. not interrupted or corrupted) a remote <code>mv</code> is done over standard SSH.</li>
</ol>

If the file is removed while being transferred <a href="http://github.com/rsms/dropub/blob/v1.0/src/DSFileExistenceMonitor.m#L1"><code>DSFileExistenceMonitor</code></a> will notify <a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSendFileOp.m#L1"> <code>DPSendFileOp</code></a> which will interrupt (by signalling) SCP and then notify it's delegate through <a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSendFileOp.h#L19"><code>fileTransmission:didAbortForPath:</code></a>. On the other hand, if the transfer is successful the <a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSendFileOp.m#L1"> <code>DPSendFileOp</code></a>s delegate is notified through <a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSendFileOp.h#L18"><code>fileTransmission:didSucceedForPath:remoteURI:</code></a> in which case the parent <code><a href="http://github.com/rsms/dropub/blob/v1.0/src/DPSupervisor.h#L61"> DPSupervisor</a></code> will move the successfully uploaded file to Trash.

### Cancellation

Since we use a hierarchy of operations -- running in parallel, thus we can not use the dependency system of <code>NSOperation</code> -- we need to take care of cancelling child operations. We do this by keeping an <code>NSMutableArray</code> in each parent in which we store references to any subordinate tasks which have started and not yet exited. When the parents <code>cancel</code> method is invoked, we simply propagate the message to our children:

    - (void)cancel {
      for (NSOperation *op in childOperations)
        [op cancel];
      [super cancel];
    }

## User interface

I'm not going to talk much about the user interface in this article, but to sum it up DroPub uses <a href="http://developer.apple.com/mac/library/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html">bindings</a>, <a href="http://developer.apple.com/mac/library/documentation/Cocoa/Conceptual/KeyValueCoding/Concepts/BasicPrinciples.html">key-value coding</a> and <a href="http://developer.apple.com/mac/library/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html">key-value observation</a> to communicate with the "background" parts.

<img src="/attachments/2009/09-dropub-preferences.png" width="622" style="max-width:622px" alt="Screenshot of DroPub preferences for configuring folders" />

The interface was built almost completely in Interface Builder.
