---
author: Kevin Woblick
date: 2016-02-25 09:21:58+00:00
description: I decided to create some themes to spice up the Hacker News site with
  CSS only that can be used with almost every browser
draft: false
title: Some fresh themes to spice up Hacker News
type: post
url: /en/some-fresh-themes-to-spice-up-hacker-news/
hascode: true
category: tutorial
tags:
- CSS
- Hacker News
- Themes
---

If you already know [Hacker News](https://news.ycombinator.com) there's not much to say, just skip to the Themes section. If you don't know what Hackers News is: it's like Buzzfeed but with serious news dedicated to developers, hackers and tech enthusiasts, hosted by [YCombinator](http://www.ycombinator.com/). It's one of these sites I visit at least once per day to get some fresh news. The problem is that the site is quite horrible developed with tables and inline-styles and a very basic design. So I decided to use Stylebot, a chrome extension to edit a sites CSS, to apply a new look to HN. You should be able to use the code for the theme with any browser extension that can insert custom CSS into a website, like [Userstyles](https://userstyles.org/) with Stylish.


## Themes

### Sky

{{< image img="hn-theme-sky.jpg" alt="HN Themes Sky" >}}

Get it [here](https://gist.github.com/Kovah/496bf0fc2b2953ddffb7)


### Amber

{{< image img="hn-theme-amber.jpg" alt="HN Theme Amber" >}}

Get it [here](https://gist.github.com/Kovah/3a7146e9c7c0d1a4f476)


### Celadon

{{< image img="hn-theme-celadon.jpg" alt="HN Theme Celadon" >}}

Get it [here](https://gist.github.com/Kovah/62a7e16e7534ce939f45)


## Make a theme full-width

All displayed theme screenshots use some additional lines of code to make the whole site full-width which looks quite good on smaller screens. To make your selected theme full width too just copy the following lines and add them at the bottom of your theme.

```css
body {
    padding: 0;
    margin: 0;
}
table:first-child {
    width: 100%;
}
```
