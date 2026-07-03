// hiMatrix Academy — minimal JS
// Purpose: current year in footer + lightweight scroll-reveal.
(function () {
    // Footer year
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    // Scroll reveal — IntersectionObserver, no-op if unsupported
    var reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !reveals.length) {
      reveals.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  })();