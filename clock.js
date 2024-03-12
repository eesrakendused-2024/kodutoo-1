let hours, minutes, seconds, date, day, month, year, dayValue;
let est_months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let est_days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let eng_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let eng_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let est_pealkiri = "Elektrooniline kell";
let eng_pealkiri = "Electronical clock";
let clock_format = '24';

window.addEventListener('keypress', textSize);
let timeFrontSize = 4;
document.getElementById('clock').style.frontSize = timeFrontSize + "em";

function textSize(e) {
    console.log(e.keyCode);
    if (e.keyCode == 45) {
        timeFrontSize = timeFrontSize - 0.1;
        document.getElementById('clock').style.frontSize = timeFrontSize + "em";

    }
    if (e.keyCode == 43) {
        timeFrontSize = timeFrontSize + 0.1;
        document.getElementById('clock').style.frontSize = timeFrontSize + "em";

    }

}

function updateClock(format) {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    let period = '';

    if (format === '12') {
        period = (hours >= 12) ? 'PM' : 'AM';
        if (hours > 12) {
            hours = hours - 12;
        }
        if (hours === 0) {
            hours = 12;
        }
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById('hoursElement').innerHTML = hours;
    document.getElementById('minutesElement').innerHTML = minutes;
    document.getElementById('secondsElement').innerHTML = seconds;
    document.getElementById('pm').innerHTML = period;
}



function updateDate(months, days) {
    date = new Date();

    day = date.getDay();
    month = date.getMonth();
    year = date.getFullYear();
    dayValue = date.getDay();

    document.getElementById('dayElement').innerHTML = day;
    document.getElementById('monthElement').innerHTML = months[month];
    document.getElementById('yearElement').innerHTML = year;

    document.getElementById('day').innerHTML = days[dayValue];

}

function updatePealkiri(pealkiri) {
    document.getElementById('pealkiri').innerHTML = pealkiri;
}

function changeLanguage(language) {
    if (language === 'en') {
        updatePealkiri(eng_pealkiri);
        updateDate(eng_months, eng_days);
    } else if (language === 'et') {
        updatePealkiri(est_pealkiri);
        updateDate(est_months, est_days);
    }
}

updateClock();
updateDate(est_months, est_days);
setInterval(() => updateClock(clock_format), 1000);



function increaseFontSize() {
    changeFontSize(1.2);
}

function decreaseFontSize() {
    changeFontSize(0.8);
}

function changeFontSize(scale) {
    const clock = document.getElementById('clock');
    const currentFontSize = parseFloat(window.getComputedStyle(clock).fontSize);
    const newFontSize = currentFontSize * scale;
    clock.style.fontSize = newFontSize + 'px';
}

function decreaseFontSize() {
    const clock = document.getElementById('clock');
    const currentFontSize = parseFloat(window.getComputedStyle(clock).fontSize);
    const newFontSize = Math.max(currentFontSize - 10, 50);
    clock.style.fontSize = newFontSize + 'px';
}

function increaseFontSize() {
    const clock = document.getElementById('clock');
    const currentFontSize = parseFloat(window.getComputedStyle(clock).fontSize);
    const newFontSize = Math.min(currentFontSize + 10, 200);
    clock.style.fontSize = newFontSize + 'px';
}

const värv = document.getElementById('värv');
const pm = document.getElementById('pm');
const backgroundColors = ['#95e1fc', '#bbfcdb', '#cfbbfc', '#befdfd'];
let currentColorIndex = 0;



function changeBackgroundColor() {
    hoursElement.style.backgroundColor = backgroundColors[currentColorIndex];
    minutesElement.style.backgroundColor = backgroundColors[currentColorIndex];
    secondsElement.style.backgroundColor = backgroundColors[currentColorIndex];
    pm.style.backgroundColor = backgroundColors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
}
document.getElementById('värv').addEventListener('click', changeBackgroundColor);
document.getElementById('pm').addEventListener('click', changeBackgroundColor);



function updateClockFormat(format) {
    clock_format = format;
    updateClock(format)
}