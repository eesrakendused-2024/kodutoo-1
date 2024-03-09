// Selectors and assets
const bodyElement = document.body;
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const themeButton = document.querySelector(".theme-button");
const zoomButton = document.querySelector(".zoom-button");
const languageButton = document.querySelector(".language-button");
const fontButton = document.querySelector(".font-button");
const soundButton = document.querySelector(".sound-button");
const mysteryButton = document.querySelector(".mystery-button");
const tickSound = new Audio("./assets/sounds/tick.wav");

// States
let currentLanguage = "en";
let soundEnabled = false;

// Translations
const translations = {
  en: {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  et: {
    days: [
      "Pühapäev",
      "Esmaspäev",
      "Teisipäev",
      "Kolmapäev",
      "Neljapäev",
      "Reede",
      "Laupäev",
    ],
    months: [
      "Jaanuar",
      "Veebruar",
      "Märts",
      "Aprill",
      "Mai",
      "Juuni",
      "Juuli",
      "August",
      "September",
      "Oktoober",
      "November",
      "Detsember",
    ],
  },
};

// Listeners
themeButton.addEventListener("click", toggleTheme);
zoomButton.addEventListener("click", toggleZoom);
languageButton.addEventListener("click", toggleLanguage);
fontButton.addEventListener("click", toggleFont);
soundButton.addEventListener("click", toggleSound);
mysteryButton.addEventListener("click", mystery);

// Functions
function toggleTheme() {
  bodyElement.classList.toggle("dark-mode");
}

function toggleZoom() {
  bodyElement.classList.toggle("size-large");
}

function toggleLanguage() {
  if (currentLanguage === "en") {
    currentLanguage = "et";
  } else {
    currentLanguage = "en";
  }
  updateClock(true);
}

function toggleFont() {
  bodyElement.classList.toggle("font-serif");
}
function toggleSound() {
  soundEnabled = !soundEnabled;
}

function mystery() {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function updateClock(skipSound = false) {
  const now = new Date();

  // Clock
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  timeElement.textContent = hours + ":" + minutes + ":" + seconds;

  // Date
  const day = translations[currentLanguage].days[now.getDay()];
  const date = now.getDate();
  const month = translations[currentLanguage].months[now.getMonth()];
  const year = now.getFullYear();
  dateElement.textContent = day + ", " + date + " " + month + " " + year;

  // Sound
  if (soundEnabled && !skipSound) {
    tickSound.play();
  }
}

// Initialize
updateClock();
setInterval(updateClock, 1000);
