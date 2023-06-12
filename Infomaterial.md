# Workshop: Python für Geisteswissenschaftler II - Einführung in NLP

**Service Center for Digital Humanities (SCDH) Uni Münster**

## Jupyter Notebooks

1. Am Ende jeder Zelle kann etwas ausgegeben werden, indem man einfach die Variable oder den Ausdruck schreibt. Es ist kein `print` erforderlich.

2. Kommentare in Python lassen sich in Notebooks mit `STRG-/` (auf dem Num-Block) für ein oder mehrere ausgewählte Zeilen erzeugen

3. Mit `SHIFT-TAB` bekommt man oft mehr Informationen zu einem Ausdruck.

4. Die Ausgabe von Zellen lässt sich im Rechtsklick-Menü mit `Clear Outputs` löschen. Außerdem gibt es die Funktion `Enable Scrolling for Outputs`, die das Outputfenster in seiner Höhe begrenzt.

## Spacy im Notebook

1. Spacy installieren: 

```python
!pip install spacy
```
(Dieser Vorgang ist pro Notebook nur einmal notwendig. Danach können diese Zeilen mit einem vorangestellten `#` auskommentiert werden.)

2. Deutsches Language Model für Spacy installieren:  

```python
!python -m spacy download de_core_news_sm
```
Übersicht aller Models: https://spacy.io/usage/models  
(Dieser Vorgang ist pro Notebook [eigentlich sogar pro VM-Instanz] nur einmal notwendig. Danach kann diese Zeile mit einem vorangestellten `#` auskommentiert werden.)

# Python

_Literaturhinweis_: Viele dieser Beispiele entstammen aus: https://www.w3schools.com/python

### Einige Grundbegriffe

**Variablen**

Variablen speichern Werte.

    my_string = 'foo' # Eine Variable mit dem String 'foo' als Inhalt

**Methoden**

Methoden sind an Objekte gebunden und ändern den Zustand dieser.

    my_horse.walk()   # Die Methode 'walk()' lässt das Objekt 'my_horse' loslaufen

**Attribute**

Attribute sind Eigenschaften von Objekten und können aufgerufen, verändert und gelöscht werden.

    my_horse.color    # Das Attribut 'color' gibt uns die Farbe unsere Objekts zurück

**Funktionen**

Funktionen sind Codeblöcke, die ausgeführt werden, sobald sie aufgerufen werden

    len(my_list)      # Die (Build-In) Funktion 'len' gibt die Länge von 'my_list' zurück

**Parameter, auch: Argumente**

Funktionen können Parameter übergeben werden. Das können Werte oder Funktionen sein
    
```python=
def add_one_function(n):
  return n+1 

add_one_function(5) # Gibt "6" zurück
```
    
    
    


### Einrückung

Python nutzt Einrückungen, um Code-Teile voneinander zu trennen. Siehe:

```python=
for item in item_list:
    print(item)
```

Andere Sprachen, etwa _JavaScript_, nutzen zu diesem Zweck geschweifte Klammern:

```js=
for item in item_list {
print(item) # Das "print" wird der Lesbarkeit halber i.d.R. auch eingerückt
}
```
_Hinweis_: Eine Python-Einrückung ist definiert auf einen Tab(ulator). Ein Tab ist definiert als 4 Leerzeichen.

### Variablen

Variablen können Daten speichern. Python kennt kein Kommando, um Variablen zu deklarieren (wie etwa in Java). Stattdessen wird der Variablen direkt ein Wert zugewiesen. (Sie wird *initialisiert*.)
```python
my_text = 'foo'    # Einen String in einer Variablen ablegen
my_list = [1,2,3]  # Eine Liste in einer Variablen ablegen
my_datatable = pd.read_csv(filename) # Variable zu Dataframe zuweisen

counter = 0   # Setze 'counter' auf 0
counter += 1  # Zähle 'counter' hoch, entspricht: counter = counter + 1
counter -= 1  # Ziehe von 'counter' eins ab
```

### Tupel

