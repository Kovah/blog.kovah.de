---
title: "DevLorem: Rewritten from the ground up in Go"
description: "Three weeks ago DevLorem was a simple PHP app serving a website. Now the DevLorem is a powerfull CLI tool and web server, available as a single binary for 7 different platforms."

author: Kevin Woblick
date: 2020-07-24T10:33:22+02:00
draft: false

categories:
- News
tags:
- Golang
- DevLorem
---

About 3 weeks ago my good old [DevLorem](https://github.com/Kovah/DevLorem) project was a simple PHP website that generated Lorem Ipsum text made from movie quotes of famous actors and actresses. I decided to rewrite the whole thing with Go to dive into the language and its features.

Yesterday I released version 2, the complete rewrite with many more features. A demo of the website and API is available on [devlorem.kovah.de](https://devlorem.kovah.de/).

## Using Go to develop a feature-rich application

The main idea was to have one single binary that could be used as a web server handling the website, as well as a CLI tool to generate quotes right in the terminal. The first steps of getting a simple website up and running with Go were fairly straight forward. I used the [gorilla/mux](https://github.com/gorilla/mux) package, which provides a set of tools to run a HTTP web server. The examples have given me a good direction to build both the website itself, and the API.

Adding CLI commands were a bigger task as I also had to implement the generation in the terminal. The [Cobra](https://github.com/spf13/cobra) package, also used by famous projects like Hugo, has given me the perfect framework to build all command line options.

## One binary for 7 platforms, and a Docker image

One of the most important features after the rewrite: DevLorem is now available as a single binary for 7 different platforms, including Linux, macOS and Windows. With the help of the [go.rice](https://github.com/GeertJohan/go.rice) package, I was able to bundle all assets, from the quote sources to the static CSS and JavaScript for the website, into one binary.

Besides of that, I built a Docker image that is now available as `kovah/devlorem` on the Docker Hub. It provides all features of the tool itself.

You can download the executables from the [latest release](https://github.com/Kovah/DevLorem/releases/tag/v2.0.0).

## The first steps with Go

Go itself is an amazing language. After writing the dynamically typed PHP and Python, using a strict type system was a great step forward. I already worked with static types in Rust, which was more a pain than a help because I spent more time fighting with type abstractions than writing productive code. Go has a clear and easy to understand type system and I was able to work with it right from the start. If you want to learn Go and come from another programming language, your best way to start is the [Go by Example](https://gobyexample.com/) website. It has all the important aspects of Go packed into simple examples.

I will probably use Go more in the feature, and update the CorporateLorem tool too.
