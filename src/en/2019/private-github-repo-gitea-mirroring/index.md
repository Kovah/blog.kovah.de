---
title: How to mirror private Github repositories to Gitea
description: I recently tried to mirror some private repositories from Github to my local Gitea setup which led to some errors. Here's how to do it.

author: Kevin Woblick
date: 2019-08-22T13:32:20+02:00
draft: false
hascode: true

category: tutorial
tags:
- Github
- Git
- Gitea
- Backups
---

In case of some outages or a locked account I would not be able to access any Github repositories again. Like with everything else, backups are also important for your code. As I own a Synology Diskstation that already holds a lot of backups, that was the best place to set up some mirrors of all my Github repositories. I installed Gitea, a small and fast alternative to Gitlab as a Docker image on my Diskstation and was ready to go just a little later.


## Errors while mirroring private Github repositories

While all public repositories got mirror without any issues, the first errors popped up while trying to mirror a private repository:

{{< image img="gitea-mirror-error.jpg" alt="Error while mirroring in Gitea" >}}

While doing a migration, Gitea asks for the repo URl and you can specify authentication for that repo if needed. I thought that the "Clone Authorization" setting would allow me to pass my username and API token. After searching for the error and possible solutions I couldn't find anything that helped me. So I tried a few things on my own.


## Successfully mirror private repositories

For whatever reason, Github does not accept the format used by Gitea if you pass your credentials via the "Clone Authorization" setting. But as we mirror with a basic HTTPS URL we are able to pass basic HTTP authorization information directly in the URL. 

```bash
https://github.com/Kovah/a-private-test.git
```
becomes
```bash
https://[your-username]:[some-api-token]@github.com/Kovah/a-private-test.git
```

With that in mind we can now easily setup Gitea to mirror private Github repositories, while leaving the Clone Authorization empty:

{{< image img="gitea-mirror-setup.jpg" alt="Successful Gitea setup for mirroring" >}}

And voila:

{{< image img="gitea-mirror-screen.jpg" alt="Successful Gitea mirror screenshot" >}}

Using this configuration we can easily mirror, or migrate, any private Github repository.