Mit Tupeln lassen sich mehrere Werte in einer Variablen speichern. Dies kann z.B. nützlich sein, um eine Zeile für eine Tabelle zu speichern.
```python
my_tuple = ('foo','bar','baz')  # Tupel mit drei Werten
my_tuple.sort() # Sortiert das Tupel, hier ('bar','baz',foo')
```

### Schleifen

Mit Schleifen iteriert man über Listen und listenähnlichen Objekten. Hier wird jedes Element ausgegeben:

```python
for item in item_list:
    print(item)
```

### Wahrheiten und Verzweigungen

Wahrheitswerte, auch Boolsche Ausdrücke (`True`, `False`), können durch bestimmte Operationen erzeugt werden. Sie steuern oft das Verhalten von Verzweigungen.

    a == b  # a ist gleich b
    a != b  # a ist nicht gleich b
    a < b   # a ist kleiner als b
    a <= b  # a ist kleiner oder gleich b
    a > b   # a ist größer als b
    a >= b  # a ist kleiner oder gleich b
    
### Kontrollstrukturen: Bedingte Ausführung

Oft genügt das Prüfen einer einzigen Wahrheitsbedingung:

```python
a = 200
b = 33
if b > a:
  print("b is greater than a")
```

Wenn die Bedingung nicht zutrifft, wird der `else`-Zweig aufgerufen:

```python
a = 200
b = 33
if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")
```  
Es können auch mehrere Bedingungen in einer festen Reihenfolge geprüft werden. Trifft der Ausdruck in `if` nicht zu, lassen sich beliebig viele `elif` anfügen und zum Schluß ein `else`:

```python
a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")
```

### Funktionen

Eine Funktion ist ein Codeblock, der nur ausgeführt wird, wenn er aufgerufen wird.  
An Funktionen können Daten, sogenannte Parameter, übergeben werden.  
Eine Funktion kann Daten mit einem `return`-Statement als Ergebnis zurückgeben.  

1. Eine Funktion ohne Parameter, die etwas in die Ausgabe schreibt:

```python=
def hello_function():
  print("Hello from a function") 

hello_function() # Aufrufen der Funktion, gibt "Hello from a function" zurück
```
2. Eine Funktion mit Parameter, die den Wert plus 1 zurückgibt
```python=
def add_one_function(n):
  return n+1 

add_one_function(5) # Gibt "6" zurück
```
3. Eine Funktion, die die Summe zweier Werte zurückgibt
```python=
def sum_function(n,m):
  return n+m 

sum_function(4,3) # Gibt "7" zurück
```

Python-Funktionen nehmen zwei "Typen" von Parametern an, `arguments` auch `args` und `keyword arguments` auch `kwargs`. `args` stehen immer vor `kwargs`.

```python
my_func(word)                                   # Nur ein arg
my_func(word, corpus=my_corpus)                 # Ein arg und ein kwarg
my_func(word, corpus=my_corpus, cleaned=True)   # Das zweite kwarg ist ein Boolean
```

### Strings und Methoden von Strings

```python
my_string[:4]   # Gibt die ersten 4 Zeichen des Strings aus
len(my_string)  # Gibt die Länge des Strings aus

my_string.replace('-', ' ') # Ersetzt alle Bindestriche mit Leerzeichen
my_string.startswith('Hi')  # Gibt "True" zurück, wenn der String mit "Hi" beginnt 
my_string.split(',')  # Trennt den Text an ',' in Elemente und fügt sie einer Liste hinzu
my_string.find(',')   # Gibt die erste Indexposition von ',' zurück, falls im Text
my_string.count(',')  # Zählt alle Vorkommnisse von ','
','.join(my_list)     # Fügt alle Elemente kommasepariert zu einem String zusammen

my_string.lower()   # Alle Zeichen von 'my_string' in Kleinbuchstaben
my_string.upper()   # Alle Zeichen von 'my_string' in Großbuchstaben
my_string.title()   # Alle Satzanfänge groß
my_string.islower() # Prüft, ob alle Buchstaben Kleinbuchstaben sind

my_string.strip()  # Entfernt Leerzeichen am Beginn und Ende des Strings
my_string.lstrip() # Entfernt Leerzeichen am Beginn des Strings
my_string.rstrip() # Entfernt Leerzeichen am Ende des Strings

f'Hi {name}'       # Fügt den Inhalt von 'name' in den String ein
```

