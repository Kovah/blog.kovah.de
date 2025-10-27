---
author: Kevin Woblick
date: 2013-11-21 15:36:50+00:00
description: Eine umfangreiche Zusammenfassung von Alternativen für OwnCloud für die private Cloud und Dateisynchronisation
draft: false
title: 'Private Cloud: OwnCloud Alternativen Teil 2'
type: post
url: /de/private-cloud-owncloud-alternativen-teil-2/
categories:
- Artikel
tags:
- AeroFS
- Alternativen
- Baikal
- BitTorrent Sync
- Cloud
- GoodSync
- Nextcloud
- ownCloud
- Pydio
- Seafile
- Server
- SparkleShare
- Syncthing
- Synology Diskstation
---

{{< alert type="info" >}}
Letztes Update: 21.07.2016, Nextcloud und Synchthing hinzugefügt
{{</ alert >}}


Vor einiger Zeit habe ich in einem Beitrag meine [Probleme mit ownCloud]({{< relref path="/2013/various/2013-04-24-owncloud-alternativen-fur-private-cloud.md" lang="de" >}}) geschildert und Alternativen genannt. In diesem Beitrag möchte ich jetzt nochmals genauer auf die Alternativen für ownCloud eingehen und meinen vorherigen Beitrag ergänzen. Die Probleme mit ownCloud und einige interessante Beiträge sind im alten Beitrag zu finden.

Wer nicht viel lesen möchte findet am Ende des Beitrags eine Übersicht.


## ownCloud Alternativen: Die Mitbewerber

### Umfangreiche Lösungen

Kommen wir erst zu Lösungen, die durchaus mit dem Funktionsumfang von ownCloud mithalten können beziehungsweise an der ein oder anderen Stelle einiges besser machen.


#### Nextcloud

{{< image img="nextcloudlogo_white_big-1024x440.png" alt="Nextcloud Logo" modifier="left">}}

Nextcloud ist ownCloud, nur besser. Einige Entwickler von ownCloud haben sich vom Projekt getrennt und wollen nun ihre eigene Version weiter entwickeln. Entstanden ist das Nextcloud Projekt, das bereits mit der ersten stabilen Version an den Start gegangen ist. Ich bin bereits auf Nextcloud umgestiegen, die Migration von ownCloud ist kinderleicht und ich hoffe, dass die Knackpunkte von Owncloud endlich ausgemerzt werden. Was Nextcloud nun besser machen will? Laut Entwickler will man sich nun wieder mehr um die Community kümmern und auf deren Wünsche eingehen. Ich habe dazu bereits [einen kleinen Beitrag]({{< relref path="/2016/owncloud-alternative-nextcloud/index.md" lang="de" >}}) geschrieben.
Wer also eine Alternative zu ownCloud sucht, sollte als aller erstes Nextcloud ausprobieren.

