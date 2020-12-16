---
title: "LinkAce - Your self-hosted bookmark archive"
description: "Today I released a project more than a year in the making: LinkAce. A self-hosted bookmark archive. Completely open source and free to use."

author: Kevin Woblick
date: 2020-12-15T17:48:26+01:00
draft: false
hascode: false

categories:
- News
tags:
- Open Source
- LinkAce
---

About one and a half year ago I was deeply dissatisfied with my personal bookmarks collections. The links saved in my browser piled up to a bloated mess of outdated websites with only little structure. I tested Shaarli for a few weeks but it never "clicked", so I turned it off. After some thinking, I decided to build my own bookmarks archive. And today is the big day: the release of LinkAce 1.0.

{{< image img="linkace_dashboard.png" alt="Preview of the LinkAce interface">}}


## What is LinkAce?

LinkAce is a bookmark archive. It wasn't built to manage the bookmarks of your browser but has its very own philosophy. My browser bookmarks contain only websites I regularly use and access. LinkAce, in contrast, is meant to provide a _long-term_ archive of links to websites, media files or anything else which has a valid URL. I store interesting articles, neat web tools or libraries I _may_ use sometime in the future. All saved links are added together with proper tags and some are added to lists which contain links across multiple smaller topics. Every now and then I come back to search for something specific I know I saved in the past.

This workflow allows me to keep my browser bookmarks clean, but also store interesting stuff in a way so they can be found easily when I need them.

### Feature Spotlight

Because I created LinkAce from scratch, I was able to include many features not present in other bookmark managers, that are really useful.

The most important feature is the **automated backup** of all sites and regular checks if the websites are still available. Instead of making a backup on your own server, LinkAce relies on the Internet Archive, which already saved billions of websites across the internet. After you saved a link in LinkAce, it will automatically tell the Internet Archive to do a backup of this site.  
Links are also checked on a regular base. LinkAce tries to connect to the website. If something went wrong, you will be notified, so you can check what happened to the site.

If you want to share your link collection with the world, you can enable the **guest mode**. All links, tags and lists that are not marked as private will be accessible by guests visiting your site.

Links can be added with the help of a **browser bookmarklet**. It sits in your bookmarks bar and with a click, the current website will be added to LinkAce.

LinkAce also features a **full API**, so you can connect other tools to LinkAce if you want. The API is accessible with a simple API key.


{{< image img="linkace_mobile.jpg" alt="Preview of the LinkAce interface on a mobile phone" modifier="right">}}

## Try LinkAce today

Of course, the application is completely free and the whole code is available on [Github](https://github.com/Kovah/LinkAce). Before you install LinkAce on your own server, you can fiddle around with the [Demo](https://demo.linkace.org). If you like the app, you can install it by using Docker, or like many other PHP apps on your web server.

If you don’t want to hast LinkAce on your own, sign up for to be notified when our hosting service launches. I currently have no schedule for the release but I’m working on it.

If you need help, you can talk to other users in the [Community forum](https://community.linkace.org/). I offer prioritised support if you become a [Patreon](https://www.patreon.com/Kovah) or [Github Sponsor](https://github.com/sponsors/Kovah).
