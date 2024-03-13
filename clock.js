let hours, minutes, seconds, date, day, month, year, dayValue;
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

let backgroundColors = ["#FFEFD5", "#E0FFFF", "#98FB98", "#E6E6FA", "#FFE4E1", "#FFDAB9", "#FFC0CB", "#FAA569", "B1FF4A", "FCFF52", "FD73FF", "FCFF3D"];

let timeFontSize = 50;
let originalFontSize  = timeFontSize;

function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('hoursElement').innerHTML = hours;
    document.getElementById('minutesElement').innerHTML = ":" + minutes;
    document.getElementById('secondsElement').innerHTML = ":" + seconds;

    const clockElements = document.querySelectorAll('#hoursElement, #minutesElement, #secondsElement');
    clockElements.forEach(element => {
        element.style.fontSize = `${timeFontSize / 10}em`;
    });
}

function updateDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    document.getElementById('dayElement').innerHTML = day;
    document.getElementById('monthElement').innerHTML = months[month - 1];
    document.getElementById('yearElement').innerHTML = year;
    document.getElementById('day').innerHTML = days[date.getDay()];

}

function changeFont() {
    const fontSelector = document.getElementById('fontSelector');
    const selectedFont = fontSelector.value;

    document.getElementById('name').style.fontFamily = selectedFont;
    document.getElementById('clock').style.fontFamily = selectedFont;
    document.getElementById('dateElement').style.fontFamily = selectedFont;
};


 
function changeFontSize(е) {
    if (e.keyCode == 45) {
        timeFontSize -= 1;
    }
    if (e.keyCode == 43) { 
        timeFontSize += 1;
    }

    document.getElementById('clock').style.fontSize = `${timeFontSize}px`;
}

function decreaseFontSize() {
    console.log('Decrease button clicked');
    timeFontSize -= 15;
    updateClock();

}

function increaseFontSize() {
    console.log('Increase button clicked');
    timeFontSize = Math.min(timeFontSize + 10, 200);
    updateClock();
}

function changeBackgroundColor() {
    const body = document.body;
    const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    body.style.backgroundColor = randomColor;
}

function changeLanguage(language) {

    if (language === 'est') {
        months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
        days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
    } else {
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }


    updateClock();
    updateDate();
}

document.getElementById('fontSelector').addEventListener('change', changeFont);
document.getElementById('increaseButton').addEventListener('click', increaseFontSize);
document.getElementById('decreaseButton').addEventListener('click', decreaseFontSize);
document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);

document.getElementById('estButton').addEventListener('click', function() {
    changeLanguage('est');
    updateClock();
});

document.getElementById('engButton').addEventListener('click', function() {
    changeLanguage('eng');
    updateClock();
});

document.getElementById('clockContainer').addEventListener('click', changeDigitColor);

function changeDigitColor() {
    const clockElements = document.querySelectorAll('#hoursElement, #minutesElement, #secondsElement');

    clockElements.forEach(element => {
        const randomColor = getRandomColor();
        element.style.color = randomColor;
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

updateClock();
updateDate();
setInterval(updateClock, 1000);
