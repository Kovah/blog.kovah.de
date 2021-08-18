---
title: The Tradefinder
description: A web tool to find the most profitable trades between two merchants. Perfect for gamers.

author: Kevin Woblick
date: 2020-10-12T13:32:11+02:00
draft: false
hascode: false

category: news
tags:
- React
- JavaScript
- Gaming

---

As a passionate gamer I play a lot of different games which involve trading, like No Man's Sky. I often end up with a bunch of papers filled with prices for items the merchants offer, so I could find the best trades between them. I stepped up the trading game by using Excel, filled sheets with the numbers. But it felt just way too difficult.

Fortunately, I am also a web engineer who builds stuff when he needs something to work with. I did that with a lot of tools, including [my web-based Taboo game](https://taboo.kovah.de/) and [LinkAce](https://www.linkace.org/), my personal bookmarks archive. As I wanted to learn React for quite some time I thought that would be a perfect opportunity.

Please welcome the [**Tradefinder**](https://tradefinder.kovah.de/).

## The idea behind the Tradefinder

The basic idea behind this tool is to help someone find profitable trades. In my case those trades happen between space stations in No Man's Sky, or cities in Windward. Those video games offer a full-blown trading system that include a ton of different merchants, and a dynamic supply and demand system. Prices are different for all those merchants, they buy or sell different amounts of the goods.  
I thought the best way to deal with this system and make trading as efficient as possible, is to track the goods and prices for all merchants and then find matching buy-sell constellations. It started with a bunch of papers filled with the data, then I used Excel to change prices faster and without wasting paper. It was a tedious task, I noticed how I entered the same data again and again, and I finally lost the interest in trading because it became too complicated. I knew that a tool built specifically for this task was needed. So I built one.

## The development process

The tool needed to have a screen where you enter your merchants and add the items they buy or sell, including available or wanted amounts with the corresponding prices. Then the tool should find and calculate the possible trades. To make this as fast as possible, a single page application (SPA) that works directly in the users' browser sounded just right for this.  
I had worked with Vue in the past, but in my recent job search I noticed that positions for Vue were very rare, but the amount of React positions were astonishing. React was on my learning to-do list for quite some time now, but I never felt the urge to learn it. Now was the time to dive into it.

### React with Redux...

From my work with Vue I knew some basic requirements, like to use some sort of state to handle all the data. In case of React, I decided to go with Redux because it is the most popular I know of. It took quite some time to get the base of the app ready for further development, because the concept of JSX elements provided by classes or functions is different, than I was used to it with Vue. Especially the integration with Redux, passing data around and working with the state was hard to learn. To be honest, I find the VueX (Vue's state library) documentation far better than the documentation of Redux. Especially the examples given in the docs seem very inconsistent, using different file and folder structures and introducing advanced features while learning the basics. In the end, I managed to get the state working and got a tool to add and edit both merchants and items.

## More details about the Tradefinder

{{< image img="tradefinder-preview.png" alt="Preview screenshot of the Tradefinder tool" >}}

Today I released the Tradefinder. This first version has all core features that I need and supports the import and export of data. The foundation is solid and ready to get more features in the future.  
Here's a list of what the tool is currently capable of.

* Add, edit and delete locations as well as items.
* Item handling for all locations: amounts and prices for both buying and selling.
* Automated trade finding and calculation of the amounts you can buy/sell, including profits.
* All data is stored in your browser via Localstorage. No data is sent to any servers.
* Data can be exported and imported.
* The number formatting can be toggled between the US and EU standards.
* The tool has a built-in migration system to update the data once a newer version is released.
* No analytics, no tracking, no social sign ups.
* Reset or completely wipe all data to make a fresh start.

The tool is completely open source, the repository can be found on [Github](https://github.com/Kovah/Tradefinder). I already created some issues with ideas for the future:

* Keyboard shortcuts for some actions.
* Presets that can be loaded for different games like No Man's Sky.
* Option to load different "saves", to be able to jump between games.

Feel free to take the Tradefinder for a test ride and share your ideas in the repository, or via Twitter or [Hacker News](https://news.ycombinator.com/item?id=24753595).
