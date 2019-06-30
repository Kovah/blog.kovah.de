---
author: Kovah
date: 2013-02-10 15:41:55+00:00
description: Ein neues Design für Facebook, das mit Stylebot übernommen werden kann.
draft: false
title: So schön könnte Facebook aussehen
type: post
url: /de/so-schon-konnte-facebook-aussehen/
hascode: true
categories:
- Tutorial
tags:
- Chrome
- Code
- Design
- Facebook
- Stylebot
---

Das größte soziale Netzwerk der Welt gibt es seit vielen Jahren und ständig ändert sich irgend etwas, ob es nun die AGBs, Datenschutzrichtlinien oder Zusatzfunktionen sind. Aber eins ist nach wie vor alt und meiner Meinung nach ganz schön eingestaubt: das Design. Facebook erlaubt es dem Nutzer nicht, beziehungsweise so gut wie nicht, das eigene Profil nach seinen Wünschen zu gestalten. Über Vor- und Nachteile könnte man jetzt diskutieren, ich habe mich jedoch mittels eines wunderbaren Browser Plugins an die Arbeit gemacht und mein Facebook ins rechte Licht gerückt - und bin erstaunt, wie schön Facebook eigentlich aussehen könnte. Bevor ich jedoch zum Tutorial zum Nachmachen komme hier die Bilder:


## Wie wird's gemacht? Das Facebook Design ändern

Voraussetzung für das Ändern des Facebook Designs ist eine Erweiterung für den Browser, mit der man das Design ändern kann, ohne Zugriff auf die Quelldateien zu haben sowie Grundkenntnisse in Sachen Webdesign, hauptsächlich CSS - oder alternativ dieses Tutorial. Ich nutze für meinen Chrome Browser (nein, Firefox nutze ich nicht) die Erweiterung [Stylebot](https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha). Stylebot blendet in der Adressleiste ein kleines _CSS_. Ein Klick darauf öffnet ein Fenster, in der man eine ganze Reihe Einstellungen vornehmen kann. Von Schriftart und -größe, Abständen und Rändern bis hin zu einem Tab, in dem man seine eigenen Anweisungen eintragen kann. Die Änderungen, die wir jetzt vornehmen können auch Probleme nach sich ziehen, wenn bestimmte Anweisungen Elemente blockieren oder ähnliches. Das hängt aber mit den persönlichen Vorlieben und Einstellungen zusammen. Ich habe alle Änderungen mehrfach überprüft und keine Fehler feststellen können. Achtet aber bevor ihr anfangt darauf, dass Chrome aktuell ist und keine anderen Erweiterungen installiert sind, die Funktionen oder das Aussehen von Facebook beeinträchtigen.

1. Voraussetzungen: aktueller Chrome Web Browser und die Stylebot Erweiterung
2. Unabhängig davon, ob ihr auf Facebook seid oder nicht, klickt auf das graue _CSS_ in der Adressleiste. Das Stylebot Fenster erscheint. Im Fenster genügt ein Klick auf das Zahnrädchen oben rechts, das euch direkt zu den Stylebot Optionen leitet.
3. In der Seitenleiste Links klickt ihr auf den Menupunkt _Styles_.
4. Unter styles klickt ihr auf den Button _Add new Style..._
5. Ein neues Fenster öffnet sich, in dem ihr oben unter URL _http://www.facebook.com_ eintragt.
6. In dem Feld darunter können nun die Anweisungen platziert werden. Klickt auf die 1. Zeile und kopiert den folgenden Code dort hin:

```css
body {
font-family: 'Open Sans', sans-serif;
background: url(http://i43.tinypic.com/9kxcow.jpg) repeat left top #FFF; /* Hintergrund */
}
/**** Main Menu ****/
div.fixed_elem {
background: url(http://i41.tinypic.com/wrbiu.jpg) repeat-x left center; /* Hintergrund Hauptmenuleiste */
}
#pageLogo a:hover {
background-color: #1c3f8d;
}
a.jewelButton:hover {
background-color: #EEE;
}
#pageNav .navLink::after {
background: none;
}
ul#pageNav a:hover {
background: none;
color: #fff;
}
ul#pageNav a:hover img {
border-color: #CCC;
}
/**** Chat Sidebar ****/
div.fbChatSidebar {
background: url(http://i40.tinypic.com/2mzcuug.jpg) repeat left top; /* Hintergrund Chat Sidebar*/
margin-top: 38px;
}
/**** div Fixes****/
.fbChatSidebar .uiGrid { /* Sidebar Suchfeld Position-Fix */
/* padding-top: -40px; */
position: relative;
bottom: 40px;
}
div.rightColumnWrapper.fixed_elem {
background: none;
}
div.bookmarksMenuButton .uiCloseButton {
background-color: #FFF;
}
/**** Sidebar ****/
#leftCol {
background: url(http://i43.tinypic.com/j0d4rp.jpg) repeat left top; /* Hintergrund Seitenleiste */
border: 1px solid #fff;
border-right: 0;
border-top: 0;
-webkit-border-bottom-left-radius: 5px;
-moz-border-radius-bottomleft: 5px;
border-bottom-left-radius: 5px;
padding: 20px 0 10px 10px;
margin-left: -9px;
}
.uiSideNav .selectedItem .item, .uiSideNav .selectedItem .item:hover, .uiSideNav ul .selectedItem .subitem, .uiSideNav ul .selectedItem .subitem:hover {
background: url(http://i43.tinypic.com/j0d4rp.jpg) repeat left top; /* Hintergrund Listenobjekt Seitenleiste */
}
.uiSideNav .item {
border-bottom: 0;
}
.uiSideNav .item:hover {
background: url(http://i43.tinypic.com/j0d4rp.jpg) repeat left top; /* Hintergrund Listenobjekt Seitenleiste bei hover*/
}
.uiSideNav .item .uiSideNavCount {
background: #FFF;
color: #888;
}
.uiSideNav .item:hover .uiSideNavCount {
background: #888;
color: #FFF;
}
```
Letztes Update: 08.06.2013 - Bilder ersetzt

7. Mit einem Klick auf Add bestätigt ihr die Änderungen. Eure Facebook Startseite sollte nun etwas hübscher aussehen.


### Änder dein Facebook Design

Wer CSS beherrscht hat hier leichtes Spiel und kann nach Belieben das Design umgestalten. Für alle anderen hier eine Liste von Möglichkeiten, mit denen ihr das Design personalisieren könnt:

  * `body > background: url( )` - Hier könnt ihr zwischen den Klammern euer eigenes Hintergrundbild festlegen. Das Bild muss z.B. bei tinypic.com hochgeladen und die Adresse des Bildes zwischen die Klammern gesetzt werden.
  * `div.fixed_elem > background: url( )` - Hier könnt ihr zwischen den Klammern euer eigenes Hintergrundbild festlegen. Genau wie beim body muss die Adresse zu einem Bild eingetragen werden.
  * `div.fbChatSidebar > background: url( )` - Hier könnt ihr zwischen den Klammern euer eigenes Hintergrundbild festlegen. Genau wie beim body muss die Adresse zu einem Bild eingetragen werden.
  * `#leftCol > background: url( )` - Hier könnt ihr zwischen den Klammern euer eigenes Hintergrundbild festlegen. Genau wie beim body muss die Adresse zu einem Bild eingetragen werden.
  * `body > font-family:` - Hier könnt ihr eine eigene Schriftart eintragen. Die Schriftart muss aber auf eurem PC / Mac vorhanden und verwendbar sein. Die hier angegebene Schriftart Helvetica ist auf Macs vorinstalliert, auf Windows ist Verdana zu empfehlen. Weitere tolle Schriftarten findet ihr kostenfrei bei [fontsquirrel.com](http://www.fontsquirrel.com/), Tutorials zum Einfügen von Schriftarten findet ihr hier: [Windows](http://support.microsoft.com/kb/314960/de) / [Mac](http://www.maceinsteiger.de/how-to/fonts-schriften-unter-mac-os-installieren/).

_Hinweis: Die Holz-Textur stammt von [Subtle Patterns](http://subtlepatterns.com/)._
