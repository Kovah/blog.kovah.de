---
author: Kevin Woblick
date: 2012-12-06 22:42:18+00:00
description: Backups. Jeder braucht sie, kaum einer macht sie. Allerdings sind Backups zum Beispiel auf Amazon AWS Servern einfacher und kostengünstiger als man vielleicht denkt.
draft: false
title: 'Günstiges Online-Backup: Amazon Web Services (AWS)'
type: post
url: /de/gunstiges-online-backup-amazon-web-services-aws/
category: article
tags:
- Amazon
- Amazon Web Services (AWS)
- Backup
- Cloud
- Online Backup
---

Ich würde sagen, dass 99% aller Nutzer von elektronischen Speichermedien sich über Backups Gedanken machen sollten. Das es wahrscheinlich die wenigsten machen, ist zumindest für mich nichts neues, zumal Windows keine sinnvolle, eigene Lösung implementiert hat - im Gegensatz zu Apple OSX. Auch ich ärgere mich jedes Mal aufs neue, wenn die Backup-Festplatte voll ist und die ältesten Backups gelöscht werden müssen. Ich könnte mich durchaus auch als paranoid oder übervorsichtig bezeichnen, denn meine wirklich wichtigen Daten, eine Kopie meines Arbeitsverzeichnisses, ist insgesamt 5 Mal gesichert: auf dem PC, auf dem MacBook, auf meinem Homeserver, auf den Servern von [Sugarsync](https://www.sugarsync.com/referral?rf=dxn7ckwypvmow&utm_source=website&utm_medium=web&utm_campaign=referral&shareEvent=3585174) und auf meinem eigenen Server. Nichts destotrotz kommt eine 6. Sicherung dazu: auf Servern von Amazon.


## Amazon Web Services - Cloudstorage für günstiges Geld

Die Amazon Web Services (kurz AWS) bieten ein gigantisches Potenzial für allerlei Anwendungsmöglichkeiten durch die clever verbundenen und nahtlos zu verknüpfenden Services, die Amazon anbietet. Darunter ist auch der so gennannte [Glacier Service](http://aws.amazon.com/de/glacier/) (_Glacier: engl. Gletscher_), der neben Amazon S3 und Amazon EBS eine Möglichkeit der Datenspeicherung bietet. Das besondere am Glacier Service ist, dass die Daten nicht über normale FTP Clients hochgeladen werden können, die Daten erst nach einiger Zeit auf den Servern zum Download verfügbar sind und das dieser Download angefordert werden muss. Denn der Dienst dient als reiner Backup Service, der die Daten über lange Zeit sicher lagert. Zwar muss man die gerade genannten Einschränkungen hinnehmen, dafür ist der Amazon Glacier Web Service aber auch wesentlich günstiger als z.B. Amazon S3. Der Preis pro gespeichertem Gigabyte liegt bei 0,011 $, was umgerechnet derzeit 0,0085 Euro entsprechen würde. Man zahlt also für Beispielsweise für das Backup des **100 Gigabyte** großen Fotoarchives gerade mal **0,85 Euro pro Monat**!


### Die Amazon Backuplösung im Vergleich mit anderen Anbietern

Zugegebenermaßen ist der Amazon Glacier Service auf den ersten Blick nichts für den Otto Normalverbraucher. Wer jedoch ein paar Minuten Zeit hat und sich der Sache annimmt wird schnell merken, dass es einfacher ist als gedacht. Bevor wir jedoch zum praktischen kommen, gucken wir uns alternative Backuplösungen in der Cloud an.

{{< table >}}

| Service | Speicherplatz / Tarif | Preis in EUR / Monat | Besonderheiten |
|---------|-----------------------|----------------------|----------------|
| [Amazon Glacier](http://aws.amazon.com/de/glacier/) | unbegrenzt            | 0,0085               | 0,85           | -     | Einschränkungen beim Hoch- und Runterladen  |
| [Strato HiDrive](http://www.strato.de/online-speicher/) | 100 GB | 0,049                | 4,9            | 4,9   | - |
| [SpiderOak](https://spideroak.com/personal_pricing/) | unbegrenzt            | 0,0771               | 7,71           | 7,71  | Abrechnung in 100GB Blöcken                 |
| [Mozy](http://mozy.de/home/) | 125 GB                | 0,0719               | 7,19           | 8,99  | |
| [Carbonite](http://www.carbonite.com/en/v2/online-backup) | unbegrenzt            | 0,0492               | 4,92           | 4,92  | Beschränkung auf 1 Computer                 |
| [Cloudly](http://cloudly.de/) | unbegrenzt            | 0,0299               | 2,99           | 2,99  | Beschränkung auf 1 Computer |
| [Drive on Web](https://www.driveonweb.de/) | 100 GB                | 0,109                | 10,9           | 10,9  | Rabatt bei längeren Laufzeiten              |
| [Livedrive](http://www.livedrive.com) | unbegrenzt            | 0,0559               | 5,59           | 5,59  | Beschränkung auf 1 Computer                 |
| [Wuala](http://www.wuala.com/de) | 100 GB                | 0,0999               | 9,99           | 9,99  | Cloud-Tool mit Synchronisation              |
| [Dropbox](http://db.tt/9qu07KE) | 100 GB                | 0,077                | 7,7            | 7,7   | vollwertiges Cloud-Tool mit Synchronisation |
| [Sugarsync](https://www.sugarsync.com) | 100 GB                | 0,1499               | 14,99          | 14,99 | vollwertiges Cloud-Tool mit Synchronisation |

{{< / table >}}

Man merkt schnell, dass Dienste wie Cloudly eindeutig auf den Durchschnittsverbraucher ausgelegt ist, der selten über mehrere hundert Gigabyte an Daten online sichert, so dass er sogar über den Glacier Service von Amazon über die 2,99 Euro im Monat hinausschießen würde. Angesichts der Tatsache, dass nur ein Rechner vom Backupspeicher profitiert ist es auch möglich, dass hier eine geringere Bandbreite als bei Amazon direkt zur Verfügung gestellt wird.


### Amazon Glacier effektiv nutzen

Was bis jetzt noch keine Beachtung gefunden hat ist die Tatsache, dass beim Glacier Service von Amazon auch Gebühren für das Hoch- oder Herunterladen der Daten selber erhoben werden. Für 1000 Anfragen (Senden oder Empfangen von 1000 Dateien) werden 0,0424 Euro fällig. Insgesamt macht es zwar etwas aus, es handelt sich aber wie beim Speicher selber um Centbeträge. Um diese Anfragen sinnvoll zu nutzen lohnt es sich, alles was gesichert werden soll in Archive zu packen. Das hat nicht nur den Vorteil, dass anstelle von z.B. 643 Dateien nur 1 Datei hochgeladen wird, sondern auch, dass die Dateien dabei komprimiert werden, was zusätzlichen Speicherplatz spart.
Das richtige Tool für den Service werde ich mir noch heraussuchen. Im Moment scheinen [Arc von Haystack Software](http://www.haystacksoftware.com/arq/) für den Mac und [FastGlacier](http://fastglacier.com/) für Windows jedoch die Platzhirsche zu sein. Ein Testbericht folgt nach erfolgreichen Tests.
