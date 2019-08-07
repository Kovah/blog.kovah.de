---
title: Cut your Docker for Mac response times in half with docker-sync
description: I was able to reduce the response times of my apps running with Docker for Mac up to 80%, by using the docker-sync tool.

author: Kevin Woblick
date: 2019-08-07T17:17:14+02:00
draft: false
hascode: true
thumbnail: chuttersnap-eH_ftJYhaTY-unsplash.jpg

categories:
- Tutorial
tags:
- Docker
- docker-sync
- Performance
---

I really do love the concept of Docker and containerization. I haven't touched my MAMP dev setup for more than a year now and barely use my local PHP CLI. But there is and always was one problem: performance. Response times of a second for Laravel apps and 3-7 seconds for a larger Wordpress stack are quite common. Thankfully, there is a solution for this problem, that does not require changing your whole tech stack: docker-sync.

## What is docker-sync?

The Docker for Mac (and for Windows) performance problems have their roots in the OS file system layer between Docker and OS. On Linux, Docker can directly mount files and folders from file system, while on Mac Docker has to pass the request to the OS which takes care of writing the file to the disk. In case of macOS, OSXFS is the elephant in the room. While this does not sound like a big deal, it really is. Even a millisecond difference can pile up to half a second for your whole app, if you have a 500 source files which need to be read.

Thankfully, Docker is able to use native mounting if you put files into volumes, which are then handled by the Linux kernel. And this is exactly what docker-sync does. It creates a volume that holds all your app source files and makes it available to your app, which can read and write pretty fast to the volume. As volumes are usually not bound to the outside world (i.e. your file system), docker-sync implements different tools which take care of syncing the inside of the container with your host file system. This allows you to edit any files in your editor, they are synced into the volume and your app can access it.

## docker-sync benchmarking

I benchmarked docker-sync because I wanted to look at hard numbers instead of guessing if the request was faster or not. The following two apps are based on Laravel and Wordpress, while there are [images from Bitnami]({{< relref path="/2019/drop-in-docker-stack-for-php/index.md" lang="en" >}}) used to run both. The main metric used here is the TTFB, or _time to first byte_, in milliseconds. I opened pages from both apps 10 times in a row, without specific page caching. Both apps are running with PHP 7.3.

{{< table >}}

| App | docker-sync | Min | Max | Median | Difference |
|:----|:-------|----:|----:|-------:|-----------:|
| Laravel 5.8 | off | 1035ms | 2158ms | 1386ms | |
| | on | 234ms | 303ms | 251ms | **-81%** |
| Wordpress 5.2 | off | 2467ms | 3942ms | 2722ms | |
| | on | 881ms | 1589ms | 1271ms | **-53%** |

{{< / table >}}


## How to use docker-sync

I am pretty sure that you are hooked, huh? Saving up to 80% in response times sounds quite ridiculous, but... it's true. So, how do we set up docker-sync now?


### 1. Install the tool

docker-sync is written in Ruby, so you can easily install it, even if you did not upgrade your Ruby version (v2.3 is shipped with macOS at the moment). To install it, run the following command:

```
gem install --user-install docker-sync
# or globally via
sudo gem install docker-sync
```


### 2. Add a new docker-sync.yml file to your project

This config file tells docker-sync which files to store and sync, which modes to use, and so on. Here is a basic config file you may just drop into your root folder:

```yml
version: "2"
syncs:
  your-app-files:
    notify_terminal: true
    src: './'
    sync_excludes: ['.git', '.idea', 'node_modules']
```

First, under the `syncs` option, you specify which volumes to create. Please note that the name of the volume (`your-app-files` here), must be unique on your whole machine. The `src` option defines which files should be copied into the volume by default, you can exclude specific directories or files with the `` option. I excluded the Git, the PhpStorm and the node_modules folders here. Neither git nor the IDE folders have anything to do with the app itself, so they are not needed in the container. Node_modules are excluded because they are also not needed for regular PHP apps and thus can be removed, especially because it may take a lot of time until the 4596895 files and folders are synced...

You can find additional configuration params for volumes in the [official documentation](https://docker-sync.readthedocs.io/en/latest/getting-started/configuration.html).


### 3. Add a docker-compose-dev.yml file

With the current versions of Docker Compose you are able to overwrite certain configurations of previous docker-compose.yml files. This is quite handy, because we can use the current docker-compose.yml file as it is, without any modifications. If you feel the urge to not use docker-sync at some time, you could start your app with the regular `docker-compose up` command.

Here is the example file that I used:

```yml
version: "2"
services:

  php:
    volumes:
      - your-app-files:/app:nocopy

  nginx:
    volumes:
      - your-app-files:/app:nocopy

volumes:
  your-app-files:
    external: true
```

This file tells Docker Compose to not use the regular mounts from the docker-compose.yml file, but instead mount the `your-app-files` volume into the containers. Notice that you have to add the volume to all containers that need access to the files, in this case both PHP and nginx. That's basically it.


### 4. Start the docker-sync stack

There are actually two ways to start the stack with docker-sync:

1. by using `docker-sync-stack` or
2. by using `docker-sync` and `docker-compose`.

#### `docker-sync-stack`

```bash
docker-sync-stack start
```

This command will first start docker-sync which creates the volume and prepares it for usage, and then runs the containers by calling
`docker-compose -f docker-compose.yml -f docker-compose-dev.yml up`, which starts Docker Compose with both docker-compose configuration files.  
The downside here is, that both the sync and the Docker stack will run in the foreground. I personally dislike this as you are constantly in the need of opening multiple terminal windows for one app, but it's fast and efficient.

To stop the stack, press `CMD` + `C`.

#### `docker-sync` + `docker-compose`

```bash
docker-sync start
# wait until the command finishes creating the volume, then:
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d
```

This is the way I use at the moment, I may write a bash function or alias for that later. You can continue working in the terminal, I recommend [Kitematic](https://kitematic.com/) for fast log viewing of containers. (PS: Kitematic is built right into the Docker for Mac install package.)


### How to solve permission problems

If you run into permission problems like me, with Laravel not being able to write logs and Wordpress not being able to store uploads, you will likely have to specify another user ID. For my current Docker stack with Bitnami containers, I ran into issues because docker-sync be default uses the root user to store all files, while PHP FPM runs as the `daemon` user. This will lead to conflicts while saving files. To prevent this, you have to add `sync_userid: '1'` to your docker-sync.yml config file, where `1` is the user ID of the daemon user inside the container.  
After adding that line all problems went away instantly, and I was able to work with the setup.


## Conclusion

It took quite some time to get the complete stack running. I find the documentation not that easy to understand, but I was able to set up a clean stack by looking into various [examples](https://github.com/EugenMayer/docker-sync/tree/master/example) provided by the project maintainer itself. After spending additional hours figuring out the permission issues I was able to run my apps with the docker-sync stack and gained a huge productivity boost. Pages are loading so fast right now, it's incredible how much difference this little tool makes.

Many huge thanks to the maintainer Eugen Mayer and all contributors for publishing this awesome tool.
