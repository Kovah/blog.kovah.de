---
author: Kovah
date: 2013-06-26 18:40:44+00:00
description: Du möchtest Dropbox den Rücken kehren? Hier erfährst du, wie du zu Copy.com
  wechseln kannst.
draft: false
title: Von Dropbox auf Copy umsteigen - So geht's!
type: post
url: /de/von-dropbox-auf-copy-umsteigen-so-gehts/
categories:
- Tutorial
tags:
- Cloud
- Copy
- Dropbox
- Storage
---

Ich habe vor einigen Tagen bereits [über Copy berichtet](https://blog.kovah.de/copy-dropbox-alternative-mit-massig-speicher): eine neue Alternative zu Dropbox, allerdings diesmal mit ordentlich Speicher. Zum Start gibt's satte 15GB (bei Dropbox 2GB), wer [diesen Link](https://copy.com?r=jZ0vWa) nutzt profitiert von 5GB mehr und startet mit 20GB. Bei größerem Funktionsumfang und mehr Speicher gibt es lediglich einen Grund, nicht umzusteigen: Copy gibt es (noch) nicht in Deutsch. Da ich des Englischen aber mächtig bin stört mich das keineswegs und deshalb steige ich nun von Dropbox auf Copy um.


## Mit Symlinks von Dropbox zu Copy

Die Lösung für das Problem sind Symlinks. Wem das nichts sagt: im System sind für Dateien oder Ordner Verknüpfungen hinterlegt, die von Programmen als einfache Dateien bzw. Ordner interpretiert werden. Symlinks kann man also dazu nutzen um Ordner außerhalb des Dropbox Ordners in ihn zu "verschieben". So können wir im Dropbox Ordner also einen Symlink auf z.B. den Dokumente Ordner erstellen. Der Dokumente Ordner bleibt nach wie vor da wo er ist, Dropbox registriert ihn aber als normalen Ordner und lädt ihn hoch. Vorteil ist a) dass die Ordner immer am gleichen Platz bleiben und b) die Daten nicht doppelt auf der Festplatte liegen (im eigentlichen Ordner _und_ im Dropbox Ordner).


### Problem: Integration von Dropbox in Programme

Das große Problem beim Wechsel von Dropbox zu Copy besteht in der Integration von Dropbox in diversen Programmen. Angefangen bei 1Password oder YNAB geht es weiter über diverse andere Tools, die ihre Daten mittels Dropbox auf allen Plattformen synchron halten wollen. Bei z.B. 1Password ist es kein Problem, wenn Dropbox komplett deinstalliert wurde, da man nach wie vor die Datendateien ablegen und synchronisieren lassen kann.


### Lösung: Die Synchronisation kappen

Wer jedoch das Pech hat, dass die Programmentwickler eine installierte und laufende Dropbox voraussetzen, der muss mit einem Trick arbeiten. Da man leider Dropbox nicht sagen kann, dass nur selektierte Ordner übertragen werden sollen und Dropbox abgewählte automatisch löscht, sollte man alles so belassen wie es ist. Damit Dropbox dann nicht einfach die Daten im verlinkten Ordner hochlädt, lassen wir Dropbox über einen Proxy laufen, den es nicht gibt. Hierzu geht ihr in den Einstellungen auf _Netzwerk_ und dort auf _Proxys_. Dort lediglich auf _Manuell_ stellen und als Server _127.0.0.1_ - also euren eigenen Rechner - eintragen. Die Verbindung zwischen Dropbox und Servern wird damit dauerhaft blockiert. Vorsorglich noch die Desktop-Benachrichtigungen deaktivieren, damit Dropbox nicht meckern kann.


## Anleitung zum Umstieg von Dropbox auf Copy

Also legen wir los. Voraussetzung ist natürlich, dass sowohl Dropbox als auch Copy installiert sind. Ich gehe hier davon aus, dass sowohl der Dropbox als auch Copy Ordner im Hauptverzeichnis liegen. Im Copy Ordner habe ich einen separaten Ordner namens _Dropbox_ angelegt, in dem alle Dropbox Daten landen sollen. Bevor es dann los geht mit dem Kopieren legt sicherheitshalber eine Kopie des Dropbox Ordners an.


### Anleitung für Mac

1. Kopiert den Inhalt des Dropbox Ordners in den entsprechenden Ordner im Copy Verzeichnis und löscht den ursprünglichen Dropbox Ordner.
2. Wir wollen im Hauptverzeichnis des Benutzers (bei mir _/Users/kovah/_) eine Verknüpfung zum Dropbox Ordner im Copy Verzeichnis (bei mir _/Users/kovah/Copy/_) erstellen.
3. Öffnet hierzu das Terminal (zu finden unter den Dienstprogrammen). Ihr solltet euch direkt in eurem Hauptverzeichnis befinden. Mit dem Befehl `ls` kann der Ordnerinhalt angezeigt werden. Stimmt das Verzeichnis dann geht es weiter.
4. Nutzt nun folgenden Befehl, um die Verknüpfung zu erstellen:
`ln -s Dropbox Copy/Dropbox`Der erste Teil ist die Quelle der Verknüpfung, hier der Dropbox Ordner. Teil zwei der Ort, an dem die Verknüpfung erstellt werden soll, hier der Copy Ordner.
5. Wenn ihr jetzt auf die Verlinkung klickt sollte der Inhalt des Dropbox Ordners im Copy Verzeichnis angezeigt werden. Überprüft das am besten, in dem ihm im Dropbox Ordner im Copy Verzeichnis eine Datei ablegt oder einen Ordner erstellt. Wird dieser dann unter der Verlinkung angezeigt ist alles erledigt.


### Anleitung für Windows

1. Kopiert den Inhalt des Dropbox Ordners in den entsprechenden Ordner im Copy Verzeichnis und löscht den ursprünglichen Dropbox Ordner.
2. Wir wollen im Hauptverzeichnis des Benutzers (bei mir _C:BenutzerKovah_) eine Verknüpfung zum Dropbox Ordner im Copy Verzeichnis (bei mir _C:BenutzerKovahCopy_) erstellen.
3. Öffnet die Eingabeaufforderung. Ihr könnt sie durch Suchen im Startmenu finden. Wir unter Mac auch seid ihr automatisch in eurem Benutzerverzeichnis.
4. Nutzt nun folgenden Befehl, um die Verknüpfung zu erstellen:
`mklink /d Dropbox CopyDropbox`.
5. Wenn ihr jetzt auf die Verlinkung klickt sollte der Inhalt des Dropbox Ordners im Copy Verzeichnis angezeigt werden. Überprüft das am besten, in dem ihm im Dropbox Ordner im Copy Verzeichnis eine Datei ablegt oder einen Ordner erstellt. Wird dieser dann unter der Verlinkung angezeigt ist alles erledigt.


## Umstieg geglückt?

Nun, eigentlich sollte jetzt alles einwandfrei funktionieren. Der vermeintliche Dropbox Ordner wird jetzt nur noch von Copy verwaltet und synchronisiert. Nicht vergessen: wenn ihr zusätzlichen Speicher zu den kostenfreien 15GB erhalten wollt, könnt ihr bereits 5GB mit eurer [Anmeldung auf Copy](https://copy.com?r=jZ0vWa) verdienen. Schickt dann euren Link an alle Freunde und Bekannte.
