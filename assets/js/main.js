/* Module 1: mobile menu */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

/* Module 2: highlight the nav link of the visible section */
(function () {
  var links = document.querySelectorAll(".site-nav a");
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  if (!("IntersectionObserver" in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting && map[en.target.id]) {
        links.forEach(function (l) { l.classList.remove("active"); });
        map[en.target.id].classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  Object.keys(map).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) io.observe(el);
  });
})();

/* Module 3: soft "active particles" animation in the hero */
(function () {
  var canvas = document.getElementById("particles");
  if (!canvas || !canvas.getContext) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w, h, parts = [];

  function resize() {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(90, (w * h) / 16000));
    parts = [];
    for (var i = 0; i < n; i++) {
      parts.push({
        x: Math.random() * w, y: Math.random() * h,
        th: Math.random() * Math.PI * 2,
        v: 0.25 + Math.random() * 0.35,
        r: 1.4 + Math.random() * 1.6
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      p.th += (Math.random() - 0.5) * 0.18;           /* rotational diffusion */
      p.x += Math.cos(p.th) * p.v;                    /* self-propulsion */
      p.y += Math.sin(p.th) * p.v;
      if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.fillStyle = i % 3 === 0 ? "rgba(154,211,197,.85)" : "rgba(143,183,230,.85)";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();                                /* short heading tail */
      ctx.strokeStyle = "rgba(143,183,230,.25)";
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - Math.cos(p.th) * 9, p.y - Math.sin(p.th) * 9);
      ctx.stroke();
    }
    requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);
  resize();
  step();
})();
