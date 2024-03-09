const monthNameET = [
  "jaanuar",
  "veebruar",
  "märts",
  "aprill",
  "mai",
  "juuni",
  "juuli",
  "august",
  "september",
  "oktoober",
  "november",
  "detsember",
];
const monthNameEN = [
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
];
const weekDayEN = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const weekDayET = [
  "Pühap",
  "Esmasp",
  "Teisip",
  "Kolmap",
  "Neljap",
  "Reede",
  "Laup",
];
const weekDayENFull = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const weekDayETFull = [
  "Pühapäev",
  "Esmaspäev",
  "Teisipäev",
  "Kolmapäev",
  "Neljapäev",
  "Reede",
  "Laupäev",
];
const fonts = [
  "Arial, sans-serif",
  "Verdana, sans-serif",
  "Georgia, serif",
  "Courier New, monospace",
  "Comic Sans MS, cursive",
  "Impact, sans-serif",
  "Times New Roman, serif",
  "Trebuchet MS, sans-serif",
  "Palatino Linotype, serif",
  "Lucida Console, monospace",
  "Helvetica, sans-serif",
  "Garamond, serif",
  "Book Antiqua, serif",
  "Courier, monospace",
  "Arial Black, sans-serif",
  "Geneva, sans-serif",
  "Lucida Sans Unicode, sans-serif",
  "Century Gothic, sans-serif",
  "Franklin Gothic Medium, sans-serif",
  "Tahoma, sans-serif",
  "Optima, sans-serif",
  "Avantgarde, sans-serif",
  "Candara, sans-serif",
  "Segoe UI, sans-serif",
  "Helvetica Neue, sans-serif",
  "Rockwell, serif",
  "Baskerville, serif",
  "Copperplate, sans-serif",
  "Futura, sans-serif",
];

let language = "et";

window.addEventListener("keypress", changeLanguage);
window.addEventListener("keypress", changeFontColor);
window.addEventListener("keypress", changeClockColor);
window.addEventListener("keypress", hideComments);
window.addEventListener("keypress", goFullScreen);
window.addEventListener("keypress", resetClock);
window.addEventListener("keypress", changeFont);
window.addEventListener("keypress", rainbowClock);
setInterval(updateClock, 1000);

function updateClock() {
  let hour,
    minute,
    sec,
    date,
    month,
    year,
    timeNow,
    timeDiv = ":";

  // Defining the time values
  timeNow = new Date();
  hour = timeNow.getHours();
  minute = timeNow.getMinutes();
  sec = timeNow.getSeconds();
  ms = timeNow.getMilliseconds();

  // Defining the date values
  if (language == "et") {
    dayNow = weekDayET[timeNow.getDay()];
    month = monthNameET[timeNow.getMonth()];
  } else {
    dayNow = weekDayEN[timeNow.getDay()];
    month = monthNameEN[timeNow.getMonth()];
  }

  date = timeNow.getDate();
  year = timeNow.getFullYear();

  // Code start
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  // Fullscreen complete day
  let clockBody = document.getElementById("clockBody");
  if (clockBody.classList.contains("fullscreen") && language === "et") {
    dayNow = weekDayETFull[timeNow.getDay()];
  } else if (clockBody.classList.contains("fullscreen") && language === "en") {
    dayNow = weekDayENFull[timeNow.getDay()];
  }

  document.getElementById("hourContainer").innerHTML = hour + timeDiv;
  document.getElementById("minuteContainer").innerHTML = minute + timeDiv;
  document.getElementById("secondContainer").innerHTML = sec;
  document.getElementById("dayContainer").innerHTML = dayNow;
  document.getElementById("dateOfYearContainer").innerHTML = date + ". ";
  document.getElementById("monthContainer").innerHTML = month + "  ";
  document.getElementById("yearContainer").innerHTML = year;
}

function changeLanguage(e) {
  if (e.key === "x" || e.key === "X") {
    if (language === "et") {
      language = "en";
    } else if (language == "en") {
      language = "et";
    }
    updateClock();
  }
}

let newColor = randomColorGen(); // Have to take out of the function, since otherwise the fullscreen looks weird
function changeFontColor(e) {
  if (e.key === "v" || e.key === "V") {
    let newColor = randomColorGen();
    document.getElementById("timeContainer").style.color = newColor;
    document.getElementById("dateContainer").style.color = newColor;
    document.getElementById("dayContainer").style.color = newColor;
  }
  updateClock();
}

function changeClockColor(e) {
  let newColor = randomColorGen(true);
  if (e.key === "c" || e.key === "C") {
    document.getElementById("clockBody").style.backgroundColor =
      newColor.bodyColor;
    document.getElementById("dateContainer").style.backgroundColor =
      newColor.faceColor;
    if (!clockBody.classList.contains("fullscreen")) {
      document.getElementById("dayContainer").style.backgroundColor =
        newColor.faceColor;
    }

    document.getElementById("timeContainer").style.backgroundColor =
      "transparent";
    document.getElementById("clockFace").style.backgroundColor =
      newColor.faceColor;
  }
  updateClock();
  let isChanged = true;
  return isChanged;
}

function randomColorGen(more) {
  if (more == null) {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  } else if (more) {
    // For changing the clock body color in the same function
    r = Math.round(Math.random() * 245);
    g = Math.round(Math.random() * 245);
    b = Math.round(Math.random() * 245);
    let bodyColor = "rgb(" + r + "," + g + "," + b + ")";
    r, g, (b += 20);

    let faceColor = "rgb(" + r + "," + g + "," + b + ")";
    return { bodyColor, faceColor };
  }
}

