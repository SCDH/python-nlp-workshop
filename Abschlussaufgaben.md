# Workshop: NLP mit Python - Information Extraction Notebook

**03. Juni 2022 - Service Center Digital Humanities (SCDH) Uni Münster**

## Projekt "SchülerInnen stellen sich vor"

**Schwierigkeit: Einfach**
**Methoden: NER und POS-Tagging**

1. Lesen Sie die Datei `biographien.txt` ein.
2. Trennen Sie an den Zeichen `---` den Text in einzelne Dokumente. Jedes Dokument soll gesondert behandelt werden.
3. Extrahieren Sie aus dem Text Name UND Geburtsort der SchülerInnen.
4. Nutzen Sie NER, um die Personen zu identifizieren.
5. Extrahieren Sie das Alter der Person.
6. Da die Informationen satzweise klar getrennt sind, können Sie Satz für Satz vorgehen.
7. Versuchen Sie die Hobbies über POS-Tagging zu ermitteln. Schauen Sie sich die Text an und überlegen Sie, welche Wortart hier Sinn macht.
8. Tipp: Mit dem Model `de_core_news_md` bekommen Sie bessere NER-Ergebnisse.

Sie können folgende Keyword-Liste für die Hobbies verwenden:

    hobby_keywords = ['Hobbies','Hobby','beschäftige','gerne','spiele','Freizeit','mag']


## Projekt "Sitzungsprotokolle des Stadtrates"

**Schwierigkeit: Schwer**
**Methoden: Dependency Parser, Rule Based Matching**

1. Lesen Sie Datei `sitzungsprotokolle.txt` ein.
2. Trennen Sie an dem Wort `Beschluss` den Text in einzelne Dokumente. Jedes Dokument soll gesondert behandelt werden.
3. Extrahieren Sie die wichtigen Informationen aus jeweiligen Abschnitt. Worüber wurde a) diskutiert, was wurde b) entschieden und was wurde c) vertagt? 
4. Für diese drei Fälle können Sie die unten angegebene Liste an Keywörtern verwenden. 
5. Nutzen Sie Rule Based Matching, um die Lemmata der Wörter ausfindig zu machen, z.B. "diskutieren".
6. Versuchen Sie dann an weitere Informationen zu gelangen. Dazu können Sie das Dependency Parsing nutzen. Überlegen Sie, welche `dep_`-Tags sinnvoll sind, wenn Sie bspw. bereits das Verb eines Satzes bereits ermittelt haben.

Keyword-Liste: 
```python
decision_noun_list = ['Entscheidung','Abstimmung','Wahl','Urteil','Votum']
discussion_noun_list = ['Diskussion','Debatte','Gespräch','Eröterung']

decision_verb_list = ['entscheiden','abstimmen','billigen','unterstützen','erlassen','erlässt','erteilen','erteilt']
discussion_verb_list = ['diskutieren','debattieren','beraten','untersuchen']
postponed_verb_list = ['vertagt','aufgeschoben','stunden','verlängern','aufschieben']
```

<div style="height: 100vh"></div>
