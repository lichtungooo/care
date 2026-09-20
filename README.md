# care

**Ein Entwurf: so könnte ein Pflege-Pool aussehen**

Dieses Repo ist eine **Sichtbarmachung**, kein Produkt. Es zeigt, wie sich ein Pflege-Pool nach § 92c SGB XI in Software fassen ließe: sechs Rollen, eine Karte, ein Kalender, ein Marktplatz. Gebaut auf dem [Real Life Stack][rls], Vertrauen über das [Web of Trust][wot], Muster und Geschwister-Instanz: [trustdonation][td].

> **Das Konzept gehört Vision Gesundheit.** Bärbel und ihr Team entwickeln den Pflege-Pool, kennen das Feld, tragen das Risiko und entscheiden. Wir zeigen, was sich damit bauen ließe, damit es etwas Anschauliches gibt, über das man reden kann. Zum Weitergeben, nicht zum Behalten.

| | |
|---|---|
| Live | <https://care.wir.ooo> |
| Art | Entwurf zur Übergabe, keine laufende Anwendung |
| Konzept gehört | Vision Gesundheit (Bärbel und Team) |
| Gebaut von | Kollektiv Lichtung e.V. |
| Rechtlicher Rahmen | § 92c SGB XI (seit 01.01.2026), § 38a, § 45e, § 36 Poolen |
| Denkraum | `d:\Workspace\30-konzepte\pflege-pool\` (18 Papiere) |
| Für Agenten | [AGENTS.md](AGENTS.md), [llms.txt](llms.txt) |

**Alle Menschen in der Demo sind erfunden.** Helga Braun, Sara Nowak, Volker Meister: keine echten Personen, keine echten Daten. Beispiele, damit das Bild trägt.

---

## Warum jetzt

Deutschland trägt heute etwa **5,7 Millionen pflegebedürftige Menschen** (Stand Ende 2023, Zahl steigt jährlich). Rund **84 Prozent** leben zuhause, ambulant versorgt oder von Angehörigen. Nur ein kleiner Teil sitzt im Heim. Das Heim frisst pro Person **3.000 bis 4.500 Euro Eigenanteil monatlich**, der Pflegekassenanteil deckt nur einen Rest. Träger wie AWO, Caritas, Diakonie, Korian oder Alloheim halten die Struktur, die Pflegekräfte am unteren Rand der Lohnkette.

Seit **1. Januar 2026** öffnet **§ 92c SGB XI** eine Tür. Zugelassene ambulante Pflegedienste schließen Verträge mit den Kostenträgern und versorgen mehrere Menschen in **gemeinschaftlichen Wohnformen**. Zusammen mit **§ 38a** (Wohngruppenzuschlag, aktuell 224 Euro pro Person und Monat) und **§ 45e** (Anschubfinanzierung, bis 10.000 Euro pro Gruppe) steht ein Rahmen, den bisher wenige nutzen.

care setzt an diese Tür.

## Was care leistet

- **Karte** mit Pflege-Pools, Räumen, Menschen, Fähigkeiten, offenen Bedarfen
- **Kalender** je Ort mit Einsätzen, Terminen, Aktivitäten
- **Rollen-Ring** aus Bewohnern, Angehörigen, Pflegekräften, Therapeuten, Ehrenamt, Trägern
- **Fähigkeits-Register** je Mensch, mit Verfügbarkeit und Radius
- **Bedarfs-Layer**, aus dem das Matching wächst
- **Care-Management** für Pflegepläne, Einsätze, Doku, Vertretung
- **Pool-Sicht** auf Räume, Fahrzeuge, Werkzeuge, Menschen
- **Finanzmodul** für Budgets, Fördermittel, Spenden, Gemeinschaftstöpfe
- **Begleitung** durch einen Companion je Space

Pflege ist einer der ersten vertikalen Anwendungsfälle des Real Life Stacks. Später tragen dieselben Module Mehrgenerationendörfer, Wohnprojekte, Vereine, Kommunen.

## Architektur

```text
┌────────────────────────────────────────────────────────────┐
│  care                                                      │
│  Landing · Pool-Karte · Rollen · Fähigkeiten · Care-Mgmt   │
├────────────────────────────────────────────────────────────┤
│  Real Life Stack (RLS)                                     │
│  App Shell · Karte · Gruppen · Profile · Kalender · Feed   │
├────────────────────────────────────────────────────────────┤
│  Web of Trust (WoT)                                        │
│  Identität · Begegnung · Bestätigung · Sync                │
└────────────────────────────────────────────────────────────┘
```

care ist eine **Instanz** des Real Life Stack, kein Fork. Die App kommt als fertiges Image, dieses Repo hält Konfiguration, Inhalt und Landing. Muster: trustdonation.

## Verwandt

- **[trustdonation][td]** — Geschwister-Instanz. Landing, Menü, Kreislauf-Muster, Stil geklont, Kontext neu.
- **[wir.ooo][wir]** — Baustelle, unter der care.wir.ooo als Sub-Level sitzt.
- **[Real Life Stack][rls]** — die App-Schicht.
- **[Web of Trust][wot]** — die Vertrauensschicht.

[rls]: https://github.com/real-life-org/real-life-stack
[wot]: https://github.com/antontranelis/web-of-trust
[td]: https://trustdonation.org
[wir]: https://wir.ooo
