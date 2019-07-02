---
author: Kevin Woblick
date: 2011-02-25 07:54:08+00:00
description: Der Youtube Player kann nicht nur als einfacher Videoplayer verwendet
  werden, zum Beispiel auch als Musikplayer. Wie das geht erfahrt ihr hier.
draft: false
title: YouTube als Musikplayer für die Webseite
type: post
url: /de/youttube-als-musikplayer-fur-die-webseite/
categories:
- Tutorial
tags:
- HTML
- Video
- YouTube
---

Möchte man ein Video von youTube als kleinen Musikplayer auf seiner Webseite haben kann man dies folgendermaßen realisieren. Vorteil ist, dass der YouTube Player viele Optionen bietet, man das Video zum Beispiel auch in groß ansehen kann und stets einen direkten Link zum Video auf YouTube hat.


## YouTube Musikplayer - Den Code ändern

Möchte man ein Video von YouTube einbetten erhält man auf der Seite des Videos solch einen Code:

    <iframe title="YouTube video player" width="480" height="390" src="http://www.youtube.com/embed/-3pgW2otmwY" frameborder="0" allowfullscreen></iframe>

Es ändert sich hierbei lediglich die URL. Was wir nun aber machen können ist, den Player nach Belieben zu verkleinern, zu vergrößern oder auch zu verzerren. Wichtig für das Anpassens des Players ist hierbei folgender Code-Abschnitt:

    width="480" height="390"

Die Zahlen kann man beliebig ändern, da gibt es keine Restriktionen von Seiten YouTube's. "Width" bestimmt hierbei die Breite, "height" die Höhe des Players. Ich habe nun einige Varianten des Players erstellt. Ersetzt bei euren Videos dazu einfach die folgenden Codeschnipsel durch die in eurem Code.


### Variationen des YouTube Players

#### Variation 1
Die Standard-Variante. Die Höhe ist auf die untere Statusleiste beschränk, der Player hat allerdings noch die normale Breite.

    <iframe title="YouTube video player" width="480" height="28" src=" # URL AUS EUREM CODE # " frameborder="0" allowfullscreen></iframe>

#### Variation 2 Geringere Breite
Die Variante mit geringere Breite, wenn mal nicht so viel Platz ist. Die Höhe ist auf die untere Statusleiste beschränk, die Breite reduziert.
    
    <iframe title="YouTube video player" width="310" height="28" src=" # URL AUS EUREM CODE # " frameborder="0" allowfullscreen></iframe>

#### Variation 3 Mit Track-Leiste
Als dritte Variante habe ich mich für eine Option mit Track Leiste entschieden. Dies ermöglicht den Hörern auszuwählen, welche Stelle des Tracks sie hören möchten. Nachteil ist, dass ein Stück des Videos zu sehen ist.

    <iframe title="YouTube video player" width="480" height="46" src=" # URL AUS EUREM CODE # " frameborder="0" allowfullscreen></iframe>
