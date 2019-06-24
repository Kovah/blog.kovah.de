---
title: Watch – A Unix command to tail directories
description: Watch executes programs periodically, making it perfect for use cases like tailing directories.

url: 74knd-watch-a-unix-command-to-tail-directories
date: 2018-05-15
hascode: true

categories:
- Article
tags:
- Bash
- Console
- Development
- Ubuntu
- Unix
---

My Unix CLI command of the day: watch – execute a program periodically, showing output fullscreen.
It can be used for various use cases, for example investigating filesystem changes of a directory with

```bash
watch -d ls -l
```

The watch command has some options for configuration:

```bash
watch [-dhvt] [-n ] [–differences[=cumulative]] [–help] [–interval=] [–no-title] [–version]
```

While the `-d` option you just run watch as a deamon, making it execute the given command every 2 seconds be default. To increase or decrease the interval, use the `--intervall=[seconds]` option.
There is a more detailed blog post available over at [beerpla.net](http://beerpla.net/2007/08/04/watch-a-useful-linux-command-you-may-have-never-heard-of/).
