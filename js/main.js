const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector(".menu");
let navList = document.querySelector(".nav-list");
menu.onclick = function () {
  navList.classList.toggle("open");
};

window.onscroll = function () {
  navList.classList.remove("open");
};

const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: true,
});

sr.reveal(".home-text", { delay: 300 });
sr.reveal(".home-imag", { delay: 400 });
sr.reveal(".container", { delay: 400 });

sr.reveal(".about-img", {});
sr.reveal(".about-text,.shop-content", { delay: 300 });

sr.reveal(".middle-text", {});
sr.reveal(".row-btn", { delay: 300 });
sr.reveal(".review-content,.contact", { delay: 300 });
