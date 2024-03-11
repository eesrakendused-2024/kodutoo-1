let hours, minutes, seconds,day, month, year, dayValue;
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill"]
let days = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"]
window.addEventListener('keypress', textSize)

//Muudab teksti suurust kui vajutad + või -
let timeFontSize = 3
function textSize (e){
    console.log(e.keyCode)
    if (e.keyCode == 45){
        timeFontSize = timeFontSize - 0.1
        document.getElementById("clock").style.fontSize = timeFontSize + "em";
    }
    if (e.keyCode == 43){
        timeFontSize = timeFontSize + 0.1
        document.getElementById("clock").style.fontSize = timeFontSize + "em";
    }
}

function updateClock(){
    let date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    //console.log(hours, minutes, seconds);

    if(hours<10) hours = "0" + hours;
    if(minutes<10) minutes = "0" + minutes;
    if(seconds<10) seconds = "0" + seconds;

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = ":" + minutes;
    document.getElementById("seconds").innerHTML = ":" + seconds;
}
function updateDate(){
    let date = new Date();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    dayValue = date.getDay();
    //console.log(hours, minutes, seconds);

    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = months[month];
    document.getElementById("year").innerHTML = year;

    document.getElementById("dayValue").innerHTML = days[dayValue];
}

//Courtesy ChatGPT "Öö/päeva background värvid"
function setBackground() {
    //If it's daytime (6am to 6pm), set light background
    if (hours >= 6 && hours < 18) {
        document.body.style.backgroundColor = 'rgb(255, 255, 255)';
    } else { // Otherwise, it's nighttime
        document.body.style.backgroundColor = 'rgb(0, 0, 0)';
    }
}

// Konstandid et muuta asju lehel
const button = document.getElementById('authorButton');
const authorText = document.getElementById('authorText');
const dayName = document.getElementById('dayValue');
const clockElement = document.getElementById('clock');
const dayElement = document.getElementById('day');
const dayValueElement = document.getElementById('dayValue');

// Vajutad nupule, siis näitab autorit
button.addEventListener('click', function() {
    if (authorText.style.opacity == '0'){
        authorText.style.opacity = '1';
    } else {
        authorText.style.opacity = '0';
    }     
});
// Vajutad kellale läheb kella tekst punaseks
clockElement.addEventListener('click',function() {
    clockElement.style.color = 'rgb(255, 0, 0)';
})
//vajutad päevale läheb kuupäev punaseks
dayValueElement.addEventListener('click',function() {
    dayElement.style.color = 'rgb(255, 0, 0)';
})

//Kutsun funktsioonid välja
setBackground();
updateClock();
updateDate();
setInterval(updateClock, 1000);
