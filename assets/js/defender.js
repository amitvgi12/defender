/* ==========================================================================
   DEFENDER SECURITY — site behaviour
   Shared across all pages. Every block guards its own selectors so pages
   without a given component simply skip it.
   ========================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------- MOBILE NAV */
  (function mobileNav() {
    var toggle = document.querySelector(".nav-hamburger");
    var menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  })();

  /* --------------------------------------------------- STICKY NAV STATE */
  (function stickyNav() {
    var nav = document.getElementById("siteNav") || document.querySelector("nav");
    if (!nav) return;
    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 12); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  })();

  /* --------------------------------------------------- CONVERSION CLICKS */
  (function conversions() {
    function track(name, details) {
      if (window.gtag) window.gtag("event", name, details || {});
      if (window.dataLayer) window.dataLayer.push(Object.assign({ event: name }, details || {}));
    }
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.addEventListener("click", function () { track("phone_click", { label: link.textContent.trim() }); });
    });
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
      link.addEventListener("click", function () {
        track("whatsapp_click", { label: link.textContent.trim() || link.getAttribute("aria-label") || "WhatsApp" });
      });
    });
  })();

  /* -------------------------------------------------------------- FAQ */
  (function faq() {
    var items = document.querySelectorAll(".faq-q");
    items.forEach(function (btn) {
      var parent = btn.closest(".faq-item");
      btn.setAttribute("aria-expanded", String(parent.classList.contains("open")));
      btn.addEventListener("click", function () {
        var open = parent.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  })();

  /* ------------------------------------------------------------ GALLERY */
  (function gallery() {
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".gallery-thumb"));
    var mainImg = document.getElementById("galleryMainImg");
    var counter = document.getElementById("galleryCounter");
    var shell = document.getElementById("fieldGallery");
    if (!buttons.length || !mainImg) return;
    var index = 0;

    function set(i) {
      index = (i + buttons.length) % buttons.length;
      var active = buttons[index];
      mainImg.src = active.dataset.gallerySrc;
      mainImg.alt = active.dataset.galleryAlt;
      buttons.forEach(function (b, n) {
        var on = n === index;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      if (counter) {
        counter.textContent = String(index + 1).padStart(2, "0") + " / " + String(buttons.length).padStart(2, "0");
      }
      active.scrollIntoView({ block: "nearest", inline: "center" });
    }

    document.querySelectorAll("[data-gallery-step]").forEach(function (btn) {
      btn.addEventListener("click", function () { set(index + Number(btn.dataset.galleryStep)); });
    });
    buttons.forEach(function (btn, i) {
      btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      btn.addEventListener("click", function () { set(i); });
    });
    if (shell) {
      shell.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") { e.preventDefault(); set(index + 1); }
        if (e.key === "ArrowLeft") { e.preventDefault(); set(index - 1); }
      });
    }
  })();

  /* ----------------------------------------------------- SCROLL REVEAL */
  (function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          setTimeout(function () { e.target.classList.add("visible"); }, i * 80);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  })();

  /* --------------------------------------------------- STAT COUNT-UP */
  (function countUp() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) return; // leave static text

    function run(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var start = null, dur = 1400;
      var suffixHTML = suffix ? '<span class="plus">' + suffix + "</span>" : "";
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = Math.round(eased * target);
        el.innerHTML = val + suffixHTML;
        if (p < 1) requestAnimationFrame(step);
        else el.innerHTML = target + suffixHTML;
      }
      requestAnimationFrame(step);
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { io.observe(el); });
  })();
})();
