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
// Список твоих фраз для анимации
const words = ["hiz, мне 16 лет", "hiz, hizikc, zik, ziks это все мои ники", "учусь на первом курсе", "делаю разную фигню", "дэбил"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const textElement = document.getElementById("typewriter-text");

  if (!textElement) return;

  if (isDeleting) {
    // Стираем текст
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Пишем текст
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Базовая скорость: стирание быстрее (50мс), печать медленнее (100мс)
  let speed = isDeleting ? 50 : 100;

  // Фраза дописана до конца
  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500; // Пауза 1.5 секунды, пока горит вся фраза
    isDeleting = true;
  }
  // Фраза стерта до конца
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Переключаем на следующую фразу
    speed = 400; // Пауза перед началом новой печати
  }

  setTimeout(typeEffect, speed);
}

// Запуск анимации через полсекунды после загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 500);
});
// Код для смены БОЛЬШОГО ника сверху (твоя печатная машинка снизу при этом работает сама по себе)
const topNicknames = ["hiz", "hizikc", "zik", "ziks"];
let topNickIndex = 0;

function rotateTopNickname() {
  const topNickElement = document.getElementById("main-nickname");
  if (!topNickElement) return;

  // Включаем анимацию растворения
  topNickElement.classList.add("blur-fade");

  // В середине анимации (на 500мс), когда текст размыт и невидим, меняем буквы
  setTimeout(() => {
    topNickIndex = (topNickIndex + 1) % topNicknames.length;
    topNickElement.textContent = topNicknames[topNickIndex];
  }, 500);

  // В конце анимации убираем класс, чтобы цикл мог повториться
  setTimeout(() => {
    topNickElement.classList.remove("blur-fade");
  }, 1000);
}

// Запускаем смену верхнего большого ника каждые 4 секунды
setInterval(rotateTopNickname, 4000);
