//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/menu.html?raw
var menu_default = "<div class=\"burger-menu-wrapper\">\r\n  <input type=\"checkbox\" id=\"menu-toggle\" class=\"menu-checkbox\">\r\n\r\n  <label for=\"menu-toggle\" class=\"burger-button\">\r\n    <span class=\"burger-line\"></span>\r\n    <span class=\"burger-line\"></span>\r\n    <span class=\"burger-line\"></span>\r\n  </label>\r\n\r\n  <nav class=\"side-menu\">\r\n    <div class=\"menu-links\">\r\n      <a href=\"../index.html\">Главная</a>\r\n      <a href=\"https://hiz-squad-hs.github.io/index.html\">Проекты</a>\r\n   <!--   <a href=\"#\">Разрабы-Дауны</a>-->\r\n    </div>\r\n  </nav>\r\n</div>\r\n";
//#endregion
//#region src/card.html?raw
var card_default = "<div class=\"hiz-card-wrapper\">\r\n  <style>\r\n    /* Базовые стили для контейнера карточки, чтобы она не сжималась */\r\n    .hiz-card-wrapper {\r\n      background-color: #000000;\r\n      color: #ffffff;\r\n      font-family: sans-serif;\r\n      width: 100%;\r\n      max-width: 340px;      /* Фиксированная ширина карточки */\r\n      margin: 40px auto;     /* Центрирование */\r\n      padding: 25px 20px;\r\n      border-radius: 12px;\r\n      text-align: center;\r\n      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\r\n    }\r\n\r\n    /* Стили для твоих оригинальных классов */\r\n    .hiz-card-info-content {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      gap: 4px;              /* Небольшой отступ между строками */\r\n    }\r\n\r\n    .hiz-card-text-line {\r\n      font-size: 14px;\r\n      color: #ffffff;\r\n      margin: 0;\r\n    }\r\n\r\n    /* Подзаголовки разделов (Specifications-pc:, Телы:, Уши:) */\r\n    .hiz-card-text-line:has(+ .hiz-card-text-subline),\r\n    .hiz-card-device-block p:first-child {\r\n      font-weight: 600;\r\n      color: #aaaaaa;\r\n      margin-top: 12px;\r\n    }\r\n\r\n    .hiz-card-text-subline {\r\n      font-size: 13px;\r\n      color: #dddddd;\r\n      margin: 0;\r\n    }\r\n\r\n    .hiz-card-device-block {\r\n      width: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 2px;\r\n    }\r\n\r\n    /* Кастомная разделительная линия между блоками */\r\n    .hiz-card-divider {\r\n      width: 100%;\r\n      height: 1px;\r\n      background-color: rgba(255, 255, 255, 0.1);\r\n      margin: 10px 0;\r\n    }\r\n  </style>\r\n\r\n  <!-- Твой оригинальный контент из index.html -->\r\n  <div class=\"hiz-card-info-content\">\r\n    <p class=\"hiz-card-text-line\">hiz</p>\r\n    <p class=\"hiz-card-text-line\">Матвей</p>\r\n    <p class=\"hiz-card-text-line\">Др - 09.11</p>\r\n\r\n    <div class=\"hiz-card-divider\"></div>\r\n\r\n    <p class=\"hiz-card-text-line\">Specifications-pc:</p>\r\n    <p class=\"hiz-card-text-line\">CPU - i3 10105F</p>\r\n    <p class=\"hiz-card-text-line\">GPU - ASUS GTX 1060</p>\r\n    <p class=\"hiz-card-text-line\">RAM - 16 ГБ</p>\r\n    <p class=\"hiz-card-text-line\">SSD - KingSpec P3-512 (512 GB)</p>\r\n    <p class=\"hiz-card-text-line\">SSD - Apacer AS350 PANTHER (120 GB)</p>\r\n    <p class=\"hiz-card-text-line\">System - WIN 11 23H2</p>\r\n\r\n    <div class=\"hiz-card-divider\"></div>\r\n\r\n    <div class=\"hiz-card-device-block\">\r\n      <p class=\"hiz-card-text-line\">Телы:</p>\r\n      <p class=\"hiz-card-text-subline\">Main - Samsung A05s</p>\r\n      <p class=\"hiz-card-text-subline\">Samsung M12</p>\r\n      <p class=\"hiz-card-text-subline\">Samsung A10</p>\r\n      <p class=\"hiz-card-text-subline\">iPhone 7</p>\r\n    </div>\r\n\r\n    <div class=\"hiz-card-divider\"></div>\r\n\r\n    <div class=\"hiz-card-device-block\">\r\n      <p class=\"hiz-card-text-line\">Уши:</p>\r\n      <p class=\"hiz-card-text-subline\">CMF Buds 2x</p>\r\n      <p class=\"hiz-card-text-subline\">Huawei Freebuds 5i</p>\r\n    </div>\r\n\r\n    <div class=\"hiz-card-divider\"></div>\r\n\r\n    <p class=\"hiz-card-text-line\">🔺 Живу в ЕКБ</p>\r\n  </div>\r\n</div>\r\n";
//#endregion
//#region src/footer.html?raw
var footer_default = "<link rel=\"stylesheet\" href=\"/footer.css\">\r\n<div>\r\n<footer class=\"footer-block\">\r\n    <p>© 2026 Created by hiz</p>\r\n    <p>Все права защищены.</p>\r\n    <span class=\"version\">v1.0.0</span>\r\n</footer>\r\n</div>\r\n";
//#endregion
//#region src/links.html?raw
var links_default = "<div class=\"sidebar-links\">\r\n  <!-- 1. Телеграм -->\r\n  <a href=\"#\" target=\"_blank\" class=\"sidebar-icon-btn\">\r\n    <img src=\"../src/fonts/telegram.svg\" alt=\"Telegram\">\r\n  </a>\r\n\r\n  <!-- 2. Дискорд -->\r\n  <a href=\"#\" target=\"_blank\" class=\"sidebar-icon-btn\">\r\n    <img src=\"../src/fonts/discord.svg\" alt=\"Discord\">\r\n  </a>\r\n\r\n  <!-- 3. Инстаграм -->\r\n  <a href=\"#\" target=\"_blank\" class=\"sidebar-icon-btn\">\r\n    <img src=\"../src/fonts/instagram.svg\" alt=\"Instagram\">\r\n  </a>\r\n\r\n  <!-- 4. Стим -->\r\n  <a href=\"#\" target=\"_blank\" class=\"sidebar-icon-btn\">\r\n    <img src=\"../src/fonts/steam.svg\" alt=\"Steam\">\r\n  </a>\r\n</div>\r\n";
//#endregion
//#region src/main.js
var menuContainer = document.getElementById("menu-container");
if (menuContainer) menuContainer.innerHTML = menu_default;
var linksContainer = document.getElementById("links-container");
if (linksContainer) linksContainer.innerHTML = links_default;
var cardContainer = document.getElementById("card-container");
if (cardContainer) cardContainer.innerHTML = card_default;
var footerContainer = document.getElementById("footer-container");
if (footerContainer) footerContainer.innerHTML = footer_default;
var words = [
	"hiz, мне 16 лет",
	"учусь на первом курсе ",
	"делаю разную фигню",
	"дэбил"
];
var wordIndex = 0;
var charIndex = 0;
var isDeleting = false;
function typeEffect() {
	const currentWord = words[wordIndex];
	const textElement = document.getElementById("typewriter-text");
	if (!textElement) return;
	if (isDeleting) {
		textElement.textContent = currentWord.substring(0, charIndex - 1);
		charIndex--;
	} else {
		textElement.textContent = currentWord.substring(0, charIndex + 1);
		charIndex++;
	}
	let speed = isDeleting ? 50 : 100;
	if (!isDeleting && charIndex === currentWord.length) {
		speed = 1500;
		isDeleting = true;
	} else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		wordIndex = (wordIndex + 1) % words.length;
		speed = 400;
	}
	setTimeout(typeEffect, speed);
}
setTimeout(typeEffect, 500);
//#endregion