function hideComments(e) {
  if (e.key === "h" || e.key === "H") {
    if (document.getElementById("comments").style.visibility != "hidden") {
      document.getElementById("comments").style.visibility = "hidden";
    } else {
      document.getElementById("comments").style.visibility = "visible";
    }
  }
}

function goFullScreen(e, isChanged) {
  let clockBody = document.getElementById("clockBody");
  let clockFace = document.getElementById("clockFace");
  let timeContainer = document.getElementById("timeContainer");
  let yearContainer = document.getElementById("yearContainer");
  let dateContainer = document.getElementById("dateContainer");
  let monthContainer = document.getElementById("monthContainer");
  let dayContainer = document.getElementById("dayContainer");

  if (e.key === " " && !clockBody.classList.contains("fullscreen")) {
    // Clock format
    console.log(isChanged);

    clockBody.classList.add("fullscreen");
    clockFace.classList.add("fullscreen");

    // Time
    timeContainer.style.backgroundColor = "transparent";
    timeContainer.classList.add("fullscreen");

    // Date
    yearContainer.classList.add("fullscreen");
    dateContainer.classList.add("fullscreen");
    monthContainer.classList.add("fullscreen");
    dayContainer.style.backgroundColor = "transparent";
    dayContainer.classList.add("fullscreen");
    updateClock();
  } else if (e.key === " " && clockBody.classList.contains("fullscreen")) {
    // Clock format
    clockBody.classList.remove("fullscreen");
    clockFace.classList.remove("fullscreen");

    // Time
    timeContainer.classList.remove("fullscreen");

    // Date
    yearContainer.classList.remove("fullscreen");
    dateContainer.classList.remove("fullscreen");
    monthContainer.classList.remove("fullscreen");
    dayContainer.classList.remove("fullscreen");
    console.log(isChanged);

    if (isChanged) {
      dayContainer.style.backgroundColor = newColor;
    } else {
      dayContainer.style.backgroundColor = "rgb(51, 51, 51)";
    }
    updateClock();
  }
}

function changeFont(e) {
  let fontAmount = fonts.length;
  let rand = Math.round(Math.random() * fontAmount - 1);

  if (e.key === "b" || e.key === "B") {
    console.log("fontlist: " + fonts);
    console.log("suvaline num: " + rand);
    console.log("font: " + fonts[rand]);
    console.log(document.getElementById("timeContainer").style.fontFamily);
    document.getElementById("timeContainer").style.fontFamily = fonts[rand];
    document.getElementById("dateContainer").style.fontFamily = fonts[rand];
    document.getElementById("dayContainer").style.fontFamily = fonts[rand];
  }
}

function resetClock(e) {
  let defaultFont = '"Kode Mono", monospace';
  if (e.key === "r" || e.key == "R") {
    // Font color reset
    document.getElementById("timeContainer").style.color = "rgb(231, 2, 2)";
    document.getElementById("dateContainer").style.color = "rgb(231, 2, 2)";
    document.getElementById("dayContainer").style.color = "rgb(231, 2, 2)";

    // Clock body reset
    document.getElementById("clockBody").style.backgroundColor =
      "rgb(35, 35, 35)";
    document.getElementById("dateContainer").style.backgroundColor =
      "rgb(51, 51, 51)";
    if (clockBody.classList.contains("fullscreen")) {
      document.getElementById("dayContainer").style.backgroundColor =
        "transparent";
    } else {
      document.getElementById("dayContainer").style.backgroundColor =
        "rgb(51, 51, 51)";
    }
    document.getElementById("clockFace").style.backgroundColor =
      "rgb(51, 51, 51)";

    // Font color reset
    document.getElementById("timeContainer").style.fontFamily = defaultFont;
    document.getElementById("dateContainer").style.fontFamily = defaultFont;
    document.getElementById("dayContainer").style.fontFamily = defaultFont;
  }
}

let h, s, l, rainbowRun, stopAnimation;

function rainbowClock(e) {
  if ((e.key === "n" || e.key === "N") && !rainbowRun) {
    rainbowRun = true;
    stopAnimation = false;
    h = Math.round(Math.random() * 360);
    l = Math.round(Math.random() * 50) + 50;
    s = Math.round(Math.random() * 100);
    animateRainbow();
  } else if (e.key === "m" || e.key === "M") {
    rainbowRun = false;
    stopAnimation = true;
  }
}

function animateRainbow() {
  if (!stopAnimation) {
    l += 0.1;
    s += 0.1;

    // Reset saturation and lightness when they reach 100
    if (s >= 100) {
      s = 0;
      h = (h + 30) % 360;
    }
    if (l >= 100) {
      l = 0;
    }

    let lightness = l + "%";
    let saturation = s + "%";

    document.getElementById("timeContainer").style.color =
      "hsl(" + h + ", " + saturation + "," + lightness + ")";
    document.getElementById("dateContainer").style.color =
      "hsl(" + h + ", " + saturation + "," + lightness + ")";
    document.getElementById("dayContainer").style.color =
      "hsl(" + h + ", " + saturation + "," + lightness + ")";

    requestAnimationFrame(animateRainbow);
  }
}
