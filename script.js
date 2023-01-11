"use strict";

// Scrolling functions

document.querySelectorAll(".nav-btn").forEach(function (e) {
  e.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
