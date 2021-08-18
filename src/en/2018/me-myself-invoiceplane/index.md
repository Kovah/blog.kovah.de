---
title: Me, myself and InvoicePlane – 4 Years into Open Source
description: It’s been almost 4 years since I started the InvoicePlane project. Here are some things I learned about coding, planning, maintenance and project- and community management.

author: Kevin Woblick
url: invoiceplane-4-years-into-open-source
date: 2018-06-02
draft: false
thumbnail: simon-abrams-286276-unsplash.jpg

category: article
tags:
- Development
- FusionInvoice
- InvoicePlane
- Open Source
- PHP
- Project Management
- Web Development
---

It’s been almost 4 years since I started the project. And if someone told me that InvoicePlane would once be used by thousands of companies from all over the world and count more than 100.000 downloads, I would have nodded unbelieving. I learned a lot in these four years and want to share some thoughts and insights into building and maintaining an open source software.

## InvoicePlane in Numbers

More than 100.000 downloads so far and thousands of companies that are using InvoicePlane. Here are some more nice numbers:

* Total downloads: 116.709
* Monthly website visitors: 12.600
* Published Versions: 40
* Commits (master branch): 1.645
* Jira Tickets: 711
* Total Contributors: 53
* Community members: ~2.100
* Community threads: ~2.480
* Two awsome sponsors for our project infrastructure: Rapidweb and DEVNCO

---

## What I learned from my work on InvoicePlane
   
Starting my work on the project was easy and I thought that maintaining the app shouldn’t be that hard. Wow, how naive I was. But you make mistakes and learn from them. So did I. Here are some things I learned about coding, planning, maintenance and project- and community management.

### Building and maintaining an open source project is a full-time job
   
Well, theoretically at least. In the past 4 years I completed both my apprenticeship, my high-school diploma and I’m currently writing my bachelor thesis about complexity in web development. That said: I never had the time to work on InvoicePlane all day so time was always against me.  
The problem is that if you do not spend enough time on your project, things will get worse over time: unfixed bugs will fill the backlog, unanswered support requests will pile up and let’s not talk about feature requests. This was a huge problem for me sometimes and despite not developing depression I truly felt burned out from time to time. And yes, I wanted to quit more than once. Now I am pretty happy I didn’t, not only because I allow myself to take time for myself.
   
My way to go is to plan work schedules: code on my way to work / university, provide support and do other maintenance work in the evening for half an hour. Weekends can be used to work on larger issues or features that require more attention. That way I never felt like “damn, I have to spend”. No, I don’t have to. If I want to chill, watch Netflix or play a game I’ll just do that. InvoicePlane is a hobby and no one forces me to work on it - and I’m not paid for the work either.  
Don’t let anyone force you to work on your project if you don’t want to. Not the user, not a filled backlog, not yourself. Take your time.

### Be open and transparent

If you take time for yourself or just don’t have the time to dive into a weird bug: communicate this. It does not matter if you tweet it or post it as a response to a support request in your forum. No sane person would yell in rage that you have to help him now. Well, I indeed had one or two users that were kinda rude even if I clearly said that I simply do not have the time to help them.  
Being open, saying no to something or that you don’t have the time is nothing that requires courage. It’s just human.  
Transparency is another aspect of communication that will help you build up trust. It seems obvious, yet many companies, NGOs or projects fail to provide important information for its users. I do not mean that you have to tell your community when you work on what little piece of the project or software. What I mean is that you clearly communicate what you do at all, what you are planning, how the project is structured and how users can contribute.

### Think and plan before starting any work

{{< image img="philipp-mandler-357142-unsplash.jpg" alt="Man standing in front of a wall with post its" >}}

Early members of the community may remember the times when I announced that I wanted to rewrite the whole application with Laravel because it’s so cool and has so many neat features. And I started right away, you can find some abandoned code with Laravel 5.1, some unfinished components and other deprecated stuff…  
What was the problem? I started working on something without thinking about the whole thing in the first place. I was way too ambitious and started highly motivated. If I had stopped for a moment, thought about what I actually want to achieve and how to get there I would have noticed that this was a task I couldn’t even finish after working on it for several years.

This also applies to other things like the projects and tasks feature currently present in the application. To be honest, the implementation is crumbly and lacks of polishing. I shipped a feature without knowing exactly what it should do and what the users need.  
So what’s the learning? Think about every single feature and project before starting to work. Here are some key points to consider:


* What do you want to achieve and how?
* Do you know what your user needs?
* Are you able to develop, test and publish within a reasonable time frame?
* Are you able to develop, test and publish without any external help?

### Ask for Help

If you find something, let it be a heavy new feature, an upcoming release that needs to be tested or simply hosting for your website, ask for help.
You have a community that not only wants your support but is able to help you if you need it.

### TESTS, TESTS, TESTS!

{{< image img="luca-bravo-217276-unsplash-copy.jpg" alt="Picture of software code" >}}

This sounds so dull but trust me, software tests would have saved me countless hours of work. I shipped so many releases with broken code or kind of obvious bugs - because I do manual tests before each release only. Automated tests of some parts of the application, like the quote or invoice creation, emailing and PDF generation would have prevented many bugs and releases I am kind of ashamed of.  
There is no need to force you into TDD or achieve a coverage of 100%. But write tests for the most critical parts of your application. Setting up a testing tool like PHPUnit takes about half a day of work, almost all frameworks provide built-in support for tests or you can easily implement them. And writing tests is no magic at all. Set up a starting point, add example data, run your function and check if the desired result is correct. And be sure that it’s very rewarding to see green output like `OK (25 tests, 38 assertions)`.

## The Future of InvoicePlane
   
   Today I announced, that [FusionInvoice is now InvoicePlane 2](https://community.invoiceplane.com/t/topic/6299). If you read about how I started the project (link in first sentence) you know that InvoicePlane is the successor of the formerly open source project FusionInvoice.  
   Now the commercial version got incorporated by us and will be published as InvoicePlane version 2. Exciting news because not only a closed source software is now freely availalable; my next task is to merge both the community and the code of two kinda different pieces of software. I already started planning everything but it’s gonna be a long way down to a first, stable InvoicePlane 2.0.0. A long way on my road called “Open Source”.
   
   That’s it. Feel free to ask if you have any questions or suggestions.
