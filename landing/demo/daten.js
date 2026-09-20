// care Demo — Pflegegemeinschaft Lohre
//
// Alle Menschen hier sind erfunden. Keine echten Personen, keine echten Daten.
// Die Struktur folgt Antons Item-Anatomie aus dem Real Life Stack:
// Kopf, Meta-Box (eine Zeile je Beziehung), Selbstaktion, Inhalt, Listen, Tags.
//
// Jeder Eintrag traegt: id, typ, rolle, name, untertitel, avatar, pos (Karte),
// meta (die Zeilen der Meta-Box), aktion (Selbstaktion), bio, tags.

const POOL = {
  id: "lohre",
  name: "Pflegegemeinschaft Lohre",
  ort: "Schwalm-Eder, Nord-Hessen",
  traeger: "Wir in Lohre eG",
  pflegedienst: "Lohre ambulant",
  seit: "August 2026",
  zahlen: {
    bewohner: 22,
    team: 13,
    ehrenamt: 47,
    angehoerige: 22,
    raeume: 22,
    wohnkuechen: 3,
    fahrzeuge: 1,
    termineWoche: 34,
    offeneBedarfe: 5,
    pflegegrade: { "PG 2": 6, "PG 3": 11, "PG 4": 4, "PG 5": 1 }
  }
}

const ROLLEN = {
  bewohner:   { name: "Bewohner",             farbe: "#7C6BA8", kurz: "Bew" },
  angehoerige:{ name: "Angehörige",           farbe: "#4A7FA8", kurz: "Ang" },
  pflege:     { name: "Pflege",               farbe: "#4A6B5A", kurz: "Pfl" },
  therapie:   { name: "Therapie und Medizin", farbe: "#A85A6B", kurz: "The" },
  ehrenamt:   { name: "Ehrenamt und Nachbarn",farbe: "#C08B5C", kurz: "Ehr" },
  traeger:    { name: "Träger",               farbe: "#6B7A8A", kurz: "Trä" },
  ort:        { name: "Orte",                 farbe: "#5A8A6B", kurz: "Ort" },
  bedarf:     { name: "Offene Bedarfe",       farbe: "#C25555", kurz: "!" }
}

