/////////////// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".nav");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
});


/////////////// making smooth scrolling work

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll back to top ||
    if (href === "#") {
      e.preventDefault(); // prevents reload
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault(); // prevents reload
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav__menu__link"))
      navEl.classList.toggle("nav-open");
  });
});


/////////////// Sticky navigation

const sectionHeroEl = document.querySelector(".hero");
const header = document.querySelector(".header-nav");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      header.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      header.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);