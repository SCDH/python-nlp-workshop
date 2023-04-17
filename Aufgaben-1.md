# Workshop: NLP mit Python - Aufgaben 1

**03. Juni 2022 - Service Center Digital Humanities (SCDH) Uni Münster**

Bitte nutzen Sie für alle Aufgaben ein Jupyter Notebook in 
https://jupyterhub.wwu.de  

(Falls jemand KEIN WWU-Account hat, kann auch Colab genutzt werden.
Erfordert einen Google Account: https://colab.research.google.com/)

# Aufgaben

## Data Cleaning / Preprocessing

Material:
* https://www.w3schools.com/python
* Das Infomaterial zu diesem Workshop

1. Erstellen Sie ein Notebook, installieren Sie Spacy [und Pandas] sowie das Model `de_core_news_sm`
2. Lesen Sie die Datei `bpb.txt` ein und speichern Sie sie in der Variablen `text`
3. Geben Sie den Text aus. Was fällt Ihnen in Bezug auf Data Cleaning auf?
4. Transformieren Sie alle Buchstaben aller Wörter in Kleinbuchstaben und speichern Sie diesen Text als `lower_text`
5. Ersetzen Sie alle Zeilenumbrüche mit Leerzeichen [und entfernen Sie alle Literaturhinweise] und speichern Sie den Text in `clean_text`
6. Zerlegen Sie den Text in eine Liste von Sätzen mit Namen `sents`. Überlegen Sie, an welchen Zeichen Sie trennen können und was sich für Probleme ergeben
7. Zerlegen Sie den Text in eine Liste von Wörtern mit Namen `words` anhand der Leerzeichen
8. Zeigen Sie die ersten fünf Wörter [des zweiten Satzes] an [und entfernen Sie dabei vorangestellte Leerzeichen]. Überlegen Sie, welche ihrer Variablen Sie dafür einsetzen können
9. Zeigen Sie die letzten fünf Wörter von `clean_text` an

**DUNGEON**

1. Importieren Sie die Pandas Bibliothek und lesen Sie die Datei `bpb.csv` ein
2. Geben Sie die ersten 3 Zeilen der Tabelle aus
3. Speichern Sie die Spalte `text` in einer neuen Variablen `texts`
4. Speichern Sie den letzten Text aus `texts` in der Variablen `single_text` und geben Sie diese aus

**ENDBOSS: "FUNC OF THE WRONG SOUL"**

Schreiben Sie eine Funktion namens `metadata()`, die `text` als Parameter bekommt und [den Titel des Dokuments,] die Anzahl der Sätze, Wörter und Zeichen [mithilfe von formatierten Strings oder als Dictionary] zurückgibt. Die Ausgabe soll in etwa so aussehen:
```
Dokument: Ideen zur Rolle von künstlicher Intelligenz im Klassenzimmer der Zukunft
Sätze: 70
Wörter: 1594
Zeichen: 11772
```
<div style="height: 100vh"></div>

# Tipps

## Aufgabe 1 - Tipp 1

Das Installieren ist ein Prozess außerhalb des Notebooks, daher muss ein `!` vorangestellt werden. Zum Einsatz kommt der Python Package Manager `pip`. 

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 1 - Tipp 2

Pakete lassen sich installieren mit `!pip install <name>`.  
Spacy Models hingegen mit `!python -m spacy download <name>`.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 2 - Tipp 1

Hier kommt der sog. `Context Manager` zum Einsatz, der mit `with open` beginnt. Im darunter folgenden Funktionsblock muss die Methode `read()` aufgerufen werden.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 2 - Tipp 2

Allgemein sieht der Code so aus:  
```python=
with open('some_text.txt', 'r') as file:
   my_text = file.read()
```     

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 3 - Tipp 1

Ist der Text so lesbar? Oder anders: Könnte man ihn so in einem Medium veröffentlichen?

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 4 - Tipp 1

Für diese Aufgabe nutzen sie die Methode `lower()`, die auf den String angewandt wird.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 5 - Tipp 1

Ersetzungen lassen sich in Python sehr schnell mit `replace()` lösen. Nicht vergessen: Das Ergebnis wieder einer Variablen zuweisen!  

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 5 - Tipp 2

Zeilenumbrüche sind nicht-sichtbare Steuerzeichen und können mit`\n` gefunden werden.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 5 - Tipp 3

Für den erweiterten Teil: Die Literaturhinweise bestehen aus einem Muster, nämlich eine Zahl in Klammern. Solche Muster lassen sich mit regulären Ausdrücken abfragen. Im Infomaterial finden Sie die Rubrik "Reguläre Ausdrücke".

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 5 - Tipp 4

Für den erweiterten Teil: Wenn man `import re` in seinem Skript hat, wurde ein Objekt namens `re` importiert. Dieses Objekt hat eine Methode zum Ersetzen, die allerdings nicht `replace()` sondern `sub()` heißt.  

Im Gegensatz zu regulären Strings z.B. `'ein_string'` in Python sind reguläre Ausdrücke oft mit einem "r" vorangestellt, etwa: `r'^\s*'`.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 6 - Tipp 1

Um Strings an bestimmten Zeichen zu zerlegen, wird die Funktion `split()` eingesetzt. Als Parameter übergeben Sie die Zeichen, die als "Schnitt" fungieren sollen. 

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 6 - Tipp 2

Übergibt man`split()` kein Zeichen als Parameter, wird standardmäßig das Leerzeichen benutzt.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 7 - Tipp 1

Auch hier kann`split()` eingesetzt werden, allerdings mit einem anderen Parameter. Vergessen sie nicht, eine neue Variable für das Ergebnis anzulegen.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 8 - Tipp 1

Sie können hier auf ihre Liste von Wörtern in `words` zurückgreifen.   

Für den erweiterten Teil: Nutzen Sie dafür ihre Liste von Sätzen.  

Um nur einen Teil der Liste zurückzugeben, nutzen Sie die Slice Funktionen von Python.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 8 - Tipp 2

`my_list[i:j]` gibt das i-te bis j-te Element der Liste zurück.

Für den erweiterten Teil: Überlegen Sie, wie Sie an das zweite Element in `sents` gelangen und wie sie dieses Element wieder in Wörter zerlegen können.  

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 8 - Tipp 3

Um ein Zeichen am Anfang und Ende eines Strings zu entfernen, nutzen Sie die `strip()` Funktion. Ohne Angabe von Parametern entfernt die Funktion Leerzeichen.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 9 - Tipp 1

Nutzen Sie hier die Slice Funktionalität von Listen.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Aufgabe 9 - Tipp 2

Überlegen Sie, wie man die letzten Elemente einer Liste in der Slice Notation auswählt.

[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>

## Endboss "Func" - Tipps

Nutzen Sie zum Ersetzen `replace()` und zum Trennen `split()`. Sie können diese Methoden auch hintereinander hängen.  
Längen von Listen ermitteln Sie mit `len(my_list)`.

Für die erweiterte Version: Um den ersten Satz zu ermitteln können Sie z.B. `re.search()` benutzen. Denken Sie daran, dass Sie dann ein Matcher-Objekt zurück bekommen und noch keinen String.

Formatierte Strings können Variablen enthalten und sehen folgendermaßen aus:
        
    f'Hi {name}' # Fügt den Inhalt von 'name' in den String ein
        
        
[nach oben](#Data-Cleaning--Preprocessing)
<div style="height: 100vh"></div>
