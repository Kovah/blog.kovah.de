---
author: Kevin Woblick
date: 2012-04-02 10:09:58+00:00
description: Es gibt hunderte von Tools, um Dateien aller Art zu komprimieren und in Archive zu packen. Ich habe die bekanntesten ausprobiert und miteinander verglichen.
draft: false
title: Extreme Kompression - Top 10 Archiv Tools
type: post
url: /de/extreme-kompression-top-10-archiv-tools/
category: test
tags:
- Archive
- Backup
- Komprimierung
- RAR
- ZIP
---

Der Kampf um ge-zip-te oder ge-rar-te Dateien ist groß. Es gibt hunderte von Tools, um Dateien aller Art in Archive zu packen, zu komprimieren und später wieder auslesen bzw. entpacken zu können. Ich habe früher viel mit WinRAR gearbeitet, bin dann aber vor einiger Zeit auf 7Zip umgestiegen, da mich die Shareware-Hinweise bei WinRar genervt haben. Jetzt wollte ich unbedingt testen, welches Archivierungs-Tool am besten arbeitet und die extremsten Komprimierungsraten erzeugt. Hier sind die Ergebnisse.


## Das Testpaket für die Archivierungs-Tools

Bei Archivierungstools besteht immer die Relation zu den Dateiarten, die gepackt und komprimiert werden sollen. Die Tools erzielen bessere Ergebnisse, wenn einfache Textdokumente anstelle von JPG-Dateien gepackt werden. Letztere sind schon stark komprimiert, Textdokumente hingegen nicht. Da es mir bei der Komprimierung vor allem um die Nutzung zu Backupzwecken geht, habe ich einen Ordner mit vielen verschiedenen Dateitypen angelegt:


{{< table >}}

<table>

<tbody>

<tr>

<th>Kategorie</th>

<th>Ordner</th>

<th>Dateien</th>

<th>Gesamtgröße (in Byte)</th>

<th>Gesamtgröße (in KiB*)</th>

</tr>

<tr>

<td>Audio</td>

<td>.mp3</td>

<td>4</td>

<td>26.849.280</td>

<td>26.220</td>

</tr>

<tr>

<td></td>

<td>.wav</td>

<td>1</td>

<td>27.066.368</td>

<td>26.432</td>

</tr>

<tr>

<td>Diverse</td>

<td>Diverse*</td>

<td>14</td>

<td>1.720.320</td>

<td>1.680</td>

</tr>

<tr>

<td>Dokumente</td>

<td>.docx</td>

<td>4</td>

<td>274.432</td>

<td>268</td>

</tr>

<tr>

<td></td>

<td>.xlsx</td>

<td>4</td>

<td>73.728</td>

<td>72</td>

</tr>

<tr>

<td></td>

<td>.html</td>

<td>8</td>

<td>7.692.288</td>

<td>7.512</td>

</tr>

<tr>

<td></td>

<td>.txt</td>

<td>5</td>

<td>20.480</td>

<td> 20</td>

</tr>

<tr>

<td></td>

<td>.pdf</td>

<td>8</td>

<td>44.142.592</td>

<td> 43.108</td>

</tr>

<tr>

<td></td>

<td>.docx mit Bildern</td>

<td>1</td>

<td>245.760</td>

<td> 240</td>

</tr>

<tr>

<td>Programme</td>

<td>.exe</td>

<td>3</td>

<td>10.010.624</td>

<td> 9.776</td>

</tr>

<tr>

<td>Bilder</td>

<td>.bmp</td>

<td>6</td>

<td>14.180.352</td>

<td> 13.848</td>

</tr>

<tr>

<td></td>

<td>.jpg</td>

<td>12</td>

<td>4.071.424</td>

<td>3.976</td>

</tr>

<tr>

<td></td>

<td>.psd</td>

<td>4</td>

<td>52.068.352</td>

<td>50.848</td>

</tr>

<tr>

<td></td>

<td>.tga</td>

<td>10</td>

<td>1.351.680</td>

<td>1.320</td>

</tr>

<tr>

<td>Systemdateien</td>

<td>.dll</td>

<td>8</td>

<td>3.166.208</td>

<td>3.092</td>

</tr>

<tr>

<td>Archive</td>

<td>.rar</td>

