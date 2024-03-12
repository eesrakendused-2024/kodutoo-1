const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');
const yearElement = document.getElementById('year');
const toggleFormatButton = document.getElementById('toggleFormat');
const changeBackgroundButton = document.getElementById('changeBackground');
const fontSizeRange = document.getElementById('fontSizeRange');
const changeTextColorButton = document.getElementById('changeTextColor');
const displayMessageButton = document.getElementById('displayMessage');

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedTime = formatTime(hours, minutes, seconds);
    const month = now.toLocaleString('default', { month: 'long' });
    const date = now.getDate();
    const day = now.toLocaleString('default', { weekday: 'long' });
    const year = now.getFullYear();

    timeElement.textContent = formattedTime;
    dateElement.textContent = `${month} ${date}`;
    dayElement.textContent = day;
    yearElement.textContent = year;
}

function formatTime(hours, minutes, seconds) {
    let formattedTime = '';
    const is24HourFormat = hours >= 12;

    if (is24HourFormat) {
        formattedTime += hours;
    } else {
        formattedTime += (hours % 12 || 12);
    }

    formattedTime += ':' + (minutes < 10 ? '0' : '') + minutes;
    formattedTime += ':' + (seconds < 10 ? '0' : '') + seconds;
    formattedTime += is24HourFormat ? ' (24h)' : ' (12h)';

    return formattedTime;
}

function toggleClockFormat() {
    updateTime(); // Update time to show current format before toggling
    const timeText = timeElement.textContent;
    const newFormat = timeText.includes('24h') ? 'en-US' : 'en-GB';
    timeElement.textContent = new Date().toLocaleTimeString(newFormat);
}

function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#33FFFF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// function changeFontSize() {
//     const currentFontSize = parseFloat(getComputedStyle(timeElement).fontSize);
//     const newFontSize = currentFontSize * 1.2; // Increase font size by 20%
//     timeElement.style.fontSize = newFontSize + 'px';
// }

function changeTextColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#33FFFF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    timeElement.style.color = randomColor;
}

function displayMessage() {
    const messages = ['Hello!', 'Welcome!', 'Have a nice day!', 'Enjoy your time!'];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

updateTime();
setInterval(updateTime, 1000);

toggleFormatButton.addEventListener('click', toggleClockFormat);
changeBackgroundButton.addEventListener('click', changeBackgroundColor);
//changeFontSizeButton.addEventListener('click', changeFontSize);
changeTextColorButton.addEventListener('click', changeTextColor);
displayMessageButton.addEventListener('click', displayMessage);

fontSizeRange.addEventListener('input', function() {
    const newSize = this.value + 'px';
    timeElement.style.fontSize = newSize;
});