### Listen und Methoden von Listen

 ```python
my_list = []  # Erzeugt eine leere Liste

my_list[0]          # Gibt das erste Element zurück
my_list[-1]          # Gibt das letzte Element zurück
my_list.append(item) # Fügt item der Liste hinzu
my_list.insert(index, item) # Fügt item an Indexposition index ein
my_list.pop()        # Entfernt das letzte Element und gibt es zurück
my_list.pop(i)       # Entfernt das i-te Element und gibt es zurück
my_list.remove(i)    # Entfernt das erste Element mit dem Wert(!) i
my_list1 + my_list2  # Kombiniert zwei Listen  

list(set(my_list))   # Lösche Duplikate einer Liste
my_list.reverse()    # Kehrt die Liste um (in-place)
my_list.sort()       # Sortiert die Liste (in-place)
sorted(my_list)      # Sortiert die Liste (Build-In Funktion)
",".join(my_list)    # Fügt alle Elemente kommasepariert zu einem String zusammen
```

### Slice mit Listen

```python
my_list[i:j:n]  # Gibt das i-te bis j-te Element der Liste in n Schritten zurück

my_list[:-1]  # Gibt alle Elemente außer das letzte zurück
my_list[-2:]   # Gibt die letzten beiden Elemente zurück

my_list[::-1]    # Alle Elemente in ungekehrter Reihenfolge
my_list[1::-1]   # Die ersten beiden Elemente, umgekehrt
my_list[:-3:-1]  # Die letzten beiden Elemente, umgekehrt
my_list[-3::-1]  # Alle, außer die letzten beiden, umgekehrt
```

### Dictionaries

Dictionaries sind aufgebaut wie Lexika aus dem Alltag: Es gibt einen Key (ein Schlagwort) und einen Value (einen Eintrag). Aufgrund dieser Struktur sind sie nicht direkt iterierbar, d.h. man kann nicht "drüber laufen", wie bei einer Liste. 

```python
my_dict = {}        # Neues Dictionary

my_dict['foo'] = 1  # Wort 'foo' hinzufügen
my_dict['bar'] = 1  # Wort 'bar' hinzufügen
my_dict['foo'] += 1 # Wort 'foo' hochzählen

my_dict = {'foo': 2, 'bar': 1}
my_dict                   # Gibt "{'foo': 2, 'bar': 1}" aus
my_dict.keys()            # Gibt "dict_keys(['foo', 'bar'])" aus
my_dict.values()          # Gibt "dict_values([2, 1])" aus
my_dict.items()           # Gibt "dict_items([('foo', 2), ('bar', 1)])" aus

my_dict.values()[0]       # TypeError: 'dict_values' object is not subscriptable
list(my_dict.values())[0] # Jetzt kann das dict wie eine Liste behandelt werden
```

### Sortieren

**Listen**

Listen in Python verfügen über die Methode `sort()` und müssen daher i.d.R. nicht über die Build-In Funktion `sorted()` sortiert werden.

    my_list = [1,4,9,3,5,5]
    my_list.sort()
    my_list # Gibt [1, 3, 4, 5, 5, 9] zurück

**Dicts**

Dictionaries haben keine Methode `sort()`. Daher muss man `sorted()` nutzen.

`sorted()` hat drei Parameter, von denen nur der erste obligatorisch ist.  
Der 1. Parameter ist das Objekt, was sortiert werden soll. Es muss möglich sein, über diesen Datentyp zu iterieren, d.h. `list` und `dict.items()` sind möglich, aber nicht das "reine" `dict`.   
Der 2. Parameter ist eine Funktion, die mit `key=` angegeben wird.
Der 3. Parameter gibt an, ob die Ausgabe umgekehrt erfolgt.

```python
def give_value(tuple):
    return tuple[1]

sorted(my_dict.items(), key=give_value)
sorted(my_dict.items(), key=give_value, reverse=True) # umgekehrt sortiert
```
_Hinweis_: Die Funktion wird als Parameter übergeben und nicht aufgerufen, daher steht dort nicht `give_value()`.

