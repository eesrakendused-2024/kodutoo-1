let hours, minutes, seconds, day, month, year;
let kuud=["jaanaur", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
let months=["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "Oktoober", "November", "Detsember"];
let paevad=["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let timeFontSize=5;
let isDayMode=1; // default is day
let bodyStyle = window.getComputedStyle(document.body);
let bodyBackgroundColor = bodyStyle.backgroundColor;
window.addEventListener('keypress',textSize);
document.getElementById('clock').style.fontSize=timeFontSize+"em";
let dayNightButton = document.getElementById('daynightmode');
let clockContainer = document.getElementById('clockContainer');
let step=0.1;
let daynightBtn = document.getElementById('daynightmode');
let selectedLanguage;
daynightBtn.addEventListener('click', toggleDayNightMode);

document.getElementById('languageSelect').addEventListener('change', changeLanguage);

function changeLanguage() {
    selectedLanguage = document.getElementById('languageSelect').value;
    console.log("Selected Language: ", selectedLanguage);
}

let clockElement = document.getElementById('dateElement');
let clockStyle = window.getComputedStyle(clockElement);
let clockFontSize = clockStyle.fontSize;

let hoursFontSize = clockFontSize; 
let minutesFontSize = clockFontSize; 
let secondsFontSize = clockFontSize; 

document.getElementById('hoursElement').addEventListener('mousedown', adjustFontSize);
document.getElementById('minutesElement').addEventListener('mousedown', adjustFontSize);
document.getElementById('secondsElement').addEventListener('mousedown', adjustFontSize);

function changeRandomColor(event) {
    let targetElement = event.target;
    let randomColor = getRandomColor();

    targetElement.style.backgroundColor = randomColor;
}

function getRandomColor() {
    // random color (hex format)
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function adjustFontSize(event) {
    let targetElement = event.target;
    let currentFontSize;

    switch (targetElement.id) {
        case 'hoursElement':
            currentFontSize = hoursFontSize;
            break;
        case 'minutesElement':
            currentFontSize = minutesFontSize;
            break;
        case 'secondsElement':
            currentFontSize = secondsFontSize;
            break;
        default:
            return;
    }

    let numericFontSize = parseFloat(currentFontSize);

    let initialFontSizeInPixels = 30; // replace with the actual initial pixel size
    let equivalentEmSize = numericFontSize / initialFontSizeInPixels;
    console.log("Current font size", numericFontSize);

    if (event.button === 0) {
        // Left click
        equivalentEmSize = Math.max(equivalentEmSize - step, 1);
        changeRandomColor(event);
    } else if (event.button === 2) {
        // Right click
        equivalentEmSize = Math.min(equivalentEmSize + step, 10);
    }

    // Convert the updated em size back to pixels
    let updatedFontSizeInPixels = equivalentEmSize * initialFontSizeInPixels;

    console.log("New font size", event.button, updatedFontSizeInPixels);

    // Set the updated font size in pixels to the target element
    switch (targetElement.id) {
        case 'hoursElement':
            hoursFontSize = updatedFontSizeInPixels + 'px';
            document.getElementById('hoursElement').style.fontSize = updatedFontSizeInPixels + 'px';
            break;
        case 'minutesElement':
            minutesFontSize = updatedFontSizeInPixels + 'px';
            document.getElementById('minutesElement').style.fontSize = updatedFontSizeInPixels + 'px';
            break;
        case 'secondsElement':
            secondsFontSize = updatedFontSizeInPixels + 'px';
            document.getElementById('secondsElement').style.fontSize = updatedFontSizeInPixels + 'px';
            break;
    }
}

function updateClockAppearance() {
    if (isDayMode) {
        // Day mode
        document.body.style.backgroundColor = bodyBackgroundColor;
        clockContainer.style.background = bodyBackgroundColor;
        clockContainer.style.color = 'black';
        dayNightButton.value = 'Night mode';
        console.log("Day mode");
    } else {
        // Night mode
        document.body.style.backgroundColor = 'lightgrey';
        clockContainer.style.background = 'lightgrey'; 
        clockContainer.style.color = 'white';
        dayNightButton.value = 'Day mode';
        console.log("Night mode");
    }
}

function toggleDayNightMode() {
    isDayMode = !isDayMode;
    updateClockAppearance();
}

let centerOffsetX = 1; //window.innerWidth / 2;
let centerOffsetY = 2; //window.innerHeight / 2;
let positionX = centerOffsetX;
let positionY = centerOffsetY;

function getCurrentPosition() {
    return { x: positionX, y: positionY };
}

window.addEventListener('keydown', moveClock);

function moveClock(e) {
    let currentPosition = getCurrentPosition();
    positionX = currentPosition.x;
    positionY = currentPosition.y;

    let key = e.key || e.code;

    // Get the actual size of the window
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    console.log("MoveClock", key, screenWidth, screenHeight, positionX, positionY);
    
    switch (key) {
        case 'ArrowUp':
            positionY = (positionY - 10 + screenHeight) % screenHeight; 
            break;
        case 'ArrowDown':
            positionY = (positionY + 10 + screenHeight) % screenHeight; 
            break;
        case 'ArrowLeft':
            positionX = (positionX - 10 + screenWidth) % screenWidth; 
            break;
        case 'ArrowRight':
            positionX = (positionX + 10 + screenWidth) % screenWidth; 
            break;
    }

    console.log("MoveClock new", positionX, positionY);

    clockContainer.style.transform = `translate(${positionX}px, ${positionY}px)`;
}

function textSize(e){
    console.log("Change clock size", e.keyCode);
    if(e.keyCode==45){
        timeFontSize = timeFontSize-0.1;
        document.getElementById('clock').style.fontSize=timeFontSize+"em";
    }
    if(e.keyCode==43){
        timeFontSize = timeFontSize+0.1;
        document.getElementById('clock').style.fontSize=timeFontSize+"em";
    }
}

function updateClock(){
    let date = new Date();
    console.log(date);
    hours=date.getHours();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
    console.log(hours, minutes, seconds);
    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    document.getElementById('hoursElement').innerHTML=hours;
    document.getElementById('minutesElement').innerHTML=minutes;
    document.getElementById('secondsElement').innerHTML=seconds;
}

function updateDate(){
   date = new Date();
   day=date.getDate();
   month=date.getMonth();
   year=date.getFullYear(); 
   dayValue=date.getDay();

   selectedLanguage = document.getElementById('languageSelect').value;
   console.log(selectedLanguage, day, month, year);

   if(selectedLanguage == "estonian"){
        document.getElementById('monthElement').innerHTML=kuud[month];
        document.getElementById('day').innerHTML=paevad[dayValue];
        console.log("Eesti");
    } else {
        document.getElementById('monthElement').innerHTML=months[month];
        document.getElementById('day').innerHTML=days[dayValue]; 
        console.log("Inglise");
    }

   document.getElementById('dayElement').innerHTML=day;
   document.getElementById('yearElement').innerHTML=year;

}
setInterval(updateClock, 1000);
setInterval(updateDate, 1000);
