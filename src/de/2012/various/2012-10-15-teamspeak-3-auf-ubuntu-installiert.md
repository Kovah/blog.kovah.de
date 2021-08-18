---
author: Kevin Woblick
date: 2012-10-15 17:34:09+00:00
description: 'Dein TeamSpeak Server lässt sich nicht informieren und wirft dir "instance check error" Fehler vor? Hier findest du die Lösung.'
draft: false
title: TeamSpeak 3 auf Ubuntu installiert
type: post
url: /de/teamspeak-3-auf-ubuntu-installiert/
category: tutorial
tags:
- Installation
- Server
- TeamSpeak
- TS3
- Ubuntu
---

Man muss sich mal vorstellen wie es wäre, wenn man nicht der Englischen Sprache mächtig wäre. Dann hätte ich es definitiv auch nicht geschafft, TeamSpeak3 auf meinem Server mit Ubuntu zu installieren. Denn die Probleme, die mir die Installation bereitet hat, konnte ich nur mit Hilfe aus englischsprachigen Foren lösen.
So hat vor allem der  Fehler `Server() error while starting servermanager, error: instance check error` mir Kopfzerbrechen bereitet. Ich konnte das Problem aber mit dem `mount -t tmpfs tmpfs /dev/shm` Befehl lösen. Das Einbinden des TS3 Servers in den Autostart des Servers erwies sich jedoch aufgrund einer deutschsprachigen Anleitung im [Ubuntu Wiki](http://wiki.ubuntuusers.de/Autostart) als unproblematisch.