Man kann sich den Umweg über eine Funktion auch sparen, wenn man nichts weiteres mit den Werten vor hat. Dafür hat Python einen Operator, den man allerdings separat importieren muss:

```python
from operator import itemgetter
sorted(my_dict.items(), key=itemgetter(1))
```

### Daten importieren

Möchte man externe Daten lesen, etwa Dateien, Datenbank- oder Netzwerkverbindungen, ist es wichtig, diese Kanäle wieder zu schließen. Sonst kommt es zu einem sog. `Memory Leak`: Das Programm hat weiterhin Zugriff auf diese Datei/Ressource und reserviert dafür evtl. große Mengen an Speicher. In Python kann man für solche Fälle den `Context Manager` nutzen.

Öffne eine Datei, lese seinen Inhalt in die Variable `my_text` und schließe die Datei wieder:
```python=
with open('some_text.txt', 'r') as file:
   my_text = file.read()
```      

Öffne eine CSV Tabelle, schreibe den Inhalt in die Liste `my_table` und schließe die Datei:
```python=
import csv 

my_table = []
with open('import.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        my_table.append(row)
```

### Daten exportieren

Schreibe einen Text/String in eine Datei:

```python=
document = 'a long text'

with open('doc.txt', 'w') as file:
    file.write(document)
```

Schreibe aus der Liste `my_list` in `export.csv`:
```python=
import csv

with open('export.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerow(['column_name_1','column_name_2'])
    for row in my_list:
        writer.writerow(row)
```     


### Hinweis zu Generatoren

Treten folgende Meldungen auf

    <generator at 0x7f9016668470>
    TypeError: 'generator' object is not subscriptable
    
hat man es mit einem sog. Generator zu tun. Dieser Datentyp gibt bei jedem Aufruf einen Wert zurück. 

Um einen Generator, hier `doc.sents`, in eine Liste umzuwandeln, damit man darüber iterieren kann, nutzt man:

    my_list = list(doc.sents)
    
### Hinweis zu In-Place

In-Place beschreibt, ob eine Operation den Inhalt der Variablen direkt verändert oder nicht. Das hängt u.a. damit zusammen, ob der zugrundeliegende Datentyp änderbar ("mutable") oder unveränderbar ("immutable") ist.

Veränderbar:

    my_list.sort()            # Sortiert die Liste in-place
    my_list.append(item)      # Fügt item der Liste in-place hinzu
    
    sorted(my_list)           # Sortiert die Liste in-place, speichert sie aber nicht
    my_list = sorted(my_list) # Speichert das Ergebnis und überschreibt 'my_list'
    
Unveränderbar:
    
    my_string = ' foo '
    my_string.strip()             # Gibt 'foo' zurück
    print(my_string)              # Gibt nach wie vor ' foo ' zurück
    my_string = my_string.strip() # Speichert das Ergebnis und überschreibt 'my_string'



# Pandas

