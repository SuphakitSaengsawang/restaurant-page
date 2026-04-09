import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function clearContent() {
  const content = document.getElementById("content");
  content.textContent = "";
}

function loadPage(loader) {
  clearContent();
  loader();
}

loadHome();

document.getElementById("home-btn").addEventListener("click", () => {
  loadPage(loadHome);
});

document.getElementById("menu-btn").addEventListener("click", () => {
  loadPage(loadMenu);
});

document.getElementById("contact-btn").addEventListener("click", () => {
  loadPage(loadContact);
});