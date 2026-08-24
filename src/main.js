import './style.css';
import './menu.css';
import './footer.css';
import './links.css'; /* 1. ИМПОРТИРУЕМ СТИЛИ ПАНЕЛИ ССЫЛОК */

import menuHtmlContent from './menu.html?raw';
import cardHtmlContent from './card.html?raw';
import footerHtmlContent from './footer.html?raw';
import linksHtmlContent from './links.html?raw'; /* 2. ИМПОРТИРУЕМ HTML ПАНЕЛИ */

// Склеиваем блоки на страницу
const menuContainer = document.getElementById('menu-container');
if (menuContainer) menuContainer.innerHTML = menuHtmlContent;

// 3. Вставляем боковую панельку ссылок
const linksContainer = document.getElementById('links-container');
if (linksContainer) linksContainer.innerHTML = linksHtmlContent;

const cardContainer = document.getElementById('card-container');
if (cardContainer) cardContainer.innerHTML = cardHtmlContent;

const footerContainer = document.getElementById('footer-container');
if (footerContainer) footerContainer.innerHTML = footerHtmlContent;

// Ниже идет твоя печатная машинка и частицы без изменений...

// Ниже без изменений идет твоя функция печатной машинки...

// Пишем только продолжение фразы (без слова "Я")
const words = ["hiz, мне 16 лет","учусь на первом курсе ","делаю разную фигню","дэбил"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const textElement = document.getElementById("typewriter-text");

    if (!textElement) return;

    if (isDeleting) {
        // Стираем только продолжение фразы
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Пишем продолжение фразы
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    // Фраза дописана до конца
    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500; // Держим фразу на экране  секунды
        isDeleting = true;
    }
    // Продолжение стерто до конца (слово "Я" в HTML при этом не трогается)
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Листаем к следующей концовке
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

// Стартуем анимацию
setTimeout(typeEffect, 500);
