---
title: "Why I have chosen to rewrite one of my Projects from Scratch"
description: Game Quotes is one of my oldest projects and in early 2021 I decided to pull the plug on the old version and rebuild the complete website.

author: Kevin Woblick
date: 2021-04-14T10:24:03+02:00
draft: false
hascode: true

categories:
- Articles
tags:
- Game Quotes
- refactoring
---

[**Game Quotes**](https://game-quotes.com/en) is one of my oldest projects. It was launched back in 2013 as a small side project. At that time there was a site similar to what Game Quotes is now: an archive of funny, inspiring or awfully weird quotes from video games. I loved browsing through the archives, but the site seemed abandoned, as no new quotes were added over months. Today, the old archive is gone and with it a handful of great content. Besides that archive, there was no other place on the internet where you could find curated quotes from video games. Game Quotes was born.

## Drowning in tech debt

After switching from Wordpress to a custom Laravel application in 2013, the site was basically in a maintenance-only mode. I rarely added new games and only a couple of quotes through the year. The system was first built with Laravel 4.2, which ran out of support and maintenance years ago. Development of the site took quite a while because I had to do so much stuff entirely on my own. But I learned a lot and then the site launched successfully. The following is a screenshot of the site displaying some video game quotes.

{{< image img="game-quotes-net.jpg" alt="Screenshot of the old version of Game Quotes" >}}

I started rebuilding the website with a newer version of Laravel, because the framework made some significant changes, so upgrading was not that easy. Around 2016 I started working on Game Quotes 2 and invested a lot of time into it. Unfortunately, I was _too motivated_ and wanted to build a very sophisticated new site, with some community features like friend requests, teams and chat. Video game quotes should be translatable, and I built a large admin dashboard.
The relaunch was too sophisticated, I spent too much time with details and was just exhausted after some time. Burnout. Game Quotes had to wait, I abandoned the new version, and the old site became a pile of old technical debt. Laravel 4.2 had literally no supported packages anymore and adding new features was risky as I had no tests at all.

## Refactoring or Rewrite from scratch?

At the end of 2020 I thought a lot about the future of the project. The old version was unmaintainable, difficult to deploy, and I wasn't motivated to work on it any further. I asked myself a very essential question: does it make sense to refactor the application and slowly move to a newer version of Laravel, or would it make more sense to just start from scratch and port the existing content to the new system?

Refactoring is a long and sometimes painful process. If you are not careful enough, you end in a deep hole of code chaos. I published an article with [tips for refactoring code]({{< relref path="2021/7-things-to-consider-before-refactoring-code" lang="en" >}}) last week. Reading over the list of tips I collected, it became clear pretty fast that it would be too much work to refactor Game Quotes and move to a fresh foundation.

Rewriting, on the other side, was a lot of work too, because you would have to build everything from scratch and then port the old content. However, I am used to the latest versions of Laravel as well as the frontend stack with Tailwind CSS. I am able to build a custom application in a matter of days.

## Rewriting Game Quotes from scratch

In February 2021 I made the final decision to throw the old Game Quotes into the trash and start from scratch. I set up Laravel 8 based on my [Docker stack](https://github.com/Kovah/Docker-Stack) together with a minimal Tailwind configuration for the frontend, and then started porting the content.

- The first step was to rebuild the current structure of the database together with all models. The current structure was absolutely fine, as it would allow me to migrate the database without any changes in the database fields.
- Recreating the models was one of the largest tasks. Laravel 8 makes a lot of things easier than the old Laravel 4. Relations and all database fields were defined in a couple of hours.
- After importing the old database, I was able to access the old content without larger issues. I had to change some field types. In just a few hours of work I was able to use the old content within the new foundation.
- Fast-forward a few days of work: I crafted the base layout, and most of the existing pages with a first version of the new design.
- Next step: admin panel and moderation stuff. This was the largest task, because the old version only had a very minimal, custom-built admin dashboard that allowed me to edit all content. I went with [Voyager](https://voyager.devdojo.com/), because it had all features I needed, and I didn't want to pay a ton of money for a project that has no income yet.
- Translations are actually handled via a middleware. I moved from a locale based on the subdomain to a path-based approach. Currently, Game Quotes is available in German and English.
- Another big task was to migrate the old URL structure to the new one, which is based on the standard Laravel resource controllers. Quotes, for example, are located under `game-quotes.com/en/quote/quote-id`.
- Last but not least: **tests**. I wrote a lot of tests for numerous parts of the site. Not everything is tested, but the most important parts.

After two weeks of work, I had the first fully working version of Game Quotes based on the completely new foundation.

{{< image img="game-quotes-2021.jpg" alt="Screenshot of the new version of Game Quotes" >}}

## The new Game-Quotes.com

Just three weeks after the initial decision I published the new version of Game Quotes. I had done additional stuff to clean up the content, implement proper Schema.org markup and optimize the design. I got a lot of positive feedback and the first submissions for quotes from random strangers on the internet. It was the right decision to rewrite Game Quotes from scratch. I had quickly moved from a pile of tech debt to a modern application that is also more performant.
A week later I released a new feature that was planned for years already: marking quotes as spoilers or NSFW content. The feature is already available and can be used.

In the next weeks I will add more features and finally enable public profiles, so anyone can register. Stay tuned.
