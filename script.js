let fontIndex = 0;
let defaultFontSize = 24;
let fonts = ["Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS"];

let fontSizeMap = new Map();

let card = document.querySelector(".card");
let cardPosition = { x: 50, y: 50 };

let languages = ["ee", "en", "ru", "fr", "de", "es"];
let languageIndex = 0;

function updateClock() {
  const now = new Date();
  let hours = String(now.getHours());
  let minutes = String(now.getMinutes());
  let seconds = String(now.getSeconds());
  let day = now.toLocaleString(languages[languageIndex], { weekday: "long" });
  let date = now.getDate();
  let month = now.toLocaleString(languages[languageIndex], { month: "long" });
  let year = now.getFullYear();

  hours = hours.length < 2 ? "0" + hours : hours;
  minutes = minutes.length < 2 ? "0" + minutes : minutes;
  seconds = seconds.length < 2 ? "0" + seconds : seconds;

  let clockHTML = "";
  for (let i = 0; i < hours.length; i++) {
    clockHTML += `<span id="hour${i}" onclick="changeNumberSize(this, 'hour${i}')" style="font-size: ${
      fontSizeMap.get("hour" + i) || defaultFontSize
    }px">${hours.charAt(i)}</span>`;
  }
  clockHTML += '<span class="blink">:</span>';
  for (let i = 0; i < minutes.length; i++) {
    clockHTML += `<span id="minute${i}" onclick="changeNumberSize(this, 'minute${i}')" style="font-size: ${
      fontSizeMap.get("minute" + i) || defaultFontSize
    }px">${minutes.charAt(i)}</span>`;
  }
  clockHTML += '<span class="blink">:</span>';
  for (let i = 0; i < seconds.length; i++) {
    clockHTML += `<span id="second${i}" onclick="changeNumberSize(this, 'second${i}')" style="font-size: ${
      fontSizeMap.get("second" + i) || defaultFontSize
    }px">${seconds.charAt(i)}</span>`;
  }

  document.getElementById("clock").innerHTML = clockHTML;
  document.getElementById(
    "info"
  ).innerHTML = `${day}, ${date}. ${month} ${year}`;

  setTimeout(updateClock, 1000);
}

function changeFont() {
  document.getElementById("clock").style.fontFamily = fonts[fontIndex - 1];

  fontIndex = fontIndex === fonts.length - 1 ? 1 : fontIndex + 1;
}

function changeLanguage() {
  console.log(languageIndex);
  languageIndex =
    languageIndex === languages.length - 1 ? 0 : languageIndex + 1;
}

function changeCardColor(card) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  card.style.backgroundColor = randomColor;

  let r = parseInt(randomColor.slice(1, 3), 16);
  let g = parseInt(randomColor.slice(3, 5), 16);
  let b = parseInt(randomColor.slice(5, 7), 16);
  let brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
  if (brightness < 0.5) {
    card.classList.add("white-text");
  } else {
    card.classList.remove("white-text");
  }
}

function changeNumberSize(span, id) {
  let fontSize = fontSizeMap.get(id) || defaultFontSize;
  fontSize += 2;
  span.style.fontSize = fontSize + "px";
  fontSizeMap.set(id, fontSize);
}

function reduceNumberSize(event) {
  event.preventDefault();
  let target = event.target;
  let id = target.id;
  let fontSize = fontSizeMap.get(id) || defaultFontSize;
  if (fontSize > 10) {
    fontSize -= 2;
    target.style.fontSize = fontSize + "px";
    fontSizeMap.set(id, fontSize);
  }
}

updateClock();

function toggleBackground() {
  if (isDaytime()) {
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "darkblue";
  }
}

function isDaytime() {
  const date = new Date();
  const hour = date.getHours();
  return hour >= 6 && hour < 18;
}
