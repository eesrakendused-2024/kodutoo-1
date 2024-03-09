let hours, minutes, seconds, date, day, month, year, dayValue,r, g, b;
let color=document.getElementById('color');
let months=["jaanuar", "veebruar", "märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"];
let days=["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
window.addEventListener("keydown", textSize);
let timeFontSize=4;
let dateFontSize=2;
let dayFontSize=2;
var catSound = document.getElementById("catSound");
var catImage = document.getElementById("cat");
let dynamicBgColor = true;
document.getElementById("clock").style.fontSize=timeFontSize+"em";
document.getElementById("dateElement").style.fontSize=dateFontSize+"em";
document.getElementById("day").style.fontSize=dayFontSize+"em";

function textSize(e) {
    console.log(e.keyCode);
    if (e.keyCode == 109 && timeFontSize>1) 
    {
        timeFontSize -= 0.1;
        dateFontSize -= 0.1;
        dayFontSize -= 0.1;
    }
    if (e.keyCode == 107 && timeFontSize<6) 
    {
        timeFontSize += 0.1;
        dateFontSize += 0.1;
        dayFontSize += 0.1;
    }
    console.log("New timeFontSize: ", timeFontSize);
    document.getElementById("clock").style.fontSize = timeFontSize + "em";
    document.getElementById("dateElement").style.fontSize = dateFontSize + "em";
    document.getElementById("day").style.fontSize=dayFontSize+"em";
}

function updateClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById('hoursel').innerHTML = hours;
    document.getElementById('minutesel').innerHTML = ":" + minutes;
    document.getElementById('secondsel').innerHTML = ":" + seconds;

    var catImage = document.querySelector("#cat img");
    var bgImage = document.querySelector("#bg img");
    var bgColor = "red";

    if (hours >= 20 || hours < 10) {
        bgImage.src = "taustnight.png";
        catImage.src = "catnight.png";
        bgColor = "darkblue";
    } else {
        bgImage.src = "taustday.png";
        catImage.src = "catday.png";
        bgColor = "orange";
    }

    if (dynamicBgColor) { 
        document.body.style.backgroundColor = bgColor;
    }

}
function updateDate()
{
    date=new Date();
    day=date.getDate();
    month=date.getMonth();
    year=date.getFullYear();
    dayValue=date.getDay();
    document.getElementById("dayElement").innerHTML=day;
    document.getElementById("monthElement").innerHTML=months[month];
    document.getElementById("yearElement").innerHTML=year;
    document.getElementById("day").innerHTML=days[dayValue];
}

catImage.addEventListener("mouseover", function() 
{
    catSound.play();
});

catImage.addEventListener("mouseout", function() 
{
    catSound.pause();
});

function changeClockColor()
{
    r=Math.round(Math.random()*255);
    g=Math.round(Math.random()*255);
    b=Math.round(Math.random()*255);
    clockCont.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

document.body.style.height = "100vh";
document.body.style.width = "100vw";
//document.body.style.backgroundColor = bgColor; 

function changeBgColor() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    dynamicBgColor = false;
}

clockCont.addEventListener('click',changeClockColor);
document.body.addEventListener('click',changeBgColor);

setInterval(updateClock, 1000);
updateClock();
updateDate();