---
title: Daily struggles with Selects
description: Working with select elements in forms is hard if you have dynamic inputs or large lists to choose from - or simply want to load options from the backend.

author: Kevin Woblick
date: 2019-09-24T10:08:57+02:00
draft: false
thumbnail: christopher-lemercier.jpg

categories:
- Articles
tags:
- HTML
- Select2
- Selectize
- Accessibility
---

It's hard to provide a solution that is both convenient and well working on websites. And it gets even harder if accessibility is also a requirement. At the moment I heavily struggle with providing a solid experience with select form elements in [LinkAce](https://github.com/Kovah/LinkAce). The problem is that I need both normal selects which have pre-filled lists in option groups and tag inputs, which allow the user to select from existing tags and create new ones on the fly.

At the moment I am using [Selectize](https://selectize.github.io/selectize.js/), which is working, I used it in another project as well. It works out of the box, is stylable and provides all features I need. But here comes the downside: it has some accessibility issues, especially when tabbing trough the form, e.g. for links. At some time you are simply stuck, because using tab just opens the search / select dropdown of the input, even if you already have selected tags.  
Another issue is, that the project seems dead. There is an [open ticket](https://github.com/selectize/selectize.js/issues/752) with a call for maintainers, with several people offering their help, but the current maintainer seems to have left the ship. With hundreds of open pull requests and even more issues, with the last release from a year ago, the project seems dead - sadly.

## Looking for alternatives

So, as Selectize seems to be no viable option for long term usage, I started searching for alternatives. There are some other libraries available but currently none looks promising.

### Select2

Maybe the largest and most well known library for advanced select fields is [Select2](https://select2.org/). However, working with it is kinda horrible. The documentation is really extensive with a lot of examples. While simple selects worked kinda well, tags were really hard to work with and I stopped any further development with it as I noticed that Select2 is not capable of just reading pre-filled `<option>` tags inside the selects and display them. Instead, you have to somehow pass them from your backend into the JS so the options can be added as a data attribute or via using jQuery to appending the option elements to the select. I don't want to have such a mess in my code, with so much room for errors and wrong encoding. As pre-filled options are a must-have for editing forms, Select2 was now out of the ring.
Last but not least, the theming subpar. The styles come bundled with hard-coded color values, something I simply can't understand if they already use Sass for the CSS. Available themes are supposed to be loaded after the Select2 CSS, which will unnecessarily bloat the already heavy CSS. 

### Chosen by Harvest

Chosen is the only library I could find that is actually backed by some company, which I see as a larger plus in the open source world. Company-backed projects usually last longer and are more actively maintained, at least from my experience. Unfortunately [Chosen](https://github.com/harvesthq/chosen), which is built by Harvest, seems to be abandoned. The last relevant commit is from over a year ago. You may argue that the library is "feature complete". At the moment there are 200 open issues and over 50 pull request. I rather assume the project was just abandoned, which removes it from the list of viable alternatives.

### Choices

[Choices](https://github.com/jshjohnson/Choices) seems to be one of the most popular libs in the field, with development activity and somewhat regular releases. It has no jQuery dependency and in comparison with Select2, is really lightweight. It seems that is has all features needed: selects with option groups, tags, support for loading from remote sources and it provides easily themeable styles. I will try the lib in LinkAce and hope that it will work. If not, I am out of options for the moment. Fingers crossed.

If you know other decent alternatives for Select2 and other libs, please share them with me.
