const to = (a: string[]): { title: string }[] => a.map((a) => ({ title: a }));

export interface node {
    title: string;
    children?: node[];
}

export default [
    {
        title: "a: Produzieren von digitalen Medieninhalten", children: [
            {
                title: 'a1: Produktion konzeptionell und organisatorisch vorbereiten',
                children: to([
                    "a1.1: prüfen, ob die auftragsrelevanten Informationen vollständig und klar verständlich sind und fragen bei Unklarheiten nach.",
                    "a1.2: erstellen ein Konzept (Moodboard/Drehbuch/Storyboard/Shootingboard) für eine einfache digitale Produktion.",
                    "a1.3: wenden einfache Kreativitätstechniken an.",
                    "a1.4: erstellen einen Zeitplan für eine einfache Produktion.",
                    "a1.5: organisieren die benötige Infrastruktur und Materialien für eine Aufnahme. ",
                    "a1.6: treffen Abklärungen für die rechtliche Absicherung und holen die entsprechenden Genehmigungen ein (z.B. Drehgenehmigung, Einverständniserklärung).",
                ])
            }, {
                title: "a2: Digitale Rohdaten erstellen",
                children: to([
                    "a2.1: richten einen Aufnahmeort gemäss Konzept mit allen notwendigen Geräten und Materialien ein.",
                    "a2.2: erstellen Rohdaten mit einer Kamera gemäss Konzept.",
                    "a2.3: erstellen Rohdaten mit einem Audioaufnahmegerät gemäss Konzept. ",
                    "a2.4: überprüfen die Aufnahmen vor Ort.",
                    "a2.5: gehen mit Geräten und Materialien sorgfältig um.",
                    "a2.6: bringen den Aufnahmeort wieder in den ursprünglichen Zustand.",
                    "a2.7: warten Geräte und Materialien bei der Rückgabe fachgerecht (z.B. Materialkontrolle, Reinigung, Mängel melden, Akkus laden)."
                ])
            }, {
                title: "a3: Digitale Rohdaten verarbeiten",
                children: to([
                    "a3.1: übertragen Rohdaten von einem Speichermedium auf die vorgegebene Dateiablage und legen sie korrekt strukturiert ab. ",
                    "a3.2: schneiden Rohdaten (Film, Audio) mit unterschiedlichen Schnitttechniken. ",
                    "a3.3: vertonen den erstellten Filmschnitt (z.B. Musik, Geräusche, Voice-over).",
                    "a3.4: optimieren Audiodaten (z.B. Störgeräusche entfernen, normalisieren).",
                    "a3.5: binden verschiedene Elemente korrekt ein (z.B. einfache Animationen).",
                    "a3.6: nehmen Farbkorrekturen und Farbgebungen vor.",
                    "a3.7: überprüfen, ob das finale Produkt dem Auftrag entspricht.",
                    "a3.8: präsentieren das finale Produkt der Kundin oder dem Kunden."
                ])
            }, {
                title: "a4: Daten archivieren und finales Produkt veröffentlichen",
                children: to([
                    "a4.1: wählen aufgrund der spezifischen Anforderungen von verschiedenen Plattformen das geeignete Zielformat aus.",
                    "a4.2: setzen ausgewählte Dateiformate (Container) und Kompressionsverfahren (Codecs) zielorientiert ein.",
                    "a4.3: exportieren die Daten in das erforderliche Zielformat.",
                    "a4.4: veröffentlichen das finale Produkt gemäss Kundenwunsch und mit plattformspezifischen Einstellungen.",
                    "a4.5: beschriften und archivieren Daten nach betriebsspezifischen Vorgaben vollständig und strukturiert."
                ])
            }
        ],
    },
    {
        title: "b: Gestalten von Medieninhalten",
        children: [
            {
                title: "b1: Gestaltungsentwürfe entwickeln",
                children: to([
                    "b1.1: führen ein Kundengespräch und holen alle für die Entwicklung der Gestaltungsvorschläge relevanten Informationen ab.",
                    "b1.2: entwickeln Gestaltungsvarianten für Web- und/oder Printprodukte unter Berücksichtigung aller relevanten Aspekte (z.B. Zielgruppe, CI/CD, Typografie, Farbenlehre, Bildsprache, Gestaltungsraster).",
                    "b1.3: präsentieren der Kundin oder dem Kunden Gestaltungsvarianten und erläutern die Vor- und Nachteile",
                    "b1.4: passen den Gestaltungsentwurf an Kundenwünsche an. ",
                ]),
            },
            {
                title: "b2: Grafische Elemente gestalten",
                children: to([
                    "b2.1: wählen aufgrund der vorgegebenen visuellen Sprache und geltender Gestaltungsgesetze passende Schriften und Farben für verschiedene grafische Elemente aus.",
                    "b2.2: animieren grafische Elemente (z.B. Icons, Piktogramme, Diagramme, Banner etc.).",
                    "b2.3: wenden Farbräume und Farbprofile (RGB, CMYK) dem Zielmedium entsprechend an. ",
                    "b2.4: wählen gemäss Auftrag das geeignete Format und Auflösung für verschiedene Elemente.",
                    "b2.5: erstellen in einem vektorbasierten Illustrationsprogramm grafische Elemente.",
                    "b2.6: nehmen in einem pixelbasierten Bildbearbeitungsprogramm einfache Montagen vor. "
                ])
            },
            {
                title: "b3: Layout gestalten",
                children: to([
                    "b3.1: entwickeln gemäss ausgewähltem Gestaltungsentwurf ein einfaches Gestaltungsraster.",
                    "b3.2: erstellen Musterseiten, Absatz- und Zeichenformate unter Berücksichtigung der typografischen Grundlagen.",
                    "b3.3: setzen ein Layout gemäss Kundenwünschen und/oder CI/CD-Vorgaben um. ",
                    "b3.4: definieren Farben und Kontraste für ein Layout.",
                    "b3.5: fügen verschiedene Elemente (z.B. Bilder, Texte, Hintergründe, Logos, Icons, Tabellen etc.) fachgerecht und auf optisch ansprechende Weise in das Layout ein und nehmen allfällige Anpassungen vor.",
                    "b3.6: erstellen in einem Layoutprogramm ein interaktives Produkt.",
                ])
            },
            {
                title: "b4: Gestaltung für Zielmedium aufbereiten",
                children: to([
                    "b4.1: überprüfen vor dem Export das Dateiformat, die Auflösung der Bilder und den Farbraum gemäss Auftrag.",
                    "b4.2: holen Informationen beim Weiterverarbeiter ein und bereiten die Daten entsprechend auf. ",
                    "b4.3: exportieren eine Gestaltung in das dem Auftrag entsprechende Format und organisieren die Datenübergabe.",
                    "b4.4: bereiten ein Layout für einen Druck vor (z.B. Schnitt- und Passermarken). ",
                ])
            }
        ]
    },
    {
        title: "c: Entwickeln und Umsetzen von Marketing- und Kommunikationsmassnahmen",
        children: [
            {
                title: "c1: Marketingkonzept erarbeiten",
                children: to([
                    "c1.1: analysieren nach Absprache mit der Kundin oder dem Kunden Zielgruppen mittels geeigneter Methoden. ",
                    "c1.2: führen eine Konkurrenz-Recherche durch.",
                    "c1.3: führen eine einfache SWOT-Analyse durch.",
                    "c1.4: definieren relevante Marketing-Aspekte wie Preis, Produkt, Distribution und Kommunikation.",
                    "c1.5: leiten aus der (Markt)analyse konkrete Kommunikationsmassnahmen ab und halten diese im Marketingkonzept fest.",
                    "c1.6: erstellen eine realistische Zeit- und Kostenplanung der umzusetzenden Marketingaktivitäten.",
                    "c1.7: halten die Ergebnisse der Marketing-Analyse in einem Marketingkonzept übersichtlich und nachvollziehbar fest.",
                    "c1.8: erläutern der Kundin oder dem Kunden die Inhalte eines Marketingkonzepts nachvollziehbar.",
                ])
            },
            {
                title: "c2: Analoge Marketingprodukte konzipieren und Marketingaktivitäten umsetzen",
                children: to([
                    "c2.1: definieren Botschaften und Slogans für analoge Marketingprodukte",
                    "c2.2: konkretisieren analoge Marketingprodukte in Bezug auf relevante Aspekte (z.B. Farbe, Form, Material, Qualität) und halten diese schriftlich fest.",
                    "c2.3: präsentieren der Kundin oder dem Kunden die Analyse und Vorschläge für analoge Marketingprodukte. ",
                    "c2.4: erstellen Textentwürfe für analoge Marketingprodukte.",
                    "c2.5: wählen geeignete Bilder für analoge Marketingprodukte aus.",
                    "c2.6: erteilen den Auftrag für die Produktion von analogen Marketingprodukten.",
                    "c2.7: koordinieren die Verteilung von analogen Marketingprodukten.",
                ])
            }, {
                title: "c3: Digitale Marketingprodukte konzipieren und bewirtschaften",
                children: to([
                    "c3.1: definieren Botschaften und Slogans für digitale Marketingprodukte. ",
                    "c3.2: legen fest, wie Reichweite und Akzeptanz von Botschaften gemessen werden können.",
                    "c3.3: konkretisieren digitale Marketingprodukte in Bezug auf relevante Aspekte (z.B. Farbe, Form, geeignete technische Plattformen) und halten diese schriftlich fest.",
                    "c3.4: stellen der Kundin oder dem Kunden digitale Marketingprodukte überzeugend vor. ",
                    "c3.5: wählen geeignete Bilder für digitale Marketingprodukte aus.",
                    "c3.6: platzieren digitale Marketingprodukte in den vorgesehenen Kanälen.",
                    "c3.7: messen Onlineaktivitäten mittels geeigneter technischer Hilfsmittel.",
                    "c3.8: optimieren die Online-Präsenz mittels geeigneter technischer Hilfsmittel.",
                    "c3.9: erstellen produktspezifische Auswertungen und Dashboards.",
                    "c3.10: leiten aus Auswertungen Optimierungspotenziale ab."
                ])
            }, {
                title: "c4: Texte für die betriebliche Kommunikation verfassen und publizieren",
                children: to([
                    "c4.1: wählen in Absprache mit Kommunikationsverantwortlichen ein geeignetes Kommunikationsmittel aus (z.B. Flyer, Inserat, Pressemitteilung).",
                    "c4.2: verfassen einen Text zielgruppenorientiert, aussagekräftig, klar strukturiert und unter Einhaltung der firmenspezifischen Vorgaben",
                    "c4.3: finalisieren einen Text nach Absprache mit internen Stellen formal und inhaltlich korrekt.",
                    "c4.4: publizieren einen Text im vorgesehenen Medium.",
                    "c4.5: verfassen einen einfachen, kurzen Text für die betriebliche Kommunikation in einer zweiten Landessprache. ",
                    "c4.6: verfassen einen einfachen, kurzen Text für die betriebliche Kommunikation auf Englisch."
                ])
            }, {
                title: "c5: Social-Media-Kanäle aufbauen und bewirtschaften",
                children: to([
                    "c5.1: definieren entsprechend einem Auftrag geeignete SocialMedia-Kanäle.",
                    "c5.2: erstellen ein Social-Media-Konzept in Bezug auf die Zielsetzungen und Zielgruppen. ",
                    "c5.3: bauen einen Social-Media-Kanal auf.",
                    "c5.4: publizieren verschiedene Inhalte auf einem Social-MediaKanal (z.B. Text, Bild, Animation, Film). ",
                    "c5.5: bewirtschaften einen Social-Media-Kanal in Bezug auf Inhalte, Verantwortlichkeiten und Beiträge.",
                    "c5.6: erstellen ein nachvollziehbares Reporting zur Nutzung des Social-Media-Kanals. ",
                    "c5.7: posten und beantworten Beiträge in einer zweiten Landessprache.",
                    "c5.8: posten und beantworten Beiträge auf Englisch.",
                    "c5.9: prüfen die rechtlichen Rahmenbedingungen im Umgang mit Social Media und beraten die Kundin oder den Kunden bezüglich Privatsphäre."
                ])
            }]
    },
    {
        title: "d: Mitwirken in der Betriebsadministration",
        children: [
            {
                title: "d1: Externe Anfragen im Geschäftsalltag bearbeiten",
                children: to([
                    "d1.1: eruieren die Anliegen von Kundinnen und Kunden oder Partnerinnen und Partnern rasch und freundlich.",
                    "d1.2: beantworten Anfragen von Kundinnen und Kunden oder Partnerinnen und Partnern fachlich korrekt und dienstleistungsorientiert (schriftlich und mündlich).",
                    "d1.3: halten relevante Informationen aus Kundengesprächen schriftlich fest. ",
                    "d1.4: leiten Anfragen von Kundinnen und Kunden oder Partnerinnen und Partnern an die korrekte Stelle im Betrieb weiter.",
                    "d1.5: schliessen einen Anfrage-Prozess nach betrieblichen Vorgaben ab.",
                    "d1.6: beantworten Anfragen von Kundinnen und Kunden oder Partnerinnen und Partnern in einer zweiten Landessprache mündlich und schriftlich.",
                    "d1.7: beantworten Anfragen von Kundinnen und Kunden oder Partnerinnen und Partnern auf Englisch mündlich und schriftlich.",
                ])
            },
            {
                title: "d2: Sitzungen und Anlässe organisieren und moderieren",
                children: to([
                    "d2.1: legen Teilnehmerkreis und Termin für eine Sitzung oder einen Anlass fest.",
                    "d2.2: verfassen eine Einladung mit dem Programm und weiteren relevanten Angaben (z.B. Zeit, Ort, Grundlagen). ",
                    "d2.3: organisieren die benötigte Infrastruktur, Technik und Verpflegung frühzeitig und zuverlässig. ",
                    "d2.4: erstellen eine detaillierte Zeit- und Ablaufplanung einer Sitzung oder eines Anlasses.",
                    "d2.5: moderieren eine Sitzung oder einen kleineren Anlass zielorientiert und effizient. ",
                    "d2.6: halten die Ergebnisse einer Sitzung oder eines Anlasses in geeigneter Form klar strukturiert fest (z.B. Protokoll, Fotoprotokoll, Audio- oder Videoaufnahmen).",
                    "d2.7: informieren Sitzungsteilnehmende zeitnah über die Ergebnisse.",
                    "d2.8: moderieren eine einfache Sitzung auf Englisch."
                ])
            },
            {
                title: "d3: Offerten und Rechnungen für Kundenaufträge erstellen",
                children: to([
                    "d3.1: tragen die für eine Offerte benötigten Angaben und Informationen vollständig zusammen.",
                    "d3.2: halten Inhalte und Umfang von Leistungen anhand der betrieblichen Vorlagen und Hilfsmitteln fest.",
                    "d3.3: finalisieren eine Offerte inhaltlich und formal korrekt.",
                    "d3.4: berechnen effektive Aufwände anhand der Stundenerfassung. ",
                    "d3.5: erstellen eine Rechnung inhaltlich und formal korrekt.",
                    "d3.6: leiten die Rechnungsinformationen an die Buchhaltung weitern."
                ])
            },
        ]
    },
    {
        title: "e: Einsetzen von Informations- und Kommunikationstechnologien ICT",
        children: [
            {
                title: "e1: Die eigenen ICT-Arbeitsinstrumente einrichten und bedienen",
                children: to([
                    "e1.1: stellen mithilfe von geeigneten Kabeln, Adaptern oder kabellos Verbindungen zwischen verschiedenen Geräten her (z.B. PC-Kamera).",
                    "e1.2: nehmen ICT-, Aufnahme- und mobile Geräte in Betrieb",
                    "e1.3: prüfen, ob die Geräte auf dem aktuellsten Stand sind und führen bei Bedarf Updates durch.",
                    "e1.4: schätzen die Geschäftsdaten und ICT-Umgebungen in Sicherheitsaspekten richtig ein und setzen nach betrieblichen Vorgaben die nötigen Massnahmen um.",
                    "e1.5: installieren Anwendungssoftware technisch korrekt und konfigurieren sie nach individuellen Bedürfnissen. ",
                    "e1.6: richten kollaborative Plattformen und einfache CloudDienste projektbezogen ein.",
                    "e1.7: führen einfache Datensicherungen (Backup) ihrer Projekte selbständig durch.",
                    "e1.8: setzen die eigenen Geräte energie- und ressourceneffizient ein."
                ])
            },
            {
                title: "e2: Website erstellen",
                children: to([
                    "e2.1: setzen Seitenraster mit HTML und CSS syntaktisch, semantisch und barrierefrei korrekt um.",
                    "e2.2: binden Bibliotheken und Frameworks ein.",
                    "e2.3: binden grafische Elemente fachlich korrekt ein",
                    "e2.4: installieren und konfigurieren geläufige ContentManagement-Systeme nach Kundenwunsch.",
                    "e2.5: überprüfen die Qualität von HTML- und CSS-Dokumenten mithilfe von Validatoren (z.B. W3C). ",
                    "e2.6: führen Browser-Tests durch",
                    "e2.7: überprüfen das Endprodukt auf Benutzerfreundlichkeit und die Erfüllung der Kundenwünsche."
                ])
            },
            {
                title: "e3: Website clientseitig mit interaktiven Komponenten erweitern",
                children: to([
                    "e3.1: setzen unterschiedliche Verfahren zur Validierung von Benutzereingaben effektiv um.",
                    "e3.2: durchsuchen und verändern HTML-Seiten (DOM) mit native JavaScript oder JavaScript-Bibliotheken. ",
                    "e3.3: erstellen Skripte, um auf Benutzerereignisse wie Formulareingaben oder Events zu reagieren. ",
                    "e3.4: verändern ereignisbasiert die HTML-Struktur oder CSSDefinitionen einer Website.",
                    "e3.5: binden externe Dienste/Sensoren über die JavaScript API ein und tauschen im Hintergrund Daten aus.",
                ])
            },
            {
                title: "e4: Serverseitig Daten auslesen und verarbeiten",
                children: to([
                    "e4.1: setzen mit einer Datenbank ein vorgegebenes Datenmodell um. ",
                    "e4.2: lesen Daten aus einer Datenbank aus, bereiten sie auf und stellen sie auf einer Website dar.",
                    "e4.3: fügen Daten über ein Websiteformular in eine Datenbank ein.",
                    "e4.4: verändern selbstständig ein bestehendes CMS-Template. ",
                    "e4.5: setzen unterschiedliche Verfahren zur Validierung von Benutzereingaben effektiv um. ",
                    "e4.6: setzen sicherheitsrelevante Aspekte bei serverseitigen Programmcodes um."
                ])
            }
        ]
    },
    {
        title: "h f: Führen von einfachen Projekten",
        children: [
            {
                title: "f1: Bedürfnisse der Kundinnen und Kunden abklären",
                children: to([
                    "f1.1: analysieren einen Auftrag anhand von strukturierten Recherchen.",
                    "f1.2: halten Ziele und offene Fragen für ein Erstgespräch mit der Kundin oder dem Kunden fest.",
                    "f1.3: eruieren die Bedürfnisse und Anliegen der Kundin oder des Kunden mittels geeigneter Gesprächstechniken.",
                    "f1.4: klären mit der Kundin oder dem Kunden wesentliche Aspekte eines Auftrags freundlich und zielorientiert (z.B. Ziele, Umfang, Terminplanung, Kostendach). ",
                    "f1.5: halten die Ergebnisse eines Erstgesprächs in Form eines Protokolls nachvollziehbar fest."
                ])
            },
            {
                title: "f2: Projektplanung erstellen",
                children: to([
                    "f2.1: definieren spezifische, messbare, akzeptierte, realisierbare und terminierte Ziele (SMART).",
                    "f2.2: erstellen mit Hilfe der betrieblichen Instrumente eine realistische und übersichtliche Arbeits- und Zeitplanung. ",
                    "f2.3: legen sinnvolle Meilensteine zur Überprüfung des Projektfortschritts fest. ",
                    "f2.4: definieren personelle und materielle Ressourcen präzise und nachvollziehbar.",
                    "f2.5: buchen personelle und materielle Ressourcen gemäss den betrieblichen Abläufen.",
                    "f2.6: klären offene Punkte der Projektplanung mit der Kundin oder dem Kunden ab. "
                ])
            },{
                title: "f3: Den Projektfortschritt laufend überprüfen",
                children: to([
                    "f3.1: vergleichen Soll- und Ist- Werte ihrer Projekte bezüglich Ziele, Zeit, Kosten und Produktqualität regelmässig.",
                    "f3.2: treffen geeignete Massnahmen, um Ziele, Zeit, Kosten und Produktqualität einzuhalten.",
                    "f3.3: erläutern der Kundin oder dem Kunden den aktuellen Projektstand und unterbreiten allenfalls nötige Korrekturmassnahmen. ",
                    "f3.4: schlagen der Kundin oder dem Kunden entsprechend ihrer / seiner Änderungswünsche Lösungswege oder Alternativen vor.",
                    "f3.5: halten Änderungen in der Projektplanung schriftlich fest und informieren alle Beteiligten."
                ])
            }, {
                title: "f4: Produkt der Kundin oder dem Kunden übergeben und Projekt abschliessen",
                children: to([
                    "f4.1: überprüfen ein Produkt auf Qualität gemäss den definierten Anforderungen. ",
                    "f4.2: führen eine Projektdokumentation übersichtlich und vollständig.",
                    "f4.3: übergeben der Kundin oder dem Kunden in geeigneter Form die definitiven Versionen eines Produkts. ",
                    "f4.4: führen kleine Produktschulungen für die Kundin oder den Kunden durch.",
                    "f4.5: nehmen kritische Rückmeldungen der Kundin oder des Kunden entgegen.",
                    "f4.6: führen ein Projekt-Review im Team durch.",
                    "f4.7: halten Erkenntnisse aus einem Projekt schriftlich und fundiert fest (z.B. lessons learned).",
                    "f4.8: reflektieren ihre eigenen Stärken und Schwächen im Projekt und halten diese in geeigneter Form fest. "
                ])
            }
        ]
    }
] as node[]