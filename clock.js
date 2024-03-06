let hours, minutes, seconds, date, day, month, year, dayValue;
let months = ["Jaanuar", "Veebruar", "Marts"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
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

function updateClock() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes + "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById('hoursElement').innerHTML = hours;
    document.getElementById('minutesElement').innerHTML = minutes;
    document.getElementById('secondsElement').innerHTML = seconds;


}

function updateDate() {
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

updateClock();
updateDate();
setInterval(updateClock, 1000);




const hoursElement = document.getElementById('hoursElement');
const backgroundColors = ['#95e1fc', '#bbfcdb', '#cfbbfc'];
let currentColorIndex = 0;

function changeBackgroundColor() {
    hoursElement.style.backgroundColor = backgroundColors[currentColorIndex];
    minutesElement.style.backgroundColor = backgroundColors[currentColorIndex];
    secondsElement.style.backgroundColor = backgroundColors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
}
document.getElementById('clock').addEventListener('click', changeBackgroundColor);





const clock = document.getElementById('clock');
let fontSize = 100;

function changeFontSize() {
    fontSize += 2;
    if (fontSize > 200) {
        fontSize = 100;
    }
    clock.style.fontSize = fontSize + 'px';
}

clock.addEventListener('click', changeFontSize);

