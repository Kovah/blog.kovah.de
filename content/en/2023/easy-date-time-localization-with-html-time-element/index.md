---
title: Easy date and time localization with the time HTML element
description: Did you know there is quite easy way to show localized dates and times on your website without having to do any backend work or guessing the user's locale?

author: Kevin Woblick
date: 2023-05-03T08:52:25+02:00
draft: false
hascode: true

categories:
  - Tutorial
tags:
  - html
  - localization
  - javascript
---

Did you know there is quite easy way to show localized dates and times on your website? You can use the [HTML time element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time) to display dates and times in the user's locale and timezone without having to guess the user's locale, rely on profiles or settings, or doing any backend work.

Let's start with the basics. The `time` element is used to represent either a time on a 24-hour clock or a precise date in the Gregorian calendar (with optional time and timezone information). The time element can be used with the datetime attribute to represent a machine-readable date/time/period which improves accessibility for both bots and impaired users. The time element is supported by all modern browsers and even Internet Explorer 11.

We use it like this, in this example with a database model from Laravel. Of course, any input can be used.

```html
<time datetime="{{ $post->created_at->toIso8601String() }}">
    {{ $post->created_at->toDateTimeLocalString('minute') }}
</time>
```

The output will be something like this before doing any magic with JavaScript:

```html
<time datetime="2023-04-16T08:07:28+00:00">
    2023-04-16T08:07
</time>
```

{{< alert type="info" >}}
Even though we will overwrite the content of the time element (2023-04-16T08:07) with JavaScript, it is still important to have some content as a fallback. In case the user has JavaScript disabled, the original date and time will be displayed.
{{</ alert >}}

## Localizing the date and time

JavaScript offers a convenient method to localize dates and times with the `toLocaleDateString()` and `toLocaleTimeString()` methods of [the Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). We can use them to localize the date and time output from above:

```javascript
document.querySelectorAll('time').forEach($e => {
  const date = new Date($e.dateTime);
  // output the localized date and time
  $e.innerHTML = date.toLocaleString();
  // or output the localized date only
  $e.innerHTML = date.toLocaleDateString();
  // or output the localized time only
  $e.innerHTML = date.toLocaleTimeString();
});
```

The displayed text will automatically be converted into the user's locale format and timezone, for example:

```html
<time datetime="2023-04-16T08:07:28+00:00">
    16.04.2023, 10:07:28
</time>
```

That's it. You just enhanced your website with localized dates and times.
