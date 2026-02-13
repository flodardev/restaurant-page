import "./modern-css-reset.css";
import "./index.css";
import { homeSection } from "./pages/home-page.js";
import { menuSection } from "./pages/menu-page.js";
import { aboutSection } from "./pages/about-page.js";

const mainContainer = document.querySelector("#main-container");

const homeButton = document.querySelector("#home-btn");
homeButton.addEventListener("click", () => {
  clearSection();
  mainContainer.append(homeSection());
});

const menuButton = document.querySelector("#menu-btn");
menuButton.addEventListener("click", () => {
  clearSection();
  mainContainer.append(menuSection());
});

const aboutButton = document.querySelector("#about-btn");
aboutButton.addEventListener("click", () => {
  clearSection();
  mainContainer.append(aboutSection());
});

const clearSection = () => {
  while (mainContainer.firstChild != null) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
};