const MENSCHEN = [

  // ---------- Bewohner ----------
  {
    id: "b-braun", typ: "profil", rolle: "bewohner",
    name: "Helga Braun", untertitel: "82 · ehemals Grundschullehrerin",
    avatar: "HB", pos: { x: 46, y: 41 },
    meta: {
      "Wohnt": "Haus 1, Wohngruppe Nord",
      "Kann": ["Vorlesen", "Klavier", "Rechnen mit Kindern", "Geschichten"],
      "Bietet": ["Vorlese-Runde dienstags", "Nachhilfe für die 3b"],
      "Sucht": ["Jemanden, der mit ihr Chopin hört"],
      "Angehörige": ["Ute Braun (Tochter)"],
      "Mitglied in": ["Handarbeits-Runde", "Bewohner-Rat"]
    },
    intern: { "Pflegegrad": "PG 3", "Bezugspflege": "Sara Nowak, Andrea Vogel" },
    aktion: ["Nachricht", "Besuch anbieten"],
    bio: "Vierzig Jahre Grundschule in Melsungen. Seit einem Sturz im Frühjahr 2025 geht es allein nicht mehr. Liest jeden Dienstag den Kindern der 3b vor, und die kommen wieder.",
    tags: ["lesen", "musik", "kinder"],
    termine: ["Di 10:00 Vorlese-Runde", "Do 15:00 Physiotherapie", "Sa 14:00 Besuch Ute"]
  },
  {
    id: "b-schneider", typ: "profil", rolle: "bewohner",
    name: "Wilhelm Schneider", untertitel: "78 · ehemals Zimmermann",
    avatar: "WS", pos: { x: 39, y: 47 },
    meta: {
      "Wohnt": "Haus 1, Wohngruppe Nord",
      "Kann": ["Holzarbeit anleiten", "Möbel reparieren", "Werkzeugkunde"],
      "Bietet": ["Werkstatt-Vormittag dienstags"],
      "Sucht": ["Gesprächspartner für Rheinschifffahrt"],
      "Mitglied in": ["Werkstatt-Runde"]
    },
    intern: { "Pflegegrad": "PG 2", "Bezugspflege": "Thomas Herbst" },
    aktion: ["Nachricht", "In der Werkstatt mitmachen"],
    bio: "War als junger Mann auf Rheinschiffen, danach vierzig Jahre Zimmermann. Diabetes und Herzschwäche. Sägen geht nicht mehr, anleiten sehr wohl.",
    tags: ["handwerk", "holz", "schifffahrt"],
    termine: ["Di 09:30 Werkstatt", "Mi 11:00 Zaun mit Volker", "Fr 16:00 Arzt"]
  },
  {
    id: "b-ali", typ: "profil", rolle: "bewohner",
    name: "Aylin Ali", untertitel: "74 · ehemals Krankenschwester",
    avatar: "AA", pos: { x: 52, y: 44 },
    meta: {
      "Wohnt": "Haus 2, Wohngruppe Süd",
      "Kann": ["Türkisch", "Kochen", "Pflege aus Erfahrung"],
      "Bietet": ["Türkische Suppe freitags", "Übersetzen für neue Bewohner"],
      "Sucht": ["Video-Telefonate mit den Enkeln in Istanbul üben"],
      "Angehörige": ["Elif Ali (Enkelin)"],
      "Mitglied in": ["Küchen-Runde"]
    },
    intern: { "Pflegegrad": "PG 2", "Bezugspflege": "Fatma Yildiz" },
    aktion: ["Nachricht", "Video-Anruf einrichten"],
    bio: "Kam 1974 aus Antalya, arbeitete dreißig Jahre im Krankenhaus Kassel. Kocht freitags für den ganzen Pool. Die Enkel leben in Istanbul.",
    tags: ["kochen", "türkisch", "pflege-erfahrung"],
    termine: ["Fr 11:00 Kochen", "So 16:00 Video Istanbul"]
  },
  {
    id: "b-grunewald", typ: "profil", rolle: "bewohner",
    name: "Karl-Heinz Grunewald", untertitel: "89 · ehemals Landwirt",
    avatar: "KG", pos: { x: 43, y: 52 },
    meta: {
      "Wohnt": "Haus 2, Wohngruppe Süd",
      "Kann": ["Wetter lesen", "Dorf-Geschichte", "Tiere"],
      "Bietet": ["Wetter-Runde jeden Morgen"],
      "Sucht": ["Jemanden, der zuhört"],
      "Mitglied in": ["Garten-Runde"]
    },
    intern: { "Pflegegrad": "PG 4", "Bezugspflege": "Andrea Vogel", "Hinweis": "Erinnert Vergangenes klar, Aktuelles verschwimmt" },
    aktion: ["Nachricht", "Zuhören kommen"],
    bio: "Hatte den Hof am Ortsrand bis 2008. Sagt das Wetter zuverlässiger voraus als jede App. Erzählt vom Dorf der fünfziger Jahre, als sei es gestern.",
    tags: ["wetter", "landwirtschaft", "geschichte"],
    termine: ["Täglich 08:30 Wetter-Runde", "Mi 14:00 Garten"]
  },
  {
    id: "b-kowalski", typ: "profil", rolle: "bewohner",
    name: "Marta Kowalski", untertitel: "81 · ehemals Pianistin",
    avatar: "MK", pos: { x: 49, y: 37 },
    meta: {
      "Wohnt": "Haus 1, Wohngruppe Mitte",
      "Kann": ["Klavier", "Polnisch", "Notenlesen"],
      "Bietet": ["Spielt abends im Wohnraum"],
      "Sucht": ["Geduldige Person zum Üben"],
      "Angehörige": ["Jakub Kowalski (Sohn)"],
      "Mitglied in": ["Musik-Runde"]
    },
    intern: { "Pflegegrad": "PG 3", "Bezugspflege": "Sara Nowak", "Hinweis": "Beginnende Demenz. Worte gehen verloren, Melodien bleiben" },
    aktion: ["Nachricht", "Zum Üben kommen"],
    bio: "Kam 1972 aus Danzig. Konzertpianistin, später Klavierlehrerin. Verliert Wörter, findet aber jede Melodie, die sie je gespielt hat.",
    tags: ["musik", "klavier", "polnisch"],
    termine: ["Mo 17:00 Klavier mit Jakub", "Do 19:00 Musik-Abend"]
  },

  // ---------- Angehörige ----------
  {
    id: "a-ute", typ: "profil", rolle: "angehoerige",
    name: "Ute Braun", untertitel: "58 · Tochter von Helga · Lehrerin in Kassel",
    avatar: "UB", pos: { x: 68, y: 26 },
    meta: {
      "Wohnt": "Kassel, 28 km",
      "Kann": ["Fahren", "Deutsch-Nachhilfe", "Behördenkram"],
      "Bietet": ["Einkaufsfahrten samstags", "Deutsch für neue Bewohner"],
      "Verbunden mit": ["Helga Braun (Mutter)"],
      "Erreichbar": "Werktags abends, Wochenende ganztags"
    },
    aktion: ["Nachricht", "Fahrt anfragen"],
    bio: "Kommt jeden Samstag. Nimmt Besorgungen für den ganzen Pool mit, wenn sie schon fährt.",
    tags: ["fahren", "bildung"],
    termine: ["Sa 14:00 Besuch und Einkauf"]
  },
  {
    id: "a-jakub", typ: "profil", rolle: "angehoerige",
    name: "Jakub Kowalski", untertitel: "54 · Sohn von Marta · Klavierbauer",
    avatar: "JK", pos: { x: 24, y: 62 },
    meta: {
      "Wohnt": "Frankfurt, 165 km",
      "Kann": ["Klavier stimmen", "Instrumente reparieren", "Polnisch"],
      "Bietet": ["Stimmt das Pool-Klavier", "Übt mit der Mutter"],
      "Verbunden mit": ["Marta Kowalski (Mutter)"],
      "Erreichbar": "Alle zwei Wochen vor Ort, sonst Telefon"
    },
    aktion: ["Nachricht", "Termin abstimmen"],
    bio: "Baut Klaviere in Frankfurt. Kommt alle zwei Wochen, stimmt das Instrument im Wohnraum und übt eine Stunde mit seiner Mutter.",
    tags: ["musik", "handwerk"],
    termine: ["Mo 17:00 Klavier mit Marta (alle 14 Tage)"]
  },
  {
    id: "a-elif", typ: "profil", rolle: "angehoerige",
    name: "Elif Ali", untertitel: "32 · Enkelin von Aylin · Studentin",
    avatar: "EA", pos: { x: 71, y: 34 },
    meta: {
      "Wohnt": "Kassel, 28 km",
      "Kann": ["Türkisch", "Technik erklären", "Video einrichten"],
      "Bietet": ["Richtet Video-Anrufe nach Istanbul ein"],
      "Verbunden mit": ["Aylin Ali (Großmutter)"],
      "Erreichbar": "Sonntags, sonst Chat"
    },
    aktion: ["Nachricht", "Video-Anruf einrichten"],
    bio: "Studiert Soziale Arbeit. Verbindet ihre Oma sonntags mit der Familie in Istanbul und übersetzt, wenn nötig.",
    tags: ["technik", "türkisch"],
    termine: ["So 16:00 Video Istanbul"]
  },

  // ---------- Pflege ----------
  {
    id: "p-vogel", typ: "profil", rolle: "pflege",
    name: "Andrea Vogel", untertitel: "51 · Pflegedienstleitung",
    avatar: "AV", pos: { x: 44, y: 34 },
    meta: {
      "Wohnt": "Lohre, im Ort",
      "Kann": ["Leitung", "Palliativ", "Wundversorgung", "versteht Türkisch"],
      "Verantwortet": ["Dienstplan", "MDK", "Pflegeplanung"],
      "Bezugspflege für": ["Karl-Heinz Grunewald", "Helga Braun", "+ 4 weitere"],
      "Erreichbar": "Mo bis Fr Kernzeit, im Notfall immer"
    },
    aktion: ["Nachricht", "Termin anfragen"],
    bio: "Examinierte Pflegefachkraft, Weiterbildung Leitung und Palliativ. Wohnt zweihundert Meter vom Pool entfernt. Zwei erwachsene Kinder.",
    tags: ["leitung", "palliativ"],
    termine: ["Mo-Fr 08:00 Übergabe", "Di 14:00 Team-Runde"]
  },
  {
    id: "p-nowak", typ: "profil", rolle: "pflege",
    name: "Sara Nowak", untertitel: "34 · Pflegefachkraft",
    avatar: "SN", pos: { x: 47, y: 31 },
    meta: {
      "Wohnt": "Melsungen, 8 km",
      "Kann": ["Wundversorgung", "Palliativ", "Polnisch"],
      "Bezugspflege für": ["Helga Braun", "Marta Kowalski", "+ 3 weitere"],
      "Dienst": "Frühschicht Mo bis Do, Wochenende alle 14 Tage",
      "Bestätigt von": ["5 Angehörige", "3 Kolleginnen"]
    },
    aktion: ["Nachricht", "Schicht tauschen"],
    bio: "Kam vor acht Jahren aus Krakau. Spricht Polnisch mit Frau Kowalski, wenn die Worte auf Deutsch fehlen. Zusatzqualifikation Palliativ.",
    tags: ["wundversorgung", "palliativ", "polnisch"],
    termine: ["Mo-Do 06:00 Frühdienst"]
  },
  {
    id: "p-herbst", typ: "profil", rolle: "pflege",
    name: "Thomas Herbst", untertitel: "28 · Pflegehilfskraft in Weiterbildung",
    avatar: "TH", pos: { x: 41, y: 30 },
    meta: {
      "Wohnt": "Bad Hersfeld, 42 km",
      "Kann": ["Grundpflege", "Gitarre", "Musikgeschichte"],
      "Bezugspflege für": ["Wilhelm Schneider", "+ 2 weitere"],
      "Dienst": "Spätschicht Di bis So",
      "Lernt": ["Fachweiterbildung, Abschluss 2027"]
    },
    aktion: ["Nachricht", "Beim Musik-Abend mitmachen"],
    bio: "Spielt in einer Band. Hört mit den Bewohnern die Lieder aus ihrer Jugend und macht daraus den Musik-Abend am Donnerstag.",
    tags: ["musik", "grundpflege"],
    termine: ["Di-So 14:00 Spätdienst", "Do 19:00 Musik-Abend"]
  },
  {
    id: "p-yildiz", typ: "profil", rolle: "pflege",
    name: "Fatma Yildiz", untertitel: "46 · Präsenzkraft nach § 43b",
    avatar: "FY", pos: { x: 50, y: 30 },
    meta: {
      "Wohnt": "Melsungen, 8 km",
      "Kann": ["Alltagsbegleitung", "Kochen", "Türkisch", "Ehrenamts-Anleitung"],
      "Verantwortet": ["Aktivitäten", "Ehrenamts-Kontakt", "Angehörigen-Draht"],
      "Bezugspflege für": ["Aylin Ali", "+ 3 weitere"],
      "Dienst": "Mo bis Fr 10:00 bis 18:00"
    },
    aktion: ["Nachricht", "Aktivität vorschlagen"],
    bio: "War Erzieherin, bevor sie die Qualifikation nach § 43b machte. Hält den Kontakt zu den 47 Ehrenamtlichen und plant die Woche.",
    tags: ["alltag", "türkisch", "ehrenamt"],
    termine: ["Mo-Fr 10:00 Präsenz", "Fr 11:00 Kochen mit Aylin"]
  },

  // ---------- Therapie und Medizin ----------
  {
    id: "t-wagner", typ: "profil", rolle: "therapie",
    name: "Dr. Wagner", untertitel: "Hausarzt · Praxis Melsungen",
    avatar: "DW", pos: { x: 62, y: 55 },
    meta: {
      "Praxis": "Melsungen, 8 km",
      "Kann": ["Allgemeinmedizin", "Geriatrie", "Palliativmedizin"],
      "Bietet": ["Sprechstunde im Pool, dienstags vormittags"],
      "Betreut": ["14 Bewohner der Pflegegemeinschaft"],
      "Erreichbar": "Praxiszeiten, Notfall über Leitstelle"
    },
    aktion: ["Termin anfragen", "Bericht anfordern"],
    bio: "Fährt seit August jeden Dienstag in den Pool und sieht sechs bis acht Bewohner am Stück. Was früher acht Hausbesuche waren, ist jetzt ein Vormittag.",
    tags: ["medizin", "geriatrie"],
    termine: ["Di 09:00 Sprechstunde im Pool"]
  },
  {
    id: "t-kern", typ: "profil", rolle: "therapie",
    name: "Herr Kern", untertitel: "Physiotherapie · Praxis Lohre",
    avatar: "HK", pos: { x: 55, y: 60 },
    meta: {
      "Praxis": "Lohre, im Ort",
      "Kann": ["Mobilisierung", "Sturzprophylaxe", "Manuelle Therapie"],
      "Bietet": ["Montag und Donnerstag im Pool"],
      "Betreut": ["9 Bewohner"],
      "Erreichbar": "Praxiszeiten"
    },
    aktion: ["Termin anfragen"],
    bio: "Arbeitet in der Werkstatt-Ecke, weil dort Platz und Licht sind. Macht Sturzprophylaxe in der Gruppe statt einzeln.",
    tags: ["physio", "bewegung"],
    termine: ["Mo 10:00 Physio", "Do 15:00 Physio"]
  },
  {
    id: "t-lund", typ: "profil", rolle: "therapie",
    name: "Frau Lund", untertitel: "Logopädie · Praxis Fritzlar",
    avatar: "FL", pos: { x: 30, y: 28 },
    meta: {
      "Praxis": "Fritzlar, 22 km",
      "Kann": ["Sprachtherapie", "Schlucktraining", "Demenz-Kommunikation"],
      "Bietet": ["Nach Bedarf, zuletzt bei Herrn Grunewald"],
      "Betreut": ["3 Bewohner"],
      "Erreichbar": "Auf Anfrage"
    },
    aktion: ["Termin anfragen"],
    bio: "Kommt bei Bedarf. Schult nebenbei die Präsenzkräfte darin, wie man mit Menschen mit Demenz spricht, ohne zu korrigieren.",
    tags: ["logopädie", "demenz"],
    termine: ["Nach Vereinbarung"]
  },

  // ---------- Ehrenamt und Nachbarn ----------
  {
    id: "e-meister", typ: "profil", rolle: "ehrenamt",
    name: "Volker Meister", untertitel: "72 · Nachbar · Wanderer",
    avatar: "VM", pos: { x: 37, y: 38 },
    meta: {
      "Wohnt": "Lohre, Nachbarhaus",
      "Kann": ["Wandern", "Zaunbau", "Vogelkunde"],
      "Bietet": ["Spaziergänge in der Fulda-Aue, bis zu drei Bewohner"],
      "Getragen": ["47 Spaziergänge seit August"],
      "Erreichbar": "Fast täglich"
    },
    aktion: ["Nachricht", "Mitgehen"],
    bio: "Wohnt seit vierzig Jahren nebenan. Geht dreimal die Woche mit Bewohnern in die Aue, kennt jeden Vogel beim Namen.",
    tags: ["natur", "bewegung", "handwerk"],
    termine: ["Mo, Mi, Fr 11:00 Spaziergang"]
  },
  {
    id: "e-schuster", typ: "profil", rolle: "ehrenamt",
    name: "Renate Schuster", untertitel: "67 · Frauenärztin im Ruhestand",
    avatar: "RS", pos: { x: 58, y: 34 },
    meta: {
      "Wohnt": "Lohre, 600 m",
      "Kann": ["Zuhören", "Gesprächsführung", "Medizinisches erklären"],
      "Bietet": ["Gesprächsrunde für Frauen, mittwochs"],
      "Getragen": ["18 Gesprächsrunden seit August"],
      "Erreichbar": "Zweimal die Woche"
    },
    aktion: ["Nachricht", "Zur Runde kommen"],
    bio: "Vierzig Jahre Praxis, jetzt kommt sie zweimal die Woche und hört zu. Die Frauen-Runde am Mittwoch ist inzwischen ein fester Punkt.",
    tags: ["gespräch", "medizin"],
    termine: ["Mi 15:00 Frauen-Runde", "Sa 10:00 offen"]
  },
  {
    id: "e-erdogan", typ: "profil", rolle: "ehrenamt",
    name: "Familie Erdogan", untertitel: "Restaurant im Dorf",
    avatar: "FE", pos: { x: 60, y: 47 },
    meta: {
      "Ort": "Lohre, Hauptstraße",
      "Kann": ["Kochen", "Türkisch", "Große Runden bewirten"],
      "Bietet": ["Freitags türkisch kochen im Pool", "Kuchen für Feste"],
      "Getragen": ["8 Koch-Abende, 2 Feste"],
      "Erreichbar": "Außerhalb der Öffnungszeiten"
    },
    aktion: ["Nachricht", "Fest anfragen"],
    bio: "Kocht freitags mit Frau Ali für den ganzen Pool. Beim Sommerfest kamen 87 Gäste, die Hälfte aus dem Dorf.",
    tags: ["kochen", "türkisch", "feste"],
    termine: ["Fr 11:00 Kochen"]
  },
  {
    id: "e-schule", typ: "profil", rolle: "ehrenamt",
    name: "Grundschule, Klasse 3b", untertitel: "Melsungen-Süd · 19 Kinder",
    avatar: "3b", pos: { x: 66, y: 62 },
    meta: {
      "Ort": "Melsungen, 8 km",
      "Bringt": ["Vorlese-Treffen", "Weihnachtssingen", "Sommerfest"],
      "Trifft": ["Helga Braun", "Wilhelm Schneider"],
      "Getragen": ["11 Vorlese-Treffen seit August"],
      "Erreichbar": "Über Frau Dietrich, Klassenlehrerin"
    },
    aktion: ["Termin abstimmen"],
    bio: "Kommt jeden Dienstag. Frau Braun liest vor, die Kinder lesen zurück. Herr Schneider zeigt, wie man einen Nagel gerade einschlägt.",
    tags: ["kinder", "generationen"],
    termine: ["Di 10:00 Vorlese-Treffen"]
  },
  {
    id: "e-feuerwehr", typ: "profil", rolle: "ehrenamt",
    name: "Freiwillige Feuerwehr Lohre", untertitel: "34 Aktive",
    avatar: "FF", pos: { x: 34, y: 56 },
    meta: {
      "Ort": "Lohre, Gerätehaus",
      "Bringt": ["Feuerwehrfest", "Sicherheits-Rundgang", "Notfall-Übung"],
      "Getragen": ["2 Rundgänge, 1 Fest"],
      "Erreichbar": "Über den Wehrführer"
    },
    aktion: ["Termin abstimmen"],
    bio: "Prüft alle zwei Monate Fluchtwege und Rauchmelder. Beim Feuerwehrfest im Juli standen drei Bewohner auf dem Löschfahrzeug.",
    tags: ["sicherheit", "dorf"],
    termine: ["Alle 2 Monate Rundgang"]
  },
  {
    id: "e-landfrauen", typ: "profil", rolle: "ehrenamt",
    name: "Landfrauen Schwalm-Eder", untertitel: "Ortsgruppe Lohre · 22 Frauen",
    avatar: "LF", pos: { x: 28, y: 45 },
    meta: {
      "Ort": "Lohre und Umgebung",
      "Bringt": ["Handarbeits-Nachmittag", "Erntedank", "Marmelade"],
      "Trifft": ["Handarbeits-Runde"],
      "Getragen": ["9 Nachmittage seit August"],
      "Erreichbar": "Alle zwei Wochen"
    },
    aktion: ["Termin abstimmen"],
    bio: "Alle zwei Wochen Handarbeit im Wohnraum. Aus dem Nachmittag ist eine feste Runde geworden, zu der auch Bewohnerinnen ohne Landfrauen-Vergangenheit kommen.",
    tags: ["handarbeit", "dorf"],
    termine: ["Do 15:00 Handarbeit (alle 14 Tage)"]
  },

  // ---------- Träger ----------
  {
    id: "tr-genossenschaft", typ: "organisation", rolle: "traeger",
    name: "Wir in Lohre eG", untertitel: "Bewohner-Genossenschaft · Träger",
    avatar: "eG", pos: { x: 45, y: 44 },
    meta: {
      "Sitz": "Lohre, Schwalm-Eder",
      "Hält": ["Zwei Häuser", "Garten", "Pool-Fahrzeug"],
      "Mitglieder": ["22 Bewohner", "18 Angehörige", "31 Unterstützer"],
      "Rechtsform": "Selbstverantwortete Wohnform, kein Heimrecht",
      "Vertrag": "§ 92c SGB XI mit Lohre ambulant, seit August 2026"
    },
    aktion: ["Mitglied werden", "Unterlagen anfragen"],
    bio: "Die Bewohner und ihre Angehörigen halten die Genossenschaft selbst. Sie wählen den Pflegedienst, entscheiden über den Alltag und tragen die Häuser.",
    tags: ["genossenschaft", "träger"],
    termine: ["Jeden 1. Montag 18:00 Mitglieder-Runde"]
  }
]

