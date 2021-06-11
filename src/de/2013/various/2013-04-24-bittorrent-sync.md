---
author: Kevin Woblick
date: 2013-04-24 14:59:39+00:00
description: Du möchtest Bittorrent Sync für die Dateisynchonisation nutzen? Hier erfährst du, wie du Bittorrent Sync entsprechend einrichtest.
draft: false
title: BitTorrent Sync
type: post
url: /de/bittorrent-sync/
hascode: true
categories:
- Tutorial
tags:
- BitTorrent
- BitTorrent Sync
- Cloud
- Sync
- Tutorial
---

{{< alert type="warning" >}}
Diese Anweisungen gelten für Bittorent Sync in Version 1.4 und könnten nicht mehr für Version 2 funktionieren.
{{</ alert >}}


Wie bereits im [vorherigen Post]({{< relref path="/2013/various/2013-04-24-owncloud-alternativen-fur-private-cloud.md" lang="de" >}}) erwähnt, habe ich eine Lösung für die Synchronisierung mehrerer Rechner und meinem Webserver gesucht und bin dabei auf BitTorrent Sync gestoßen. [BitTorrent Sync](http://labs.bittorrent.com/experiments/sync.html) ist ein Synchronisations Dienst, der die P2P Technologie von BitTorrent nutzt, um Dateien auf mehreren Rechnern abzugleichen. Die Technik passt, Zusatzfunktionen brauche ich eh nicht. Von daher habe ich BitTorrent Sync jetzt einfach ausprobiert und es funktioniert wirklich super.
Auf meinem MacBook Pro (Mountain Lion 10.8.3) sowie meinem Windows Rechner (Windows 7, 64Bit) waren die Clients innerhalb von Minuten installiert und eingerichtet. Hierbei Definiert man erst auf einem Rechner (ich habe mein MacBook genommen) einen Ordner, der Synchronisiert werden soll. Man erhält dazu eine Secret, mit dem man beide Rechner verbinden kann. Auf dem Windows Rechner habe ich dann das Secret angegeben, den Ordner, der synchronisiert werden soll und schon startet die Übertragung. Es wird die volle Bandbreite genutzt, weshalb die Übertragung nur wenige Minuten gedauert hat. Funktioniert hat auch das Ändern von daten ohne Probleme. Gelöschte Daten waren nur wenige Augenblicke später auch auf dem anderen Rechner weg. Änderungen an Daten beziehungsweise neue waren ebenfalls kurze Zeit später auf dem anderen Gerät. Es funktioniert super.

**Edit:** BitTorrent Sync soll demnächst auch für iOS und Android erscheinen.


## Installation von BitTorrent Sync auf Ubuntu

Lädt man sich nun den Client, der lediglich aus der Datei btsync besteht, für Linux herunter (Achtung, auf 86 und 64 Bit achten!), kann man schon fast loslegen. Mir war jedoch wichtig, dass der Client automatisch startet, wenn der Server neu gestartet werden muss und das er entsprechend konfiguriert ist. Wie man das hinbekommt erkläre ich im Folgenden.


### Schritt 1 - BitTorrent Sync entpacken und konfigurieren

Der Installationsort des Clients kann frei gewählt werden. Ich habe das für Anwendungen gedachte _/opt_ Verzeichnis genommen und dort einen Ordner Namens _sync_ erstellt (`cd /opt` und danach `mkdir sync`). Danach kopiert man sich von der Download Webseite den Link für das entsprechende System (in der Regel Linux i386 oder x64) und lädt diese auf den Webserver in das /opt/sync Verzeichnis. Alternativ kann man auch `wget http://btsync.s3-website-us-east-1.amazonaws.com/btsync_i386.tar.gz` (für die i386 Version) nutzen.
Ist das geschehen, entpackt man das Paket mittels tar -xvfz _btsync_i386.tar.gz_ wobei man den letzten Teil durch den tatsächlichen Dateinamen des Paketes ersetzt. Nun sollte man im Ordner die Datei btsync haben. Grundsätzlich kann man jetzt sofort loslegen, wir kümmern uns jetzt jedoch erst um die Konfiguration. Entweder man nutzt den Befehl `./btsync --dump-sample-config > sync.conf` oder erstellt die Datei sync.conf mittels des normalen Editors (z.B. nano). Dort gehört folgender Code hinein:

```shell
{
"device_name": "Sync Client Name",
"listening_port" : 0, // 0 - randomize port
/* storage_path dir contains auxilliary app files
if no storage_path field: .sync dir created in the directory
where binary is located.
otherwise user-defined directory will be used
*/
"storage_path" : "/opt/sync/data",
// uncomment next line if you want to set location of pid file
// "pid_file" : "/var/run/syncapp/syncapp.pid",
"check_for_updates" : true,
"use_upnp" : true, // use UPnP for port mapping
/* limits in kB/s
0 - no limit
*/
"download_limit" : 0,
"upload_limit" : 0,
/* remove "listen" field to disable WebUI
remove "login" and "password" fields to disable credentials check
*/
"webui" :
{
"listen" : "#your_ip#:8888",
"login" : "admin",
"password" : "password"
}
/* !!! if you set shared folders in config file WebUI will be DISABLED !!!
shared directories specified in config file
override the folders previously added from WebUI.
*/
/*
,
"shared_folders" :
[
{
// use --generate-secret in command line to create new secret
"secret" : "MY_SECRET_1", // * required field
"dir" : "/home/user/bittorrent/sync_test", // * required field
"dir" : "/home/user/bittorrent/sync_test", // * required field
// use relay server when direct connection fails
"use_relay_server" : true,
"use_tracker" : true,
"use_dht" : false,
"search_lan" : true,
// enable sync trash to store files deleted on remote devices
"use_sync_trash" : true,
// specify hosts to attempt connection without additional search
"known_hosts" :
[
"192.168.1.2:44444",
"myhost.com:6881"
]
}
]
*/
// Advanced preferences can be added to config file.
// Info is available in BitTorrent Sync User Guide.
}
```

Folgende Variablen sollten angepasst werden:
_device_name_ - Tragt den Name des Clients ein, z.B. 'BTSync Webserver'
_listen_ - Hier sollte die IP beziehungsweise der Hostname angegeben werden, unter der der Server läuft. Unter der Angebe kann man später auf das Administrations-GUI zugreifen.


### Schritt 2 - BitTorrent Sync automatisch starten lassen

Um BitTorrent Sync als Service zu registrieren und automatisch starten zu lassen, müssen wir folgende Schritte durchführen.
Man erstellt unter dem Verzeichnis /etc/init.d eine Datei mit dem Namen btsync und packt den folgenden Code hinein.

```bash
#!/bin/bash
# BitTorrent Sync Startup Script
# USAGE: start|stop|status
#
case "$1" in
start)
echo "Starting BitTorrent Sync Service..."
/opt/sync/btsync --config /opt/sync/sync.conf
;;
stop)
echo "Stopping BitTorrent Sync Service..."
pkill btsync
;;
status)
ps aux|grep -i btsync
;;
*)
echo “BitTorrent Sync Service”
echo $”Usage: $0 {start|stop|status}”
exit 1
esac
exit 0
```

Achtung, hier natürlich den Pfad ändern, sofern man einen anderen nutzt als ich hier nutze. Wichtig ist zudem, dass ihr der btsync Datei unter _/etc/init.d_ entsprechende Rechte mittels `chmod +x btsync` verpasst, da der Service sonst nicht erkannt und gestartet werden kann.
Wir implementieren hiermit btsync als Dienst und können ihn
- mit `service btsync start` starten wir den BitTorrent Sync Service,
- mit `service btsync stop` stoppen wir den BitTorrent Sync Service und
- mit `service btsync status` fragen wirt ab, ob der Service läuft.
Haben wir dies geschafft, sollte man alle Befehle auf einwandfreie Funktion testen. btsync starten, stoppen und den Status abrufen.
Wenn alles läuft können wir den Service automatisch beim Booten des Servers starten lassen. Hierzu ist folgender Befehl notwendig:
`update-rc.d btsync defaults`
Das wäre damit geschafft.


### Schritt 3 - BitTorrent Sync starten und nutzen

Sind die ersten beiden Schritte erledigt, können wir unseren btsync Service starten und nutzen. Hierzu den oben aufgeführten Befehl nutzen. Danach kann man über die in der sync.conf angegebene Adresse (IP oder Hostname unter _listen_) mit einem angehängten /gui/ die Administrationsoberfläche aufrufen und konfigurieren.
