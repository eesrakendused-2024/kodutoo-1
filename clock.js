let hours, minutes, seconds, day, month, year;
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let color = "rgb(57, 57, 57)";
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let clock = document.getElementById("clock");
let audioButton = document.getElementById("playPause");
let audio = document.getElementById("audio");
let clockBoxBackground = document.getElementById("clock").style.backgroundColor;
let date = document.getElementById("date");

window.addEventListener('keydown', backgroundColor);


//Taustale vajutedes läheb kella taust originaal värviks tagasi
date.addEventListener('click', function(){
    clock.style.backgroundColor = "grey";
});

//Nupud, mis vahetavad kella fonti
button1.addEventListener('click', function() {
    clock.style.fontFamily = "Arial, Helvetica, sans-serif";
});

button2.addEventListener('click', function() {
    clock.style.fontFamily = "'Times New Roman', Times, serif";
});

button3.addEventListener('click', function() {
    clock.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
});

//nupp mis muudab taustavärvi suvaliseks värviks
clock.addEventListener('click', function() {
    const randomColor = randomRGB();
    clock.style.backgroundColor = randomColor;
    //console.log(randomRGB());
});

//Audio nupp
audioButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.volume = 0.5;
        audio.play();
        audioButton.textContent = "Pause";
    } else {
        audio.pause();
        audioButton.textContent = "Play";
    }
});

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

function updateDate() {
    let date = new Date();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    dayValue = date.getDay();


    document.getElementById("dayElement").innerHTML = day + ".";
    document.getElementById("monthElement").innerHTML = months[month];
    document.getElementById("yearElement").innerHTML = year;
    document.getElementById("day").innerHTML = days[dayValue];
}

//funktsioon, mis vahetab tausta värvi. Käivitamisnupud 1, 2, 3, 4
function backgroundColor(e) {
    //1
    if(e.keyCode == 49) {
        document.getElementById("main").style.backgroundColor = "black";
        document.getElementById("date").style.color = "white";
    } 
    //2
    if(e.keyCode == 50) {
        document.getElementById("main").style.backgroundColor = "rgb(57, 57, 57, 250)";
        document.getElementById("date").style.color = "white";    
    }
    //3
    if(e.keyCode == 51) {
        document.getElementById("main").style.backgroundColor = "gray";
        document.getElementById("date").style.color = "white";    
    }
    //4
    if(e.keyCode == 52) {
        document.getElementById("main").style.backgroundColor = "whitesmoke";
        document.getElementById("date").style.color = "rgb(50, 50, 50)"; 
    }
}

//funktsioon, mis annab suvalise värvi
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    //const a = Math.floor(Math.random() * 256); // alphat muutes ei läinud tööle ?
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

updateClock();
updateDate();
setInterval(updateClock, 1000);