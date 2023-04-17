# Workshop: NLP mit Python - Aufgaben 4

**03. Juni 2022 - Service Center Digital Humanities (SCDH) Uni Münster**

Bitte nutzen Sie für alle Aufgaben ein Jupyter Notebook in 
https://jupyterhub.wwu.de  

(Falls jemand KEIN WWU-Account hat, kann auch Colab genutzt werden.
Erfordert einen Google Account: https://colab.research.google.com/)

# Aufgaben

## Rule Based Matching

Material:
* https://explosion.ai/demos/matcher
* https://spacy.io/usage/rule-based-matching

24. Nutzen Sie den Explorer unter https://explosion.ai/demos/matcher um sich mit den Möglichkeiten des Rule-Based Matching vertraut zu machen.
25. Orientieren Sie sich am Beispiel unter https://spacy.io/usage/rule-based-matching#matcher und schreiben Sie einen Matcher, bei dem Sie `text` zugrunde legen. (Überlegen Sie, welche Zeilen des Beispielcodes Sie im Notebook weglassen können, da Sie bereits an früherer Stelle vorkommen). Suchen Sie dann nach dem Ausdruck "Zukunft" und nutzen Sie dazu folgendes Pattern:  
`pattern = [{"LOWER": "zukunft"}]`.  
Geben Sie zu jedem Eintrag in ihrem Matcher-Objekt den Text [das vorherige Wort] und den dazugehörigen Satz aus.

26. Erstellen Sie einen Matcher, welcher alle Textstellen zurückgibt, bei denen sowohl von "Künstlicher Intelligenz" als auch von "KI" die Rede ist. Wie könnte ein solches Pattern aussehen?

**DUNGEON**

1. Extrahieren Sie aus der Datei `tweets.txt` [oder `tweets.csv`] alle URLs und E-Mail Adressen.
2. Versuchen Sie zusätzlich, zu jedem Tweet mit einem Treffer auch die Hashtags zu finden, falls diese im Tweet vorkommen.
3. Speichern Sie die Daten geordnet in einer Tabelle.

**ENDBOSS "PATTERN OF THE DARK DESCENT"**

Finden Sie heraus, welche Person in `text` etwas tut. Lassen Sie sich zunächst nur den Satz oder das zugehörige `span` ausgeben. Überlegen Sie - nur konzeptionell -, wie Sie herausfinden könnten, WAS diese Person tut.

# Tipps 

## Aufgabe 25 - Tipp 1

Sie benötigen zunächst den Matcher via `from spacy.matcher import Matcher`.
Dieser bekommt als Parameter das Vokabular Ihres Dokuments, also `nlp.vocab` übergeben.

Fügen Sie dann ein Pattern hinzu, indem Sie das Pattern als zweiten Parameter an `matcher.add()` übergeben

[nach oben](#Rule-Based-Matching)
<div style="height: 100vh"></div>

## Aufgabe 25 - Tipp 2

Denken Sie daran, dass Pattern in Spacy immer Listen sein müssen, siehe:
`pattern = [{"LOWER": "foo"}]`

Wenn Sie `matches = matcher(doc)` verwenden, ist `matches` eine Liste mit drei Einträgen.
Nutzen Sie for `match_id, start, end in matches:` um sich ein `span` zu erzeugen.

Für den erweiterten Teil: Da Sie nur `span` und nicht `token` zur Verfügung haben, können Sie das vor dem Treffer vorkommende Token nur über den Index von `span.doc` bekommen.

[nach oben](#Rule-Based-Matching)
<div style="height: 100vh"></div>

## Aufgabe 25 - Tipp 3
    
Spans sind von Ihnen angegebene Bereiche, siehe `span = doc[start:end] `.
Spans haben u.a. die Attribute `text` und `sent`.

Für den erweiterten Teil: Mit `span.doc[0]` bekommen Sie das erste Element im gesamten Dokument. Sie möchten aber das Element vor `span.start` aufrufen. Denken Sie daran, dass Sie auch Ausdrücke verwenden können, z.B.`span.doc[12-1]`

Für die erweiterte Version: Für das vorhergehende Token können Sie `span` nicht direkt nutzen. Sie müssen `doc` verwenden, welches unter `span` liegt: `span.doc[span.start - 1]`

[nach oben](#Rule-Based-Matching)
<div style="height: 100vh"></div>

## Aufgabe 26 - Tipp 1
    
Sie können hierbei den Code der letzten Aufgabe verwenden. Tauschen Sie lediglich das Pattern aus.

[nach oben](#Rule-Based-Matching)
<div style="height: 100vh"></div>

## Aufgabe 26 - Tipp 2
    
Wenn Sie folgendes definiert haben:
```python
matcher.add("p1", patterns)
```
Dann muss `patterns` eine Liste sein, die mindestens eine Liste enthält.

[nach oben](#Rule-Based-Matching)
<div style="height: 100vh"></div>

## Endboss "Pattern" - Tipps
    
Importieren Sie den Matcher, falls nicht bereits geschehen.

Denken Sie an `matcher = Matcher(nlp.vocab)` um das Vokabular zu laden.

Das Pattern besteht optimalerweise aus einer "Entity" vom Typ "Person" und einem darauf folgenden Verb.

Die Matches können Sie mit einer simplen for-Schleife aufrufen:
```python=
for _, start, end in matches:
    span = doc[start:end]
```

[nach oben](#Rule-Based-Matching)
<div style="height: 100vh"></div>
