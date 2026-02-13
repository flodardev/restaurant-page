import "./modern-css-reset.css";
import "./index.css";
import { homeDiv } from "./pages/home-page.js";

console.log("Hello world!");

const mainContainer = document.querySelector("#main-container");
mainContainer.append(homeDiv);
