---
title: Useful Docker shell aliases
description: A collection of useful shell aliases for Docker and Docker Compose to speed up the development workflows.

author: Kevin Woblick
date: 2019-08-28T11:35:04+02:00
draft: false
hascode: true

category: tutorial
tags:
- Docker
- Shell
- Bash
---

I work with Docker all the time. Ditching my MAMP stack for Docker was one of the most convenient and useful decisions
I've ever made. If you are interested in Docker you should take a look at my current 
[Docker Stack]({{< relref path="/2019/drop-in-docker-stack-for-php" lang="en" >}}) which describes how I use Docker for
PHP projects.

## Useful Shell aliases

If you work with Docker you have to issue a lot of shell commands to start, stop and manage the containers. Most of the
commands are usually targeted towards Docker Compose which is a managing layer for Docker. To improve working with the
shell I created several aliases which shorten the amount of typing needed to perform the most common actions.

**Container management**

```bash
# Start the docker-compose stack in the current directory
alias dcu="docker-compose up -d"

# Start the docker-compose stack in the current directory and rebuild the images
alias dcub="docker-compose up -d --build"

# Stop, delete (down) or restart the docker-compose stack in the current directory
alias dcs="docker-compose stop"
alias dcd="docker-compose down"
alias dcr="docker-compose restart"

# Show the logs for the docker-compose stack in the current directory
# May be extended with the service name to get service-specific logs, like
# 'dcl php' to get the logs of the php container
alias dcl="docker-compose logs"

# Quickly run the docker exec command like this: 'dex container-name bash'
alias dex="docker exec -it"
```

**System-wide management**

```bash
# 'docker ps' displays the currently running containers
alias dps="docker ps"

# This command is a neat shell pipeline to stop all running containers no matter
# where you are and without knowing any container names
alias dsa="docker ps -q | awk '{print $1}' | xargs -o docker stop"
```

Those are the current aliases I use to speed up development. Feel free to extend them, please share them with me
via Twitter.