<td>2</td>

<td>2.187.264</td>

<td>2.136</td>

</tr>

<tr>

<td></td>

<td>.zip</td>

<td>2</td>

<td>2.416.640</td>

<td>2.360</td>

</tr>

<tr>

<td>Video</td>

<td>.avi</td>

<td> 2</td>

<td>14.172.160</td>

<td>13.840</td>

</tr>

<tr>

<td></td>

<td>div. exotische Formate</td>

<td> 3</td>

<td>13.492.224</td>

<td>13.176</td>

</tr>

<tr>

<td></td>

<td>.flv</td>

<td> 1</td>

<td>14.929.920</td>

<td>14.580</td>

</tr>

<tr>

<td></td>

<td>.mov</td>

<td> 1</td>

<td>17.940.480</td>

<td>17.520</td>

</tr>

<tr>

<td></td>

<td>.wmv</td>

<td> 5</td>

<td>51.384.320</td>

<td>50.180</td>

</tr>

<tr>

<td></td>

<td></td>

<td></td>

<td></td>

<td></td>

</tr>

<tr>

<td colspan="3" style="text-align: right; font-size: 120%;" rowspan="3">Gesamtgröße</td>

<td style="text-align: right; font-size: 120%;">309.456.896,00</td>

<td style="text-align: left; font-size: 120%;">Byte</td>

</tr>

<tr>

<td style="text-align: right; font-size: 120%;">302.204,00</td>

<td style="text-align: left; font-size: 120%;">KiB*</td>

</tr>

<tr>

<td style="text-align: right; font-size: 120%;">295,12</td>

<td style="text-align: left; font-size: 120%;">MiB*</td>

</tr>

</tbody>

<tbody>

<tr>

<td colspan="5" style="text-align: left;">* Diverse: Konfigurationsdateien aus Passwortmanagern, 3D-Renderprogrammen u.ä. * KiB: 1 KiB = 1024 Byte | * MiB: 1 MiB = 1024 KiB (Äquivalente zu KB bzw. MB)</td>

</tr>

</tbody>

</table>

{{< / table >}}


Sämtliche Größen wurden anhand der tatsächlichen Größe auf dem Datenträger ermittelt, umgerechnet wurde stets mit der exakten 1:1024 Umrechnung.


### Kompressionsraten - Testergebnisse der Archivierungs-Tools

Getestet wurde die Archivierung des Ordners mit dem o.a. Inhalt mit allen Tools in das .zip Format. Gemessen wurde die Zeit sowie die Kompressionsrate, die jedoch nicht den Tools entnommen wurde. Die Rate errechnet sich aus der _Endgröße_ durch _Startgröße_ mal _100_. Ergebnis ist ein Prozentwert der angibt, wie groß das Archiv im Verhältnis zur Größe des ungepackten Ordners ist.
Die Tabelle wurde anhand der Kompressionsrate  der Archivierungs-Tools geordnet, überraschender Sieger ist PeaZip, das noch vor dem berühmten 7Zip liegt.
Nimmt man die Zeit als zweite Kenngröße mit ins Spiel, wird es schon komplizierter, eine Rangordnung zu erstellen, weshalb ich das an dieser Stelle auslasse. Wenn man sich die Tabelle jedoch anguckt sieht man eindeutig, dass WinZip Pro in Sachen Kompressionsrate im Verhältnis zur Zeit die Nase vorne hat. Es folgen WinRAR und Haozip.


{{< table >}}

<table>

<tbody>

<tr>

<th></th>

<th>Archiv-Tool</th>

<th>getestete Version</th>

<th>Link</th>

<th>Endgröße in Byte</th>

<th>Endgröße in % weniger = besser</th>

<th>Dauer in Sek.</th>

</tr>

<tr>

<td>1</td>

<td>PeaZip</td>

<td>4.4</td>

<td></td>

<td>253.853.696</td>

<td style="background: #97DC95;">82,0320</td>

<td>49</td>

</tr>

<tr>

<td>2</td>

<td>7Zip</td>

<td>9.20</td>

<td></td>

<td>253.857.792</td>

<td style="background: #D2E49A;">82,0333</td>

<td>50</td>

</tr>

<tr>

<td>3</td>

<td>WinZip Pro</td>

