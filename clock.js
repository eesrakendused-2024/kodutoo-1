let timeElement = document.getElementById('time');
let dayElement = document.getElementById('day');
let monthElement = document.getElementById('month');
let yearElement = document.getElementById('year');
let todayElement = document.getElementById('today');
let dateTimeBox = document.getElementById('dateTimeBox');
let dateBox = document.getElementById('date');

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthsEstonian = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September"];
let daysEstonian = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

let showingDateTime = 0;
let fontSize = 3; 
let clockFormat = 24;
let showSeconds = true;
let backgroundColors = ["linear-gradient(to bottom right, #85a2ff, #83ee83, #7c6fff)", 
    "linear-gradient(to bottom right, #ffe985, #ee83a6, #ff6f7c)", 
    "linear-gradient(to bottom right, #ff85a2, #a683ff, #7c6fff)", 
    "linear-gradient(to bottom right, #ffef85, #d283ee, #7c6fff)"];
let darkBackgroundColors = ["linear-gradient(to bottom right, #333333, #000000)", 
    "linear-gradient(to bottom right, #222222, #111111)", 
    "linear-gradient(to bottom right, #444444, #333333)", 
    "linear-gradient(to bottom right, #555555, #222222)", 
    "linear-gradient(to bottom right, #333333, #111111)"];
let currentBackgroundColor = 0;
let isEnglish = false;
let darkModeButton = document.getElementById('darkModeButton');
let displayModes = [0, 1, 2];
let currentDisplayModeIndex = 0;
const maxFontSize = 9;

function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');

    if (clockFormat === 12) {
        period = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;
    }

    let timeString = `${hours}:${minutes}`;
    if (showSeconds) {
        timeString += `:${seconds}`;
    }

    if (clockFormat === 12) {
        timeString += ` ${period}`;
    }

    timeElement.textContent = timeString;
    timeElement.style.fontSize = fontSize + 'rem';
}

function updateDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let dayValue = date.getDay();

    dayElement.textContent = day;
    monthElement.textContent = isEnglish ? months[month] : monthsEstonian[month];
    yearElement.textContent = year;
    todayElement.textContent = isEnglish ? days[dayValue] : daysEstonian[dayValue];

    dayElement.style.fontSize = fontSize * 0.4 + 'rem';
    monthElement.style.fontSize = fontSize * 0.4 + 'rem';
    yearElement.style.fontSize = fontSize * 0.4 + 'rem';
    todayElement.style.fontSize = fontSize * 0.4 + 'rem';
}

function toggleDateTime() {
    showingDateTime = (showingDateTime + 1) % 3;
    if (showingDateTime === 0) {
        dateBox.classList.remove('hidden');
        timeElement.classList.add('hidden');
    } else if (showingDateTime === 1) {
        dateBox.classList.add('hidden');
        timeElement.classList.remove('hidden');
    } else {
        dateBox.classList.remove('hidden');
        timeElement.classList.remove('hidden');
    }
}

function changeFontSize(e) {
    if (e.key === 'ArrowUp' && fontSize < maxFontSize) {
        fontSize += 0.1;
    } else if (e.key === 'ArrowDown' && fontSize > 3) {
        fontSize -= 0.1;
    }
    updateClock();
    updateDate();
}

function toggleClockFormat() {
    clockFormat = (clockFormat === 24) ? 12 : 24;
    updateClock();
}

function toggleShowSeconds() {
    showSeconds = !showSeconds;
    updateClock();
}

function toggleLanguage() {
    isEnglish = !isEnglish;
    updateDate();
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
}

function toggleBackgroundColor() {
    if (document.body.classList.contains('dark-mode')) {
        changeDarkBackgroundColor();
    } else {
        changeBackgroundColor();
    }
}

function changeBackgroundColor() {
    currentBackgroundColor = (currentBackgroundColor + 1) % backgroundColors.length;
    document.body.style.background = backgroundColors[currentBackgroundColor];
    if (document.body.classList.contains('dark-mode')) {
        enableDarkMode();
    }
}

function changeDarkBackgroundColor() {
    currentBackgroundColor = (currentBackgroundColor + 1) % darkBackgroundColors.length;
    document.body.style.background = darkBackgroundColors[currentBackgroundColor];
    if (!document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    }
}

backgroundColorButton.addEventListener('click', toggleBackgroundColor);

updateClock();
updateDate();
setInterval(updateClock, 1000);

document.addEventListener('keydown', changeFontSize);

function toggleDisplayMode() {
    currentDisplayModeIndex = (currentDisplayModeIndex + 1) % displayModes.length;
    updateDisplay();
}

function updateDisplay() {
    dateBox.classList.add('hidden');
    timeElement.classList.add('hidden');

    if (displayModes[currentDisplayModeIndex] === 0) {
        timeElement.classList.remove('hidden');
    } else if (displayModes[currentDisplayModeIndex] === 1) {
        dateBox.classList.remove('hidden');
    } else {
        dateBox.classList.remove('hidden');
        timeElement.classList.remove('hidden');
    }
}

setInterval(toggleDisplayMode, 60000);
