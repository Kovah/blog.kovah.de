---
author: Kovah
date: 2012-11-02 07:23:30+00:00
description: Ein Artikel über den Umzug von einem Virtual Server zu einem Root Server und die technischen Hintergründe dazu.
draft: false
title: Umstellung von Virtual Server auf Root Server
type: post
url: /de/umstellung-von-virtual-server-auf-root-server/
categories:
- News
tags:
- Backup
- Host Europe
- Jira
- MySQL Dumper
- Root Server
- scp
- Server
- Ubuntu
- Virtual Server
---

Ich habe mich nun vor einigen Wochen dazu entschlossen, meinen Server zu upgraden, da dem kleinen Virtual Server definitiv die Leistung für meine Projekte fehlt. Zudem laufen Webanwendungen wie [Jira](http://www.atlassian.com/software/jira/overview/) oder Teamspeak gar nicht oder eher schlecht als recht. Entschieden hab ich mich nach Abwägung meiner Bedürfnisse sowie der finanziellen Aspekte für einen Root Server. Da ich seit langen Jahren Kunde bei Host Europe bin, bleibe ich es auch diesmal und habe mich für den "Root Server Professional M" entschieden.


## Der Serverwechsel

Um ehrlich zu sein habe ich mir lange umsonst die Finger wund gesucht. Ich war auf der Suche nach einer Möglichkeit, die Dateien direkt zwischen den beiden Servern zu übertragen. Anfangs wurde von FXP als Alternative zu FTP gesprochen, das ganze hat aber ums Verrecken einfach nicht hingehauen. Dann kam rsync ins Gespräch, durch das ich dann endlich beim richtigen Tool gelandet bin: scp. Die Dokumentation im Ubuntu Wiki fällt recht enttäuschend aus, ich konnte mir jedoch durch diverse andere Seiten den Syntax erklären und ausprobieren. Und siehe da: knapp 2500 Dateien mit einer Gesamtgröße von knapp 150 MB wurden in knapp 10 Sekunden übertragen. Über meinen Rechner wäre ich in 30 Minuten nicht fertig gewesen. So kann man seine Zeit wesentlich effizienter nutzen.


### Kurze Erklärung zu scp

scp ist nicht anderes als das cp, das man auf Linux Distributionen kennt. Allerdings ist es verschlüsselt und ermöglicht die Übertragung von oder auf andere(n) Server(n). Ist man per SSH auf dem Zielserver eingeloggt, lädt man sich einfach alles vom Quellserver runter. Folgender Befehlt ist einem hierbei behilflich:

`scp -rp user@ip-adress:quellverzeichnis/* zielverzeichnis`

Hierbei leitet _scp_ den Befehl ein, die Option _-rp_ lässt scp die Inhalte rekursiv übertragen und - sofern möglich - die Timestamps und Berechtigungen kopieren. Danach folgt die Quelle, hierbei wird als erstes eine "SSH Verbindung" zum Quellserver hergestellt und das Quellverzeichnis angegeben. Das abschließende _/*_ wird angehangen, damit nicht einfach der Ordner sondern dessen Inhalt kopiert wird. Abschließend folgt das Zielverzeichnis.


### Datenbanken verschieben leicht gemacht

Die Datenbanken zu kopieren ist aufgrund eines tollen Hilfsmittels kein Problem. Ich nutze seit langem [MySQLDumper](http://www.mysqldumper.de/) zum Sichern und Wiederherstellen der Datenbanken. Das auf dem Webserver laufende Programm speichert die extrahierten Datenbanken als komprimierte Archive. Diese habe ich via wget vom alten Server in das Backup-Verzeichnis des neuen kopiert. MySQLDumper erkennt die Dateien automatisch und ich kann per Klick die Datenbank wiederherstellen. Alles in allem ein Aufwand von 1-2 Minuten inklusive Wartezeit zum Exportieren und Wiederherstellen.
