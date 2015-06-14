---
layout: post
categories: [osx, rsync, security, ssh]
tumblr_id: 1133084935
disqus_comments: true
date: 2007-03-22 15:18:05 UTC
title: Remote Backup Using rsync
---

My company runs a web server without any real backup. Lately we've seen some strange file system stuff going on (we use reiserfs) and decided it's high time to fix some kind of backup solution.

<a href="http://samba.anu.edu.au/rsync/">rsync</a> came to the rescue!

This is a straight forward "guide" (or something) on how to set it up. We have a machine which initiates the backups every day at 05:00. This computer is the backup. Let's call it <tt>thishost</tt>.

We want this to be secure thus we'll use ssh. So, first we need to create a <i>key pair</i> so rsync doesn't need to prompt for a password each time we run it.

<codeblock>$ cd
$ ssh-keygen -t rsa</codeblock>

Accept the default path (~/.ssh/id...) and specify and empty passphrase.

<codeblock>$ ssh-keygen -t dsa</codeblock>

(Same procedure as with -t rsa)

<codeblock>$ cat .ssh/id_*.pub > .ssh/thisuser-thishost.pub
$ scp .ssh/thisuser-thishost.pub remoteuser@remotehost:~/.ssh/
$ rm .ssh/thisuser-thishost.pub
$ ssh remoteuser@remotehost
$ cat .ssh/thisuser-thishost.pub >> .ssh/authorized_keys
$ rm .ssh/thisuser-thishost.pub
$ logout</codeblock>

Try connecting to remotehost and see if it lets you in:

<codeblock>$ ssh remoteuser@remotehost</codeblock>

If it worked, log out and continue on thishost. If not, you did something wrong. Log out and try again from the beginning.


<h2>Scheduling</h2>

Now you can setup a cron job running something like this:

<codeblock>$ crontab -e
$ 0 5 * * * /usr/bin/rsync -avz -e ssh remoteuser@remotehost:/some/dir/ /backups/host/some--dir/ >> /backups/host/some--dir.log</codeblock>

This will backup the <tt>/some/dir</tt> on <tt>remotehost</tt> to the <tt>/backups/host/some--dir</tt> on <tt>thishost</tt> at 05:00 (5 AM) every day.


<h2>A more flexible scheduling solution</h2>

In my case, I needed to backup quite a few things on <code>remotehost</code>, so I wrapped all backup runs in a script which is triggered by cron.

<codeblock lang="sh">
#!/bin/sh

RSYNC=/usr/bin/rsync
BACKUP_BASE=/Volumes/Stuff/backup

# remote user, remote host, remote path
modersynk() {
	RHOST=$1
	RUSER=$2
	RPATH=$3
	LNAME=`echo "$RPATH"|sed 's/^\///g'|sed 's/\//--/g'`
	LDIR="$BACKUP_BASE/$RHOST"
	LLOGFILE="$LDIR/$LNAME.log"
	mkdir -pm 775 "$LDIR"
	date '+%Y-%m-%d %H:%M:%S --mark--' >> "$LLOGFILE"
	$RSYNC -avz -e ssh "$RUSER@hunch.se:$RPATH/" "$LDIR/$LNAME/" | grep -Ev '(^$|^total size is|receiving file list)' >> "$LLOGFILE"
}

modersynk hunch.se root /var/www
modersynk hunch.se root /etc
modersynk hunch.se root /var/svn
modersynk hunch.se root /var/mail/virtual
modersynk hunch.se root /var/lib/mysql
</codeblock>

The <code>modersynk</code> function takes the following arguments:
<codeblock>modersynk &lt;REMOTE HOST&gt; &lt;REMOTE USER&gt; &lt;REMOTE PATH&gt;</codeblock>

I setup cron like this:

<codeblock lang="sh">
$ crontab -e
$ 0 5 * * * /etc/modersynk.sh
</codeblock>

Simple as that! Works great and the level of complexity is, in my point of view, very low.
