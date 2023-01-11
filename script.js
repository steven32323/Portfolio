"use strict";

const btnScrollProject = document.querySelector(".btn-project");
const btnScrollAbout = document.querySelector(".btn-about");
const btnScrollContact = document.querySelector(".btn-contact");
const projects = document.querySelector("#projects");
const aboutMe = document.querySelector("#aboutme");
const contactMe = document.querySelector("#contactme");

// Scrolling functions
btnScrollProject.addEventListener("click", function () {
  projects.scrollIntoView({ behavior: "smooth" });
});
btnScrollAbout.addEventListener("click", function () {
  aboutMe.scrollIntoView({ behavior: "smooth" });
});
btnScrollContact.addEventListener("click", function () {
  contactMe.scrollIntoView({ behavior: "smooth" });
});
