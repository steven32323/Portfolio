"use strict";

// Scrolling functions

document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-btn")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// fading links on hover

const handleHover = function (e) {
  if (e.target.classList.contains("nav-btn")) {
    const link = e.target;
    const siblings = link.closest(".links").querySelectorAll(".nav-btn");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
