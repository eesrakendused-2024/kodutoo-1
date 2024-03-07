let hours, minutes, seconds, date, day, month, year, dayValue;
let months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let monthsENG = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
let daysENG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//let monthENG, dayENG;

let timeFontSize = 10;
document.getElementById('clock').style.fontSize = timeFontSize + "em";
window.addEventListener('keypress', textSize);

document.getElementById('theme');

/*let button = document.getElementById('button');
let monthElement = document.getElementById('monthElement');
let day = document.getElementById('day');
let audioText = document.getElementById('audioText');

//window.addEventListener('click', changeLanguage);
let button2 = document.getElementById('button2');
let english = false;*/

let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
function textSize(e){ //e - võtab vastu eventlisteneri
    if (e.key == "-"){
        console.log(timeFontSize);
        timeFontSize = timeFontSize - 0.1;
        document.getElementById('clock').style.fontSize = timeFontSize + "em";
    }
    if (e.key == "+"){
        timeFontSize = timeFontSize + 0.1;
        document.getElementById('clock').style.fontSize = timeFontSize + "em";
    }
}

function updateClock(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    document.getElementById('hoursElement').innerHTML = hours;
    document.getElementById('minutesElement').innerHTML = ":" + minutes;
    document.getElementById('secondsElement').innerHTML = ":" + seconds;
}

function updateDate(){
    date = new Date();

    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    dayValue = date.getDay();

    document.getElementById('dayElement').innerHTML = day;
    document.getElementById('monthElement').innerHTML = months[month];
    document.getElementById('yearElement').innerHTML = year;
    document.getElementById('weekday').innerHTML = days[dayValue];

    monthENG = monthsENG[month];
    dayENG = daysENG[dayValue];


}

function toggleTheme() {
    document.querySelector('body').classList.toggle('light-mode');
}

function changeLanguage(language){
    if (language == 'EST') {
        button.innerHTML = 'Muuda teemat';
        button2.innerHTML = 'Eesti keel';
        button3.innerHTML = 'Inglise keel';
        monthElement.innerHTML = months[month];
        weekday.innerHTML = days[dayValue];
        audioText.innerHTML = 'Parim laul:';
    } else if (language == 'ENG') {
        button.innerHTML = 'Change theme';
        button2.innerHTML = 'Estonian';
        button3.innerHTML = 'English';
        monthElement.innerHTML = monthENG;
        weekday.innerHTML = dayENG;
        console.log(weekday.innerHTML = dayENG);
        audioText.innerHTML = 'Best song:';
    }
}
/*function changeLanguage(){
    console.log('funktsiooni algus, english =', english)
    if (english === false) {
        button.innerHTML = 'Change theme';
        button2.innerHTML = 'Change language';
        monthElement.innerHTML = monthENG;
        day.innerHTML = dayENG;
        audioText.innerHTML = 'Best song:';
        english = true;

    } else {
        button.innerHTML = 'Muuda teemat';
        button2.innerHTML = 'Muuda keelt';
        monthElement.innerHTML = months[month];
        day.innerHTML = days[dayValue];
        audioText.innerHTML = 'Best song:';
        english = false;
        /!*button.textContent = 'Muuda teemat';
        button2.textContent = 'Muuda keelt';
        monthElement.textContent = months[month];
        day.textContent = days[dayValue];
        audioText.textContent = 'Parim laul:'*!/
    }
}

button2.addEventListener('click', changeLanguage);*/


function changeBackgroundColor(){
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("theme")){
        document.querySelector('body').style.backgroundColor = searchParams.get("theme");
        toggleTheme();
    }
}

updateClock();
updateDate();
setInterval(updateClock, 1000);
changeBackgroundColor();
//changeLanguage();
