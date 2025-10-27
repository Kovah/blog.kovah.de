---
title: The Risk, Effort, Reward System
description: My personal productivity system to easily prioritize tasks.

author: Kevin Woblick
date: 2025-10-27T22:30:17+01:00
hascode: true

categories:
  - Article
tags:
  - productivity
  - tasks
---

I recently put together a new productivity system which helps me prioritize the tasks for my personal projects. It works similar to the [Eisenhower method](https://en.wikipedia.org/wiki/Time_management#Eisenhower_method) by identifying tasks that should be done immediately, put aside, or discarded entirely.

{{< alert type="info" >}}
In the following, I will talk solely about _tasks_, although the system can be applied to all sorts of things that should be prioritized: a new project, feature requests, bug reports,...
{{</ alert >}}


## The System

All three of the following labels - risk, effort and reward - have three levels: high, mid and low. All of your tasks may be assigned one level of each label, resulting in three labels in total. Depending on your task manager, be it a text file or something elaborate like TickTick, or even Jira, the labels might look like `risk:low`, `effort-mid` or `reward/high`. It's entirely up to you and what your tool supports.

### Risk

The risk could be anything that leads to some kind of loss or negative result, if the task fails: money, reputation, legal uncertainties, or simply time. Especially in business contexts, risks might pose a significant reason to not work on a task, while it's more or less negligible in a private context.

In any case, it depends on the task itself. Risk is mostly associated with a loss of money in my case.

### Effort

The effort is the sum of everything you need to put into a task to complete it. Like the risk, it depends entirely on the task. For a bug report, effort probably describes the time it takes to investigate the root cause and push a fix. When talking about entire projects, efforts start with the initial research, a business analysis, implementation, marketing,...

### Reward

The reward can be basically anything you identify as the positive result of completing the task: a new source of income, likes and fame, or just the feeling of having done something good.

Other than risk and effort, the reward label is turned "upside down": a high reward is {{< badge type="success" >}}good{{</ badge >}} and a low reward is {{< badge type="danger" >}}bad{{</ badge >}}.

---

## Prioritize tasks using the system


As soon as you've labeled your tasks with risk, effort and reward, they can be prioritized like reading a traffic sign.

- Tasks with {{< badge type="success" >}}risk:low{{</ badge >}}, {{< badge type="success" >}}effort:low{{</ badge >}} and {{< badge type="success" >}}reward:high{{</ badge >}} should be done immediately. They are easily done, will lead to results quickly and are not associated with any risks.
- The in-between might look like this: {{< badge type="warning" >}}risk:mid{{</ badge >}}, {{< badge type="warning" >}}effort:mid{{</ badge >}} and {{< badge type="warning" >}}reward:mid{{</ badge >}}. Tasks like these might be put on hold until all "green" tasks are done.
- Finally, tasks you might delete right now: {{< badge type="danger" >}}risk:high{{</ badge >}}, {{< badge type="danger" >}}effort:high{{</ badge >}} and {{< badge type="danger" >}}reward:low{{</ badge >}}. Those tasks take long, pose a significant risk and will not yield any results.

That's it. One quick note: this is just a simple system to prioritize tasks. If you find yourself in endless discussions about whether a task yields high rewards or imposes significant risks, you are too deep in the details.

You might implement a scoring system comparable to the [RICE scoring model](https://www.productplan.com/glossary/rice-scoring-model/), but having my traffic light is enough for me to quickly identify the priority of tasks.
