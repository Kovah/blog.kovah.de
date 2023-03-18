---
title: "Versionfeeds: Custom RSS feeds for releases of your favourite software"
description: With Versionfeeds, you can create your own RSS feeds and add the software you love and need to it. Stay up to date with your favourite software.

author: Kevin Woblick
date: 2023-03-18T11:33:04+01:00
draft: false
hascode: false

categories:
- News
tags:
- rss
- software
- productivity
---

This is my second product launching, and I am quite excited. As with so many useful tools and services, they are born out of a problem that needs a solution. [Versionfeeds](https://versionfeeds.com/?ref=kvhblog) is exactly that.

I was quite annoyed by the fact, that I had no central place where I could see all the software releases. I use software a lot, be it at my job, to build my side projects, or tools hosted on my NAS at home. It's literally dozens, if not hundreds of tools, packages or even programming languages. And most of them receive updates regularly.  
That is why I build Versionfeeds.

## What is Versionfeeds

On Versionfeeds, you can create custom RSS feeds, add your favourite software to it and then stay up-to-date with all new releases right in your feed reader. 

### 1. Create a custom RSS Feed

{{< image img="feeds_create.jpg" alt="Preview of the feed creation" >}}

Create your own RSS feeds with a custom title and description. Both the title and the description are used for the actual RSS feed and displayed in your feed reader.

### 2. Add your favourite Software

{{< image img="feed_add_app_golang.jpg" alt="Preview of adding Go programming language to a feed" >}}

To add software to your feed, search for it across multiple providers. All public Github, Gitlab, NPM and Packagist projects are supported. Releases are fetched twice a day. If a project doesn't use releases, tags are fetched if possible.

### 3. Access your Feed

{{< image img="netnews_preview_dark.jpg" alt="Preview of NetNewsWire with Versionfeeds feeds" >}}

Each feed has its own, unique RSS URL. The feeds adhere to the official Atom Feed standard and were tested with the W3C Validator. They can be used with any tool that is capable of reading RSS feeds, no matter if it's a commercial service, a desktop app or a self-hosted web application.

## Versionfeeds Professional

Versionfeeds offers a free plan, that will stay free forever. The number of feeds and software you can add to them is limited. To add unlimited feeds and software, you can upgrade to the Professional plan at any time. The Professional plan costs $4.90 per month or $49 per year.

👉 [**Create your first feed on Versionfeeds**](https://versionfeeds.com/?ref=kvhblog)
