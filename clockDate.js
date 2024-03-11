let hours, minutes, seconds,day, month, year, dayValue;
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill"]
let days = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"]

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

//Kutsun funktsioonid välja
updateClock();
updateDate();
setInterval(updateClock, 1000);