---
author: Kevin Woblick
date: 2016-04-05 09:56:24+00:00
description: You can use console.time and console.timeEnd to measure the time it takes
  to do stuff in JavaScript
draft: false
title: console.time and console.timeEnd
type: post
url: /en/0a9fb-console-time-console-timeend/
hascode: true
categories:
- Article
tags:
- Console
- Development
- DevTools
---

I [just read](https://davidwalsh.name/console-time) about these two functions that can be used to measure times without the need of using the Date class. And I use stuff like `console.log('End: ' + (new Date.now() - start))`...

Example:

```javascript
// Start the timer
console.time('testStuff');

// Do your stuff here

// Stop the timer
console.timeEnd('testStuff');

// Console outputs something like 648.124ms
```
