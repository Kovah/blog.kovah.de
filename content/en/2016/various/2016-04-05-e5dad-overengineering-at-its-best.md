---
author: Kovah
date: 2016-04-05 10:21:53+00:00
description: Overengineering at it's best for an open source TSA Line Assistant app
draft: false
title: Overengineering at it's best
type: post
url: /en/e5dad-overengineering-at-its-best/
categories:
- Article
tags:
- Development
- open source
---

You may heard about that TSA Line Assistant app (that shows a random left or right pointing arrow) that costs about 300k dollars which were paid by US tax payers. And someone just released an open source version at [tsa.arik.io](https://tsa.arik.io/). Well, very nice app but if you look at the source code that small app just makes you angry. Also pointed out in the [Hackernews comments](https://news.ycombinator.com/item?id=11426945), the assets for the app begin with `bower_components/bootstrap/dist/css/bootstrap.min.css` and also load jQuery and Bootstrap's Javascripts. And that's not all. The dev loaded the whole Fontawesome library for <del>TWO</del> **FOUR** icons!  

The page has an overall size of 300kb. Which is okay for a normal Wordpress blog with some images on it. But not for a website that simply shows a left or right pointing arrow that changes on click. The assets must be app.min.css and app.min.js with an overall size of less than 40-50kb.
