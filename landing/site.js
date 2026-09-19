// care landing — schlanker Kern
// Theme-Umschalter, Menue-Klicks, keine Analytics.

(function () {
  "use strict";

  // --- Theme (hell / dunkel / System) ---
  var root = document.documentElement;
  try {
    var w = localStorage.getItem("rls-theme");
    if (w === "dark" || w === "light") root.dataset.theme = w;
  } catch (e) {}

  window.setCareTheme = function (mode) {
    try {
      if (mode === "auto") {
        localStorage.removeItem("rls-theme");
        delete root.dataset.theme;
      } else if (mode === "dark" || mode === "light") {
        localStorage.setItem("rls-theme", mode);
        root.dataset.theme = mode;
      }
    } catch (e) {}
  };

  // --- Sanftes Scrollen auf interne Anker ---
  document.addEventListener("click", function (event) {
    var a = event.target.closest("a[href^='#']");
    if (!a) return;
    var id = a.getAttribute("href").slice(1);
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#" + id);
  });

  // --- Ausklapp-Menues (falls jemand das Kopfleisten-Muster erweitert) ---
  document.querySelectorAll(".has-menu > button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var parent = btn.parentElement;
      var open = parent.getAttribute("data-open") === "true";
      parent.setAttribute("data-open", open ? "false" : "true");
      btn.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });

  document.addEventListener("click", function (event) {
    document.querySelectorAll(".has-menu[data-open='true']").forEach(function (m) {
      if (!m.contains(event.target)) {
        m.setAttribute("data-open", "false");
        var btn = m.querySelector("button");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
