# Setting up a nVidia GPU-equipped computer

Very roughly, there are two trends in deep learning research: 
one is on applications (check the vast volume of new papers in the ArXiv RSS feeds of Learning Theory, Machine Learning; even Optimization).
The other is understanding how to train/set up a deep neural network. The latter is exactly what ~~creates doubts to~~/~~worries~~/~~concerns~~/interests me. 
We have (almost) no idea why these tools work and how we should train them.

Anyway, in both cases, you need to start "playing" with neural networks. 
And in order to "play" with them, you need access to a GPU-equipped computer. For GPU access, there are several scenaria:

* You have easy access to money and pay AWS to rent machines.
* You have access to a machine at the institution you are working at (industry or academia).
* You buy one for your own fun!

Currently, I decided to do the last one.
The reasons? Plenty...

* Experimenting with even the basics of how to train a neural network might be cheaper (in the longrun) compared to renting a machine at AWS. You go for the AWS option when you are ready to scale. <!--What I mean here is not pulling a finished project from GitHub and run it with variations. I mean understanding the basics of the components of deep learning.-->
* Setting up such a machine is a fun procedure and definitely gets you closer to what it entails for it to be set up and ready to run. It might seem easy with all these tutorials online, but only a "frankestein" version of those turorials work. *This is what I will present here.*
* Algorithm prototyping requires interactive machines, in order to print messages, kill the execution when you see something goes wrong, plot results during execution, play with different languages (yeah, Python is sexy, but alternatives like Matlab are still compelling for fast prototyping).

## The machine 

I decided to buy a ~1600 dollar machine, with the following configuration:

* Intel i7-7700K 4.2GHz
* Asus Nvidia GeForce GTX 1080 Ti (11GB)
* 16 GByte DDR4 RAM

Some comments on what machine you should get, see [Tim's post](http://timdettmers.com/2017/04/09/which-gpu-for-deep-learning/) or [Slav's post](https://blog.slavv.com/the-1700-great-deep-learning-box-assembly-setup-and-benchmarks-148c5ebe6415).

## Installation steps
What I'm going to describe here is the installation of the operating system, some drivers, required software, etc etc. 
Yes, this blogpost might be obsolete even within a day from its publication. 
But, it will definitely help me for any other machines I will buy and set up in the near future :).

As a first step, I am planning to run and "play with" Tensorflow. 

### Setting up the operating sytem

What I got from the majority of blog posts on this matter is: go for Ubuntu 16.04. 
This is what works best for the moment. 
Also, the support you get from Ubuntu forums is extraordinary and you can find most answers to your questions (=problems) online.
I was also tempted to try Ubuntu 17.04 but most discussions/blogs online suggested 16.04.

##### Nouveau drivers in Ubuntu
Nouveau is the open source driver that Ubuntu uses (by default?) for Nvidia graphics card. 
I have no idea whether I had the option not to include these drivers when I was installing Ubuntu; but, if I knew beforehand, I would prefer not to have them installed.

Why do I mention Nouveau drivers? 
To make use of TensorFlow with GPUs, you need to install specific Nvidia drivers (on top of which CUDA, cuDNN, TensorFlow, etc. packages rely). 
In my case, I selected to install Ubuntu with X Server (so that I have graphic display).
Therefore, Nouveau was there before I even start the procedure to make the system "deep-learning friendly".

This choice created the following problem: when I was trying to install Nvidia drivers from the official website, I was getting the following error:

```
ERROR: You appear to be running an X server; please exit X before 
installing. For further details, please see the section INSTALLING 
THE NVIDIA DRIVER in the README available on the Linux driver 
download page at www.nvidia.com.
```

I tried several solutions to overcome this problem: I disabled the X server (but it was coming back always after reboot); I even uninstalled components of the Xorg package (but Nouveau was there running). 
Finally, I tried to work in terminal by pressing Ctrl + Alt + Fkeys; but the terminal I was logging in was running an infinite repeat of

```
Nouveau is running (sth sth)
```
messages in the terminal---thus, I couldn't write things in the terminal.

The solution that worked for me was to "tweak" the GRUB loader:

* Open the grub file by executing: 