const ORTE = [
  {
    id: "o-haus1", typ: "ort", rolle: "ort",
    name: "Haus 1", untertitel: "12 Zimmer · Wohnküche · Bibliothek",
    avatar: "H1", pos: { x: 44, y: 39 },
    meta: {
      "Adresse": "Fuldaweg 4, Lohre",
      "Räume": ["12 Einzelzimmer mit Bad", "Wohnküche", "Bibliothek", "Pflegebad"],
      "Bewohner": ["Helga Braun", "Wilhelm Schneider", "Marta Kowalski", "+ 9 weitere"]
    },
    aktion: [],
    bio: "Sandsteinbau von 1908, 2026 barrierefrei umgebaut nach DIN 18040 Teil 2. Aufzug, ebene Zugänge, Deckenlifter im Pflegebad.",
    tags: ["wohnen"],
    termine: ["Täglich 08:00 Frühstück", "Täglich 12:30 Mittagessen"]
  },
  {
    id: "o-haus2", typ: "ort", rolle: "ort",
    name: "Haus 2", untertitel: "10 Zimmer · Wohnküche · Werkstatt",
    avatar: "H2", pos: { x: 50, y: 46 },
    meta: {
      "Adresse": "Fuldaweg 6, Lohre",
      "Räume": ["10 Einzelzimmer mit Bad", "Wohnküche", "Werkstatt", "Ruheraum"],
      "Bewohner": ["Aylin Ali", "Karl-Heinz Grunewald", "+ 8 weitere"]
    },
    aktion: [],
    bio: "Neubau 2026, direkt neben Haus 1. Die Werkstatt im Erdgeschoss ist Herrn Schneiders Reich, die Physiotherapie nutzt sie mit.",
    tags: ["wohnen", "werkstatt"],
    termine: ["Di 09:30 Werkstatt", "Mo, Do Physiotherapie"]
  },
  {
    id: "o-garten", typ: "ort", rolle: "ort",
    name: "Gemeinschaftsgarten", untertitel: "Hochbeete · Kräuterspirale · Terrasse",
    avatar: "GA", pos: { x: 47, y: 52 },
    meta: {
      "Adresse": "Hinter den Häusern, Blick auf die Fulda-Auen",
      "Ausstattung": ["8 Hochbeete", "Kräuterspirale", "Terrasse", "Bänke am Weg"],
      "Gepflegt von": ["Garten-Runde", "Landfrauen", "Karl-Heinz Grunewald"]
    },
    aktion: [],
    bio: "Die Hochbeete stehen auf Rollstuhlhöhe. Wer nicht mehr gut steht, sitzt daneben und sagt, wo gejätet wird.",
    tags: ["garten", "draußen"],
    termine: ["Mi 14:00 Garten-Runde"]
  },
  {
    id: "o-praxis", typ: "ort", rolle: "ort",
    name: "Praxis Dr. Wagner", untertitel: "Hausarzt · 8 km",
    avatar: "PW", pos: { x: 63, y: 56 },
    meta: {
      "Adresse": "Bahnhofstraße 12, Melsungen",
      "Erreichbar": "Pool-Fahrzeug, 15 Minuten",
      "Kommt in den Pool": "Dienstags vormittags"
    },
    aktion: [],
    bio: "Betreut 14 der 22 Bewohner. Die Dienstags-Sprechstunde im Pool ersetzt acht einzelne Hausbesuche.",
    tags: ["medizin"],
    termine: ["Di 09:00 Sprechstunde im Pool"]
  },
  {
    id: "o-restaurant", typ: "ort", rolle: "ort",
    name: "Restaurant Erdogan", untertitel: "Im Dorf · 400 m",
    avatar: "RE", pos: { x: 59, y: 48 },
    meta: {
      "Adresse": "Hauptstraße 8, Lohre",
      "Erreichbar": "Zu Fuß, 6 Minuten",
      "Bietet": ["Mittagstisch", "Freitags Kochen im Pool", "Kuchen für Feste"]
    },
    aktion: [],
    bio: "Die Familie kocht freitags im Pool mit. Wer noch gut zu Fuß ist, geht mittwochs zum Mittagstisch ins Restaurant.",
    tags: ["essen", "dorf"],
    termine: ["Mi 12:00 Mittagstisch", "Fr 11:00 Kochen im Pool"]
  }
]

