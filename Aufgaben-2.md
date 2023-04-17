# Workshop: NLP mit Python - Aufgaben 2

**03. Juni 2022 - Service Center Digital Humanities (SCDH) Uni Münster**

Bitte nutzen Sie für alle Aufgaben ein Jupyter Notebook in 
https://jupyterhub.wwu.de  

(Falls jemand KEIN WWU-Account hat, kann auch Colab genutzt werden.
Erfordert einen Google Account: https://colab.research.google.com/)

# Aufgaben

## Linguistic Features I: Token und Lemmata

Material:
* https://spacy.io/
* https://spacy.io/usage/linguistic-features
* https://spacy.io/api/span/#_title

10. Importieren Sie Spacy, laden Sie das Model `de_core_news_sm` und nutzen Sie die `nlp()`-Funktion um den Text von Spacy verarbeiten zu lassen. Achten Sie darauf, dass Sie dabei `clean_text` und nicht den Ursprungstext verwenden!
11. Geben Sie [für die ersten 10 Wörter] folgendes aus: Text, Lemma, POS-Tag und Morphologische Information
12. Speichern Sie den Satz beginnend mit "Rechenleistung ..." in der Variablen `sentence`. Nutzen Sie dabei die Liste an Sätzen unter `doc.sents`
13. Speichern Sie von `sentence` die ersten 3 Wörter in einer Variablen namens `span` und geben Sie diese aus
14. Geben Sie von `sentence` nur das Verb aus
15. Wandeln Sie jedes Wort aus `doc` in sein Lemma um [filtern Sie Punktuationen, numerische Zeichen und Stoppwörter heraus] und fügen Sie es einer Liste hinzu.
16. Geben Sie alle Zahlen aus, die Jahreszahlen nach dem Muster YYYY sein könnten
17. Schauen Sie sich die Ausgabe der Jahreszahlen an. Was könnte hierbei ein Problem sein?

**DUNGEON**

1. Schreiben Sie eine Funktion, die anhand weiterer Kriterien versucht, die Jahreszahlen so gut es geht aus dem Text zu extrahieren
2. Nutzen Sie dabei die Methode `nbor()`, um das Nachbar-Token eines Tokens zu analysieren.
3. Überlegen Sie: Was könnten sinnvolle Inhalte eines Nachbarn einer Jahreszahl sein?
4. Geben Sie sich ruhig alle Nachbarn aus, analysieren Sie diese, und versuchen Sie Kriterien zu identifizieren
5. Denken Sie an die Attribute `text` oder auch `pos_` des jeweiligen Nachbarn

**ENDBOSS "DICT OF THE MALEVOLENT KING"** 

Speichern Sie alle Verben des Textes in ein `dict`, um Ihr eigenes Lexikon, mit dem Lemma als Schlagwort und der Anzahl der Vorkommnisse als Eintrag, anzulegen, [sortieren Sie alle Einträge nach Anzahl der Vorkommnisse] und geben Sie [die ersten fünf Einträge] ihr[es] Lexikon[s] aus. 

Schauen Sie sich dazu die Sektion "Dictionaries" im Infomaterial genauer an.

<div style="height: 100vh"></div>

# Tipps 

## Aufgabe 10 - Tipp 1

Importieren Sie zunächst die Bibliothek `spacy`. Laden sie dann das Model, speichern Sie es in eine Variablen und rufen diese mit ihrem (bereinigten) Text als Parameter auf.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 10 - Tipp 2

Das Model laden Sie mit `spacy.load(<modelname>)`. Eine Liste finden Sie hier: https://spacy.io/usage/models  

Vergessen Sie nicht, das Ergebnis von `nlp(text)` in einer Variablen, am besten `doc` zu speichern.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 11 - Tipp 1

Nutzen Sie eine for-Schleife, um über alle Wörter in ihrem Dokument zu iterieren (mehr zu for-Schleifen im Infomaterial). Da diese Wörter von Spacy schon zu `token` umgewandelt wurden, bietet es sich an, diese im Kopf der for-Schleife auch so zu nennen.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 11 - Tipp 2

Die for-Schleife muss zunächst nur Ausgaben erzeugen. Machen Sie sich mit den Attributen von `token` vertraut, um zu wissen, welche Sie aufrufen möchten: https://spacy.io/api/token/#attributes  

Hinweis: In Spacy enden menschenlesbare Attribute oft mit einem Unterstrich, etwa `token.pos_`  

Für die erweiterte Aufgage: Ihr Dokument ist listenähnlich. Sie können also die Anzahl der Elemente dieser Liste mit der Slice Funktionalität begrenzen. 

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 11 - Tipp 3

Die morphologischen Informationen eines Tokens liegen im Attribut `morph`, das nicht mit einem Unterstrich endet, wie etwa `token.pos_`, da es immer nur menschenlesbare Daten enthält.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 12 - Tipp 1

Es spricht nichts dagegen, dass Sie sich hierfür die `doc.sents` ausgeben lassen und manuell zählen, an welcher Indexposition sich der Satz befindet.

Automatisiert ist es natürlich praktischer: Sie können mit einer for-Schleife über das Generator-Objekt mit `list(doc.sents)` (Umwandlung in eine Liste) iterieren. Mehr dazu im Infomaterial.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 12 - Tipp 2

Schauen Sie sich die Attribute der Elemente in `doc.sents` an und finden Sie heraus, welches den Text enthält.

Nutzen Sie in Ihrer for-Schleife eine if-Bedingung, um zu prüfen, ob der Text mit "Rechenleistung" beginnt.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 12 - Tipp 3

Sie können mit `sent.text` einen String des Textes bekommen. Mit der String-Methode `startswith()` können Sie prüfen, ob ein String mit einer Zeichenkette beginnt. 

Alternativ können Sie natürlich auch einen Regulären Ausdruck verwenden, wenn Sie sich hier sicher genug fühlen.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 13 - Tipp 1

Erstellen Sie eine neue Variable `span` und weisen Sie dieser eine Teilmenge von `sentence` per Slice Funktionalität zu.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 14 - Tipp 1

Nutzen Sie eine for-Schleife, um über ihre Wörter in ihrem Satz zu iterieren.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 14 - Tipp 2

Nutzen Sie die if-Bedingung, um zu prüfen, ob im POS-Attribut der String "VERB" steht. Den Wahrheitswert dazu bekommen Sie nach dem Muster `my_string == 'STRING'`. Geben Sie das Token aus, wenn dies zutrifft.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 15 - Tipp 1

Erstellen Sie zunächst eine leere Liste. Iterieren Sie dann über alle Token und fügen der Liste das Lemma des Tokens hinzu.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 15 - Tipp 2

Nutzen Sie `my_list.append(item)` und denken Sie daran, in welchen Attribut das (menschenlesbare) Lemma eines Tokens steckt.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 15 - Tipp 3

Für die erweiterte Version: `token` besitzt die Attribute `is_digit` und `is_punct` für unsere Zwecke.

Sie bekommen von Spacy eine Stoppwortliste für ihr Model über `nlp.Defaults.stop_words`. Speichern Sie diese und prüfen Sie, ob dieses Wort in der Liste nicht(!) vorkommt.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 15 - Tipp 4

Für die erweiterte Version: Nutzen Sie `not`, um zu prüfen, ob etwas nicht zutrifft, etwa `if not token.is_currency`. Hängen Sie verschiedene Ausdrücke mit `and` aneinander, um sie nach den Boolschen Regeln auszuwerten, etwa `x > 1 and x < 10`

Hinweis: Die Stoppwörter von Spacy sind kleingeschrieben. Denken Sie beim Prüfen an die Methode `lower()`!

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 16 - Tipp 1

Zunächst macht es Sinn, zu prüfen, ob das Token vom richtigen Typ ist. Mit anderen Worten: eine Zahl.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 16 - Tipp 2

Das Muster YYYY beschreibt, dass Jahreszahlen 4-stellig sein müssen.

Hier gibt es mind. zwei Lösungsansätze:
a) Man kann in diesem Fall das Attribut `shape` einsetzen
b) Man kombiniert beide Bedingungen (Token muss eine Zahl sein und 4-stellig)

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 16 - Tipp 3

Für a): Mit `shape_ == 'dddd'` ermitteln Sie, ob das Token eine vierstellige Zahl ist.
Für b): Die Anzahl an Zeichen eines Tokens bekommen Sie mit der Funktion `len()`. Nutzen Sie auch `is_digit()`.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Aufgabe 18 - Tipp 1

Alle Informationen dazu finden sich auf: https://spacy.io/usage/visualizers

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>

## Endboss "Dict" - Tipps

Gehen Sie im Infomaterial zur Sektion "Dictionaries" und schauen Sie sich an, wie man Werte zu Dictionaries hinzufügt.

Sie können mit `if my_string in my_list:` in Python prüfen, ob sich in einer Liste ein Eintrag befindet.

Für die erweiterte Version: Schauen Sie sich die Sektion "Dictionaries sortieren" im Infomaterial genauer an. Es werden dort zwei Wege vorgestellt, ein Dict zu sortieren. Finden Sie heraus, wie Sie ihr Dict umkehren können.

[nach oben](#Linguistic-Features-I-Token-und-Lemmata)
<div style="height: 100vh"></div>
