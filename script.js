// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const expanded = navLinks.classList.contains("open");
  navToggle.setAttribute("aria-expanded", String(expanded));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Scroll-reveal
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

const setActive = () => {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  navAnchors.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();

// Diagram lightbox
const lightbox = document.createElement("div");
lightbox.className = "lightbox-overlay";
lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><div class="lightbox-content"></div>';
document.body.appendChild(lightbox);

const lightboxContent = lightbox.querySelector(".lightbox-content");
const lightboxClose = lightbox.querySelector(".lightbox-close");
let lastFocused = null;

const openLightbox = (svg) => {
  lightboxContent.innerHTML = "";
  lightboxContent.appendChild(svg.cloneNode(true));
  lastFocused = document.activeElement;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
};

const closeLightbox = () => {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
};

document.querySelectorAll(".arch-diagram").forEach((svg) => {
  svg.setAttribute("tabindex", "0");
  svg.setAttribute("role", "button");
  svg.addEventListener("click", () => openLightbox(svg));
  svg.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox(svg);
    }
  });
});

lightbox.addEventListener("click", (e) => {
  if (!e.target.closest("svg")) closeLightbox();
});
lightboxClose.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});