const BEDARFE = [
  {
    id: "bd-kommunion", typ: "bedarf", rolle: "bedarf",
    name: "Fahrt zur Enkel-Kommunion", untertitel: "für Marta Kowalski · 22.10.2026",
    avatar: "!", pos: { x: 53, y: 39 },
    dringlichkeit: "diese Woche",
    meta: {
      "Wer braucht": "Marta Kowalski",
      "Wohin": "Frankfurt-Höchst, 165 km",
      "Wann": "22.10.2026, morgens hin, nachmittags zurück",
      "Besonderes": "Rollstuhl-taugliches Fahrzeug nötig"
    },
    aktion: ["Übernehmen"],
    passung: [
      { wer: "Jakub Kowalski", grad: "sehr hoch", grund: "Sohn · fährt ohnehin aus Frankfurt · Auto ist rollstuhl-tauglich · war schon dreimal Fahrer" },
      { wer: "Ute Braun", grad: "mittel", grund: "kennt Marta · wohnt in Kassel · Auto ist rollstuhl-tauglich · am 22.10. frei" },
      { wer: "Volker Meister", grad: "niedrig", grund: "kennt Marta gut · kein rollstuhl-taugliches Fahrzeug" }
    ],
    tags: ["fahrt", "familie"]
  },
  {
    id: "bd-uebersetzen", typ: "bedarf", rolle: "bedarf",
    name: "Übersetzung Türkisch", untertitel: "für neuen Bewohner · ab 01.10.2026",
    avatar: "!", pos: { x: 56, y: 42 },
    dringlichkeit: "offen",
    meta: {
      "Wer braucht": "Herr Yildirim, zieht am 01.10. ein",
      "Was": "Wöchentliche Begleitung beim Ankommen",
      "Wann": "Erste vier Wochen, zweimal pro Woche",
      "Besonderes": "Spricht wenig Deutsch"
    },
    aktion: ["Übernehmen"],
    passung: [
      { wer: "Fatma Yildiz", grad: "sehr hoch", grund: "Präsenzkraft · Muttersprache Türkisch · ohnehin täglich da" },
      { wer: "Aylin Ali", grad: "hoch", grund: "Bewohnerin · Muttersprache Türkisch · bietet Übersetzen ausdrücklich an" },
      { wer: "Familie Erdogan", grad: "mittel", grund: "spricht Türkisch · kommt freitags · begrenzte Zeit" }
    ],
    tags: ["sprache", "ankommen"]
  },
  {
    id: "bd-zaun", typ: "bedarf", rolle: "bedarf",
    name: "Zaun Nordseite reparieren", untertitel: "zwei Hände gesucht",
    avatar: "!", pos: { x: 41, y: 56 },
    dringlichkeit: "offen",
    meta: {
      "Wer braucht": "Der Pool",
      "Was": "12 Meter Lattenzaun, 8 Latten ersetzen",
      "Wann": "Nächste zwei Wochen, ein Vormittag",
      "Besonderes": "Wilhelm Schneider leitet an, kann aber nicht selbst sägen"
    },
    aktion: ["Übernehmen"],
    passung: [
      { wer: "Volker Meister", grad: "sehr hoch", grund: "Nachbar · hat Werkzeug · hat schon zweimal am Zaun gearbeitet · fast täglich da" },
      { wer: "Freiwillige Feuerwehr Lohre", grad: "hoch", grund: "34 Aktive · packt bei Dorf-Aufgaben mit an" },
      { wer: "Jakub Kowalski", grad: "niedrig", grund: "handwerklich geübt · nur alle zwei Wochen vor Ort" }
    ],
    tags: ["handwerk", "garten"]
  },
  {
    id: "bd-vertretung", typ: "bedarf", rolle: "bedarf",
    name: "Vertretung Präsenzkraft", untertitel: "15. bis 17.10.2026",
    avatar: "!", pos: { x: 48, y: 33 },
    dringlichkeit: "heute klären",
    meta: {
      "Wer braucht": "Der Pool",
      "Was": "Präsenz und Alltagsbegleitung, drei Tage",
      "Wann": "15. bis 17.10.2026, jeweils 10:00 bis 18:00",
      "Besonderes": "Fatma Yildiz ist auf Kur"
    },
    aktion: ["Übernehmen"],
    passung: [
      { wer: "Springer-Pool Melsungen", grad: "hoch", grund: "drei qualifizierte Kräfte nach § 43b · zwei davon kennen den Pool" },
      { wer: "Renate Schuster", grad: "mittel", grund: "kommt ohnehin zweimal die Woche · ohne § 43b-Qualifikation" },
      { wer: "Pflegegemeinschaft Kassel-Nord", grad: "mittel", grund: "Nachbar-Pool im Netzwerk · gegenseitige Vertretung vereinbart" }
    ],
    tags: ["personal", "dringend"]
  },
  {
    id: "bd-klavier", typ: "bedarf", rolle: "bedarf",
    name: "Klavier üben mit Marta", untertitel: "geduldige Person gesucht",
    avatar: "!", pos: { x: 51, y: 34 },
    dringlichkeit: "offen",
    meta: {
      "Wer braucht": "Marta Kowalski",
      "Was": "Eine Stunde Klavier, ohne Korrigieren",
      "Wann": "Nachmittags, gern wöchentlich",
      "Besonderes": "Beginnende Demenz. Melodien sitzen, Worte fehlen manchmal"
    },
    aktion: ["Übernehmen"],
    passung: [
      { wer: "Jakub Kowalski", grad: "sehr hoch", grund: "Sohn · Klavierbauer · kommt alle zwei Wochen · übt schon mit ihr" },
      { wer: "Thomas Herbst", grad: "hoch", grund: "Musiker · Spätdienst Di bis So · kennt Marta aus dem Musik-Abend" },
      { wer: "Helga Braun", grad: "mittel", grund: "Bewohnerin · spielt selbst Klavier · wohnt im selben Haus" }
    ],
    tags: ["musik", "begegnung"]
  }
]

