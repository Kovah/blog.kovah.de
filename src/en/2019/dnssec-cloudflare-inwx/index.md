---
title: Setting up DNSSEC with Cloudflare and INWX
description: A short guide on how to set up DNSSEC with Cloudflare as the nameserver and INWX as your registrar.

author: Kevin Woblick
date: 2019-07-19T23:51:03+02:00
draft: false
hascode: true

category: tutorial
tags:
- DNSSEC
- Cloudflare
- INWX
- Domains
---

I recently updated some .de domains which are registered with [INWX](https://www.inwx.de/) and managed trough Cloudflare. As you have to manually configure DNSSEC with INWX I wrote this short guide so you don't have to search for th solution.

## Prepare DNSSEC with Cloudflare

To start the process of enabling DNSSEC with Cloudflare, choose the DNS tab of your domain and scroll to the bottom. Then click "Enable DNSSEC". You will see a lot of details about the configured update and Cloudflare asks you to update records of your domain with your registrar. Leave the current page open and login to INWX now.

## Set up DNSSEC on the INWX site

After logging into INWX, search for the DNSSEC tab in the sidebar and click "DNSSEC hinzufügen" on the opened page, which will open a popup. In that popup, uncheck the "automatischer Modus" checkbox first, which will bring up two additional fields. You will only need the first field.

Unfortunately, INWX requests the DNSKEY RR record here, which is not available as copy & paste in the Cloudflare admin panel. We have to build that on our own. The [official specification](https://tools.ietf.org/html/rfc4034#section-2.3) for DNSSEC helped a lot. A DNSKEY RR record looks like this (the second line works as a reference here to explain the parts):

```
example.com. 86400 IN DNSKEY 256  3   5   AQPSKmynfzW4kyB[...]aNvv4w==
[1]          [2]             [3] [4] [5] [6]
```

* [1] = The domain written as a domain host which appends a dot to the end.
* [2] = The TTL, or expiration timeframe.
* [3] = Specifies a Zone Key bit in the Flags field.
* [4] = A fixed protocol value.
* [5] = Specifies the used public key algorithm.
* [6] = The public key for the domain DNSSEC entry.

### How to build the DNSKEY RR record from Cloudflare values

As I said, Cloudflare provides a lot of values but not the ready-to-copy DNSKEY RR record. But it's quite easy to build on your own. Open your texteditor and get started.

1. First, copy the `DS Record` value from Cloudflare.
2. Replace `IN DS` with `IN DNSKEY`.
3. Replace the number after that string which is specified as the *Key Tag* (i.e. `2345`), with the value of the *Flags* value (i.e. `257`).
4. Replace the last two numbers, e.g. `13 2`, with `3 13`, as the 3 is a fixed value in the DNSKEY record and the 13 is the official algorithm used by Cloudflare.
5. Replace the long, last string with the value of the *Public Key* field.

You should now have a Record that looks like this:

```
yourdomain.com. 3600 IN DNSKEY 257 3 13 oJB1W6WNGv+ldv[...]eDQfsS3Ap3o=
```

This is actually the string you have to paste into the **DNSKEY RR** field in the INWX form so it looks like this:

{{< image img="inwx-dnskey-rr-record-example.jpg" alt="Example for the DNSKEY RR field at INWX" >}}

Click "Save" and you are done. It will take a moment until Cloudflare properly recognizes the configured domain but then you have DNSSEC enabled for it properly.
