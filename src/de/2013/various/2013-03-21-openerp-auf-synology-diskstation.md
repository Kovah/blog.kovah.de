---
author: Kevin Woblick
date: 2013-03-21 22:28:36+00:00
description: Ein kurzes Tutorial das beschreibt, wie man OpenERP auf einer Synology Diskstation personalisiert und seinen Wünschen anpassen kann.
draft: false
title: OpenERP auf der Synology Diskstation personalisieren
type: post
url: /de/openerp-auf-der-synology-diskstation-personalisieren/
category: tutorial
tags:
- CRM
- CSS
- ERP
- HTML
- Open Source
- OpenERP
- SSH
- Synology Diskstation
---

Wenn man sich ein mal in [OpenERP](https://www.openerp.com/de) eingearbeitet hat, ist es ein mächtiges Werkzeug zur Businessverwaltung. Das Tool ist in der Community Version 6.1 als Paket für die Synology Diskstation verfügbar und kann via Knopfdruck installiert werden. Vorteil ist hier klar der geringe Installationsaufwand. Nachteil ist jedoch, dass das OpenERP Paket nicht etwa in einen gemeinsamen Ordner der Diskstation installiert wird und man so nicht an die Quelldateien herankommt, um die Anwendung auf seine Bedürfnisse anzupassen - oder etwa doch?


## Personalisieren von OpenERP via SSH

Bevor wir loslegen: _Voraussetzungen für das Personalisieren von OpenERP auf der Diskstation sind Kenntnisse im Umgang mit der Konsole sowie Grundkenntnisse in HTML bzw. CSS._

Über die gemeinsamen Ordner oder die Filestation allgemein kommt man nicht an die Quelldateien heran. Zum Einsatz kommt hier die Konsole, mit der man via SSH auf die Diskstation zugreift. Um SSH nutzen zu können, muss es in den Einstellungen unter _Terminal_ > _SSH-Dienst aktivieren_ aktiviert werden. Danach geht es per Konsole mit `ssh root@[IP-der-Diskstation]` ans Werk. Ist man eingeloggt, landet man vorerst im eigenen Nutzerverzeichnis. Da man dort nichts ausrichten kann, bewegen wir uns mit cd auf die root-Ebene. Von dort aus geht es mit folgendem Befehl zum Hauptverzeichnis von OpenERP:
`cd /var/packages/OpenERP6.1/target/openerp/`

Dort befindet man sich im Hauptverzeichnis des Programmes. Da uns Skripte oder ähnliches vorerst gar nicht interessiert, können wir gleich bis zum Verzeichnis manövrieren, in dem sich die Quelldateien für den Aufbau der Webseite befinden:
`cd addons/web/static/src/`

In diesem Ordner befinden sich insgesamt 4 Ordner (css, img, js und xml), in denen sich alle nötigen Dateien finden lassen.

**css** - Hier befinden sich alle CSS Dateien, in der Regel muss man lediglich die _base.css_ Datei bearbeiten.

**img** - Hier werden alle Bilder gespeichert; nützlich, wenn man eigene Logos verwenden möchte.

**js** - Wie die Abkürzung schon erkennen lässt: Javascript-Dateien. Vorerst uninteressant für uns.

**xml** - Wider Erwarten verstecken sich hier in der Datei _base.xml_ die Hauptanweisungen für die HTML Struktur.

Nun kann es hier losgehen, nach Lust und Laune alle Dateien zu bearbeiten. Sofern man keinen anderen Editor installiert hat, kann man mit `vi [Dateiname]` den VI Editor nutzen, hier gibt es eine [Übersicht zu den Befehlen](http://www.cs.colostate.edu/helpdocs/vi.html).

**Wichtiger Hinweis**: Bevor OpenERP über den Paketmanager aktualisiert wird unbedingt ein Backup der geänderten Dateien machen - denn sonst war die Mühe eventuell umsonst.
