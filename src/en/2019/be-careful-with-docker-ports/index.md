---
title: Be careful with Docker port binding
description: In a recent security incident I learned that you have to be very careful with binding port on your Docker setup.

author: Kevin Woblick
date: 2019-10-16T16:41:43+02:00
draft: false
hascode: true

categories:
- Articles
tags:
- Docker
- security
- networking
---

Not too long ago I got an email from my hosting provider, actually a forwarding from the BSI (German Institute for Information Security) that stated my Elasticsearch installation was accessible from the outside. I was flushed, as I thought I had secured the Elasticsearch Docker container behind nginx, which had basic authentication enabled. Fact is: Docker had bound the 9200 port directly in the iptables configuration, ignoring the UFW firewall completely. Oops.

## How Docker is handling ports

Well, not so oops. Thankfully, the Elasticsearch setup did not contain any sensible data as it was a playground for a Docker-based testing of Elasticsearch.  
So, what had I do wrong so the app was exposed to the public?

### The Docker setup as a security nightmare

I don't want to bother you with a lot of details here, but the specific part which introduced this security hole was in the port configuration itself. The corresponding docker-compose file looked like this, taken directly from the [documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html):

```yaml
version: '2.2'
services:
  es01:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.4.0
    container_name: es01
    # ...
    ports:
      - 9200:9200 # <<<
```

At the first glance, this did not look like any issue at all. I knew that I had blocked all incoming ports except HTTP(S) with the firewall, which is UFW in my case. The problem is that with this configuration, Docker binds the 9200 port on the host machine to the 9200 port in the container. Again, I thought that this wouldn't be a problem, because I blocked all other ports anyway. Docker, however, does not respect UFW or maybe any other firewall at all, because it directly edits the iptables configuration. This way, connections for the used port are kinda bypassing the firewall and reach the container directly. Port 9200 was now open for _all_ incoming connections.

Unfortunately, this fact is kinda buried in the [Docker documentation](https://docs.docker.com/network/iptables/), so I wasn't aware of this behavior. In the meantime, I created pull requests for the documentation of both the Docker CLI and Docker Compose with a small warning for the port configuration section. Just today I also submitted a pull request to the Elasticsearch docs itself with another hint.

### The better way to configure Docker ports

Of course, I took down Elasticsearch the moment I got the email, only to find out about the port issue much later after searching for the issue on the internet. My initial intention was to run both Elasticsearch and Kibana behind a reverse proxy, nginx in my case. Nginx should have routed all requests from the outside to the app, while enabling basic authentication.

To do exactly this, bind the 9200 port to the host machine directly. It will not be exposed to the public and only the host can interact with that port. It may look like this in the docker-compose file:

```yaml
version: '2.2'
services:
  es01:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.4.0
    container_name: es01
    # ...
    ports:
      - 127.0.0.1:9200:9200 # <<<
```

I am pretty sure that huge security issues like this could be prevented by simple warnings in the documentation. If there is no warning, or a notice, how should people know about these specific behaviors? I hope the pull requests will be merged so nobody else trips into this hole and maybe makes sensible company data public.
