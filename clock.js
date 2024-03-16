let hours, minutes, seconds, date, day, month, year, dayValue;
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let days = ["Puhapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
window.addEventListener('keypress', textSize);
let timeFontSize = 3;
document.getElementById('clock').style.fontSize = timeFontSize + "em"

function textSize(e){
    console.log(e.keyCode);
    if(e.keyCode == 45){
        timeFontSize -= 0.2
        document.getElementById('clock').style.fontSize = timeFontSize + "em"
    } else if (e.keyCode == 43){
        timeFontSize += 0.2
        document.getElementById('clock').style.fontSize = timeFontSize + "em"
    }
}

document.getElementById('font1').addEventListener('click', function() {
    document.querySelectorAll('*').forEach(function(element) {
        element.style.fontFamily = 'Georgia, serif';
    });
});

document.getElementById('font2').addEventListener('click', function() {
    document.querySelectorAll('*').forEach(function(element) {
        element.style.fontFamily = 'Times New Roman, serif';
    });
});

document.getElementById('font3').addEventListener('click', function() {
    document.querySelectorAll('*').forEach(function(element) {
        element.style.fontFamily = 'Comic Sans MS';
    });
});

document.getElementById('color1').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});
document.getElementById('color2').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
document.getElementById('color3').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lime';
});

document.getElementById('clockColor1').addEventListener('click', function() {
    document.getElementById('clock').style.color = 'yellow';
});
document.getElementById('clockColor2').addEventListener('click', function() {
    document.getElementById('clock').style.color = 'white';
});
document.getElementById('clockColor3').addEventListener('click', function() {
    document.getElementById('clock').style.color = 'grey'; 
});

document.getElementById('dateColor1').addEventListener('click', function() {
    document.getElementById('dateElement').style.color = 'purple';
});
document.getElementById('dateColor2').addEventListener('click', function() {
    document.getElementById('dateElement').style.color = 'white';
});
document.getElementById('dateColor3').addEventListener('click', function() {
    document.getElementById('dateElement').style.color = 'orange';
});

document.getElementById('dayColor1').addEventListener('click', function() {
    document.getElementById('day').style.color = 'gold';
});
document.getElementById('dayColor2').addEventListener('click', function() {
    document.getElementById('day').style.color = 'navy';
});
document.getElementById('dayColor3').addEventListener('click', function() {
    document.getElementById('day').style.color = 'brown';
});

document.getElementById('reset').addEventListener('click', function() {
    entireClock('black', 'white', 'black');
    document.getElementById('clock').style.fontSize = 3 + "em"
});

document.getElementById('combo1').addEventListener('click', function() {
    entireClock('white', 'black', 'white');
});
document.getElementById('combo2').addEventListener('click', function() {
    entireClock('yellow', 'black', 'yellow');
});
document.getElementById('combo3').addEventListener('click', function() {
    entireClock('red', 'blue', 'black');
});

document.getElementById('sizeUp').addEventListener('click', function() {
    timeFontSize += 0.2
    document.getElementById('clock').style.fontSize = timeFontSize + "em"
});
document.getElementById('sizeDown').addEventListener('click', function() {
    timeFontSize -= 0.2
    document.getElementById('clock').style.fontSize = timeFontSize + "em"
});

document.getElementById('showBar').addEventListener('click', function() {
    var div = document.getElementById('progressBar');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
});

document.getElementById('showAuthor').addEventListener('click', function() {
    var div = document.getElementById('author');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
});



function fillProgressBar(numbers) {
    document.getElementById('progressBar').style.width = (numbers * 100 / 60) + "%";
}


function entireClock(newColor1, newColor2, newColor3){
    document.getElementById('clock').style.color = newColor1;
    document.body.style.backgroundColor = newColor2;
    document.getElementById('dateElement').style.color = newColor1;
    document.getElementById('day').style.color = newColor1;
    document.getElementById('headerWrap').style.color = newColor3;
    document.getElementById('hr').style.color = newColor3;
}

function updateClock(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    fillProgressBar(seconds);
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
    document.getElementById('day').innerHTML = days[dayValue];
}

updateClock();
updateDate();
setInterval(updateClock, 1000);