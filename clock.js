let hours, minutes, seconds, date, day, month, year, dayValue;
let months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
    "juuli", "august", "september", "oktoober", "november", "detsember"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev",
    "Neljapäev", "Reede", "Laupäev"];
let monthsENG = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"];
let daysENG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday"];
let monthENG, dayENG, timeKR, timeLA, dateKR, dateLA;

let timeFontSize = 7;
document.getElementById('clock').style.fontSize = timeFontSize + "em";
window.addEventListener('keypress', textSize);

function textSize(e){
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
    console.log(hours);
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

    timeKR = date.toLocaleTimeString('en-GB', {timeZone: 'Asia/Seoul'});
    timeLA = date.toLocaleTimeString('en-GB', {timeZone: 'America/Los_Angeles'});

    document.getElementById('timeKR').innerHTML = timeKR;
    document.getElementById('timeLA').innerHTML = timeLA;

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

    dateKR = date.toLocaleDateString('en-GB', {timeZone: 'Asia/Seoul'});
    dateLA = date.toLocaleDateString('en-GB', {timeZone: 'America/Los_Angeles'});

    document.getElementById('dateKR').innerHTML = dateKR;
    document.getElementById('dateLA').innerHTML = dateLA;
}

button2.addEventListener('click', function() {
    button.innerHTML = 'Muuda teemat';
    button2.innerHTML = 'Eesti keel';
    button3.innerHTML = 'Inglise keel';
    monthElement.innerHTML = months[month];
    weekday.innerHTML = days[dayValue];
    audioText.innerHTML = 'Parim laul:';
    repo.innerHTML = '<a href="https://github.com/esteroja/kodutoo-1" ' +
        'target="_blank">Repositoorium</a>';
});

button3.addEventListener('click', function(){
        button.innerHTML = 'Change theme';
        button2.innerHTML = 'Estonian';
        button3.innerHTML = 'English';
        monthElement.innerHTML = monthENG;
        weekday.innerHTML = dayENG;
        audioText.innerHTML = 'Best song:';
        repo.innerHTML = '<a href="https://github.com/esteroja/kodutoo-1" ' +
            'target="_blank">Repository</a>';
});

function changeIcon(){
    if (hours >= 6 && hours < 18){
        document.getElementById('icon').src = "sun.png";
    } else {
        document.getElementById('icon').src = "moon.png";
    }
}

document.getElementById('theme');

function toggleTheme() {
    document.querySelector('body').classList.toggle('light-mode');
}
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
changeIcon();