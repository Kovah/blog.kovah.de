---
author: Kevin Woblick
date: 2013-02-05 14:50:14+00:00
description: 'Die Migration von Drupal zu Wordpress: für mein Projekt Game-Zitate habe ich mich schlau gemacht und überlegt, wie man das bewerkstelligen kann.'
draft: false
title: 'Das neue alte Projekt: Game-Zitate'
type: post
url: /de/das-neue-alte-projekt-game-zitate/
categories:
- Artikel
tags:
- Drupal
- Game-Zitate.de
- Games
- Wordpress
- Zitate
---

Es ist jetzt schon 2 Jahre her, als ich ein neues Projekt gestartet hatte: die [Game-Zitate](http://www.game-zitate.de/) Sammlung. Wie der Name schon sagt, werden hier Zitate aus Computer- beziehungsweise Konsolenspielen gesammelt. Das Projekt hatte ich im Herbst 2012 nach über einem Jahr Laufzeit aus Zeitgründen nicht auf meinen neuen Webserver übernommen, die alten Dateien schlummerten aber weiter auf meinem NAS Server. Und da ich mich jetzt etwas mehr in Wordpress einarbeiten wollte habe ich mich entschlossen, mit dem Projekt von der schon etwas eingestaubten Drupal Version 6 auf Wordpress umzusatteln.


## Wordpress und seine Grenzen

Nun, der Umzug gestaltete sich schwerer und nicht so reibungslos wie angenommen. Nach der Grundeinrichtung stellte sich jetzt aber die Frage, wie man die Zitate mit unabhängigen Spielen koppeln und ausgeben könnte. Das Problem von Wordpress ist hier die Einfachheit des Systems. Der eigentliche Vorteil des Systems entpuppte sich schnell als Blockade des Projektes. Denn die Verlinkung, die in Drupal über das Node Reference Modul des Content Constructions Kits von Zitaten und Spielen ist so ohne weiteres nicht möglich. Man kann zwar Seiten (pages) untereinander anordnen, Seiten würden sich aber nicht für die Erstellung von Zitaten eigenen (siehe [Artikel vs. Seiten](http://de.support.wordpress.com/post-vs-page/)). Zudem sollten Zitate in Kategorien einsortiert werden, in denen sich auch die Spiele befinden. Das nächste Problem: ich wollte statische Seiten (Impressum, Kontakt etc.) strikt von den Spielen trennen. Stunde um Stunde verstrich bei der Suche nach einer Lösung - gefunden habe ich aber keine.

Das ist jetzt schon ein paar Tage her, gestern bin ich dann auf eine grandiose Idee gekommen: Zitate (Artikel) werden einfach in Kategorien einsortiert, die als Sub-Kategorien die Spiele beinhalten. Mit dieser Lösung und einem entsprechenden Template ist es jetzt möglich, die Zitate gleichzeitig einer Kategorie und dem entsprechenden Spiel zuzuordnen. Zudem können über spezielle Templates auf den Archivseiten der Hauptkategorien (Action, Strategie usw.) die Spiele (als Sub-Kategorien) angezeigt werden, während auf den Archivseiten der Spiele die Zitate angezeigt werden. Diese saubere Lösung hat sich jetzt als schlichtweg genial entpuppt, da ich mehrere Fliegen mit einer Klappe geschlagen habe und das ganze mit relativ wenig Code und Aufwand dargestellt werden kann.


### Ein Haufen Zitate aus allen möglichen Games

Jetzt müssen nur noch die knapp 400 Zitate aus der Drupal Installation in die Wordpress Variante übertragen werden. Automatisch macht das keinen Sinn, da die beiden Systeme jetzt viel speziell auf ihre Aufgaben ausgerichtet sind. So kann man sich auch wieder mal über das ein oder andere Zitat schlapplachen und sich seiner Sammlung erfreuen. Und wenn ich mit dem Umzug fertig bin, kann ich gleich die nächsten Zitate aus Skyrim nachreichen. Ich ärger mich nur, dass ich bei Assassins Creed Revelations keinerlei Zitate notiert habe und mir schon ein größerer Teil von Assassins Creed III durch die Lappen gegangen ist. Schade, aber vielleicht kann man das ja noch nachholen.
