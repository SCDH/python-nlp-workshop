# Workshop: NLP mit Python - Aufgaben 3

**03. Juni 2022 - Service Center Digital Humanities (SCDH) Uni Münster**

Bitte nutzen Sie für alle Aufgaben ein Jupyter Notebook in 
https://jupyterhub.wwu.de  

(Falls jemand KEIN WWU-Account hat, kann auch Colab genutzt werden.
Erfordert einen Google Account: https://colab.research.google.com/)

# Aufgaben

## Linguistic Features II: Parser und Named Entity Recognition

Material:
* https://universaldependencies.org/u/pos/
* https://github.com/explosion/spaCy/blob/master/spacy/glossary.py#L279
* https://homepage.ruhr-uni-bochum.de/stephen.berman/Korpuslinguistik/Tagsets-STTS.html
* http://www.sfs.uni-tuebingen.de/resources/stts-1999.pdf
* https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/annotation/tiger_scheme-syntax.pdf

_Hinweis_: Für die folgenden Aufgaben nutzen Sie bitte den bereinigten Inhalt aus `clean_text`!

18. Zeigen Sie `sentence` als Dependence Tree mit Displacy an
19. Geben Sie von allen Token das jeweilige POS- und Dependency-Label aus und lassen Sie letzteres von Spacy erklären
20. Finden Sie alle ROOT-Elemente [und die jeweiligen Child-Elemente] und geben Sie sie aus [, ordnen Sie bei der Ausgabe das erste Child-Element vor das ROOT-Element an]
21. Geben Sie alle `noun_chunks` des Dokuments aus, wenn der Chunk mehr als ein Element enthält [und das erste Element kein bestimmter Artikel ("Determiner") ist]
22. Geben Sie alle Named Entities mit Text und Label aus und lassen Sie letzteres von Spacy erklären
23. Zeigen Sie `doc` als NER-markierten Text mit Displacy an

**DUNGEON**

1. Installieren Sie `spacyopentapioca` (https://spacy.io/universe/project/spacyopentapioca) über pip um die Daten von OpenTapioca zu nutzen. OpenTapioca ist ein sog. "Mirror-Server" von Wikidata
2. Laden Sie das etwas größere Model `de_core_news_md`, um mehr Named Entities zu finden
3. Führen Sie `doc = nlp(text)` aus
4. Fügen Sie mit `add_pipe` den Schritt `opentapioca` hinzu
5. Iterieren Sie über `doc.ents` und geben Sie zu jedem Element den Text und folgende Attribute aus: `kb_id_`, `label_`, `_.description` sowie `_.score`

**ENDBOSS "ENTITIES OF THE FORBIDDEN REALM"**

Speicheren Sie alle "Named Entities" und ihre Label (bspw. `ORG`) in einem geeigneten Datenformat [sortieren Sie diese nach Label, löschen Sie alle Duplikate] und exportieren Sie diese Liste in eine CSV-Datei.

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
2. Versuchen Sie zusätzlich, zu jedem Tweet mit einem Treffer auch die Hashtags [und Emojis] zu finden, falls diese im Tweet vorkommen.
3. Speichern Sie die Daten geordnet in einer Tabelle.

**ENDBOSS "PATTERN OF THE DARK DESCENT"**

Finden Sie heraus, welche Person in `text` etwas tut. Lassen Sie sich zunächst nur den Satz oder das zugehörige `span` ausgeben. Überlegen Sie - nur konzeptionell -, wie Sie herausfinden könnten, WAS diese Person tut.

# Tipps 

## Aufgabe 19 - Tipp 1

Auch hier können Sie wieder auf eine for-Schleife zurückgreifen.  
Überlegen Sie, welche Attribute Sie von `token` aufrufen müssen.

[nach oben](#Linguistic-Features-II-Parser-und-Named-Entity-Recognition)
<div style="height: 100vh"></div>

## Aufgabe 19 - Tipp 2

Sie können der Funktion `spacy.explain()` einen String übergeben, der beschrieben werden soll.  
Das Dependency-Attribut gibt einen solchen String zurück, z.B. `VBZ`.

[nach oben](#Linguistic-Features-II-Parser-und-Named-Entity-Recognition)
<div style="height: 100vh"></div>

## Aufgabe 20 - Tipp 1

Erstellen Sie zunächst wieder eine leere Liste, die sie in Ihrer for-Schleife befüllen, wenn die gesuchte Bedingung zutrifft.

Für die erweiterte Version: Sie bekomme alle "Kinder" eines Tokens über das Atribut `children`. Es ist sinnvoll zu prüfen, ob im Attribut `children` überhaupt Einträge vorhanden sind. Überlegen Sie, wie sie die Länge dieses Datentyps prüfen können.

[nach oben](#Linguistic-Features-II-Parser-und-Named-Entity-Recognition)
<div style="height: 100vh"></div>

## Aufgabe 20 - Tipp 2

Als Bedingung definieren wir hier, dass das Dependency-Attribut von `token` gleich dem String `ROOT` ist.

Für die erweiterte Version: Sie müssen den Inhalt des Attributs `children` zunächst in eine Liste umwandeln. Prüfen Sie mit `len()`, ob sich überhaupt Einträge in dieser Liste befinden.

Für die Anordnung der Ausgabe, denken Sie daran, dass Sie mit `print()` auch mehrere Werte ausgeben können, z.B. `print(val_a,val_b)`

[nach oben](#Linguistic-Features-II-Parser-und-Named-Entity-Recognition)
<div style="height: 100vh"></div>

## Aufgabe 21 - Tipp 1

Nutzen Sie in Ihrer for-Schleife wieder einen if-Zweig. Das Attribut `noun_chunks` ist bereits eine iterierbare Liste.

Für die erweiterte Version: Sie prüfen zwei Strings auf Ungleichheit mit dem Operator `!=`.

[nach oben](#Linguistic-Features-II-Parser-und-Named-Entity-Recognition)
<div style="height: 100vh"></div>

## Aufgabe 22 - Tipp 1

Auch hier kommt wieder eine for-Schleife zum Einsatz. Die Entities liegen in `doc.ents`.

[nach oben](#Linguistic-Features-II-Parser-und-Named-Entity-Recognition)
<div style="height: 100vh"></div>

## Aufgabe 22 - Tipp 2

Sie können der Funktion `spacy.explain()` einen String übergeben, der beschrieben werden soll.  
Das Dependency-Attribut gibt einen solchen String zurück, z.B. `VBZ`.

[nach oben](#Linguistic-Features-II-Parser-und-Named-Entity-Recognition)
<div style="height: 100vh"></div>

## Aufgabe 23 - Tipp 1

Nutzen Sie `displacy.render()` und wählen sie als `style` den String "ent"

[nach oben](#Linguistic-Features-II-Parser-und-Named-Entity-Recognition)
<div style="height: 100vh"></div>

## Endboss "Entities" - Tipps

Die Entities liegen in `doc.ents`. Die Attribute davon finden Sie hier: https://spacy.io/api/doc#ents

Wenn Sie mit einer Liste arbeiten möchten, um ihre Wertepaare aus NER-Label und Text zu speichern, bietet sich das Tupel als Datenformat an.

Schauen Sie sich die Rubrik "Daten exportieren" im Infomaterial an.

Für die erweiterte Version: Suchen Sie nach "Duplikate entfernen" im Infomaterial und schauen Sie sich das Sortieren von Listen an.

[nach oben](#Linguistic-Features-II-Parser-und-Named-Entity-Recognition)
<div style="height: 100vh"></div>
