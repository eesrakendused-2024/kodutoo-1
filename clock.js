const getElement = id => document.getElementById(id);

const clock = getElement('clockElement');
const clockBox = getElement('clock-box');
const date = getElement('dateElement');
const lapTimesList = document.createElement('ul');
const changeStyle = (element, style, value) => element.style[style] = value;
const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

function updateClock() {
    const now = new Date();
    const timeString = `
        ${String(now.getHours()).padStart(2, '0')}:
        ${String(now.getMinutes()).padStart(2, '0')}:
        ${String(now.getSeconds()).padStart(2, '0')}
        `;
    clock.textContent = timeString;
    date.textContent = now.toLocaleDateString('et-EE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    checkAlarm();
}

const changeDigitsBtn = getElement('digitsElement');
changeDigitsBtn.addEventListener('click', () => changeStyle(clockBox, 'color', getRandomColor()));

const changeBackgroundBtn = getElement('backgroundElement');
changeBackgroundBtn.addEventListener('click', () => changeStyle(clockBox, 'backgroundColor', getRandomColor()));

document.addEventListener('keydown', event => {
    if (event.key === '+' || event.key === '-') {
        changeClockSize(event.key === '+' ? 'increase' : 'decrease');
    }
});

const defaultClockSize = parseInt(getComputedStyle(clockBox).fontSize);

function changeClockSize(direction) {
    const currentSize = parseInt(getComputedStyle(clockBox).fontSize);
    const maxSize = 21;
    let newSize = direction === 'increase' ? currentSize + 1 : currentSize - 1;
    newSize = Math.max(defaultClockSize, Math.min(newSize, maxSize));
    clockBox.style.fontSize = `${newSize}px`;
}

const hourInput = getElement('hourInput');
const minuteInput = getElement('minuteInput');
let alarmTime = null;
const alarmDisplay = getElement('alarmDisplay');

const setAlarmBtn = getElement('setAlarmBtn');
setAlarmBtn.addEventListener('click', () => {
    const hours = parseInt(hourInput.value);
    const minutes = parseInt(minuteInput.value);
    if (!isNaN(hours) && !isNaN(minutes) && hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
        alarmTime = { hours, minutes };
        alarmDisplay.textContent = `Alarm: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        alert(`Alarm set for ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
        hourInput.value = "";
        minuteInput.value = "";
    } else {
        alert('Please enter valid hours (0-23) and minutes (0-59) for the alarm.');
    }
});

const clearAlarmBtn = document.querySelector('#clearAlarmBtn'); // Select using querySelector
clearAlarmBtn.addEventListener('click', () => {
    alarmTime = null;
    alarmDisplay.textContent = '';
    hourInput.value = "";
    minuteInput.value = "";
});

function checkAlarm() {
    if (alarmTime) {
        const now = new Date();
        if (now.getHours() === alarmTime.hours && now.getMinutes() === alarmTime.minutes) {
            alert('Alarm!');
            alarmTime = null;
            alarmDisplay.textContent = ''; // Clear displayed alarm time after it triggers
        }
    }
}

const changeFontBtn = getElement('changeFont');
let fontIndex = 0;
const fonts = ['Roboto', 'Open Sans', 'Audiowide', "Anta", "Kode Mono", /* Your Google Fonts here */];

changeFontBtn.addEventListener('click', () => {
    document.body.style.fontFamily = fonts[++fontIndex % fonts.length];
});

setInterval(updateClock, 1000);
