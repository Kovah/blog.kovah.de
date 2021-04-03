---
title: 7 things to consider before starting to refactor Code
description: "Refactoring code isn't easy. Here are 7 things to consider before starting to refactor any code."

author: Kevin Woblick
date: 2021-04-03T13:01:11+02:00
draft: false

categories:
- Articles
tags:
- refactoring
- legacy code
---

Refactoring code isn't easy. It is probably one of the hardest things to do in programming. Here are 7 things to consider before starting to refactor any code.

## 1. Get to know your Code

Take a look at the whole code first and find out its strengths and weaknesses. Make notes about what problems are actually solved very well and where the original writers took shortcuts or hacks to make the thing work and which solutions are actually holding your further development back. Only if you get the whole picture you are able to make reasonable decisions where to start first. You probably want to fix the hacky solutions first before doing "cosmetic" changes.

## 2. If it's not broken, don't fix it.

Code that works properly without decreasing performance or impacting the application in a highly negative way can probably left as it is. Hacks mentioned in point 1 can result in a poor performance or bugs nobody understands, so fix those. If a solution just looks not nice to you but works, leave it as it is for now.

## 3. Leave out personal preferences

Personal preferences are not a reason to refactor code! Just because you don't like the structure it doesn't mean it is wrong and needs to be changed.

## 4. You don't need that new fancy library / framework!

New technology isn't a reason to refactor code, too. Just because there's something new it doesn't mean it is better. A new technology should come with a highly positive impact on the application to be justified. Don't ride the hype train. also consider that new things may not be as battle proven as they should be to be used in production environments.

## 5. Resist the urge to _just_ rewrite everything.

Existing code, especially if it was shipped to production, may contain sensible workarounds and fixed bugs you don't know. Rewriting everything from scratch can lead to serious issues you can't even imagine yet. Only fix something if it's really broken or results in a poor performance.

## 6. Take small steps

Many small and easy changes will push the refactoring forward faster than doing one big change. Make incremental changes to the codebase. One big change might consume too much work and time to be completed properly, so you quickly loose the motivation to continue working on it. Collect the "low-hanging fruits" first.

## 7. Make sur all tests pass

Before committing and shipping any refactored code, make sure **all** tests pass. Resist the urge to find workarounds and cheat on tests. If tests fail, find out why. Old tests might have some clues on obscure bugs.
