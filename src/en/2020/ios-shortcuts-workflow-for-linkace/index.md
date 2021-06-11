---
title: A iOS Shortcuts workflow for LinkAce
description: Add links to LinkAce from the share menu of your iOS device with the help of this Shortcuts workflow.

author: Kevin Woblick
date: 2020-12-17T13:44:32+01:00
draft: false
hascode: true

categories:
- Tutorial
tags:
- LinkAce
- iOS
---

At the moment [LinkAce](https://www.linkace.org/) has no mobile apps, so adding links on your mobile phone can be tedious. But LinkAce provides a great API that allows you to access and edit all data from anywhere. With the help of the API and Shortcuts, iOS users can easily add links to LinkAce from the share menu. I created a Shortcuts workflow that uses only two inputs from you: your LinkAce URL and your API key which can be found in the user settings.


## Install the iOS Shortcut

{{< image img="shortcut-preview.jpg" alt="Preview of the Shortcuts workflow" modifier="right">}}

By default, iOS Shortcuts does not allow the installation of “untrusted” Shortcuts shared via URL. It will deny the installation of shortcuts because “Shortcuts security settings don’t allow untrusted shortcuts.,” Before you install the Shortcut, enable untrusted sources:

* go to your iOS settings
* go to the Shortcuts app settings
* enable “Allow untrusted Shortcuts”

Now open the [**iOS Shortcut share link**](https://www.icloud.com/shortcuts/884b88602bef47f2a2249e05b7c998fd) in Safari. On the overview page you can install the shortcut.

You will now be redirected to the Shortcuts app with the workflow preview. It contains many elements needed to successfully save links in LinkAce. There are two things you must edit while importing the Shortcut: the LinkAce URL and your user API key. Click the “Import untrusted Shortcut” now. The app will ask you for both the URL and the key in the next two steps. After that, the shortcut is ready to use.


## Details about the Shortcut workflow

* First, the Shortcut is enabled for the share menu and will only accept URLs as the primary input source. If you want to use other input sources, like the clipboard, you should tweak the workflow.
* In the first steps, the primary input, the URL and the API key are saved to variables. After clicking the Shortcut in the share menu, it will ask for input: you can either enter a custom link title now, or leave it blank to let LinkAce generate it for you.
* After that, a network request is sent to your LinkAce URL including the correct API path: `/api/v1/links`, for example `http://demo.linkace.org/api/v1/links`. This network request contains the shared URL, the title if provided, and some standard values for other fields.  
* To make the Shortcut a bit nicer, the response of the API is parsed in the last steps. If the response contains a link ID, the shortcut assumes that the link was saved successfully. If not, most likely an error was returned. If an error was returned, it will be shown to you.
