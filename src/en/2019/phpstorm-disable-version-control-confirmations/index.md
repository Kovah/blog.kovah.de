---
title: How to completely disable version control confirmations in PhpStorm
description: Usually you are asked if new files should be added to version control in every new project. Here's how to disable the dialogue.

author: Kevin Woblick
date: 2019-12-11T12:24:50+01:00
draft: false

category: tutorial
tags:
- PhpStorm
---

PhpStorm is a really powerful IDE with tons of features and even more settings to tweak the app to behave like you want. But one of the most annoying things for me was the dialogue asking if a newly created file should be added to the version control right now, or not, of if PhpStorm should never ask again. When accessing the settings, searching for that setting you may notice, that it is only set for the current project.

{{< image img="screen-project-settings.jpg" alt="Screenshot of the PhpStorm project settings for version control" >}}

## How to globally disable the setting

After searching for a few minutes, I finally found the solution for the problem. While PhpStorm has many settings that can be configured globally, some of them are bound to the project from the start, like the confirmation. Thankfully, PhpStorm also offers a way to set the default values for all of these project-specific settings in `File` > `Other Settings` > `Preferences for new Projects...`

PhpStorm will then open a window that looks similar to the general preferences window, but with some menu points removed. You can now disable the version control confirmation in `Version Control` > `Confirmation`. The setting will be applied as the default to all new projects.