```
sudo nano /etc/default/grub
```
* Find this line:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```
...and change it to:

```
GRUB_CMDLINE_LINUX_DEFAULT="text"
```
...this guarantees that you login with a terminal when you login to Ubuntu.

* Finally, run

```
sudo update-grub
```
...and reboot.

The next time you log in to Ubuntu, you operate via the command line. 
However, you can restart the X server by running:

```
sudo /etc/init.d/lightdm start
```

*Disclaimer: the above do not mean that this is a necessary procedure --- it just happened to be sufficient to me.*

### Installing Nvidia drivers and CUDA library

*Before any further steps, first run*

```
sudo apt-get update
sudo apt-get --assume-yes upgrade
sudo apt-get --assume-yes install build-essential gcc g++ make binutils
sudo apt-get --assume-yes install software-properties-common
sudo apt-get --assume-yes install git
```

*Some information:*

* *```build-essential``` contains packages that allow you to compile a debian package, like ```gcc``` and ```g++```. However, there is no harm to include them explicitly.*
* *```binutils``` contains the GNU linker ```ld```.*


The purpose of this chapter is so that at the very end, when you run

```
nvcc --version
```

you get back something like:

```
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2015 NVIDIA Corporation
Built on Tue_Aug_11_14:27:32_CDT_2015
Cuda compilation tools, release 7.5, V7.5.17
```

and when you write:

```
nvidia-smi
```

you get something like:

```
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 384.81                 Driver Version: 384.81                    |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  GeForce GTX 108...  Off  | 00000000:01:00.0  On |                  N/A |
| 20%   35C    P8    10W / 250W |    290MiB / 11169MiB |      1%      Default |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|    0      1290      G   /usr/lib/xorg/Xorg                           196MiB |
|    0      1753      G   compiz                                        41MiB |
|    0      2078      G   ...-token=ACA0FDB963077680551D3D71DBB66852    50MiB |
+-----------------------------------------------------------------------------+
```

```nvcc``` is the Nvidia CUDA compiler, while ```nvidia-smi``` is Nvidia's System Management Interface that helps monitoring of Nvidia GPU devides (this will confirm that the system "knows" that there is a GPU card).

To achieve this, follow this straightforward procedure:

* We need to download the latest Nvidia drivers from [Nvidia website](https://developer.nvidia.com/cuda-downloads). Following the instructions there, Nvidia will most probably suggest ```cuda_9.0.176_384.81_linux.run``` (or something similar). 
*However, currently, CUDA v9.0 is not fully supported by tensorflow; but CUDA v8.0 is.*

What worked for me was :

```
sudo sh NVIDIA-Linux-x86_64-384.90.run
sudo reboot
```
(where after running .run, you need to answer some questions).
The .run file was downloaded from [this site](http://www.nvidia.com/Download/index.aspx).
After rebooting, run:

```
sudo apt-get update
sudo apt-get install cuda-toolkit-8.0 
```
*Be careful: we need everything that has to do with CUDA in version 8.0.*

Finally, we need to connect ```PATH``` and ```LD_LIBRARY_PATH``` with cuda installation.

```
cat >> ~/.tmp << 'EOF'
export PATH=/usr/local/cuda-8.0/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-8.0/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
EOF
source ~/.bashrc
```

#### When something goes wrong

To re-do this from scratch when something looks problematic, run:

```
sudo apt-get remove --purge nvidia*
sudo apt-get remove --purge cuda*
sudo apt-get autoremove
sudo reboot
```
### Installing cuDNN

Another package that is not yet supported up-to-date is the cuDNN package: while there is cuDNN v7, TensorFlow supports nicely cuDNN v6.
After creating an account as developer, you can download cuDNN v6 at [this site](https://developer.nvidia.com/rdp/cudnn-download).

Then, at the folder it is downloaded, perform:

```
tar -xzf cudnn-8.0-linux-x64-v6.0.tgz
cd cuda
sudo cp lib64/* /usr/local/cuda/lib64/
sudo cp include/* /usr/local/cuda/include/
```

### Installing TensorFlow via Anaconda

I selected Anaconda because... this is the tool that I'm used to use. No other reason. Thus, I will describe the (straightfoward) steps for the completion of this step. 

* Download Anaconda for Python 3.5 [here](https://www.anaconda.com/download/#linux). *You could select Python 2.7 also.*
* Install Anaconda by following:

```
bash Anaconda3-5.0.0.1-Linux-x86_64.sh -b
cat >> ~/.bashrc << 'EOF'
export PATH=$HOME/anaconda3/bin:${PATH}
EOF
source ~/.bashrc
conda upgrade -y --all
```

* Install TensorFlow using:

```
conda create -n tensorflow
source activate tensorflow
pip install --ignore-installed --upgrade https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow_gpu-1.3.0-cp36-cp36m-linux_x86_64.whl
```

### Check if everything went ok

Two ways to do so: either follow [the example](https://www.tensorflow.org/install/install_linux#run_a_short_tensorflow_program) at TensorFlow page or run some more involved examples from TensorFlow git.

```
git clone https://github.com/tensorflow/tensorflow.git
python tensorflow/tensorflow/examples/tutorials/mnist/fully_connected_feed.py
```

That's it folks! This is just the first step to install the very basics of Deep Learning tools. Guidelines for other tools such as Theano, Jupiter, Keras, PyTorch, etc. will follow soon.