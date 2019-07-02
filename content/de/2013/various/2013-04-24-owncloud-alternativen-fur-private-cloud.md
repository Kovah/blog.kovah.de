---
author: Kevin Woblick
date: 2013-04-24 11:41:13+00:00
description: OwnCloud macht Probleme, hängt ständig und Updates zerstören alles? Bei
  mir war es ähnlich, erfahre hier, was ich gemacht habe.
draft: false
title: Die Suche nach ownCloud Alternativen für die private Cloud
type: post
url: /de/die-suche-nach-owncloud-alternativen-fur-die-private-cloud/
categories:
- Artikel
tags:
- AeroFS
- Alternativen
- BitTorrent
- Cloud
- GoodSync
- ownCloud
- Seafile
- SparkleShare
- Sync
---

{{< alert type="info" >}}
Es ist ein neuer Beitrag zu den Alternativen für OwnCloud verfügbar:
[Private Cloud: OwnCloud Alternativen Teil 2]({{< ref path="/2013/owncloud-alternativen-2/index.md" lang="de" >}})
{{</ alert >}}


Ob Dropbox, SugarSync, Microsoft SkyDrive oder Google Drive - es gibt unzählige Anbieter für Cloudspeicher. Oftmals werden rudimentäre Funktionen wie das einfache Kopieren der Daten auf  die Cloudspeicher noch durch Sharing oder beispielsweise Bearbeitungsfunktionen erweitert. Wer jedoch nicht auf den Serverstandort USA steht oder einfach kein Vertrauen in fremde Dienste hat kann auch auf die private Cloud zurückgreifen. Bekanntester Vertreter ist [ownCloud](http://owncloud.org/). Da ownCloud bei mir nie ohne Probleme funktioniert hat, habe ich mich nach einer Alternative umgesehen.


## Probleme mit ownCloud

Die Installation von ownCloud gestaltet sich genau so unproblematisch wie z.B. die von Wordpress. Man gibt die Zugangsdaten für die MySQL Datenbank und das Administratorkonto an und los geht es. Zum Sync stehen entsprechende Clients bereit, die auch gleich mit der Arbeit beginnen sobald Ordner und zugehöriger Speicherplatz auf dem Webserver konfiguriert worden sind. Alles recht unproblematisch, alles lief auch eine ganze Zeit wirklich prima.


### Konfliktdateien

Die ersten Probleme bestanden darin, dass ownCloud Kopien von Dateien anlegte, da diese angeblich in Konflikt mit der auf dem Server gespeicherten Version standen - obwohl sie seit Wochen nicht geändert wurde. Den Grund für dieses Verhalten konnte ich nicht rausfinden, denn diese Dateien waren absolut identisch. Weder Inhalt noch Dateiinformationen waren unterschiedlich. Unglücklicherweise bemerkte ich das Problem mit ownCloud erst recht spät, was in einem Ordner zu über 20 Versionen dieser angeblichen Konfliktdatei führte. Dass das Ausmisten seine Zeit gedauert hat und ich entsprechend sauer war, ist wahrscheinlich nachvollziehbar.


### Update? No way!

Da ownCloud sehr aktiv weiterentwickelt wird, lassen Updates nicht lange auf sich warten. Insgesamt habe ich mir 4 ownCloud Updates zugemutet. Weshalb auch immer schlug das 3. Update komplett fehlt, zerschoss mir meine komplette Installation und ich verbrachte erst zwei Stunden damit, den Fehler wieder rückgängig zu machen - wie zu erwarten war ohne Erfolg - und danach wieder 2 Stunden damit, eine neue Installation aufzusetzen und die Daten wieder zu kopieren.
Update Nummer 4 zerschoss mir zwar nicht meine Installation, schlug aber aufgrund eines Fehler fehl. Die Reparatur dauerte gut eine Stunde.
Für eine angeblich so gute und stabile Cloud Lösung keine sonderlich gute Bilanz.


### Upgrade auf neue Version? Denkste!

Während des 4. Update habe ich mich im Git Repository erkundigt, um den Fehler beheben zu können. Während mir etwas später eine Lösung angeboten wurde, riet mir ein User, doch auf die Version 5 umzuspringen, diese laufe ohne Probleme bei ihm. Version 5? Oh, da gibt es was neues?
Okay, laden wir das ganze mal runter und install… Nope. "Installier dir das mal, das ist ganz einfach." Ah ja, ganz einfach. Wenn der Webserver auf Ubuntu 10.04 LTS läuft, kann man leider nicht mal eben auf eine neuere PHP Version updaten, die für ownCloud 5 dringend benötigt wird.
Somit fiel aufgrund der Inkompatibilität mit einer nach wie vor aktuellen Webserver Version  auch die Installation von ownCloud 5 ins Wasser. Schade.


## Die Suche nach einer ownCloud Alternative

Nach diesem ganzen Ärger mit ownCloud habe ich die ach so tolle Lösung vom Server geputzt und mich auf die Suche nach einer Alternative gemacht. Doch wer jetzt denkt, dass es ja unzählige weitere Lösungen geben müsste, ist genau wie ich auf dem Holzweg. Der OpenSource Markt für private Cloud Lösungen beschränkt sich auf eine Viertel Hand voll. Neben ownCloud versuchen sich [SparkleShare](http://sparkleshare.org/) und [Seafile](http://seafile.com/en/home/) zu behaupten, [Syncany](http://www.syncany.org/) wird im Moment entwickelt und hat noch nicht ein mal die Alpha Phase erreicht. Alle anderen Lösungen entsprechen nicht meinen Vorstellungen oder werden seit Jahrzehnten nicht mehr weiterentwickelt. Die einzig interessante _kostenfreie_ Lösung schien mir Seafile zu sein. Wie ownCloud lässt sich Seafile auf dem Webserver installieren und Daten mit Clients für Mac, Windows, Linux, iPad / iPhone und Android abgleichen. Soweit so gut. Leider war es mir nicht möglich, einen Seafile Server auf meinem Webserver unter Ubuntu 12.04 LTS mit Plesk zum Laufen zu bekommen, es scheiterte bereits bei der automatisieren Installation, die wegen Problemen abgebrochen wurde. Schade, denn Ubuntu Systeme sind sehr weit verbreitet und ich glaube kaum, dass Plesk etwas mit den Problemen zu tun hat. Zwar habe ich bereits einen Vorschlag von den Entwicklern erhalten, mit dem ich den Fehler in der Seafile Installation herausfinden kann, Lust auf die Problemlösung hatte ich jetzt aber keine mehr. Denn die Zeit rennt, ich brauche eine funktionierende Lösung.


## Andere Alternativen für ownCloud

Die Suche ging in anderer Richtung weiter. Da ich meine Dateien lediglich auf meinem MacBook und meinem Windows Rechner synchron halten und zusätzlich ein Backup auf dem Webserver haben möchte, habe ich mich nach entsprechenden Clients umgesehen. [GoodSync](http://www.goodsync.com/de/) funktioniert sehr gut, läuft flüssig, ist jedoch kompliziert zu bedienen und die Automation zur Nutzung als Cloud Alternative gestaltet sich ziemlich schwierig. Die Anfrage zur Beta-Einladung für [AeroFS](https://www.aerofs.com/) habe ich bereits vor einem halben Jahr gestellt. Gut, dass ich vor keinem Monat dann die Einladung erhalten habe. Hab das ganze dann mal ausprobiert und siehe da: es funktioniert. Leider aber nur flüssig bei kleineren Dateimengen. Die Synchronisation meiner Ordner mit mehreren tausend Dateien und einer Gesamtgröße von knapp 500 MB dauerte knapp über 3 Stunden.
Kurz vor dem Verzweifeln kam dann die quasi-Rettung: [BitTorrent Sync](http://labs.bittorrent.com/experiments/sync.html). <del>Eine derzeit in der Beta befindliche Sync App auf Basis der BitTorrent  P2P Technologie. also fix angemeldet und glücklicherweise habe ich gestern dann die Einladung bekommen.</del> Die App wurde bereits veröffentlicht und ist frei zugänglich. Wie es jetzt mit BitTorrent Sync gelaufen ist, könnt ihr in [diesem Beitrag]({{< ref path="/2013/various/2013-04-24-bittorrent-sync.md" lang="de" >}}) nachlesen.
