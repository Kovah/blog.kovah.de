---
author: Kevin Woblick
date: 2014-07-11 13:28:57+00:00
description: Do you want to customize some parts of your GitLab server? Here's how to do it with some simple steps.
draft: false
title: Customize your GitLab installation
type: post
url: /en/customize-gitlab-installation/
category: tutorial
tags:
- Git
- GitLab
- HAML
- Ruby
---

I'm using GitLab for a few months now and it is a pretty awesome application that helps you run a GitHub-like application on your own server. GitLab has many features and is under active development. But some features like the customization are still missing. Sure, you can set a standard theme but for example you can't change the GitLab intro on the login and signup pages. Uhm... did I said you can't? Of course you can!

Before we start I would like to inform you that you have to be very careful while customizing GitLab. In the following steps you have to edit source files and GitLab will stop running when things get messed up. So make a full backup (or at least backups of the files you edit).

And don't forget to backup your edited files before running an GitLab update because all edited files will be overwritten!


## Customize the GitLab login / signup page

1. First we need the file that handles the header of the login / signup pages. We assume that you installed Gitlab in the `/home/git/` directory. The file we are searching is `/home/git/gitlab/app/views/layouts/devise.html.haml`
2. Open the file using your favorite editor, we'll use nano in this process. But remember to edit everything using the user that is running the GitLab server. It should be `git` in the most cases.  
  `cd /home/git/gitlab/app/views/layouts/` and `sudo -u git -H nano devise.html.haml`

3. The editor shows you the template that is used to build the header of the login and signup pages with the GitLab headline and the info text. Feel free to change what you want. Remember that .haml files don't use tabs for indention. User 2 spaces instead.
4. Example: If you want to display an image instead of the GitLab headline use the image tag.  
    `%img{:src => "http://invoiceplane.com/content/logo/PNG/logo_400x200.png"}`  
    or for links use the link tag  
    `#{link_to "Linktext", "http://link.com"}`
5. Save the file. Using nano you have to use `ctrl + x` and then type `y` and hit `return`.
6. Now restart your Apache or Nginx web server.  
    `service apache2 restart` or `service nginx restart`

If you need some help with customization take a look at the [HAML cheat sheet](http://www.cheatography.com/specialbrand/cheat-sheets/haml/).


## Customize the logo in the GitLab navigation


{{< image img="141264.png" alt="" >}}


* Pretty easy too. But now we have to edit two files. They are in the same folder like the login header: `_head_panel.html.haml` and `_public_head_panel.html.haml`
`cd /home/git/gitlab/app/views/layouts/
 sudo -u git -H nano _head_panel.html.haml  
 and 
 sudo -u git -H nano _public_head_panel.html.haml`

* In these two files we can't replace the GitLab logo with a simple picture. We have to use CSS styles to change the background image. To do so change  
    `%h1 GITLAB`  
    to  
    `%h1{:style => "background-image: url('https://domain.com/link/to/your/image.png'); background-size: 45px 45px;"} GITLAB`  
    The image should have a 1:1 ratio and should not exceed 100x100px because it will be scaled down.
* You have to make the changes in both files because one handles the private and one the public navigation. Don't forget to restart the web server.

## Remove GitLab from the page title

{{< image img="141261.png" alt="" >}}

* We have to change `_head.html.haml` to edit the page title:  
    `cd /home/git/gitlab/app/views/layouts/` and `sudo -u git -H nano _head_panel.html.haml`

* Only remove "Gitlab" and replace it with you own title. Do not edit the rest of the code so it looks like this:
    `%title = "#{title} | " if defined?(title) Your Own Repo`

* Save the file and restart the web server.

If you have any questions or problems leave a comment.
