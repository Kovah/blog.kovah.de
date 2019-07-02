---
author: Kevin Woblick
date: 2016-04-25 07:10:52+00:00
description: Easily create styleguides without a hassle.
draft: false
title: devbridge-styleguide
type: post
url: /en/22d92-devbridge-styleguide/
hascode: true
categories:
- Article
tags:
- Development
- JavaScript
- NPM
---

Easily create styleguides without a hassle with [devbridge-styleguide](http://devbridge.github.io/Styleguide/).

{{< image img="mRSS0VFdF3.jpg" alt="Devbridge Styleguide" >}}

#### Setup

```bash
npm install devbridge-styleguide --save-dev
```
    
```javascript
var styleguide = require('devbridge-styleguide');
gulp.task('start-styleguide', function () {
  styleguide.startServer();
});
```
    
```bash
gulp start-styleguide
```
