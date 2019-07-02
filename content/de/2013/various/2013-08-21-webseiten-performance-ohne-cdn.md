---
author: Kevin Woblick
date: 2013-08-21 12:44:26+00:00
description: Was ist besser? Mit oder ohne CDN? Ich habe es mit meinen Webseiten getestet
  und die Ergebnisse zusammengefasst
draft: false
title: 'Schnelle Webseiten: Starke Performance auch ohne CDN'
type: post
url: /de/schnelle-webseiten-starke-performance-auch-ohne-cdn/
categories:
- Artikel
tags:
- CDN
- Cloudflare
- Performance
- Pingdom
- Webseite
---

Seit langer Zeit betreibe ich nun schon mehrere Seiten über das [Cloudflare CDN](http://www.cloudflare.com) und war auch immer sehr zufrieden. Da ich jetzt aber für die neue Version der Game-Zitate Webseite einige Tests durchführen musste um Fehler zu finden, habe ich mir auch gleich die Ladezeiten angesehen - mit erstaunlichen Ergebnissen.
Bevor es jetzt aber ans eingemacht geht hier die Konfiguration, um die Tests in ein angemessenes Licht zu rücken:

* Root Server L1 bei Strato
* Ubuntu 12.04 LTS Server 64Bit
* Intel Sandy Bridge G530 mit 2x 2,4GHz, 4GB RAM
* Verwaltung durch Plesk 11.x
* Apache v2.2.22 und nginx v1.5

Es werden mehrere Webseiten gehostet; Game-Zitate.de und Tschernobyl-Info.de laufen hierbei über Cloudflare, Kovah.de inklusive Blog und weiterer Verwaltungsseiten sowie Kundenwebseiten werden direkt vom Server bearbeitet.


## Die Testergebnisse (mit eingeschaltetem CDN)

Die folgenden Testergebnisse habe ich alle von [Pingdom](http://tools.pingdom.com/) bezogen. zusätzlich habe ich mit Webpagetest geprüft, die Ergebnisse waren aber annähernd gleich. Der Wert "schneller als x aller Webseiten" bezieht sich hier auf die von Pingdom getesteten Webseiten.

{{< table >}}

| Site | Performance | Requests | Ladezeit \(s\) | Seitengröße \(kB\) | Schneller als x aller Webseiten |
|----------------------------------------|-------------|----------|----------------|--------------------|----|
| blog\.kovah\.de\(Wordpress\)           | 87          | 32       | 1,39           | 507,8              | 82 |
| www\.kovah\.de \(Drupal\)              | 86          | 43       | 1,8            | 1124               | 74 |
| www\.tschernobyl\-info\.de \(Drupal\)  | 69          | 103      | 2,81           | 825                | 57 |
| forum\.tschernobyl\-info\.de \(phpBB\) | 65          | 58       | 0,81           | 368                | 92 |
| www\.game\-zitate\.de \(Wordpress\)    | 81          | 29       | 1,76           | 225                | 75 |

{{< / table >}}


## Die Testergebnisse (ohne CDN)

Wie bereits erwähnt habe ich verschiedene Tests mit verschiedenen Konfigurationen ausprobiert. Diese Ergebnisse habe ich erhalten nachdem ich Cloudflare ausgeschaltet habe.

{{< table >}}

| Site | Performance | +/- | Requests | Ladezeit (s) | +/- | Seitengröße (kB) | Schneller als x aller Webseiten |
|----------------------------|-------------|-----|----------|--------------|---------|------------------|---------------------------------|
| www.tschernobyl-info.de | 70 | -1 | 103 | 2,44 | -0,37 | 859 | 61 |
| forum.tschernobyl-info.de | 63 | 2 | 49 | 0,7 | -0,11 | 457 | 94 |
| www.game-zitate.de | 82 | -1 | 29 | 0,988 | -0,772 | 225 | 89 |

{{< / table >}}

Man braucht hier keine Fachkenntnisse um zu sehen, dass bei ausgeschaltetem Cloudflare CDN die Ladezeiten um bis zu 0,7 Sekunden sinken. Auch beim tatsächlichen öffnen der Seite merkt man den Unterschied ein wenig. Und das kann heutzutage schon viel ausmachen. Zwar hat Cloudflare einige gute Dienste geleistet und sicher den ein oder andere Vorteil gebracht, aber anhand der Ergebnisse habe ich mich jetzt dazu entschieden, den Dienst nicht weiter zu nutzen.
