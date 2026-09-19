# AGENTS.md — care

Dieses Repo trägt die Landing und die Instanz-Konfiguration für **care**, ein Betriebssystem für Pflege-Pools und gemeinschaftliche Wohnformen. care ist eine Instanz des Real Life Stack, kein Fork. Der App-Code kommt als Docker-Image, dieses Repo hält Landing, Inhalt, Konfiguration.

## Für Menschen und Agenten, die hier arbeiten

**Das Konzept lebt zuerst im Denkraum:**

`d:\Workspace\30-konzepte\pflege-pool\` trägt die fetten Papiere: Landschaft, Rahmen, Geld, Vorbilder, Marktplatz, Ideenfragen, Dummy-Daten, Landing-Klon. Vor jeder Änderung in diesem Repo dort nachlesen.

**Der Weg ist:**

1. **Definieren** nach dem Raster aus `/td-definieren`: welche Frage, welche eine Quelle, welche Schicht, was bei Unbekanntem.
2. **Test** bevor der Code kommt (Vitest, Feldregister, Grenzfälle).
3. **Bauen** über Haken statt Naht in Antons Code, wo möglich.
4. **Stand pflegen** in `memory/stand_pflege_pool.md`.

**Regel vor jeder Naht:** `/td-naht` fragen. Wenn ein Haken reicht, den Haken nehmen. Wenn eine Naht nötig ist, klein ziehen und in `docs/naehte.md` eintragen.

## Das Umfeld

- **Geschwister-Instanz:** trustdonation. Landing, Menü, Kreislauf, Stil geklont, Kontext neu.
- **Sub-Domain:** care.wir.ooo (unter der wir.ooo-Baustelle).
- **Später:** care.reallife.network oder eigene Domain, sobald der erste Standort läuft.
- **Rechtlicher Anker:** § 92c SGB XI (seit 01.01.2026), § 38a, § 45e, § 36 Poolen.
- **Ausgangs-Kontakt:** Bärbel, Vision Gesundheit.

## Was hier NICHT hingehört

- Kein RLS-Fork. Der Stack ist Anton, wir sind eine Instanz.
- Kein eigener Pflegedienst. care baut das Werkzeug, den Träger wählen andere.
- Keine Gesundheitsdaten in der Landing. Art. 9 DSGVO gilt.
- Keine Anti-Pharma-Rhetorik. Lebensqualitäts-Modell.

## Prüfen vor jedem Commit

Wie bei trustdonation: die Tore aus `td-tools/pruefen.py` (Typecheck, Tests, Umlaute, Naht-Prüfung, Startlast). Wir übernehmen die Werkzeuge sobald das Repo Code trägt.

## Skills, die hier gelten

- `/td-definieren` — bevor eine Sache Code wird
- `/td-naht` — bevor Antons Code berührt wird
- `/td-modul` — für ein Space-Modul
- `/td-komponente` — für eine UI-Komponente
- `/td-test` — was getestet wird
- `/td-ausliefern` — Prototyp bauen und live bringen
- `/klare-sprache` — für jeden Text nach außen

## Sprache

Deutsch. Klar wie Schiller. Bejahung statt Verneinung. Keine Gedankenstriche. Echte Umlaute. Sparsame Silben.
