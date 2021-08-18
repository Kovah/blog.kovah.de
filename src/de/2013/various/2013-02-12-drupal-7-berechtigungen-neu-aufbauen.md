---
author: Kevin Woblick
date: 2013-02-12 13:50:35+00:00
description: Hier findest du Informationen darüber, wie man Berechtigungen bei Drupal neu aufbauen kann, wenn Probleme mit Content Access auftauchen.
draft: false
title: Drupal 7 - Berechtigungen neu aufbauen bei Content Access Problemen
type: post
url: /de/drupal-7-berechtigungen-neu-aufbauen-bei-content-access-problemen/
category: tutorial
tags:
- Berechtigungen
- Content Access
- Drupal
- Drupal 7
- Module
- Probleme
---

Da Drupal 6 ja schon etwas eingestaubt ist, baue ich derzeit ein neues Projekt mit Drupal 7. Da das Content Access Modul Probleme bereitet hat, musste ich mich nach einer Lösung umsehen. Berechtigungen wurden nicht übernommen, so dass unregistrierte Benutzer Zugriff auf Beiträge hatten, die nur registrierten Nutzern zugänglich sein sollten. Die Lösung habe ich dann nach ein paar Minuten Recherche und rumprobieren gefunden: für die Drupal 7 Installation die Berechtigungen neu aufbauen. Komischerweise habe ich keinen Menüpunkt gefunden, weshalb ich den Pfad so raussuchen musste. Im Drupal Center Forum habe ich dann den für Drupal 7 richtigen Pfad gefunden:

`http://www.deinedomain.de/admin/reports/status/rebuild`

Damit sollte es möglich sein die Berechtigungen für Drupal neu zu setzen und die Änderungen, die man via Content Access getätigt hat, auch zu übernehmen.
