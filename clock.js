let hours, minutes, seconds, date, day, month, year, dayValue;
let months = ["Jaanuar", "Veebruar", "Märts"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
window.addEventListener('keypress', textSize);
let timeFontSize = 3;
document.getElementById('clock').style.fontSize = timeFontSize + "em";

function textSize(e) {
    console.log(e.keyCode);
    if (e.keyCode == 45) {
        timeFontSize = timeFontSize - 0.1;
        document.getElementById('clock').style.fontSize = timeFontSize + "em";
    }
    if (e.keyCode == 43) {
        timeFontSize = timeFontSize + 0.1;
        document.getElementById('clock').style.fontSize = timeFontSize + "em";
    }
}


function updateClock() {
    date = new Date();
    console.log(date);
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    console.log(hours, minutes, seconds);

    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = ":" + minutes;
    document.getElementById('seconds').innerHTML = ":" + seconds;

}

function updateDate() {
    date = new Date();
    
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    dayValue = date.getDay();

    document.getElementById('dayElement').innerHTML = day;
    document.getElementById('monthElement').innerHTML = months[month];
    document.getElementById('yearElement').innerHTML = year;

    document.getElementById('day').innerHTML = days[dayValue];

}

let gradientPercentage = 80;
let currentColor1 = '#461616';
let currentColor2 = '#000000';

window.addEventListener('keydown', changeGradient);
window.addEventListener('click', changeColors);

function changeGradient(e) {
    if (e.key === 'ArrowUp') {
        gradientPercentage = Math.min(gradientPercentage + 3, 100);
    } else if (e.key === 'ArrowDown') {
        gradientPercentage = Math.max(gradientPercentage - 3, 0);
    }

    document.body.style.background = `radial-gradient(circle, ${currentColor1} ${100 - gradientPercentage}%, ${currentColor2} ${gradientPercentage}%)`;
}

function changeColors() {
    currentColor1 = getRandomColor();
    currentColor2 = getRandomColor();
    document.body.style.background = `radial-gradient(circle, ${currentColor1} 80%, ${currentColor2} 20%)`;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let clockPosition = 0;

window.addEventListener('keydown', moveClock);

function moveClock(e) {
    const clockElement = document.getElementById('clock');

    if (e.key === 'ArrowLeft') {
        clockPosition -= 10;
    } else if (e.key === 'ArrowRight') {
        clockPosition += 10;
    }

    clockElement.style.transform = `translateX(${clockPosition}px)`;
}

function updateTimezone() {
    const selectedTimezone = document.getElementById('timezoneSelector').value;
    const options = { timeZone: selectedTimezone, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    const formattedTime = new Date().toLocaleTimeString('en-US', options);
    document.getElementById('clock').innerHTML = formattedTime;
}      

updateClock();
updateDate();
setInterval(updateClock, 1000);