Pandas hat zwei grundlegende **Datenformate**: [Dataframes](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) und [Series](https://pandas.pydata.org/docs/reference/api/pandas.Series.html#pandas.Series). 
**Dataframes** sind Datentabellen. Man kann man sie sich vorstellen, wie Exceltabellen. Sie bestehen aus Spalten und Zeilen. **Series** hingegen sind Listen und oft ein Ausschnitt aus einem Dataframe, etwa eine Spalte oder eine Zeile.


## Pandas Cheatsheet

**Daten importieren**

    pd.read_csv(filename)     # Aus CSV Datei lesen
    pd.read_table(filename)   # Aus TSV Datei lesen
    pd.read_excel(filename)   # Aus Excel Datei lesen
    pd.read_json(json_string) # JSON aus String, URL oder Datei lesen
    pd.read_html(url)         # HTML aus String, URL oder Datei lesen
    pd.read_clipboard()       # Aus der Zwischenablage lesen
    pd.read_sql(query, connection_object) # Von einer SQL Tabelle lesen
    pd.DataFrame(dict)        # Aus einem Dict, Keys sind Spaltennamen
    
**Daten exportieren**
    
    df.to_csv(filename)   # Schreibe in eine CSV Datei
    df.to_excel(filename) # Schreibe in eine Excel Datei
    df.to_sql(table_name, connection_object) # Schreibe in einen SQL Table
    df.to_json(filename)  # Schreibe in eine JSON Datei
    
**Daten analysieren**

    df.head(n)    # Die ersten n Zeilen eines DataFrame
    df.tail(n)    # Die letzten n Zeilen eines DataFrame
    df.shape      # Bei 2D: Gib die Anzahl an Spalten und Zeilen aus
    df.info()     # Infos zu Index, Datatype und Speicherbelegung
    df.describe() # Statistische Werte für numerische Spalten

**Daten manipulieren**

    df[col]           # Spalten "col" als Series zurückgeben
    df[[col1, col2]]  # Spalten "col1" und "col2" als neuen DF zurückgeben
    df.iloc[0,:]      # Die erste Zeile zurückgeben
    df.iloc[0,0]      # Das erste Element der ersten Zeile zurückgeben
    s.iloc[0]         # Element an Indexposition 0 zurückgeben


# Regulare Ausdrücke / Regular Expressions (Regex)

Reguläre Ausdrücke sind eine Sequenz von Zeichen, die ein Suchmuster beschreiben. Umgangssprachlich formuliert könnte folgender Fall auftreten: "Ich möchte in einem Text alle Datumsangaben finden, die nach dem Muster `MM.DD.YYYY` aufgebaut sind". Sie definieren also das Datum als Muster und suchen anschließend dieses Muster.

### Importieren der Bibliothek

```python
import re     # Für alle Regex-Operationen notwendig
```

### re.search()

Die Funktion `search()` ermöglicht, ein Muster in einem String mithilfe eines regulären Ausdrucks zu suchen. `search()` gibt ein `RE_Match object` zurück, welches Metadaten wie die Position des Matches und den gematchten Text selbst enthält.

Wichtig: `search()` gibt nur das erste(!) Ergebnis zurück

Beispiele:
```python
re.search(r'^Buch', my_string) # Findet das Wort "Buch" am Anfang von `my_string`
re.search(r'Buch$', my_string) # Findet das Wort "Buch" am Ende von `my_string`
  ```  
### re.findall()

Die Funktion `findall()` gibt eine Liste aller(!) Vorkommnisse zurück:
```python
re.findall(r'Buch', my_string) # Gibt z.B. ['Buch','Buch','Buch'] zurück
 ```   
### re.sub()

Die Funktion `sub()` ermöglicht, alle gefundenen Ausdrücke durch einen neuen zu ersetzen. 
```python
re.sub(r'Buch', 'Foliant', my_string) # Ersetzt alle Wörter "Buch" durch "Foliant"
```
### Übersicht Reguläre Ausdrücke

Reguläre Ausdrücke lassen sich auf vielfältige Weise zusammensetzen. Oft werden dazu sog. Tokens eingesetzt, die z.B. eine Gruppe von Zeichen beschreiben, etwa `\d` sind alle Zahlen von 0-9 (digits). Andere bezeichnen Mengen (Quantifier), etwa `*`. Beide Arten können miteinander kombiniert werden, sodass `\d*` bedeutet: keine(!) oder mehrere Zahlen.

Eine vollständige Übersicht und einen "Playground" findet man hier: https://regex101.com/

Kurze Übersicht über gängige Muster:

```python
r'^Buch'     # Das Wort "Buch" am Anfang des Strings
r'Buch$'     # Das Wort "Buch" am Ende des Strings
r'Buch'      # Jedes Vorkommnis des Wortes "Buch" im String
r'\['        # Jedes Zeichen "[" im String
r'\s'        # Jedes Leerzeichen im String
r'\d'        # Jede Zahl (0-9) im String
r'\d{4}'     # Genau vier Zahlen hintereinander
r'[a-zA-Z]'  # Alle lateinischen Buchstaben im String ohne Sonderzeichen
```



