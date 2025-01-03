---
title: My personal Recap of 2024
description: 2024 was an exciting, but also exhausting year. I'm in my mid 30s now and it kinda hurts to find out that you are not as young as you want to be.

author: Kevin Woblick
date: 2025-01-02T22:43:56+01:00
hasDiagram: true

categories:
  - Articles
tags:
  - recap
  - homelab
  - music
  - health
---

2024 was an exciting, but also exhausting year. I'm in my mid 30s now and it kinda hurts to find out that you are not as young as you want to be. And this doesn't only apply to partying. I've visited more concerts in one year than before, even though it's not really a spectacular number. But together with some private family events, the summer months were packed as hell.

Aside from concerts like the Lollapalooza Berlin, I had a fantastic honeymoon in Egypt. We stayed at a 5 star all-inclusive adult-only resort for two weeks. _If you don't have kids already, I really recommend adult-only hotels, by the way. The volume levels coming from other family resorts were definitely something I don't want to have during a relaxed vacation._ Well, anyway. Our trip to Budapest, Hungary, also was a very special time of the year. We had a wonderful time in a very beautiful city. 

Unfortunately, exhaustion not only comes from doing many things. Family drama kept me up multiple nights. And together with a lot of stress during the summer weeks, I almost had a breakdown. Getting a week off definitely helped to calm down. I can only repeat myself: take care of your mental health!

## What about Projects?

