---
author: Kevin Woblick
date: 2013-03-27 20:52:10+00:00
description: Keepsafe soll ein toller Bilder-Safe sein? Von wegen! So leicht lässt
  sich der Safe knacken. Gleich zwei Sicherheitslücken machen es möglich.
draft: false
title: KeepSafe knacken - So einfach kommt man an die "versteckten" Bilder
type: post
url: /de/mit-keepsafe-bilder-verstecken-denkste/
categories:
- Artikel
tags:
- Android
- Bilder
- Google Play
- KeepSafe
- Sicherheit
- Sicherheitslücke
- Update
---

{{< alert type="warning" >}}
**Eine Wiederherstellung über den Dateimanager ist nicht mehr möglich.** Das Problem der Passwortwiederherstellung über die eMail Adresse besteht jedoch weiterhin.
{{</ alert >}}


Auf der Suche nach einer App, mit der ich Fotos schützen kann, bin ich im Play Store direkt auf [KeepSafe](https://play.google.com/store/apps/details?id=com.kii.safe&hl=de) gestoßen (der originale Titel lautet "Bilder verstecken mit KeepSafe"). Gut, dachte ich mir, probierst du die App einfach mal aus. Schein ja sowas wie iSafe zu sein, die ich noch von meinem iPhone kenne. Ich habe angenommen, dass die App die Bilder gut geschützt vor Dritten aufbewahrt und so keiner einfach Zugriff auf die Bilder hat. Man könnte davon ausgehen, dass die App die Bilder wirklich dort speichert, wo niemand so einfach heran kommt, vielleicht sogar in einem verschlüsselten Ordner. Also schnell runtergeladen mit dem Programm und ausprobiert. Das verstecken der Bilder hat wunderbar geklappt, die Bilder sind aus der Galerie verschwunden und anscheinend nur über KeepSafe selber erreichbar.


## Wo sind die von KeepSafe versteckten Bilder?

{{< image img="13949-300x177.png" alt="Keepsafe Logo" modifier="right" >}}

Als ich mir dann jedoch die Beschreibung der App noch ein mal genau durchgelesen habe, kamen dann die Zweifel. Denn dort heißt es wort wörtlich: "[...]KeepSafe speichert Ihre Bilder nur an einer geheimen Stelle auf Ihrem Android-Telefon." Auch war nichts von einem verschlüsselten Ordner die Rede, alles wie irgendwie darauf hin, dass ich mit meiner ursprünglichen Annahme über die App falsch lag. Also ging die Suche mit dem [Datei Manager](https://play.google.com/store/apps/details?id=com.rhmsoft.fm) (kostenlos im Play Store, ohne Root nutzbar) los. Keine Minute später habe ich die Bilder auch gefunden. Man brauch lediglich folgendem Pfad folgen: _Hauptverzeichnis > .keepsafe > Standardordner_

Dort werden die Bilder gespeichert, sie sind lediglich umbenannt, können aber trotzdem geöffnet werden.**Ohne Pin, ohne Passwort.** Eine Datei im entsprechenden Verzeichnis bekommt eine Nummer, es folgt der Dateiname samt Endung, anschließend wird ein .hid2 angehangen. Das Ganze sieht dann zum Beispiel so aus: _34679085206246.applelogo.jpg.hid2_

Wer jetzt an die Bilder rankommen möchte brauch lediglich das Bild anklicken, es erscheint ein Menü über das man entscheiden kann, mit welchem Programm man das Bild öffnen möchte. Hier nimmt man idealerweise die Foto- bzw. Galerieapp. Alternativ kann man die Bilder über den Dateimanager auch umbenennen und verschieben. Getestet habe ich das unter dem Android Betriebssystem 4.2.x. Ob es mit früheren Versionen funktioniert kann ich leider nicht versprechen.


### Zusätzliche Sicherheitslücke in KeepSafe

Nach der Sache mit dem "Verstecken" ist mir eine **weitere gravierende Sicherheitslücke** in KeepSafe aufgefallen. Die App bietet dem Nutzer an, den Pin erneut anzufordern, wenn er diesen vergessen hat. Das die Entwickler hier nicht zu Ende gedacht haben oder gar nicht erst angefangen haben nachzudenken, beweist diese Funktion auf grandios einfache Art und Weise. Denn als eMail für das Zuschicken der Pin wird die Standard eMail Adresse in KeepSafe angegeben. In der Regel hat man auf seinem Android Gerät zur Standard eMail Adresse auch gleich die GMail oder allgemeine eMail App eingerichtet, um seine Mails ohne lästiges Einloggen im Browser abrufen zu können.

Gerät nun das Gerät in die Hände des Kumpels, der das Entsperrmuster des Telefons bereits weiß, kann dieser direkt über die KeepSafe App die Pin anfordern. Diese kommt dann nur wenige Sekunden später in der eMail App an und brauch dann nur noch eingegeben werden. Schon hat der jenige Zugriff auf alle vermeintlich geschützten Bilder.


## Fazit zu KeepSafe

Traurig aber wahr: KeepSafe ist in meinen Augen entweder Schlamperei hoch Zehn oder - was ich eher annehme - eine App, die den Nutzer bewusst täuscht und ihm vorgaukelt, dass seine mit einem Pin gesicherten Bilder für niemanden zugänglich sind. Dass die Bilder jedoch **ohne große technische Kenntnisse** auf nahezu jedem Telefon über gleich **zwei Methoden** zugänglich gemacht werden können, ist in meinen Augen einfach nur traurig. Hier wird Geld mit der Blendung und der Gutgläubigkeit des Nutzers gemacht. Und das leider in großen Stil: über 5 Millionen Nutzer sind auf den Spaß hereingefallen, leider bewerten über 330.000 Nutzer die App auch noch als gut.
Meine Empfehlung: **Finger weg von diesem Schwindel und schon gar nicht Geld dafür bezahlen.**