const WOCHE = [
  { tag: "Montag", termine: [
    { zeit: "08:00", was: "Frühstück, gemeinsam", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "08:30", was: "Wetter-Runde mit Karl-Heinz", ort: "Wohnküche Haus 2", wer: "Karl-Heinz Grunewald" },
    { zeit: "10:00", was: "Physiotherapie", ort: "Werkstatt-Ecke", wer: "Herr Kern · 4 Bewohner" },
    { zeit: "11:00", was: "Spaziergang in die Fulda-Aue", ort: "draußen", wer: "Volker Meister · 3 Bewohner" },
    { zeit: "12:30", was: "Mittagessen", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "17:00", was: "Klavier üben", ort: "Wohnraum Haus 1", wer: "Marta Kowalski · Jakub Kowalski" },
    { zeit: "18:00", was: "Mitglieder-Runde der Genossenschaft", ort: "Bibliothek", wer: "Wir in Lohre eG", monatlich: true }
  ]},
  { tag: "Dienstag", termine: [
    { zeit: "08:00", was: "Frühstück", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "09:00", was: "Sprechstunde Dr. Wagner", ort: "Bibliothek", wer: "Dr. Wagner · 6 Bewohner" },
    { zeit: "09:30", was: "Werkstatt-Vormittag", ort: "Werkstatt Haus 2", wer: "Wilhelm Schneider · 4 Bewohner" },
    { zeit: "10:00", was: "Vorlese-Treffen mit der 3b", ort: "Bibliothek", wer: "Helga Braun · 19 Kinder" },
    { zeit: "12:30", was: "Mittagessen", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "14:00", was: "Team-Runde", ort: "Büro", wer: "Andrea Vogel · das Team" },
    { zeit: "18:30", was: "Abendessen", ort: "Beide Wohnküchen", wer: "alle" }
  ]},
  { tag: "Mittwoch", termine: [
    { zeit: "08:00", was: "Frühstück", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "08:30", was: "Wetter-Runde", ort: "Wohnküche Haus 2", wer: "Karl-Heinz Grunewald" },
    { zeit: "11:00", was: "Spaziergang", ort: "draußen", wer: "Volker Meister · 3 Bewohner" },
    { zeit: "12:00", was: "Mittagstisch im Restaurant", ort: "Restaurant Erdogan", wer: "5 Bewohner" },
    { zeit: "14:00", was: "Garten-Runde", ort: "Gemeinschaftsgarten", wer: "Karl-Heinz Grunewald · Landfrauen" },
    { zeit: "15:00", was: "Frauen-Gesprächsrunde", ort: "Wohnraum Haus 1", wer: "Renate Schuster · 7 Bewohnerinnen" },
    { zeit: "18:30", was: "Abendessen", ort: "Beide Wohnküchen", wer: "alle" }
  ]},
  { tag: "Donnerstag", termine: [
    { zeit: "08:00", was: "Frühstück", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "12:30", was: "Mittagessen", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "15:00", was: "Physiotherapie", ort: "Werkstatt-Ecke", wer: "Herr Kern · 5 Bewohner" },
    { zeit: "15:00", was: "Handarbeits-Nachmittag", ort: "Wohnraum Haus 1", wer: "Landfrauen · 9 Bewohnerinnen", vierzehntaegig: true },
    { zeit: "18:30", was: "Abendessen", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "19:00", was: "Musik-Abend", ort: "Wohnraum Haus 1", wer: "Thomas Herbst · offen für alle" }
  ]},
  { tag: "Freitag", termine: [
    { zeit: "08:00", was: "Frühstück", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "08:30", was: "Wetter-Runde", ort: "Wohnküche Haus 2", wer: "Karl-Heinz Grunewald" },
    { zeit: "11:00", was: "Türkisch kochen", ort: "Wohnküche Haus 2", wer: "Aylin Ali · Familie Erdogan · Fatma Yildiz" },
    { zeit: "11:00", was: "Spaziergang", ort: "draußen", wer: "Volker Meister · 3 Bewohner" },
    { zeit: "13:00", was: "Gemeinsames Essen, alle zusammen", ort: "Wohnküche Haus 2", wer: "alle" },
    { zeit: "16:00", was: "Arzt-Fahrt", ort: "Praxis Melsungen", wer: "Wilhelm Schneider" }
  ]},
  { tag: "Samstag", termine: [
    { zeit: "09:00", was: "Langes Frühstück", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "10:00", was: "Offene Runde", ort: "Wohnraum Haus 1", wer: "Renate Schuster" },
    { zeit: "12:30", was: "Mittagessen", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "14:00", was: "Besuch und Einkaufsfahrt", ort: "Haus 1 und Melsungen", wer: "Ute Braun · Helga Braun" },
    { zeit: "18:30", was: "Abendessen", ort: "Beide Wohnküchen", wer: "alle" }
  ]},
  { tag: "Sonntag", termine: [
    { zeit: "09:00", was: "Langes Frühstück", ort: "Beide Wohnküchen", wer: "alle" },
    { zeit: "12:30", was: "Sonntagsessen", ort: "Wohnküche Haus 1", wer: "alle · oft mit Angehörigen" },
    { zeit: "15:00", was: "Kaffee und Kuchen", ort: "Terrasse oder Wohnraum", wer: "alle" },
    { zeit: "16:00", was: "Video-Anruf nach Istanbul", ort: "Zimmer Aylin Ali", wer: "Aylin Ali · Elif Ali" },
    { zeit: "18:30", was: "Abendessen", ort: "Beide Wohnküchen", wer: "alle" }
  ]}
]

