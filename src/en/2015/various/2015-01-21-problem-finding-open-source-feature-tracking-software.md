---
author: Kevin Woblick
date: 2015-01-21 19:11:02+00:00
description: An article about how hard it is to manage a project like InvoicePlane
  and my search for a good feature request tracker.
draft: false
title: The problem of finding an open source feature tracking software
type: post
url: /en/problem-finding-open-source-feature-tracking-software/
categories:
- Article
tags:
- Drupal
- Feature Requests
- InvoicePlane
- Issue tracker
- Wordpress
---

Since I work on the InvoicePlane project I had to make some decisions regarding the tools we use to build either the software itself or the tools we use to manage the project. The most bad decision I made was that we take all feature requests from the Github repo and our community board and move them to a feature request board at Uservoice.com. But just some days later I noticed that the free plan of Uservoice is very limited in it's features like the number of categories (or forums) or the options to customize the look and feel of the board. We could upgrade the plan to use a paid Uservoice plan but I'm not a a rich guy that could spend ahundred bucks a year just for feature request tracking.
Sadly I cannot revert the move and we have to deal with Uservoice for the next weeks until we found a better solution.


## Bug tracker. Bug tracker everywhere!

Well, I searched for a tracker we could use for this. I was surprised that besides from Uservoice there are just a hand full of solutions that offer something like entering a feature request and others can vote on this. Sure, there a hundreds of bug tracking solutions but most of them are just heavily loaded with features we'll not need and most of them do not offer something like voting. And most of them do not offer the option to let users post a request anonymously - one of the most important things for our users.

## Wordpress? Drupal? Something else?

So now I'll take a look at Wordpress, Drupal and the other CMS-like systems and try to find a solution that could work without coding the tracker on my own. I made very good experiences with both Wordpress and Drupal but I don't know if they offer what we need for our InvoicePlane feature tracking software.