Webseite: [nextcloud.com](https://nextcloud.com/)


#### Seafile

{{< image img="131185.png" alt="Seafile Logo" modifier="right">}}

Seafile ist die wohl beste Alternative zu ownCloud. Das System lässt sich verhältnismäßig einfach installieren und bietet genug Grundfunktionen, um es mit ownCloud aufzunehmen. Seafile ist jedoch eher auf Filesharing und Collaboration spezialisiert und stellt sich nicht wie ownCloud als All-in-One Lösung für die Cloud dar. Einen Cal- oder CardDAV Sync findet man beispielsweise nicht, dafür warten besonders viele und gut augebaute Funktionen rund um Dateieverwaltung und Zusammenarbeit auf den Nutzer: Messaging, Kommentare und Dateiversionierung machen Seafile zu einem starken Tool für Arbeitsgruppen beziehungsweise kleine Teams. Im privaten Einsatz hat Seafile bei mir durch Zuverlässigkeit und eine guten Synchronisation gepunktet. Das System bietet Clients für Windows, Mac und Linux sowie für Android und iOS an. Die Server selber laufen unter Windows, Linux oder Raspberry Pi.

Webseite: [seafile.com](http://seafile.com/en/home/)


### SparkleShare

{{< image img="131189.png" alt="Sparkleshare Logo" modifier="left">}}

Das System für alle Linux-Systemadministratoren. Schenkt man den Kommentaren und Rezensionen von SparkleShare Glauben so ist diese Alternative für ownCloud nur erfahrenen Nutzern zu empfehlen. Zudem ist diese Lösung nur eingeschränkt für die Synchronisation geeignet. Musikbibliotheken, der Bilderordner oder gleich ganze Stammordner sollten besser mit einer anderen Software gesichert beziehungsweise synchronisiert werden. Nutzer, die auf Cal- oder CardDAV angewiesen sind sollten sich ebenfalls eine andere Lösung suchen. Wer sich den Umgang mit SparkleShare zutraut und zudem Ahnung von Git hat, für den kann diese Alternative eine echte Bereicherung sein.

Webseite: [sparkleshare.org](http://sparkleshare.org/)


#### Pydio

{{< image img="131180.png" alt="Pydio" modifier="right">}}

Pydio (ehemals Ajaxplorer) tanzt in dieser Auflistung ein wenig aus der Reihe, da das System sich gänzlich dem Thema Filesharing verschrieben hat. Das heißt, dass die Dropbox-ähnliche Dateisynchronisation, Cal- oder CardDav und weitere Features von ownCloud fehlen. Das Tool eignet sich eher wenn man Dateien wie bei Filehostern wie Rapidshare.com oder Uploaded.to verteilen will. Das hat im Test außerordentlich gut geklappt, mir hat jedoch die Benutzerführung und die Struktur des Tools weniger gut gefallen. Ich rate daher jedem vorher die Demo zu testen die auf der Webseite zur Verfügung steht.
Ein Client für Windows, Mac und Linux steht in einer Beta-Ausführung zur Verfügung, für Android und iOS gibt es bereits funktionierende Clients.

Webseite: [http://pyd.io](http://pyd.io/)


#### Limbomedia

{{< image img="131192.png" alt="Limbomedia" modifier="left">}}

Wer sich Limbomedia ansehen möchte sollte folgendes wissen: es ist ein solides, interessantes System mit vielen genialen Funktionen, das jedoch an der eigentlichen Idee hinter ownCloud - der Dateisynchronisation - vorbeischießt. Limbomedia versteht sich eher als Homeserver, der es ermöglicht von diversen Clients auf die eigenen Dateien zugreifen zu können. Die Dateien muss man jedoch selber hochladen beziehungsweise seinen Windows Rechner Tag und Nacht laufen lassen. Ich finde die Idee hinter dem System absolut toll, kann mir aber keinen Anwendungsfall vorstellen in dem der Einsatz wirklich sinnvoll oder besser wäre als bei einem anderen System. Wer sich das System noch mal genauer ansehen möchte kann dies auf der [Demo Installation](http://limbomedia.net/livedemo/#/home) machen.

Webseite: [limbomedia.net](http://limbomedia.net/)


#### Syncthing

{{< image img="syncthing-logo-256.png" alt="Syncthing" modifier="right">}}

Synchthing habe ich bereits vor einiger Zeit ausprobiert, da mit die App von einigen Personen empfehlen wurde. Leider bin ich nicht weit gekommen. Die Software konnte nicht auf meinem Ubuntu Server installiert werden. Das Paket für meine Diskstation ließ sich zwar installieren, eine Synchronisation war jedoch nicht möglich, da laut Fehlerbericht keine Verbindung zu meinen anderen Geräten hergestellt werden konnte. Ich habe zwar versucht, diese Fehler zu beheben, bin aufgrund mangelhafter Dokumentation und Support aber gescheitert.
Die Installation allgemein ist auch eher für versierte Nutzer gedacht und keineswegs mit dem einfachen Setup von ownCloud vergleichbar. Ich rate Interessierten, Syncthing selber zu testen und zu hoffen, dass die Software dann funktioniert.

Webseite: [syncthing.net](https://syncthing.net/)


#### Syncany

{{< image img="syncany-logo.png" alt="Syncany" modifier="left">}}

Syncany habe ich nur zur Vervollständigung mit aufgeführt. Syncany steht im Moment als Alpha-Version zum Testen zur Verfügung. Es basiert grundlegend auf Sparkleshare. Sollte eine Alpha- oder Betaversion zur Verfügung stehen wird dies entsprechend nachgetragen.

Webseite: [www.syncany.org](http://www.syncany.org/)

---

### Weitere ownCloud Alternativen mit File Sync

Wer hauptsächlich an einer Synchronisation von Dateien über mehrere Systeme hinweg interessiert ist sollte sich die folgenden Alternativen für ownCloud ansehen.


#### Resilio, ehemals BitTorrent Sync

{{< image img="resilio-logo-copy.jpg" alt="Resilio Logo" modifier="right">}}

Resilio war eine ganze Zeit lang mein Favorit unter den ownCloud Alternativen. Allerdings ist es nur für Nutzer interessant, die speziell die Dateisynchronisation benötigen und kein CalDAV, Galerien oder ähnliches. Resilio macht sich die Peer-to-Peer Technologie des weltbekannten BitTorrent Clients zu Nutze. Der User kann so eine dezentrale Sharing und Synchronisations-Maschinerie aufbauen. Die Clients laufen auf Windows, Mac, Linux und Android und alle können unabhängig von einem Master-Server miteinander vernetzt werden. So kann man beispielsweise seine Dokumente auf Windows und Mac synchron halten während das Android Handy ein Backup auf dem hauseigenen NAS Server macht. Hier sieht man wieder ein mal, dass Einfachheit siegen kann. Von mir eine klare Empfehlung was Dateisynchronisation angeht.

Webseite: [getsync.com](https://getsync.com/)


#### AeroFS

{{< image img="131197.png" alt="AeroFS" modifier="left">}}

Nach langer Wartezeit habe ich bereits vor über einem halben Jahr die Einladung zur Beta von AeroFS erhalten, inzwischen ist es für jeden zugänglich. Diese Alternative zu ownCloud ähnelt BitTorrent Sync sehr stark, basiert aber auf einer anderen Technologie und arbeitet auch anders. In meinen Test hat sich herausgestellt, dass die Synchronisation wirklich gut und stabil läuft, aber bei vielen Dateien beziehungsweise großen Datenmengen sehr langsam. BitTorrent Sync arbeitet hier schneller.

Webseite: [aerofs.com](https://aerofs.com/)


#### Goodsync

{{< image img="131200.gif" alt="Goodsync" modifier="right" >}}

GoodSync sollte jeder technikinteressierte schon irgendwo mal gehört haben. Diese ownCloud Alternative ist die wohl bekannteste und am weitesten verbreitete Lösung zur Synchronisation von Daten. Ich habe es auch eine Zeit lang zu testzwecken laufen gehabt und war recht zufrieden. Der Nachteil ist aber die Einrichtung und Konfiguration, die selbst mir als Technikfreak und von der Familie getauften Computerexperten nicht so leicht von der Hand ging. Dafür bietet GoodSync jedoch haufenweise Möglichkeiten, die Synchronisation zu steuern und bis auf die Dateiebene nach eigenen Wünschen zu gestalten. Wer bereit ist, für seine Lösung Geld auszugeben hat Zugriff auf eine stattliche Software, die für Windows, Mac, Linux, Android und iOS verfügbar ist.

Webseite: [www.goodsync.com](http://www.goodsync.com/de/)


### CalDAV und CardDAV Alternativen

#### Baikal

Für einige Nutzer ist ownCloud gar nicht unbedingt als persönliche Cloud für Dateien interessant, sondern beispielsweise als Cal- oder CardDAV Server. Da die oben genannten Lösungen diese Funktionalität leider so nicht mitbringen kann man aber hier zur Open Source Angel greifen und Baikal an Land ziehen. Die Software läuft auf Linux Servern mit PHP 5.3 und SQLite / MySQL. die Daten werden so zur Verfügung gestellt, dass diverse Clients wie Thunderbird, Android, iOS uvm. diese abrufen und speichern können. Baikal habe ich bereits selber getestet und das Zusammenspiel mit meinen Geräten hat tadellos funktioniert. Die Einrichtung und Konfiguration ist zwar gewöhnungsbedürftig, aber man durchaus zu bewältigen.

Webseite: [baikal-server.com](http://baikal-server.com/)

---

## Übersicht über alle ownCloud Alternativen

{{< table >}}

| Name | Kurze Beschreibung | Clients | Webseite |
| ---- | ------------------ | ------- | -------- |
| Nextcloud | beste Alternative zu ownCloud, da verbesserte Version, wird aktiv entwickelt | Win, Mac, Linux, iOS, Android | [nextcloud.com](https://nextcloud.com/) |
| Seafile | eine der besten Alternativen, stabil, leistungsstark und mit Features zur Zusammenarbeit im Team | Win, Mac, Linux, Android | [seafile.com](http://seafile.com/en/home/) |
| SparkleShare | leistungsstarke Software für kleine Dateimengen, eher für versierte Anwender geeignet | Win, Mac, Linux | [sparkleshare.org](http://sparkleshare.org/) |
| Pydio | stabile Software, jedoch eher zum Einsatz als Filehoster geeignet | Linux, Android, iOS, Win & Mac (Beta) | [http://pyd.io](http://pyd.io/) |
| Limbomedia | Webinterface mit vielen Features, u.a. auch Dateiverwaltung, allerdings kein Sync möglich | Linux, Android | [limbomedia.net](http://limbomedia.net/) |
| Syncthing | aus meiner sicht zu kompliziert einzurichten, lief im Test kein einziges Mal aufgrund diverser Fehler | Linux, Mac, Windows, Android | [syncthing.net](https://syncthing.net/) |
| Syncany | basierend aus Sparkleshare, leider noch in der Entwicklung | Linux, Mac, Windows | [www.syncany.org](http://www.syncany.org/) |
| Resilio, ehemals BitTorrent Sync | beste Alternative für ownCloud wenn es um Dateisynchronisierung geht | Windows, Mac, Linux, Android | [www.getsync.com](https://getsync.com/) |
| AeroFS | Ähnelt BitTorrent Sync, jedoch langsam bei großen Dateimengen | Windows, Mac, Linux, Android, iOS | [aerofs.com](https://aerofs.com/) |
| GoodSync | Leistungsstarke Software mit vielen Funktionen, jedoch kostenpflichtig | Windows, Mac, Linux, Android, iOS | [www.goodsync.com](http://www.goodsync.com/de/) |
| Baikal | Server für Cal- und CardDAV Synchronisation | Server: Linux, Clients: Mac, Android, iOS, Windows, Linux | [baikal-server.com](http://baikal-server.com/) |

{{< / table >}}


## Meine Empfehlung für eine ownCloud Alternative

Auch wenn ich persönlich im Moment die Synchronisation über mein Synology Diskstation NAS laufen lasse kann ich durch persönliche Erfahrungen und Tests zumindest eine kleine Empfehlung anbieten, alternativ sollte man Nextcloud oder Seafile testen. Für die Dateisynchronisation macht Resilio am meisten Sinn, wenn man keine umfangreichen Funktionen benötigt. Sollen bestimmte Dateien oder Ordner gleichmäßig auf dem Windows Rechner, dem Mac und dem NAS landen bietet BitTorrent hier die am schnellsten und stabilsten arbeitende Lösung. Wer zusätzlich Cal- und CardDAV Synchronisation benötigt sollte definitiv einen Blick auf Baikal werfen.
