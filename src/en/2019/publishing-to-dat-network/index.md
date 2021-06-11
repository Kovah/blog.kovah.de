---
title: 'Publishing a static website to the dat:// network'
description: 'A detailed tutorial about publishing a static website to the dat:// network, a new P2P internet network.'

author: Kevin Woblick
date: 2019-07-11T13:00:43+02:00
draft: false
hascode: true

categories:
- Tutorial
tags:
- dat Network
- Static Site
- Indieweb
- P2P
---

There are numerous new protocols to build a new internet. The intention is clear: the current internet relies on single servers providing the files of a website. Or short: it is based on centralization. Those new protocols, [dat:// (or Dat)](https://dat.foundation/) being one of them, rethink the web as a network of nodes sharing files of websites based on a P2P approach. Dat is one of the most popular systems besides [IPFS](https://ipfs.io/) and [Solid](https://solid.mit.edu/).  
I rebuilt my blog recently and tried the Dat network for experimenting with the new P2P web. This blog is available via [dat://fd1...e8c/](dat://fd1c022637e708328f44427cb04b1ebda3c41ff2044403fcfc188885a499ce8c/).


## Why I chose Dat

I did not do a lot of research about this topic. Maybe IPFS is better, but I read a some posts on Reddit and Twitter about how easy it is to use Dat and that it's quite performant in comparison with IPFS. Maybe I will try alternatives later, but for now I just use Dat to publish my blog.


## Basic requirements

Dat is basically a P2P file sharing network. If you publish your site you share the HTML, CSS and JS files with other, so they can view your site. Therefore, you cannot publish sites that rely on a backend, like PHP, Ruby or whatever you are using. If you need dynamic content on your site you have to pull it from a centralized server outside of the network.

To summarize:

* Have your site available as a static website (HTML, CSS and JS).
* Make sure that you do not use fixed base URLs like `https://blog.kovah.de/` as this will break all links of your Dat site.
* A terminal.
* A working internet connection.


## Getting started: the Dat CLI

If you start with Dat you can choose whenever to use the [Beaker Browser](https://beakerbrowser.com/) or the CLI tools to manage your website. As I do a lot in the terminal anyway, I chose the CLI tool.

The CLI tool is available as a standalone version or via npm, which requires Node.js. To install the tool, run one of the following commands in your terminal:

```bash
# Install the standalone version
curl -o- https://raw.githubusercontent.com/datproject/dat/master/download.sh | bash

# Install the npm version
npm install -g dat
```

That's it. You can now interact with the Dat network with the `dat` command.


### Main features of the Dat CLI

Those are the main features of the CLI tools you need to publish to the network:

* `dat create` - To create a new site based on your local copy.
* `dat sync` - Sync your site to the network, runs until you quit it.
* `dat keys` - Manage your sites' secret keys.


## Start publishing your site to the Dat network

### Step 1: Create a Dat site

For the following steps I assume that you are currently in the directory of your site, containing the index.html and all other needed files like CSS and JS.

First, we are going to create a Dat site based on your files. To do so, run the `dat create` command. It will generate a dat.json and a .dat folder containing meta information about the site and all contents. If you leave it like that, you will just publish your files, however adding a title might be a good idea.  
To edit the title, open up the `dat.json` file and set both a title and a short description like this:

```json
{
  "title": "Kovah.de Blog",
  "description": "Kovah.de Blog - My personal blog about topics like Web Development, Programming, Gaming and the Internet",
  "url": "dat://fd1c022637e708328f44427cb04b1ebda3c41ff2044403fcfc188885a499ce8c"
}
```


### Step 2: Sync the new site to the network

Now that you created the site it's ready to be pushed to the network. Before you start to sync it you should make sure that your site will still be reachable once you stop the sync. Because as I mentioned earlier: it's a P2P protocol and once you stop sharing your site it will not be available to other until another host starts sharing it again. This is especially important for a low-traffic site.

For your first experiments I recommend signing up for [Hashbase.io](https://hashbase.io/). The service takes care of your files and constantly shares it with the network. It's free for a site size of max 100MB. As an alternative, maybe if you have a larger site, you could set up your own sharing server by using [Homebase](https://github.com/beakerbrowser/homebase), a sharing server built by the devs of the Beaker Browser.  
As I published both my blog and my website I hit the 100MB limit of Hashbase really fast. I set up Homebase using the [telyn/homebase Docker image](https://hub.docker.com/r/telyn/homebase) which works very well.

After creating your site you will get the unique URL which can be used to set up Hashbase of your Homebase server. Once you prepared the service, start sharing your site:

```bash
dat share
```


### Step 3: Exporting your secret key

Before you do anything else, run the following command: 

```bash
dat keys export
```

You will be presented your secret key. Save it where it's absolutely safe and treat it like a password. This is absolutely **crucial**! The secret key allows you to **edit** this very Dat site. If you lose it and delete your local copy of the site, you will **never** be able to update it ever again.

If you delete your local copy and want to update your site, run the following commands:

```bash
# Make a local copy of the site
dat clone dat://YOUR-DAT-URL-HERE

# Import the secret key
dat keys import
```


### Updating the site later on

Once your site is uploaded you could open up the Beaker Browser and take a look at your site. If you want to update it, just edit the files and then run the `dat sync` command. It will automatically scan all files and update the references accordingly. If you deleted your local copy, run `dat clone ...` and `dat keys import` to get a fresh editable copy.

---

You now have your static website running in the Dat network. Congratulations! Please share your Dat URL with me via [Twitter](https://twitter.com/kovah_kvh) or Mastodon (@Kovah@mastodon.social). If you have any questions feel free to write me.

**My Sites on the Dat network**

* [This blog](dat://fd1c022637e708328f44427cb04b1ebda3c41ff2044403fcfc188885a499ce8c/)
* [Portfolio](dat://02dcfb85d1bff68d5027b9969739c3eecf171c13a29cde554c9c29c3271a515a/) 