Honestly, it was a rather sad year for all of my projects. Neither did I release LinkAce 2.0, nor did I manage to complete two large planned features for [Cloudhiker](https://cloudhiker.net/). It's frustrating, but I can only work as much as I have free time to do so, and if I have a clear head to concentrate in the evening. Working min 40hrs a week definitely didn't help. That's why I reduced my working hours by 10% which grants me two free days per month which I can spent with private stuff.

It's interesting to look at the raw hours of work I counted in my [Wakapi](https://github.com/muety/wakapi) instance. I worked on my projects over `410` hours in 2023 and it felt like I made a lot of progress. In 2024, I worked over `490` hours, but it feels like I achieved way less.

The number one project is still Cloudhiker with 283h, up from 213 in 2023. Second one is LinkAce with about 88 hours, up from only 12h in 2023. One thing I noticed is that I spent way more time on my personal dashboards and automations than in the year before. And this not even includes the countless hours I wasted with reading the awful Grafana documentation.

{{< diagram >}}
pie title Project Hours
         "Cloudhiker" : 283
         "LinkAce" : 88
         "Dashboard + Automation" : 49
         "Game-Quotes.com" : 20
         "Others" : 50
{{</ diagram >}}

By the way, November and December were the very first months in the history of Cloudhiker where a significant amount of people cancelled their subscription. I understand that, Cloudhiker is just entertainment and people have less and less money left to spend on leisure. At the end of the year, Cloudhiker went down to a MRR of 131€. Still enough to pay the bills, but also not a really rewarding compensation for all the hours I've put into the project. That's been roughly 3.5€/hour...

## Homelab 2.0

My homelab probably was one of the reasons why I didn't make a lot of progress with the other projects. I bought an [MSI Cubie 5](https://amzn.to/3W4pwaf) in March and migrated all my self hosted stuff to the new mini PC. The more powerful Intel Core i5-1235U with 2 Performance and 8 Efficiency cores runs at the same TDP as the Gigabyte Brix. It's even capable of running small LLMs, even though the speed is far from being great.

When the new Mac Mini arrived later this year, I was just one click away from ordering one. The performance of this little aluminium block is insane and especially AI tools would run insanely fast. But I decided that the 600 bucks are better spent by saving them for the Tokyo trip in May this year.

## Other Coding-related stuff

My Github Recap for 2024:

- 1373 Contributions
- 13 public PRs merged (in fact it's more like 130 because I actively use Dependabot who's flooding me with PRs every week)
- 36 repos starred
- Top language: PHP

---

## The average Mood

I am using the [Daylio](https://www.daylio.net) journal app. As of today, I wrote an entry for every single day for the past 2921 days. That's over 8 years. And Daylio is great for tracking the mood, notes and activities done on each day. 

My mood is tracked for every day by choosing from this scale:
- 🤩 Super: a really fabulous day
- 😊 Good: a good day that I liked
- 🙂 Okay: a kind of regular day that was neither good nor bad
- 😞 Bad: a day worth skipping
- 😵 Miserable: a really shitty day I would like to forget

Based on this score, I can get some pretty cool statistics for each week, month, or year (and probably all-time, but that's not a built-in Daylio feature).

{{< image img="daylio_avg_mood.jpeg" alt="Average mood through the week, showing monday with the lowest and saturday with the highest value" modifier="center">}}

As you can see, Monday really isn't my favourite day. All in all, my average mood score is `3.8`, which is slightly below "Good". That's about the same value as for 2023, which was `3.9`.

As I track both the mood and activities or specific feelings, Daylio can calculate the impact of certain activities on my mood. So, doing something with my wife boosts my mood by 23%, while work lowers my average mood by 13%. Everyday stuff like watching TV or playing games have really mixed results, as I often do them on bad days too.

{{< alert type="info" >}}
BTW: Back in 2018, I posted the results of the journaling of 2017 on Reddit: [Decided to analyze my daily mood tracking of one year](https://www.reddit.com/r/dataisbeautiful/comments/7qey20/decided_to_analyze_my_daily_mood_tracking_of_one/)
{{</ alert >}}

## The Health Dashboard

I subscribed to Urban Sports Club in November. I can't get my lazy ass to do sports on a regular base. This gym membership, which also my wife has, will probably lead me to become more fit during this year. To also keep track of all this, I decided to tinker with my Apple Health integration, and I got this working pretty well. All data is pushed to my personal dashboard. There, I have a nice overview on my personal statistics.

{{< image img="health_overview.png" alt="Screenshot of my health dashboard" modifier="center">}}

Things I'm going to build with this: 
- A better dashboard with real charts and better insights. 
- Notifications about weekly or monthly progress, like if I managed to get more steps or burn more energy.
- Maybe: notifications on Friday that I am way back behind.
- Maybe maybe: push that to a local LLM and let it generate reports, health tips or what else it might find.

## Music, Music, Music

That's my Apple Music Replay for 2024:

- Total artists listened to: 3.010
- Total songs listened to: 3.816
- Total minutes listened: 21.168
- Top artists:
    - Mötley Crüe (great for intense coding sessions)
    - Lady Blackbird (really great soul / jazz)
    - Cyril (yeah, Stumblin In was my Song of the year)
    - Post Malone
    - Celia Cruz
- Top songs:
    - Stumblin' in - Cyril
    - Reborn - Lady Blackbird
    - What a Life - Scarlet Pleasure
    - Ahora te Puedes Marchar - Luis Miguel
    - Travelin' Band - Curtis Stigers & The Forest Rangers

## Gaming

Well, gaming is still an important part of my life. It helps me to calm down during stressful periods, but also have fun.

My Steam statistics look like this:

- Different Games played: 125 (more like 130 because some are not on Steam).
- 628 Achievements unlocked, and I completed 8 Games.
- I bought 46 new games, and yes, some of them are still unplayed. 🙈
- According to my personal Steam statistics tracking, I played Games for 19 days 20 hours 47 minutes.

## TV and Streaming

Actually, I don't have statistics about that yet. I was using IMDB to track which movies shows I've watched, but migrated to [Trakt.tv](https://trakt.tv/vip/referral/86cf0119b0a817342b80f76ef1d7d2dd) during summer. Let's see how the statistics for 2025 will look like.

---

## Plans for 2025

So, after a somewhat successful 2024 (I mean at least I did not die), what will 2025 look like?

### Projects and Stuff

- Release of **LinkAce 2.0** together with the waiting list for official LinkAce hosting. I would like to offer hosting for others, maybe  enough people are interested. I already have one customer who is quite satisfied.
- **Cloudhiker gets Achievements**. I worked on it in 2024 and got web sockets working already. What's missing is the handling of notifications for users, and of course all the logic for a couple of dozen achievements for various parts of the site.
- Further tinkering with my Apple Health metrics.

### Personal

- Long awaited trip to **Tokyo**, and a second vacation somewhere else.
- A few concerts and activities throughout the year.
- Going to the **gym** regularly and bump of the fitness level.
- Keep the stress level low at work. #mentalhealth

I think that's it for now. It's more than enough.
