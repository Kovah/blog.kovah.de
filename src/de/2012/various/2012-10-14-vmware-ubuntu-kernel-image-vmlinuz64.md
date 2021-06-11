---
author: Kevin Woblick
date: 2012-10-14 19:18:34+00:00
description: Die Ubuntu Installation unter VMware bricht mit dem Fehler "could not find kernel image" ab? Hier findest du die Lösung zum Problem.
draft: false
title: 'VMware - Ubuntu Installation: Fehler could not find kernel image vmlinuz64'
type: post
url: /de/vmware-ubuntu-installation-fehler-could-not-find-kernel-image-vmlinuz64/
categories:
- Tutorial
tags:
- Linux
- Ubuntu
- Virtuelle Maschine
- VMware
- VMware Workstation
- Windows
---

Da ich gerade 10 Minuten verzweifelt versucht habe, Ubuntu (64 bit, 12.04) mit VMware Workstation zu installieren und immer wieder beim gleichen Fehler hängen geblieben bin, möchte ich euch den Lösungsweg nicht ersparen.


## Der Fehler

`boot: could not find kernel image: vmlinuz64`


## Die Lösung

Habt ihr die Virtuelle Maschine konfiguriert und seid beim letzten Dialogfenster, entfernt den Haken bei "Virtuelle Maschine starten". Geht dann in die Einstellungen der VM und ändert das virtuelle CD Laufwerk unter CD/DVD (IDE). Dort ist von VMware Wortstation "_autoinst.iso_" angegeben. Habt ihr ein Image von Ubuntu aus dem Netz, wählt dieses an Stelle von "_autoinst.iso_" aus. Habt ihr Ubuntu auf CD / DVD, wählt ihr "_Use physical drive_" (de: Physisches Laufwerk nutzen) aus und selektiert das Laufwerk, in dem sich eure Ubuntu CD / DVD befindet.
Startet jetzt die Virtuelle Maschine. Tritt der oben genannte Fehler wieder auf, geht ihr wieder in die Einstellungen und geht auf "_Advanced_" (de: Erweitert). Dort setzt ihr bei "_Enable Legacy suppor_t" (de: Legacy Unterstützung aktivieren) einen Haken. spätestens jetzt sollte alles ohne Probleme laufen.

Viel Spaß beim Nutzen von Ubuntu.