<td>16.0</td>

<td></td>

<td>256.331.776</td>

<td style="background: #EBEB9F;">82,8328</td>

<td>9</td>

</tr>

<tr>

<td>4</td>

<td>WinRAR</td>

<td>3.93</td>

<td></td>

<td>256.360.448</td>

<td style="background: #EBEB9F;">82,8421</td>

<td>19</td>

</tr>

<tr>

<td>5</td>

<td>Haozip</td>

<td>4.2</td>

<td></td>

<td>256.364.544</td>

<td style="background: #EBDC9F;">82,8434</td>

<td>7</td>

</tr>

<tr>

<td>6</td>

<td>ALZip</td>

<td>7.52</td>

<td></td>

<td>256.372.736</td>

<td style="background: #EBDC9F;">82,8460</td>

<td>28</td>

</tr>

<tr>

<td>7</td>

<td>ZipGenius</td>

<td>6.3.2</td>

<td></td>

<td>256.524.288</td>

<td style="background: #EBCD9F;">82,8950</td>

<td>24</td>

</tr>

<tr>

<td>8</td>

<td>IZArc</td>

<td>4.1.6</td>

<td></td>

<td>256.528.384</td>

<td style="background: #EBCD9F;">82,8963</td>

<td>39</td>

</tr>

<tr>

<td>9</td>

<td>PowerArchivier 2011</td>

<td>12.12.03</td>

<td></td>

<td>256.544.768</td>

<td style="background: #EBBE9F;">82,9016</td>

<td>7</td>

</tr>

<tr>

<td colspan="7"></td>

</tr>

<tr>

<td>10</td>

<td>KGB Archiver</td>

<td>2.0.0.2</td>

<td></td>

<td>256.528.384</td>

<td style="background: #EBBE9F;">82,8963</td>

<td>22</td>

</tr>

<tr>

<td></td>

<td></td>

<td colspan="2">Kompression in das .kgb Format</td>

<td>215.040.000</td>

<td style="background: #95DC98;">69,4895</td>

<td>1,5 Std.</td>

</tr>

</tbody>

</table>

{{< / table >}}


Die Ausnahme im Test: KGB Archiver. Das Programm kann zwar ohne Probleme .zip Dateien erstellen, legt aber erst bei seinem eigenen Kompressionsalgorythmus .kgb richtig los. Wie man der Tabelle entnehmen kann bringt es das Programm auf erstaunliche 69%. Nachteil: das ganze hat knapp 1,5 Stunden gedauert und ist damit im produktiven Einsatz nicht zu gebrauchen.


#### Uharc Archivierungs-Tool - Der Geheimtipp

Uharc ist ein weiteres Komprimierungsverfahren, dass ähnlich wie das .kgb Format des KGB Archivers bessere Kompression von Daten ermöglichen soll. Das Programm WinUHA ermöglicht das einfache Packen oder Entpacken von Archiven in das Uharc Format.
Es lieferte im Test wirklich sehr gute Ergebnisse und gilt für mich deshalb als Geheimtipp: es schaffte nach PeaZip nochmals 10% mehr Ersparnis herauszuholen, war aber mit 5 Minuten nicht so langsam wie der KGB Archiver.

{{< table >}}

<table>

<tbody>

<tr>

<th>Archiv-Tool</th>

<th>Version</th>

<th>Link</th>

<th>Endgröße in Byte</th>

<th>Endgröße in %</th>

<th>Dauer</th>

</tr>

<tr>

<td>WinUHA</td>

<td>2.0 RC1</td>

<td></td>

<td>221.196.288</td>

<td style="background: #95DC98;">71,4789</td>

<td>5:07 Min.</td>

</tr>

</tbody>

</table>

{{< / table >}}

Nachteil von WinUHA und UHARC ist leider, dass nur Dateien bis zu einer Größe von 2 GB komprimiert werden können. Für größere Backups eignet es sich demnach leider nicht. Zudem wurde es seit über 10 Jahren (Stand 2016) nicht mehr weiter entwickelt und wird höchstwahrscheinlich mit aktuellen Betriebssystemen nur noch eingeschränkt kompatibel sein.

Weitere Geheimtipps sind immer willkommen und werden gerne getestet und mit ins Ranking aufgenommen.
