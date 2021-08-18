---
title: A drop-in Docker stack for PHP apps
description: Over the past months I gradually implemented a solid Docker setup for all private projects. As I think that this stack is quite solid so I want to share it with you.

author: Kevin Woblick
url: 5gw1x8-a-drop-in-docker-stack-for-php-app
date: 2019-06-18
draft: false
hascode: true

category: tutorial
tags:
- Development
- Docker
- MySQL
- PHP
- nginx
- Redis
---

For a long time I used MAMP Pro to manage my local development environment. It was quite a hassle to keep everything running with those locally installed PHP version although the MAMP team did an exceptional job with the installation.
Then with my first Laravel projects came Homestead but I never get used to it really.
Finally, about a year ago, I first tried Docker. I started using it for bigger projects at work. Over the past months I gradually implemented a solid Docker setup for all private projects. As I think that this stack is quite solid and – most important – very easy to use with only little configuration, I want to share it with you because it rapidly speed up my development process.

## Why should you use Docker?

The MAMP app worked pretty well. But it has one major flaw: all apps share the same PHP configuration. And the same database server and cache service (like Redis), if used by the application.
Docker creates isolated container for each application in which only the application runs and has access to. This leads to not only a more sold security (even if not that important for development only), but also a fixed environment for each app. That mans that you can configure PHP, databases and the web server completely to your app requirements without the need to take care of other apps or switching between configurations.

---

## The drop-in Docker stack

As most of the projects I work on are developed with plain PHP, a larger Laravel stack or a PHP-based CMS like WordPress or Drupal, I could easily copy the small Docker stack I configured from one app to another with only single adjustments or – better – no adjustments at all.

You can find all files of this Docker stack on [Github](https://github.com/Kovah/Docker-Stack).

Before you start, [Docker](https://www.docker.com/get-started) needs to be installed on your machine.

### Micro-services over monolithic architecture

There are two approaches on developing and deploying Docker-based applications: either you put every used service and configuration into one container or you split up the setup into several Docker containers talking to each other, i.e. like a micro-service architecture.

Personally I prefer to have every service in a single container, with separate configuration. So, instead of using the PHP base image and installing MySQL, nginx and Redis into it, I am using a service-specific image for each service. Three big advantages:

* **Maintenance is easier.** Manual installation of services always leads to the problem that the base image has to be updates once a single service was updated or its configuration changed.
* **Easily swap services.** If the architecture of your app changes, you can easily swap services by replacing some lines in your docker-compose.yml file – instead of revisiting your Dockerfile and making sure that your installation still works.
* **Last but not least: security.** It doesn’t even feel save to have one machine that runs everything, where every service can access everything from all other services. If services can only talk to each other trough ports, you probably closed some hundred possible vulnerabilities.

Even if security is not that important for development, you should still keep an eye on it. And if you start with a clean setup it makes the process of using Docker in production even easier.

### Bitnami Docker images

The stack uses Docker images provided by [Bitnami](https://bitnami.com/), one of the big players for containerized deployment and hosting. I decided to go with the Bitnami images for some reasons:

* Bitnami offers dozens of images for PHP, MySQL / MariaDB, Redis, Memcached, MongoDB, Node.js and so on.
* All images for each service are developed from the same company which makes configuration easier as all images share the same base and structure.
* In my opinion the images provide the perfect balance between a small image size and a rich feature set.
* Bitnami images are build on top of a distro called Minideb. It’s Debian-based but modified to be small and to match Docker requirements.
* I simply refrain from using images developed by single developers because it’s very likely that these are abandoned now or later or not updated regularly.
* Bitnami images in contrast are updated automatically with each new version of the service.

{{< image img="php-coding-henri-unsplash.jpg" alt="Picture of some software code" >}}

## Details about the stack

So, let’s get to the point.  
The stack consists of four files from those two are configuration files and one is the .env file you can find in may projects.

**Directory structure**

```shell
/
├─ docker
│ ├─ php.ini
│ └─ nginx.conf
├─ // Your other app files
├─ .env
└─ docker-compose.yml
```

My default setup consists of PHP, a MySQL-compatible database server, nginx and Redis. All services are defined in the `docker-compose.yml` file.

**Part of the docker-compose**

```yaml
# --- PHP 7.3
php:
  container_name: "project-php"
  image: bitnami/php-fpm:7.3
  volumes:
    - .:/app
    - ./docker/php.ini:/opt/bitnami/php/etc/conf.d/php.ini:ro

# --- nginx 1.14
nginx:
  container_name: "project-nginx"
  image: bitnami/nginx:1.14
  ports:
    - "127.0.0.1:80:8085"
  depends_on:
    - php
  volumes:
    - .:/app
    - ./docker/nginx.conf:/opt/bitnami/nginx/conf/vhosts/site.conf:ro
```

This is the definition of the PHP and nginx containers. As you can see it runs with PHP 7.3. The only things it does is to make the project available in the `/app` directory (the base directory for all Bitnami containers) and apply your custom php.ini.

You can find details about each service in the main README file.

### Setup Configuration

In most cases you only have to change the .env file because it contains variable details about the stack and passwords. The main stack works for all plain PHP projects but you can easily make it work with Laravel or any CMS by changing the nginx.conf file because each system may has different requirements on the web server configuration.

### Installation and usage

*  Copy the main files (everything except /public and README.md) to your project
* Make a copy of the `.env.example` file and name it `.env`, or copy the needed values to your existing .env file. Laravel users do not have to copy anything.
* Make sure the current configuration matches your project setup. CMS like WordPress or Drupal need additinal configuration.
* Replace the `project` placeholder with your own project name in the `docker-compose.yml` file.
* Run `docker-compose up -d`

Docker will then download all images and start them up. By default Port 80 on your host machine is bound to nginx so you should be able to access your app by opening `http://localhost` in your browser.

## Final thoughts

I used this little stack in several projects now. It also powers Linkace, a bookmark manager I am building. It works pretty well for me but I totally understand if you have your own preferences or it won’t work with your app. Feel free to leave feedback in the Github repo.
