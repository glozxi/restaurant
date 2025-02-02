import "./styles.css";
import { homePage } from "./home";
import { menu } from "./menu";
import { about } from "./about";

const menuButton = document.getElementById("menu-button");
const homeButton = document.getElementById("home-button");
const aboutButton = document.getElementById("about-button");

const buttons = [homeButton, menuButton, aboutButton];

function clear() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  for (const button of buttons) {
    console.log(button);
    button.classList.remove("page-selected");
  }
}

menuButton.onclick = () => {
  clear();
  menuButton.classList.add("page-selected");
  menu();
}

homeButton.onclick = () => {
  clear();
  homeButton.classList.add("page-selected");
  homePage();
}

aboutButton.onclick = () => {
  clear();
  aboutButton.classList.add("page-selected");
  about();
}

homePage();