---
title: "Transactional Emails for Developers: A comparison of 5 providers"
description: Email support is one of the most basic things almost any webservice need. It should work, be reliable and doesn't cost a ton of money.

author: Kevin Woblick
date: 2020-10-20T09:53:22+02:00
draft: false

categories:
- Test
tags:
- Email
- Programming
- Comparison
---

Email support is one of the most basic things almost any webservice need. It should work, be reliable and doesn't cost a ton of money. In this comparison I take a look at the 5 most popular providers and what services they offer.

Please notice that this guide focuses on transactional and regular marketing emails you send directly from your service, like password reset emails. Providers like Mailchimp which are specialized on email campaigns and advanced marketing are out of scope right now. As you are more likely to just get started with sending emails, I focus on the smallest plans too. Besides a free plan I share details about the first pricing tier with you.


## Transactional Email Providers

* [Mailgun](#mailgun)
* [Amazon SES](#amazon-ses-simple-email-service)
* [Sendgrid](#sendgrid)
* [Postmark](#postmark)
* [Sparkpost](#sparkpost)


### Mailgun

{{< image img="logo_mailgun.png" alt="Mailgun logo" modifier="right">}}

I am using [Mailgun](https://www.mailgun.com/) for years now and still use it for many services, as it simply works and provides all needed tools to send all the emails I need. If you are dealing with EU citizens, you should set up your domains in the EU zone, which is fully GDPR compliant.

Mailgun provides a basic transactional email service. There are no fancy marketing features present, you send just your emails through them. In their trial plan you get 5000 emails per month for the first 3 months. After that you pay for what you send.

#### Technical Details

* SMTP sending: yes
* API available: yes
* Laravel/PHP support: yes
* Other programming languages: Java, Kotlin, Node, Python, Go, Ruby, C#, Perl, Curl

#### Pricing

{{< table >}}

|      | Plan: Flex | Plan: Foundation |
| :--- | ---------: | ---------------: |
| Included emails                   | 5000 | 50000 |
| Price per month                   | none | $35 |
| Price per 1000 emails             | $0.8 | $0.7 |
| Price per 1 email                 | $0.0008 | $0.0007 |
| Price per 1000 emails after limit | $0.80 | $0.80 |
| Price per 1 email after limit     | $0.0008 | $0.0008 |
| Notable restrictions              | No inbound routing, no dedicated IPs, restricted support | none |

{{< / table >}}


### Amazon SES (Simple Email Service)

{{< image img="logo_aws.png" alt="Amazon Web Services logo" modifier="right">}}

If you just need email sending and incoming mails, without _any_ other features like statistics or email tracking, Amazon SES might be the best solution for you. Instead of offering plans, the [Amazon Simple Email Service]() is entirely based on the pay per use model.

SES is probably the most valuable service to use, if you are already using AWS services or plan to use them. If you send any emails from Amazon EC2 servers, you get a whopping 62000 emails per month for free.  
Attention: while other email providers do not charge for outgoing traffic, Amazon SES does! Based on the region, you have to calculate the traffic for your outgoing emails.

Receiving emails also costs extra, but you get 1000 incoming emails for free each month.

Last but not least: there are basically no detailed logs of what emails you send and receive. If you need deep insights, you would have to configure additional logging with other Amazon products.

#### Technical Details

* SMTP sending: yes
* API available: yes
* Laravel/PHP support: yes
* Other programming languages: via Amazon SDK (C++, Go, Java, Javascript, .NET, Python, Ruby)

#### Pricing

{{< table >}}

|      | Pay per use |
| :--- | ----------: |
| Price per month                | none    |
| Price per 1000 emails          | $0.10   |
| Price per 1 email              | $0.0001 |
| Price per outgoing GB          | $0.12 |
| Price per 1000 incoming emails | $0.10 |
| Price per 1 incoming email     | $0.0001 |

{{< / table >}}


### Sendgrid

{{< image img="logo_sendgrid.png" alt="Sendgrid logo" modifier="right">}}

As a part of the Twilio universe, [Sendgrid](https://sendgrid.com/) offers transactional email support via their Email API service. In their free plan you get 100 emails per day free of charge, forever. The first paid plan starts after reaching the free limit, and offers up to 40 thousand emails per month.

If you decide to use advanced marketing features, their Marketing Email service got you covered. It allows you to build campaigns with a visual builder.

#### Technical Details

* SMTP sending: yes
* API available: yes
* Laravel/PHP support: yes (via SMTP)
* Other programming languages: Java, Node, Python, Go, Ruby, C#

#### Pricing

{{< table >}}

|      | Plan: Free | Plan: Essentials |
| :--- | ---------: | ---------------: |
| Included emails                   | 3000 | 40000 |
| Price per month                   | none | $14.95 |
| Price per 1000 emails             | none | $0.374 |
| Price per 1 email                 | none | $0.000374 |
| Price per 1000 emails after limit | none | $1.00 |
| Price per 1 email after limit     | none | $0.001 |
| Notable restrictions              | none | none |

{{< / table >}}


### Postmark

{{< image img="logo_postmark.png" alt="Postmark logo" modifier="right">}}

Similar to Mailgun, [Postmark](https://postmarkapp.com/) offers basic transactional emails without all the marketing features or campaigns, however it does have an email template builder available. They offer analytics for their emails and advertise a secure service which is fully GDPR compliant.

#### Technical Details

* SMTP sending: yes
* API available: yes
* Laravel/PHP support: yes
* Other programming languages: Ruby, .NET, Java, Node.js

#### Pricing

{{< table >}}

|      | Plan: Free | Plan: 10k Emails |
| :--- | ---------: | ---------------: |
| Included emails                   | 100  | 10000 |
| Price per month                   | none | $10 |
| Price per 1000 emails             | none | $1.00 |
| Price per 1 email                 | none | $0.001 |
| Price per 1000 emails after limit | none | $1.25 |
| Price per 1 email after limit     | none | $0.00125 |
| Notable restrictions              | none | none |

{{< / table >}}


### Sparkpost

{{< image img="logo_sparkpost.png" alt="Sendgrid logo" modifier="right">}}

[Sparkpost](https://www.sparkpost.com/) aligns with Mailgun and Postmark. Their simple transactional email service offers all features you need to get started with sending emails to your users.

It's notable, that overuse of the email sending limits more than double the price per email. Make sure to select the right plan for you.

#### Technical Details

* SMTP sending: yes
* API available: yes
* Laravel/PHP support: yes (via SMTP)
* Other programming languages: Curl, Node.js, Python, Go, Java, Elixir, C#, Ruby

#### Pricing

{{< table >}}

|      | Plan: Test | Plan: 50k |
| :--- | ---------: | ---------------: |
| Included emails                   | ? | 50000 |
| Price per month                   | none | $20 |
| Price per 1000 emails             | none | $0.4 |
| Price per 1 email                 | none | $0.0004 |
| Price per 1000 emails after limit | none | $1.00 |
| Price per 1 email after limit     | none | $0.001 |
| Notable restrictions              | none | none |

{{< / table >}}


---

## Providers I do not personally recommend

Sadly, there is a provider I personally do not recommend, and it's Mailjet. I had to work with this service while doing a client project, and it was a pain to work with the API, the email templates and the support took ages to respond to any tickets despite having a paid high volume plan for the client. Not to mention the multiple account issues with "lost" passwords. Simply stay away from this service.

_(If anyone from Mailjet reads this: work on your customer support.)_


## Conclusion for Transactional Email Provider

It's not that easy to choose a service when it comes to transactional emails, or later on marketing emails including template builders and campaigns. It starts with guessing the correct volume and calculate your costs based on that.

When it comes to money, you can go with the following list as a reference, which has all the above providers sorted by their price per 1000 emails for volumes up to 30k to 50k emails per month. Keep in mind, that Sendgrid, Postmark and Sparkpost charge a fixed amount per month regardless of how many emails you send.

To calculate the costs for Amazon SES which charges for traffic, I assumed an average email size of 250kb, which leads to additional costs of $0.00003 per email. As this is such a small amount of money, I left it out to keep the numbers small. This probably won't pile up to huge costs anyway if you only send 10k emails per month.

{{< table >}}

|      | Provider   | Price per 1000 emails |
| :--- | :--------- | --------------------: |
| 1.   | Amazon SES | $0.10  |
| 2.   | Sendgrid   | $0.374 |
| 3.   | Sparkpost  | $0.40  |
| 4.   | Mailgun    | $0.70  |
| 5.   | Postmark   | $1.00  |

{{< / table >}}

If you liked this post, please share it with your friends and followers.
