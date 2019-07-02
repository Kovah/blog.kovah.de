---
author: Kevin Woblick
date: 2017-03-06 08:05:14+00:00
draft: false
title: WD My Cloud is vulnerable to remote attacks
description: A post on Exploitee.rs explains an exploit which makes WD My Cloud vulnerable to remote attacks.
type: post
url: /en/4g8jn-wd-my-cloud-vulnerable-remote-attacks/
categories:
- News
tags:
- Exploit
- NAS
- private Cloud
- Security
- Western Digital
---

A [new post on Exploitee.rs](https://blog.exploitee.rs/2017/hacking_wd_mycloud/) explains an exploit for the WD My Cloud NAS which makes it vulnerable to remote attacks.

The exploit is based on the login check which is performed in all web scripts for the My Cloud web panel and the usage of the 'exec()' functions with improper user input escaping. If you are not familiar with programming: 'exec()' makes it possible to run command line commands within a PHP script. As stated in the article, "all commands executed through the web interface are done so as the user the web-server is running as, which, in this case is root."  

Additionally, unauthenticated users are able to upload files to the My Cloud device because of a bug in the upload module.

This way attackers are able to execute commands on the device as the admin, allowing him to do and access basically everything on the My Cloud drive. Attackers are also able to upload scripts with the upload function and thus are able to make your My Cloud execute these scripts at any time. Possible use cases: serve malware if your router is configured correctly or connect it to a bot network.

{{< alert type="danger" >}}
If you own a My Cloud device I urgently advise you to disable any access from the internet or disconnect it completely!
{{</ alert >}}