const WIRKUNG = {
  woche: "Diese Woche standen 34 Termine im Kalender, 12 davon getragen von Ehrenamtlichen. Frau Braun hatte drei Video-Anrufe mit den Enkeln. Herr Schneider hat mit Volker die Zaun-Reparatur begonnen. Kein Sturz, keine Krankenhaus-Einweisung. Zwei neue Angehörige sind dem Kreis beigetreten.",
  zahlen: [
    { was: "Termine diese Woche", wert: "34", davon: "12 durch Ehrenamt" },
    { was: "Ehrenamts-Stunden", wert: "47", davon: "im Monat September" },
    { was: "Besuche je Bewohner", wert: "3,2", davon: "im Monat, Durchschnitt" },
    { was: "Personalfluktuation", wert: "0 %", davon: "Branchenschnitt 42 %" },
    { was: "Gesparte Fahrtzeit", wert: "87 h", davon: "im Monat durch Poolen" },
    { was: "Davon in Bewohner-Zeit", wert: "62 h", davon: "im Monat zurückgeflossen" },
    { was: "Stürze", wert: "1", davon: "im September, ohne Folge" },
    { was: "Krankenhaus", wert: "1", davon: "Herr Grunewald, 8 Tage" }
  ],
  momente: [
    { text: "Frau Braun liest den Kindern der 3b vor. Vier Kinder sitzen im Kreis um sie.", wer: "Fatma Yildiz", wann: "Dienstag" },
    { text: "Sara, seit du da bist, ist alles einfacher.", wer: "Ute Braun, Tochter von Helga", wann: "Samstag" },
    { text: "Herr Schneider und Volker beim Zaun. Er sägt nicht mehr, aber er sagt, wo.", wer: "Andrea Vogel", wann: "Mittwoch" },
    { text: "87 Gäste beim Sommerfest, 42 davon aus dem Dorf.", wer: "Wir in Lohre eG", wann: "Juli" }
  ]
}
