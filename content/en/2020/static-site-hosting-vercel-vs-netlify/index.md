---
title: "Static Site Hosting for small Websites: Vercel vs. Netlify"
description: I recently moved my static sites (including this blog) to Netlify. I later found that Vercel offers a very similar hosting so I decided to compare both services.

author: Kevin Woblick
date: 2020-07-19T16:05:51+02:00
draft: true

categories:
- Test
tags:
- Netlify
- Vercel
- Static Site
- Hosting
---

Just three weeks ago I decided to move all my static websites from my own server to a hosting server and went with [Netlify](https://www.netlify.com/). I made the switch in a couple of hours and now all those sites are running within the free plan of Netlify. I am quite impressed by the simplicity of the service.

Last week I found that [Vercel](https://vercel.com/) (formerly Zeit) offers a very similar service to Netlify. Free hosting of static sites and SPAs with some minor restrictions. Out of curiosity I decided to compare both in terms of service quality and hosting.

Please notice that this is a comparison of the services based on their free plan which targets small sites and hobby projects.


## A rough overview on Vercel and Netlify

Both services offer hosting of static websites which are generated based on a Git repository. You define the command which is needed to compile assets and generate your site, and then sit back and relax. Both Vercel and Netlify make the setup and deployments very easy. Their free plans target small sites and hobby projects with hosting, limited deploys and some included bandwidth. 


## Comparison of Vercel and Netlify: the free plan

{{< image img="netlify-deploy-process.png" alt="Netlify deployment process" modifier="right" >}}

First, both Vercel and Netlify offer a _very_ similar free plan. Both make money with paid plans targeted at teams or high-volume sites, as well with add-ons like analytics or dynamic forms. As I run very small sites, don't have any specific requirements and also don't work in a team, the free plan is totally enough for me. Here are the key insights:

* Netlify offers an expensive separate plan for their "High-Performance Edge network". Free websites are only deployed to 6 different locations around the world.
* Both services have a 100 GB bandwidth limit for free plans.
* Vercel limits free accounts to 100 builds per day, while Netlify limits builds to 300 minutes per month in total.
* In terms of privacy and legal aspects, there is no difference between both companies. Both are located in the United States.

From my experience, there are some differences between Vercel and Netlify in terms of their service quality. Here are a few things I noticed while using both:

* Automated Vercel deployments are almost instantly, while Netlify deployments can take up to 1 hour after changes were pushed to the Git repository. Even manual deployments have let to older versions being deployed. It seems Netlify only works correctly via pull requests.
* The setup process failed several times at Vercel, because you can't limit access to a few single repositories via the Github integration. I had to give Vercel full access to all repositories. Not cool.
* There are only minor differences in their interfaces. They are simple, it's easy to find your way around. Plus for both.
* Both offer notifications and integrations with other services like Slack. While Vercel won't let you configure any notifications, Netlify allows configuration per site, but heavily limits the possible integrations. Not really satisfying for both.
* Vercel allows you to actually browse the generated output that is being deployed. You can browse the file system and inspect contents of the HTML files.
* Deployments take a little longer on Vercel: 2 seconds versus 1 second at Netlify.


## Vercel vs Netlify: Hosting and page speed

{{< image img="webpagetest-results.png" alt="Webpagetest results" modifier="center">}}

In the following table you can get a basic overview of the page speeds across different locations. Both Vercel and Netlify state that they operate a global CDN which takes care of fast and location-based delivery of all files of your website.

All tests were run with [Webpagetest](https://www.webpagetest.org/) on my article about [switching from RSA SSH keys to ECDSA keys]({{< relref path="2019/switching-from-rsa-to-ecdsa" lang="en" >}}), as it also contains some code snippets and thus loads additional Javascript for the syntax highlighting. All tests were run with the following settings:

* Browser: Chrome
* DSL connection speed (1.5 Mbps, 50ms RTT)

The listed times are the data of the median result. The _Avg. load time_ metric indicates the average time it took to load the individual CSS and Javascript assets of the page. This is a good indicator for the speed of the edge network.

{{< table >}}

| Location | Service | First Byte | Avg. load time |
|:--------|:---------|:-----------|:---------------|
| Paris, France          | Netlify | 329ms | 141ms |
|                        | **Vercel**  | **309ms** | **132ms** |
| Frankfurt, Germany     | Netlify | 459ms | 539ms |
|                        | **Vercel** | **344ms** | **266ms** |
| Dulles, US East        | **Netlify** | **306ms** | **104ms** |
|                        | Vercel  | 402ms | 223ms |
| San Francisco, US West | Netlify | 431ms | 247ms |
|                        | **Vercel**  | **403ms** | **129ms** |
| Tokio, Japan           | Netlify | 896ms | 638ms |
|                        | **Vercel**  | **405ms** | **83ms** |
| Sao Paulo, Brazil      | **Netlify** | **318ms** | **94ms** |
|                        | Vercel  | 344ms | 113ms |

{{< / table >}}

There is a minor pattern visible when comparing the performance of the Vercel and Netlify edge networks. In most cases Vercel was a little faster, which is no wonder if Netlify offers the high performance network as a paid package. You may expect this high performance network to match Vercel's speed if activated. For most pages the differences between both networks are almost negligible.  
In case you really are a page speed junkie, you may better go with Vercel.


## The conclusion: Vercel vs. Netlify

It's really not that easy to draw a straight line here. While the setup with Vercel didn't go as good as with Netlify, it does offer a bit better edge network, resulting in slightly faster page loading times. Even if I decided to go with Netlify, I may switch over to Vercel, as all advantages of Netlify like advanced notifications does not really matter to me.

If you are not sure which provider to pick, try both and set up your site with them. It's easy and can be done without paying a single cent.
