---
author: Kevin Woblick
date: 2013-08-09 13:23:37+00:00
description: Gimmebar ist eine weitere Alternative zu Pinterest. Warum sie um einiges besser ist erfahrt ihr hier.
draft: false
title: Gimme Bar, die Pinterest Alternative
type: post
url: /de/gimme-bar-pinterest-alternative/
categories:
- Artikel
tags:
- Bookmarklet
- DeviantArt
- Gimme Bar
- Inspiration
- Pinterest
---

{{< alert type="warning" >}}
Der Gimme Bar Dienst wurde bereits eingestellt.
{{</ alert >}}

Ich nutze Pinterest seit langem, um Inspirationen für das Webdesign zu sammeln. Mein entsprechendes [Board auf Pinterest](http://pinterest.com/kovah/web-space/) hat fast 400 Pins. Das Problem an Pinterest ist, dass der Service kleine Vorschaubilder erstellt und diese dann zum originalen Bild bzw. der Seite verlinkt. Das hat ja den Vorteil, dass der Service weniger Bilder speichern muss. Der Nachteil ist jedoch eindeutig: wenn das Original weg ist, ist es weg. Wer jetzt hochauflösende Bilder pint, hat später unter Umständen keinen Zugriff mehr auf diese hochauflösenden Versionen und muss sich mit den mickrigen Vorschaubildern von Pinterest begnügen. In der Regel ist es aber so, dass gerade die Details zählen. Um das Problem zu lösen, habe ich mir mein eigenes Pinterest mit Wordpress gebaut, das ich aber wieder fallen lasse. Wordpress ist für solche Aufgaben doch nicht so gut geeignet. Daher habe ich mich noch mal auf die Suche gemacht und bin dabei auf eine interessante Alternative zu Pinterest gestoßen: [Gimme Bar](https://gimmebar.com/). Der Dienst ist im Prinzip genau so aufgebaut wie Pinterest. Bei Gimme Bar hat man sein Profil, Boards aka Collections, die ebenfalls privat oder öffentlich sein können. Bilder werden von überall im Web via Bookmarklet hinzugefügt.


## Vorteile von Gimme Bar

Gimme Bar hat gegenüber Pinterest ein paar kleine Vorteile. Der absolut wichtigste Vorteil für mich ist definitiv, dass auf Gimme Bar auch die Originalbilder gespeichert werden. In voller Auflösung, die jeder Zeit zugänglich ist. Über das Bookmarklet können zudem nicht nur Bilder sondern auch die Webseiten an sich gespeichert werden. Das ist günstig, wenn man zum Beispiel auf Behance unterwegs ist und dort Arbeiten so konfiguriert werden, dass man nicht als normales Bild drauf zugreifen kann. Gimme Bar hat aber auch noch ganz andere Qualitäten. So ist es beispielsweise möglich, Backups von derzeit vier Diensten zu erstellen: Instagram, Twitter, Delicious und Pinboard. Die Posts auf Gimme Board können auch gesichert werden, zur Verfügung steht hier eine Anbindung an Dropbox. Ich habe das Feature noch nicht genutzt, werde es aber bei Gelegenheit ausprobieren. Derzeit befindet sich Gimme Bar noch in der Beta, die Twitter Anbindung ist derzeit nicht möglich. Jedoch kann man für 24$ / Jahr Pro Mitglied werden, wobei diverse neue tolle Features in Aussicht gestellt werden. Sollte sich diese Pinterest Alternative gut machen, werde ich mir die Pro Subscription noch mal durch den Kopf gehen lassen.


## Probleme mit DeviantArt und dem Bookmarklet

Als tolles neues Tool zum Sammeln von Inspirationen habe ich vor einiger Zeit schon Iceber.gs ausprobiert und bin dort auf das gleiche Problem gestoßen wie jetzt mit Gimme Bar: das nicht funktionierende Bookmarklet auf DeviantArt. Wer bei DeviantArt angemeldet ist wird das Feature kennen: fängt man an, ein Bild zu ziehen, öffnet sich eine Favoriten Leiste, in der man das Bild gleich einsortieren kann. Das Problem an der ganzen Sache: das Bookmarklet ist auch darauf ausgelegt, das Bild per ziehen aufzunehmen. Nun überlagern sich die entsprechenden Javascript Funktionen von DeviantArt und Gimme Bar, so dass das Bookmarklet nicht funktionsfähig ist.


### Lösung für das Bookmarklet-Problem

Die Lösung für das Problem ist relativ einfach. Folgende Javascript Datei muss blockiert werden: _st.deviantart.net/css/v6loggedin_jc.js_
Über die darin enthaltenen Skripte wird die Favoritenleiste gesteuert. Andere Objekte werden anscheinend nicht blockiert. Von daher kann man sehr einfach über zum Beispiel AdBlock diese Datei blockieren und schon kann man das Bookmarklet von Gimme Box ohne Probleme verwenden.
Bei AdBlock muss man unter den Einstellungen auf Eigene Filter gehen und diese manuell bearbeiten. Hier fügt man lediglich als letzte Position folgenden Code ein:
`||st.deviantart.net/css/v6loggedin_jc.js`
Da jedoch einige Codebestandteile auf Verwaltungsseiten von DeviantArt genutzt werden müssen noch folgende Ausnahmen hinzugefügt werden:
`@@|http://www.deviantart.com/messages/|$document
@@|http://www.deviantart.com/deviants/|$document`
