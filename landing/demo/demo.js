// care Demo — Karte, Menschen, Woche, Marktplatz, Wirkung.
//
// Zwei Gedanken tragen diese Datei:
// 1. Jedes Item wird gleich gebaut (Antons Anatomie), egal ob Mensch, Ort oder Bedarf.
// 2. Die Rollen-Brille steuert nur, WAS jemand sieht, nie WIE es aussieht.

(function () {
  "use strict"

  const ALLE = [...MENSCHEN, ...ORTE, ...BEDARFE]

  // Welche Felder eine Rolle sehen darf. Was fehlt, erscheint gar nicht.
  const SICHT = {
    bewohner:    { intern: false, sieht: ["bewohner", "angehoerige", "pflege", "ehrenamt", "ort", "bedarf"] },
    angehoerige: { intern: false, sieht: ["bewohner", "angehoerige", "pflege", "therapie", "ehrenamt", "ort", "bedarf"] },
    pflege:      { intern: true,  sieht: ["bewohner", "angehoerige", "pflege", "therapie", "ehrenamt", "traeger", "ort", "bedarf"] },
    ehrenamt:    { intern: false, sieht: ["bewohner", "ehrenamt", "ort", "bedarf"] },
    traeger:     { intern: true,  sieht: ["bewohner", "angehoerige", "pflege", "therapie", "ehrenamt", "traeger", "ort", "bedarf"] }
  }

  let brille = "pflege"
  let ausgeblendet = new Set()
  let gewaehlt = null

  const $ = (w) => document.querySelector(w)
  const $$ = (w) => Array.from(document.querySelectorAll(w))

  function sichtbareRollen() {
    return SICHT[brille].sieht.filter((r) => !ausgeblendet.has(r))
  }

  function sichtbar(eintrag) {
    return sichtbareRollen().includes(eintrag.rolle)
  }

  // ---------- Item-Card nach Antons Anatomie ----------
  // Kopf und Badge · Meta-Box · Selbstaktion · Inhalt · Listen · Tags.
  // Was keinen Inhalt hat, verschwindet. Die Reihenfolge bleibt.
  function itemCard(eintrag) {
    const rolle = ROLLEN[eintrag.rolle]
    const teile = []

    teile.push(`<div class="item-badge">
      <span class="typ" style="background:${rolle.farbe}">${rolle.name}</span>
      <button class="zu" type="button" aria-label="Schließen" data-schliessen>&times;</button>
    </div>`)

    teile.push(`<div class="item-kopf">
      <div class="avatar" style="background:${rolle.farbe}">${eintrag.avatar}</div>
      <div><h3>${eintrag.name}</h3><span class="unter">${eintrag.untertitel}</span></div>
    </div>`)

    if (eintrag.meta && Object.keys(eintrag.meta).length) {
      const zeilen = Object.entries(eintrag.meta).map(([schluessel, wert]) => {
        const inhalt = Array.isArray(wert)
          ? wert.map((w) => `<span class="meta-chip">${w}</span>`).join("")
          : wert
        return `<div class="meta-zeile"><b>${schluessel}</b><div>${inhalt}</div></div>`
      })
      teile.push(`<div class="meta-box">${zeilen.join("")}</div>`)
    }

    // Interne Felder sieht nur, wer sie sehen darf. Sonst fehlen sie ganz.
    if (eintrag.intern && SICHT[brille].intern) {
      const zeilen = Object.entries(eintrag.intern)
        .map(([s, w]) => `<div class="meta-zeile"><b>${s}</b><div>${w}</div></div>`)
      teile.push(`<div class="meta-intern">
        <div class="kopf"><svg><use href="#i-schloss"></use></svg> nur für Pflege und Träger</div>
        ${zeilen.join("")}
      </div>`)
    }

    if (eintrag.aktion && eintrag.aktion.length) {
      const knoepfe = eintrag.aktion.map((a) => `<button type="button" data-aktion>${a}</button>`)
      teile.push(`<div class="item-aktion">${knoepfe.join("")}</div>`)
    }

    if (eintrag.bio) teile.push(`<div class="item-inhalt">${eintrag.bio}</div>`)

    if (eintrag.termine && eintrag.termine.length) {
      const punkte = eintrag.termine.map((t) => `<li>${t}</li>`)
      teile.push(`<div class="item-liste"><h4>Nächste Termine</h4><ul>${punkte.join("")}</ul></div>`)
    }

    if (eintrag.tags && eintrag.tags.length) {
      teile.push(`<div class="item-tags">${eintrag.tags.map((t) => `<span>${t}</span>`).join("")}</div>`)
    }

    return `<div class="item">${teile.join("")}</div>`
  }

  function zeigeItem(ziel, eintrag) {
    const behaelter = $(ziel)
    if (!eintrag) {
      behaelter.innerHTML = `<div class="item"><div class="item-leer">Wählen Sie einen Eintrag.</div></div>`
      return
    }
    behaelter.innerHTML = itemCard(eintrag)
    behaelter.querySelector("[data-schliessen]").addEventListener("click", () => {
      gewaehlt = null
      zeichnePins()
      zeigeItem(ziel, null)
    })
    behaelter.querySelectorAll("[data-aktion]").forEach((knopf) => {
      knopf.addEventListener("click", () => {
        const getan = knopf.dataset.getan === "true"
        knopf.dataset.getan = getan ? "false" : "true"
        knopf.textContent = getan ? knopf.textContent.replace("✓ ", "") : "✓ " + knopf.textContent
      })
    })
  }

  // ---------- Karte ----------
  function zeichnePins() {
    const karte = $("#karte")
    karte.querySelectorAll(".pin").forEach((p) => p.remove())
    ALLE.filter((e) => e.pos).forEach((eintrag) => {
      const rolle = ROLLEN[eintrag.rolle]
      const pin = document.createElement("button")
      pin.className = "pin" + (eintrag.typ === "bedarf" ? " bedarf" : "")
      pin.style.left = eintrag.pos.x + "%"
      pin.style.top = eintrag.pos.y + "%"
      pin.style.background = rolle.farbe
      pin.style.color = rolle.farbe
      pin.title = eintrag.name
      pin.setAttribute("aria-label", eintrag.name)
      pin.innerHTML = `<span>${eintrag.typ === "bedarf" ? "!" : eintrag.avatar}</span>`
      if (!sichtbar(eintrag)) pin.dataset.gedimmt = "true"
      if (gewaehlt === eintrag.id) pin.dataset.gewaehlt = "true"
      pin.addEventListener("click", () => {
        gewaehlt = eintrag.id
        zeichnePins()
        zeigeItem("#karte-item", eintrag)
      })
      karte.appendChild(pin)
    })
  }

  function baueFilter(ziel, beiWechsel) {
    const behaelter = $(ziel)
    behaelter.innerHTML = ""
    SICHT[brille].sieht.forEach((schluessel) => {
      const rolle = ROLLEN[schluessel]
      const knopf = document.createElement("button")
      knopf.type = "button"
      knopf.setAttribute("aria-pressed", ausgeblendet.has(schluessel) ? "false" : "true")
      knopf.innerHTML = `<i style="background:${rolle.farbe}"></i>${rolle.name}`
      knopf.addEventListener("click", () => {
        if (ausgeblendet.has(schluessel)) ausgeblendet.delete(schluessel)
        else ausgeblendet.add(schluessel)
        baueFilter(ziel, beiWechsel)
        beiWechsel()
      })
      behaelter.appendChild(knopf)
    })
  }

  // ---------- Menschen-Liste ----------
  function zeichneMenschen() {
    const liste = $("#menschen-liste")
    const sichtbare = ALLE.filter((e) => e.typ !== "bedarf" && sichtbar(e))
    liste.innerHTML = ""
    sichtbare.forEach((eintrag) => {
      const rolle = ROLLEN[eintrag.rolle]
      const knopf = document.createElement("button")
      knopf.className = "mensch"
      knopf.type = "button"
      knopf.innerHTML = `
        <div class="avatar" style="background:${rolle.farbe}">${eintrag.avatar}</div>
        <div>
          <b>${eintrag.name}</b>
          <span>${eintrag.untertitel}</span>
          <span class="rolle-mark" style="background:${rolle.farbe}22;color:${rolle.farbe}">${rolle.name}</span>
        </div>`
      knopf.addEventListener("click", () => {
        zeigeItem("#menschen-item", eintrag)
        $("#menschen-item").scrollIntoView({ behavior: "smooth", block: "nearest" })
      })
      liste.appendChild(knopf)
    })
    if (!sichtbare.length) {
      liste.innerHTML = `<p style="color:var(--muted);font-size:14px">In dieser Sicht sind keine Einträge freigegeben.</p>`
    }
  }

  // ---------- Woche ----------
  function zeichneWoche() {
    const ziel = $("#woche")
    ziel.innerHTML = WOCHE.map((tag) => {
      const punkte = tag.termine.map((t) => {
        const rhythmus = t.monatlich ? `<span class="rhythmus">monatlich</span>`
          : t.vierzehntaegig ? `<span class="rhythmus">14-täglich</span>` : ""
        return `<li>
          <span class="zeit">${t.zeit}</span>
          <span><span class="was">${t.was}</span>${rhythmus}<span class="wer">${t.ort} · ${t.wer}</span></span>
        </li>`
      })
      return `<div class="tag"><h3>${tag.tag}</h3><ul>${punkte.join("")}</ul></div>`
    }).join("")
  }

  // ---------- Marktplatz ----------
  function zeichneBedarfe() {
    const ziel = $("#bedarfe")
    ziel.innerHTML = BEDARFE.map((bedarf) => {
      const zeilen = Object.entries(bedarf.meta)
        .map(([s, w]) => `<div class="meta-zeile"><b>${s}</b><div>${w}</div></div>`)
      const vorschlaege = bedarf.passung.map((p) => `
        <div class="vorschlag">
          <div class="vorschlag-kopf">
            <b>${p.wer}</b>
            <span class="grad" data-g="${p.grad}">${p.grad}</span>
          </div>
          <p>${p.grund}</p>
          <button type="button" data-aktion>Anfragen</button>
        </div>`)
      return `<div class="bedarf">
        <div class="bedarf-kopf">
          <span class="punkt">!</span>
          <div><h3>${bedarf.name}</h3><span class="unter">${bedarf.untertitel}</span></div>
          <span class="dringend" data-stufe="${bedarf.dringlichkeit}">${bedarf.dringlichkeit}</span>
        </div>
        <div class="meta-box">${zeilen.join("")}</div>
        <h4>Wer passen könnte, und warum</h4>
        <div class="passung">${vorschlaege.join("")}</div>
      </div>`
    }).join("")

    ziel.querySelectorAll("[data-aktion]").forEach((knopf) => {
      knopf.addEventListener("click", () => {
        const getan = knopf.dataset.getan === "true"
        knopf.dataset.getan = getan ? "false" : "true"
        knopf.textContent = getan ? "Anfragen" : "✓ Angefragt"
      })
    })
  }

  // ---------- Wirkung ----------
  function zeichneWirkung() {
    $("#wirkung-text").textContent = WIRKUNG.woche
    $("#zahlen").innerHTML = WIRKUNG.zahlen.map((z) =>
      `<div class="zahl"><b>${z.wert}</b><span class="was">${z.was}</span><span class="davon">${z.davon}</span></div>`
    ).join("")
    $("#momente").innerHTML = WIRKUNG.momente.map((m) =>
      `<div class="moment"><p>„${m.text}“</p><span class="quelle">${m.wer} · ${m.wann}</span></div>`
    ).join("")
  }

  // ---------- Reiter ----------
  $$(".reiter button").forEach((knopf) => {
    knopf.addEventListener("click", () => {
      $$(".reiter button").forEach((k) => k.setAttribute("aria-selected", "false"))
      knopf.setAttribute("aria-selected", "true")
      $$(".blatt").forEach((b) => b.dataset.aktiv = String(b.dataset.blatt === knopf.dataset.blatt))
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  })

  // ---------- Rollen-Brille ----------
  $("#brille").addEventListener("change", (ereignis) => {
    brille = ereignis.target.value
    ausgeblendet = new Set()
    gewaehlt = null
    allesZeichnen()
  })

  function allesZeichnen() {
    baueFilter("#karte-filter", () => zeichnePins())
    baueFilter("#menschen-filter", () => zeichneMenschen())
    zeichnePins()
    zeichneMenschen()
    zeigeItem("#karte-item", null)
    $("#menschen-item").innerHTML = ""
  }

  // ---------- Start ----------
  allesZeichnen()
  zeichneWoche()
  zeichneBedarfe()
  zeichneWirkung()

  // Ein Anker wie /demo/#pflege oeffnet gleich die passende Sicht.
  const anker = location.hash.slice(1)
  if (anker && SICHT[anker]) {
    brille = anker
    $("#brille").value = anker
    allesZeichnen()
  }
})()
