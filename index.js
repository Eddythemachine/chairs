// SELECTING ELEMENTS

// SROLL INTO VIEW
const links = document.querySelectorAll(".links");
const inventBtn = document.querySelector(".invent");
const investBtn = document.querySelector(".invest");

// NAVBAR
const blur = document.querySelector(".blur");
const closeBtb = document.querySelector(".close-btn");
const menu = document.querySelector(".hide-nav");
const navBar = document.querySelector(".nav");

// Scroll into view
const scrollToViewBtn = function (btn) {
  btn.preventDefault();
  const data = btn.target.dataset.tabNo;
  const sec = document.querySelector(`#sec-${data}`);
  sec.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};

// Functions

// Scroll into view
const eventListenerScrollto = function (add) {
  add.addEventListener("click", (e) => {
    scrollToViewBtn(e);
  });
};

// close navbar

const closeNav = function () {
  navBar.classList.add("translate");
  document.querySelector(".blur").classList.remove("blur-class");
};

// Show and hide navbar

menu.addEventListener("click", (e) => {
  navBar.classList.remove("translate");
  document.querySelector(".blur").classList.add("blur-class");
});
closeBtb.addEventListener("click", () => {
  closeNav();
});
document.querySelector(".blur").addEventListener("click", () => {
  closeNav();
});

// Scrolling into view
links.forEach((mov) => {
  eventListenerScrollto(mov);
});

// Calling functions for scrollto
eventListenerScrollto(inventBtn);
eventListenerScrollto(investBtn);
