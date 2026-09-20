// care — Kopfzeile, Hell und Dunkel, Aufklapp-Menues.
// Eine Sprache: Deutsch. Kein Woerterbuch, kein Umschalter.

(function () {
  "use strict"

  var wurzel = document.documentElement

  // --- Hell und dunkel ---
  // Drei Zustaende: System (nichts gespeichert), hell, dunkel.
  window.schemaUmschalten = function () {
    var jetztDunkel = wurzel.dataset.theme === "dark" ||
      (!wurzel.dataset.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    var neu = jetztDunkel ? "light" : "dark"
    wurzel.dataset.theme = neu
    try { localStorage.setItem("care-theme", neu) } catch (e) {}
  }

  // --- Menue auf dem Telefon ---
  window.menueUmschalten = function () {
    var offen = document.body.dataset.menu === "open"
    document.body.dataset.menu = offen ? "" : "open"
    var knopf = document.querySelector(".burger")
    if (knopf) knopf.setAttribute("aria-expanded", offen ? "false" : "true")
  }

  window.menueSchliessen = function () {
    document.body.dataset.menu = ""
    var knopf = document.querySelector(".burger")
    if (knopf) knopf.setAttribute("aria-expanded", "false")
  }

  // --- Aufklapp-Menues in der Kopfzeile ---
  document.querySelectorAll(".has-menu > button").forEach(function (knopf) {
    knopf.addEventListener("click", function (ereignis) {
      ereignis.stopPropagation()
      var eltern = knopf.parentElement
      var offen = eltern.dataset.open === "true"
      document.querySelectorAll(".has-menu[data-open='true']").forEach(function (m) {
        m.dataset.open = "false"
        var b = m.querySelector("button")
        if (b) b.setAttribute("aria-expanded", "false")
      })
      eltern.dataset.open = offen ? "false" : "true"
      knopf.setAttribute("aria-expanded", offen ? "false" : "true")
    })
  })

  document.addEventListener("click", function (ereignis) {
    document.querySelectorAll(".has-menu[data-open='true']").forEach(function (m) {
      if (!m.contains(ereignis.target)) {
        m.dataset.open = "false"
        var b = m.querySelector("button")
        if (b) b.setAttribute("aria-expanded", "false")
      }
    })
  })

  document.addEventListener("keydown", function (ereignis) {
    if (ereignis.key !== "Escape") return
    document.querySelectorAll(".has-menu[data-open='true']").forEach(function (m) {
      m.dataset.open = "false"
      var b = m.querySelector("button")
      if (b) b.setAttribute("aria-expanded", "false")
    })
    window.menueSchliessen()
  })

  // --- Sanftes Springen auf Anker, Kopfzeile bleibt frei ---
  document.addEventListener("click", function (ereignis) {
    var verweis = ereignis.target.closest("a[href^='#']")
    if (!verweis) return
    var kennung = verweis.getAttribute("href").slice(1)
    if (!kennung) return
    var ziel = document.getElementById(kennung)
    if (!ziel) return
    ereignis.preventDefault()
    ziel.scrollIntoView({ behavior: "smooth", block: "start" })
    history.replaceState(null, "", "#" + kennung)
  })
})()
