---
author: Kovah
date: 2016-08-24 11:13:18+00:00
description: A CSS property to improve font loading on your websites.
draft: false
title: The font-display CSS property
type: post
url: /en/72123-css-font-display-property/
hascode: true
categories:
- Article
tags:
- CSS
- Fonts
- Performance
- Web Development
---

If you already used custom fonts for your websites you may know the struggle with slow loading fonts. This can be very painful if you use custom fonts for large parts of your site. Users with a slow internet connection may encounter something like this:

{{< image img="1hz56se-foit.png" alt="Font loading without font-display" >}}

To solve this problem of blank displaying of your text because the fonts are not loaded already, use the `font-display: swap` property inside your @font-face declarations. At the time of this writing, this is [not an official feature](https://caniuse.com/#feat=css-font-rendering-controls) supported by any browser without additional configuration. However, it may be useful for the future.
Here is an example:

```css
@font-face {
  font-family: "Open Sans Regular";
  font-weight: 400;
  font-style: normal;
  src: url("fonts/OpenSans-Regular-BasicLatin.woff2") format("woff2");
  font-display: swap;
}
```
{{< image img="1es86ge-swap.png" alt="Font loading with font-display" >}}

And now the browser will use fallback fonts for your texts until the custom font is loaded and will swap the displaying then. Read the full article [here](https://css-tricks.com/font-display-masses/).
