---
title: Why exclusive Game releases are bad for Publishers
description: More publishers release their games exclusively on one platform - and lose a lot of money with that. So I built a calculator for this.

url: 4bnl8q-why-exclusive-game-releases-are-bad-for-publishers
date: 2019-03-19
draft: false
thumbnail: sean-do-782269-unsplash-1200x420.jpg

categories:
- Article
tags:
- Epic Games
- exclusive
- Gaming
- Steam
---

You may hear it: Metro Exodus was [exclusively released to the Epic Games store](https://www.engadget.com/2019/01/28/metro-exodus-epic-games-exclusive/). The game was initially marketed on Steam, you could even pre-order the game on the platform. Just two weeks before the official launch the game was pulled and is now exclusively available on the Epic Games store. Some gamers felt betrayed and complained about the decision. Most of them named the need to install another launcher on their PCs as the main reason. On the other side fans of the series bought the game anyway, explaining that another launcher may be a barrier, but a small one they accept to be able to play the game. Just this weekend I discovered that another game I wanted to buy will be released exclusively to the Epic Games store.

Personally, I had mixed feelings about that and finally decided not to buy Metro Exodus despite my initial wish to play the game. I did not felt comfortable with the Epic Games store and its launcher, basically because the platform is very new and lacks of essential features. Besides the skeptical view on the store and launcher I felt that an exclusive release would be a very stupid idea for publishers based if seen from the business side. But let me explain this in detail.

## The problems with exclusive releases

### Making customers feel bad is always bad

No matter what you do, try to prevent making your users feel bad under any circumstances. If a customer feels bad and he knows that it’s the company’s fault, trust will decrease. With decreasing trust new problems arise, like the probability that this customer will not buy your product or use your service anymore. And it may get worse: this customer may tell his friends how evil this particular company is, which is quite easy via social media and messaging services. It takes one minute and you may lose several potential customers at once. And this outcome is very likely because people do always trust family and friends more than a company. Getting those customers back is hard work and costs you money. So try to prevent making any customer feel bad. Here are just a few examples:

* A customer is forced to leave its comfort zone. For example being forced to install a new, unknown software to play a game or access a service.
* A customer feels betrayed because the company changed its mind. For example the company tells the customer that he will be able to buy a game via Service X for half a year, but then quickly changes its plans and tells the customer he now has to use Service Y for the purchase. This is not only a problem with publishing platforms like Steam or the Epic Games store, but also payment providers like PayPal and credit cards.
* Offering in-game advantages that can be bought with real money is another bad example, although it’s not related to the topic. If you simply can’t afford to buy these upgrades you not only feel worth less, it also raises frustrations and in the worst case the customer abandons the game.

{{< image img="46b5w35bwe.jpg" alt="Guy gaming on a PC" >}}

### The economic problem: companies are very likely lose money
    
Now here’s the main point of this article and what bugs me most about those decisions: the seemingly economic misunderstanding of exclusive releases. Don’t get me wrong here. I am not into game development or publishing at all, so I may miss an important thing here, but the following assumptions are based on very low-level economics. Despite being simplified a lot and many factors not taken into account, the calculation still has some truth in it.

#### Basic assumptions about an exclusive release

The following numbers are fictional.

* We want to sell our product for $50 each.
* Service A offers us a one-time payment of $100,000 to use the service exclusively.
* We expect to sell 100,000 units by using service A.
* We use service A that takes a share of 10%.
* We earn $45 with each sale via service A. ($50 – 10%)
* We earn $35 with each sale via service B. ($50 – 30%)
* Another service B takes a share of 30% for the same game.

I read a lot of comments in the discussions about exclusive deals. Many people argue a company makes more money if (in our case) it just uses service A with a lower share and ignores service B with the higher share.
The thing is **even if service B takes a higher share, we still earn money with every sale!** If a company decides to use both services each additional sale via the service B results in an additional profit of $35.

#### The profit calculation

And here comes the most important point: once service B generated enough sales to top the bonus payment of service B, the company loses money. Why? Let’s continue our calculation.

* How many sales via service B does the company need to top the bonus payment?
* Simple: divide the bonus payment by the profit for each service B sale.
* `$100,000 / $35 = 2857.14`
* If we round up, we have a total of 2858 sales.
* This means that if service B just generates as little as 3000 sales (which is like peanuts for expected sales of 100,000 units), it would have been better to publish on both services.
* After reaching 2858 sales via service B, we could earn **additional $35 with every sale** because the gain from the bonus payment is now gone.

The conclusion: In **some cases** it **may** make sense to publish exclusively via one service. But in all other cases the decision to go exclusive is comparable to this:

{{< image img="moneywaste.jpg" alt="Leonardo DiCaprio throwing money" >}}

## The Exclusive Calculator

Well, all this stuff looks dull and is highly theoretically. As a web developer with some free time I thought I could do a quick project. Stage enter: [**the Exclusive Calculator**](https://exclusive-calculator.kovah.de/).

{{< image img="Exclusive-Calculator.jpg" alt="Screenshot of the Exclusive Calculator" >}}

The Exclusive Calculator is a simple web tool which can be used to calculate possible profits across multiple platforms while comparing it to an exclusive deal.
A publisher or developer can estimate the profit from the sales while getting a figure on how much money he loses if he decides to go exclusive with just one platform. I would like to ask you to try it and see the results.
You can read more about the calculator and how it works on its [about page](https://exclusive-calculator.kovah.de/).

I understand that the decision for or against an exclusive deal is not as easy as putting four numbers into a form. the calculator is intended to give you a rough estimate. Please share your feedback with me, and we may be able to improve the tool together.
Also: if you know the share rate of another platform like Humble Store and it’s not under NDA, please [drop me an email](https://kovah.de/).

By the way: the project is open source. Not only because the plain HTML, CSS and JavaScript are available by opening the website anyway, but also via [Github](https://github.com/Kovah/Exclusive-Calculator). Feel free to take a look. If you found a bug or want to share an idea, [write a ticket](https://github.com/Kovah/Exclusive-Calculator/issues/new).

## A word on timed exclusives

I can already hear the voices: “IT’S JUST A TIMED EXCLUSIVE SO YOUR CALCULATION IS WRONG!”.
Valid point. After that period of time on one platform you may release your game on other platforms. Or not. If you do, you may earn some money. Though it is probably less than going exclusive with just one platform. Reasons are obvious: you already lost customers due to an exclusive launch, even more if you “betrayed” users with a bait-and-switch scheme. Those customers are very unlikely to come back. Second, you game may already be old and the big launch hype is gone. People may care less about the game and buy newer titles.

However, it highly depends on the duration of the exclusiveness.

## A better approach on exclusivity

So, you know that exclusives are not a good idea most of the time. If you are lucky and this scheme works best for you: congratulations. You may stop reading here. If you are interested in a better approach, go on.

* Publish your games on multiple platforms. Each platform has its core audience and it’s very likely that each platform has potential customers other platforms do not have.
* If you want to push sales of one specific platform, offer a launch discount instead.
* Discounts are not your thing? Raise the price for platforms
* Some platforms may offer pre-ordering, other don’t. You may make use of it.
* If you want to push one platform, give users early access to your game via that specific platform.
* Last but not least: communication is key! If you tell your customers honestly why you prefer one specific platform, your decision will more likely be accepted by customers than putting a gun on their chest shouting “surprise, something changed and we won’t tell you why!”. Communication is key. Always.

If you have other ideas feel free to share them with me or discuss them on social media by using #exclusivecalculator.
