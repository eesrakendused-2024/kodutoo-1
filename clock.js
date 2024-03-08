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
    date=new Date();
    //console.log(date);
    hours=date.getHours();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
    //console.log(hours, minutes, seconds);
    if (hours<10)
    {
        hours="0"+hours;
    }
    if (minutes<10)
    {
        minutes="0"+minutes;
    }
    if (seconds<10)
    {
        seconds="0"+seconds;
    }
    document.getElementById('hoursel').innerHTML=hours;
    document.getElementById('minutesel').innerHTML=":"+minutes;
    document.getElementById('secondsel').innerHTML=":"+seconds;

    var catImage = document.querySelector("#cat img");
    var bgImage = document.querySelector("#bg img");
    if (hours >= 14 || hours < 10) 
    {
        bgImage.src = "taustnight.png";
        catImage.src = "catnight.png";
    } 
    else 
    {
        bgImage.src = "taustday.png";
        catImage.src = "catday.png";
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

changeClockColor();

document.body.style.height = "100vh"; // Set height to 100% of viewport height
document.body.style.width = "100vw"; // Set width to 100% of viewport width
document.body.style.backgroundColor = "orange"; // Set initial background color to white

// Define the function to change the color of the entire page
function changeBgColor() 
{
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

clockCont.addEventListener('click',changeClockColor);

document.body.addEventListener('click',changeBgColor);

setInterval(updateClock, 1000);
updateClock();
updateDate();