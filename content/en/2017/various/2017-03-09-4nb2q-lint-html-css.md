---
author: Kevin Woblick
date: 2017-03-09 10:24:22+00:00
draft: false
title: Lint HTML with CSS
description: Visually mark HTML elements with the help of CSS if the elements are broken or incomplete.
type: post
url: /en/4nb2q-lint-html-css/
hascode: true
categories:
- Article
tags:
- CSS
- Development
- HTML
- Linting
- Web Development
---

Ire Aderinokun just posted an article on his blog bitsofco.de about [linting of HTML with CSS](https://bitsofco.de/linting-html-using-css/). The idea: visually mark HTML elements with the help of CSS if the elements are broken or incomplete.

A small example: mark all faulty or missing link targets
    
    <code class="language-css">a:not([href])  
    a:[href="#"],  
    a:[href=""],  
    a[href*="javascript:void(0)"] {
      border: 2px solid red;
    }
    </code>
