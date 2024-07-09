// mobo nav
const navBtnDOM = document.querySelector(".btn-mobile-nav");
const headerDOM = document.querySelector(".header");
navBtnDOM.addEventListener("click", function () {
  headerDOM.classList.toggle("nav-main-open");
});

document.querySelector(".current-year").textContent = new Date().getFullYear();

// smooth scrolling (safari)
const allLinksDOM = document.querySelectorAll("a:link");
allLinksDOM.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-header-link"))
      headerDOM.classList.toggle("nav-main-open");
  });
});
