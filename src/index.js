import "./styles/reset.css";
import "./styles/styles.css";
import "./styles/menu.css";

import loadHome from "./scripts/homePage.js";
import loadMenu from "./scripts/menuPage.js";

console.log("It's working!");

loadHome();

const homeBtn = document.querySelector('.btn-home');
const menuBtn = document.querySelector('.btn-menu');
const aboutBtn = document.querySelector('.btn-about');

const clearContent = () => {
    const contentContainer = document.querySelector('#content');
    contentContainer.textContent = '';
}

homeBtn.addEventListener('click', () => {
    clearContent();
    loadHome();
});

menuBtn.addEventListener('click', () => {
    clearContent();
    loadMenu();
})