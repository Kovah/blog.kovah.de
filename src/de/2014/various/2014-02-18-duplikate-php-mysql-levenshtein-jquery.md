---
author: Kevin Woblick
date: 2014-02-18 16:56:40+00:00
description: Ein Tutorial wie man Duplikate in der Datenbank mit PHP, MySQL, Levenshtein und jQuery findet.
draft: false
title: Duplikate finden mit PHP, MySQL, Levenshtein und jQuery
type: post
url: /de/duplikate-finden-mit-php-mysql-levenshtein-und-jquery/
hascode: true
category: tutorial
tags:
- JavaScript
- jQuery
- Levenshtein
- MySQL
- PHP
---

Für eines meiner aktuellen Projekte war es nötig eine Funktion in die Webseite zu integrieren, die in der MySQL Datenbank nach Duplikaten des eingegebenen Textes sucht. Basis ist ein simples HTML Formular, das bereits mit PHP ausgearbeitet ist. jQuery wurde bisher nicht genutzt, macht aber für diesen Zeck Sinn.

## Basis: Formular mit HTML und PHP

Als Basis dient wie bereits erwähnt ein simples HTML Formular und PHP.

```html
<form action="add_text.php" method="post">
  <label for="usertext">Your Text</label><br/>
  <textarea name="usertext" id="usertext"></textarea><br/>
  <input type="submit" name="addtext" id="addtext" class="button" value="Submit" />
</form>
```

```php
$text = mysql_real_escape_string($_POST['usertext']);
// Values: 1. id (empty), 2. Text
$query = "INSERT INTO texts VALUES ('','".$text."')";
$result = mysqli_query($mysqli, $query);
```

Wenn man nun über dieses Formular einen Text einsendet, wird dieser ohne Prüfung eingetragen. Das wollen wir jetzt aber ändern.


## MySQL - Suche nach Duplikaten mit der Levenshtein Funktion

Wie funktioniert nun die Suche nach Duplikaten mit der "Levenshtein Funktion"? Im Prinzip müssen wir als Entwickler kaum um etwas kümmern. Die Funktion wird direkt vom MySQL Server als SQL Abfrage ausgeführt. Da das aber nicht mit den Standardfunktionen klappt müssen wir die Funktion neu definieren. Hierzu bitte die SQL Befehle von folgender Seite auf dem MySQL Server innerhalb der Datenbank ausführen: [github.com](https://gist.github.com/Kovah/df90d336478a47d869b9683766cff718)

Ist dies passiert, können wir schon nach Duplikaten suchen. Die Levenshtein Abfrage sucht hierbei mit einem Algoritmus nach ähnlichen Inhalten und berechnet Ähnlichkeitswerte. Die SQL Abfrage sieht hierbei wie folgt aus:

```sql
SELECT * FROM table WHERE levenshtein(benutzertext, _tabellenspalte_) BETWEEN 0 AND 30;
```

`levenshtein(benutzertext, tabelleninhalt) BETWEEN 0 AND 30` ist hier der entscheidende Part. `benutzertext` muss durch den Text des Benutzers und _tabellenspalte_ durch die zu vergleichende Spalte der Tabelle ersetzt werden. Zu beachten ist, dass die Levenshtein Funktion immer einen Ähnlichkeitswert zurückgibt. Je größer der Wert ist desto abstrakter können beide Texte sein. Ich habe als Wert die 30 genommen, damit kleine Schreibfehler und Zeichensetzung berücksichtigt werden.
Soweit so gut. Das Ganze Konstrukt müssen wir jetzt nur noch so verpacken, dass der Nutzer gezwungen ist, erst den Test nach Duplikaten durchzuführen. Heutzutage wird sowas dynamisch gelöst, der Nutzer muss nicht die Seite verlassen. Good old friend jQuery.


## Umsetzung der Prüfung mit jQuery

Was müssen wir jetzt machen? Den Submit-Button erst nach bestandener Prüfung auftauchen lassen. Ich habe mich dafür entschieden, den Button nachladen zu lassen. Warum erkläre ich später. Mein Formular sieht jetzt so aus:

```html
<form action="add_text.php" method="post">
  <label for="usertext">Your Text</label><br/>
  <textarea name="usertext" id="usertext"></textarea><br/>
  <span class="button" id="checkduplicates">Check Text</span>
  <div id="checkresults"></div>
</form>
```

Mit jQuery basteln wir uns jetzt eine Abfrage mit Ajax, die eine PHP Datei (hier `check_duplicates.php`) aufruft. Diese PHP Datei macht dann nichts weiter als die Levenshtein Funktion mit dem eingegebenen Text auszuführen und basierend auf dem Ergebnis entweder einen Fehler oder den Submit Button auszugeben. Alles was die PHP Datei macht wird dann in das div mit der id "checkresults" gepackt. Demnach sieht meine Javascript Datei so aus:

```javascript
$("#checkduplicates").click(function() {
  var usertext = $('#usertext').val();
  $.ajax({
    method: 'post',
    url: 'check_duplicates.php',
    data: {
      'text': usertext
    },
    success: function(data) {
      $('#duplicateresults').html(data);
      $('#checkduplicates').addClass('hide');
    },
    error: function() {
      $('#duplicateresults').html('<div class="button error">Error!</div>');
    }
  });
});
```

## Testen des Formulars mit allen Komponenten

Wir haben jetzt ein nettes Formular. Der Nutzer kann einen Text eingeben und hat einen Button zum Überprüfen des Textes. Klickt der Nutzer jetzt auf den Button wird Javascript aktiv, holt sich den Text auf dem Textfeld und lädt die PHP Datei. Die PHP Datei bekommt von Javascript den Text, verkürzt diesen und führt die MySQL Abfrage mit der Levenshtein Funktion aus. Wenn das Ergebnis negativ ist (also kein Duplikat gefunden wurde) übergibt die PHP Datei den HTML Code für den Submit Button zurück an Javascript. Das Skript empfängt den Code, plaziert ihn im entsprechenden div und versteckt den Button zum Überprüfen des Textes. Wenn der Nutzer jetzt den Submit Button drückt wird ganz normal die PHP Datei zum Eintragen des Textes ausgeführt.
Wenn das Ergebnis positiv ist (also ein Duplikat gefunden wurde), wird die Fehlermeldung ausgegeben. Das übermitteln des Formulars ist nicht möglich, da der Submit Button fehlt.
