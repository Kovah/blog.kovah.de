---
title: Automatically generating Oh my ZSH theme screenshots
description: The wiki page of the Oh my ZSH shell contains more than 100 themes. I tried to generate screenshots for all.

author: Kevin Woblick
date: 2019-09-03T10:50:42+02:00
draft: false
hascode: true

categories:
- Article
tags:
- Oh my ZSH
- Shell
- Bash
- Automator
- Themes
---

Oh my ZSH is one of the more popular alternatives to the basic Bash shell. It provides a lot of useful functions to 
speed up your work with the shell. To complete the package, the shell also offers themes, which alter the way the shell
looks like and which output it shows. The [corresponding wiki page](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes) 
contains more than 100 themes which are actually built-in right now into Oh my ZSH.  
The "problem": you can't easily compare all those themes because the screenshots differ too much to have at least a
little bit of objective view on them. I tried to solve that.


## Mass-Generation of Screenshots

Automation is the only possible way to generate this mass of screenshots without spending weeks on it. Thankfully macOS
ships with Automator, a handy tool for automating tasks. I used the tool to build up a simple work flow that helped
me generating 131 screenshots for almost all built-in themes.

{{< image img="robbyrussell-theme.jpg" alt="Screenshot of the robbyrussel theme" >}}

### Assets

👉 Download the script [here](ZSH_Themes.app.zip)  
👉 Repository with sample files: [Kovah/oh-my-zsh-theme-test](https://github.com/Kovah/oh-my-zsh-theme-test)

### The Automator script

The script contains of the following steps:

* Ask for the theme name and save it as a variable
* Launch the Terminal
* Run an AppleScript which
    * tells the Terminal app to
        * switch to a prepared folder containing some files and with Git initialized
        * re-initialize the shell with the new theme from the variable, by using the `ZSH_THEME` environment variable
        * Print an escape sequence to clear the Terminal input
        * Print a series of commands to generate output
    * then, sets some variables and paths for the screenshot
    * and finally toggles the screenshot command with the window-only mode enabled.
    
It's not much, but it helps to prevent any repeating tasks. At the moment you have to interact with the script twice:
once for providing the theme name and once for selecting the Terminal window for the screenshot.

I am pretty sure that there is a way to take screenshots of single windows without user interaction, maybe by using the
screenshot command together with x and y coordinates which may be available from the Terminal app window, but I
couldn't make up a solution fast enough, so I went with the manual mode which works too.

The folder with all sample files can be found in [this repository](https://github.com/Kovah/oh-my-zsh-theme-test).
I created this repo to allow other users to generate the exact same screenshots as I did.


## New screenshots for Oh my ZSH

Unfortunately, the changes are not live yet. The [current maintainer noted in an issue](https://github.com/robbyrussell/oh-my-zsh/issues/8078),
that some themes have screenshots which show special features or together with a specific color scheme. Completely
understandable. For now, the new version of the wiki can be viewed on [my fork of the wiki](https://github.com/Kovah/oh-my-zsh-wiki/blob/master/Themes.md).

I hope that "open sourcing" my workflow will help getting the new screenshots onto the official wiki page. If you would
like to propose some ideas for the issue feel free to leave a comment on the issue.
