---
author: Kevin Woblick
date: 2014-09-05 13:39:23+00:00
description: Learn how to easy add a progress bar to your Impress.js presentation
  with some lines of HTML, CSS and Javascript.
draft: false
title: A Progress bar for Impress.js
type: post
url: /en/a-progress-bar-for-impress-js/
hascode: true
categories:
- Tutorial
tags:
- impress.js
- JavaScript
- jQuery
---

Impress.js is one of the best presentation frameworks based on Javascript. I recently worked with it to create a presentation but had to add an indicator for the progress of the presentation. I developed two simple solutions you can implement in your next presentation with Impress.js that are based on jQuery and a little bit of CSS.

TL;DR: Just need the code? Okay, then skip the explanations and take a look at the summary.


## A Progress Bar for Impress.js

The first solution is a simple progress bar that is placed at the bottom of the browser window and will indicate the progress based on the current step. So how to achieve this? First we have to dig into how Impress.js is working.
The framework simply adds CSS classes to the current step based on the flow that is given by your HTML file. To make the handling even more easier the developer of Impress.js added events we can use to add listeners.


### Start listening to the Impress.js steps

At the very beginning we need to know how many steps the presentation has by simply counting them. Javascript makes this very easy with `var stepCount = $('.step').length;`
The variable stepCount now holds the number of divs with the `.step` class.
If we divide 100 percent trough the number of steps we get the percent each step stands for. That means if you have 5 steps each step will add 20% to the progress.

Now we have to start listening to Impress.js to know when a new step is entered. The framework offers the `impress:stepenter` event for that so we can easily use jQuery to create a function that listens to the event:

```javascript
$(document).on('impress:stepenter', function(e) {
  // Next code here
});
```


### Calculate the progress

We know that the full progress is 100%, we know how many steps the presentation has and the progress each step stands for. To calculate the current progress we have to know which step is entered.
By using `e.target` we can access the current step so we only have to get the position of the step in the progress.
I defined a new variable with the step and used the `index()` function offered by jQuery:

```javascript
var currentSlide = e.target;
var currentSlideProgress = $('.step').index(currentSlide) + 1;
```

The `+1` is added because the index starts at 0 but we need 1.

The last part is about simple math. Multiply the index of the step with the general progress per step. `Math.ceil()` is used to ensure that the last step will reach the 100% and not for example 90%.

```javascript
var progressWidth = Math.ceil(currentSlideProgress * progressPerStep);
```

To sum up:

```javascript
var stepCount = $('.step').length;
$(document).on('impress:stepenter', function(e) {
  var currentSlide = e.target;
  var currentSlideProgress = $('.step').index(currentSlide) + 1;
  var progressPerStep = 100 / stepCount;
  var progress = Math.ceil(currentSlideProgress * progressPerStep);
});
```


### Display the progress bar

We have the percent of the overall progress now and we're able to display a progress indicator with it.
As I want to introduce a progress bar I added a container to the presentation that is placed on the bottom of the window and uses the full width (100%).
The container holds the progress bar itself that will get it's width from the script. We can use the `css()` function from jQuery for that.
So add `$('#progress-bar').css('width',progress+'%');` at the end of the script and you are done with that. The line adds the progress in percent as the CSS value `width` to the progress bar.

You can customize the bar, make it vertical or as a circle. Whatever you want.
Feel free to share your example in the comment.

(As you may noticed: I surrounded the script with the `$(document).ready(function() {}` just to make sure that the script is executed after everything has been loaded correctly.)


## The whole code for the progress bar

**HTML**

```html
<div id="progress">
  <div id="progress-bar"></div>
</div>
```

**CSS**

```css
#progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: rgba(255,255,255,0.2);
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  z-index: 999;
}

#progress-bar {
  width: 0;
  height: 100%;
 background: #fff;
}
```


**Javascript**

```javascript
$(document).ready(function() {
  var stepCount = $('.step').length;

  $(document).on('impress:stepenter', function(e) {
    var currentSlide = e.target;
    var currentSlideProgress = $('.step').index(currentSlide) + 1;
    var progressPerStep = 100 / stepCount;
    var progress = Math.ceil(currentSlideProgress * progressPerStep);
    $('#progress-bar').css('width',progress+'%');
  });
});
```
