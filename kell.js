let hours, minutes, seconds, date, day, month, year, dayValue;
let months=["jaanuar", "veebruar", "märts"];
let days=["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
window.addEventListener("keypress", textSize);
let timeFontSize=3;
document.getElementById("clock").style.fontSize=timeFontSize+"em";
let letterSpacing = 0; // Initial spacing between numbers

function adjustLetterSpacing(e) {
    // Check if the key pressed is * or /
    if (e.key === '*') {
        letterSpacing += 1; // Increase spacing
    } else if (e.key === '/') {
        letterSpacing -= 1; // Decrease spacing
        letterSpacing = Math.max(0, letterSpacing); // Prevent negative spacing
    }
    applyLetterSpacing(); // Apply the updated spacing to the clock numbers
}

function applyLetterSpacing() {
    // Apply the letter-spacing to each element
    document.getElementById('hoursel').style.letterSpacing = `${letterSpacing}px`;
    document.getElementById('minutesel').style.letterSpacing = `${letterSpacing}px`;
    document.getElementById('secondsel').style.letterSpacing = `${letterSpacing}px`;
}

document.addEventListener("keydown", adjustLetterSpacing); // Add the event listener for keydown events

// You might want to call applyLetterSpacing() to ensure that the initial spacing is applied
applyLetterSpacing();

document.addEventListener("keydown", function(e) {
    const clockContainer = document.getElementById("clockContainer");
    let top = clockContainer.offsetTop;
    let left = clockContainer.offsetLeft;

    switch(e.key) {
        case "ArrowLeft":
            left = left > 0 ? left - 10 : left;
            break;
        case "ArrowRight":
            left = left > 0 ? left + 10 : left;
            break;
        case "ArrowUp":
            top = top > 0 ? top - 10 : top;
            break;
        case "ArrowDown":
            top = top < window.innerHeight - clockContainer.offsetHeight ? top + 10 : top;
            break;
    }

    clockContainer.style.top = `${top}px`;
    clockContainer.style.left = `${left}px`;
});


document.addEventListener("keydown", function(e) {
    // For #dateElement and #day
    const dateElement = document.getElementById("dateElement");
    const dayElement = document.getElementById("day");
    let dateTop = dateElement.offsetTop;
    let dateLeft = dateElement.offsetLeft;
    let dayTop = dayElement.offsetTop;
    let dayLeft = dayElement.offsetLeft;

    switch(e.key) {
        case "w":
        case "W":
            dateElement.style.top = `${dateTop - 10}px`;
            dayElement.style.top = `${dayTop - 10}px`;
            break;
        case "a":
        case "A":
            dateElement.style.left = `${dateLeft - 10}px`;
            dayElement.style.left = `${dayLeft - 10}px`;
            break;
        case "s":
        case "S":
            dateElement.style.top = `${dateTop + 10}px`;
            dayElement.style.top = `${dayTop + 10}px`;
            break;
        case "d":
        case "D":
            dateElement.style.left = `${dateLeft + 10}px`;
            dayElement.style.left = `${dayLeft + 10}px`;
            break;
    }
});



function textSize(e) {
    console.log("Pressed key:", e.key); // This should log any key pressed
    if (e.key === '-' || e.key === '_') { // Some keyboards might require Shift key for these characters
        timeFontSize -= 0.1;
        console.log("Decreasing font size to:", timeFontSize);
    } else if (e.key === '+' || e.key === '=') { // Handling for both numpad and regular keys
        timeFontSize += 0.1;
        console.log("Increasing font size to:", timeFontSize);
    }
    document.getElementById("clock").style.fontSize = timeFontSize + "em";
}


// Ensure you're adding the event listener to the correct event and scope
document.addEventListener("keydown", textSize); // Change to 'keydown' to ensure wider capture


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
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeAllColors() {
    var color = getRandomColor(); // Get a random color
    document.getElementById('hoursel').style.color = color;
    document.getElementById('minutesel').style.color = color;
    document.getElementById('secondsel').style.color = color;
}

window.onload = function() {
    // Existing code to change the clock colors
    ['hoursel', 'minutesel', 'secondsel'].forEach(function(id) {
        document.getElementById(id).addEventListener('click', changeAllColors);
    });

    // New code to change the color of dateElement and day to black when clicked
    document.getElementById('dateElement').addEventListener('click', function() {
        this.style.color = 'black';
    });

    document.getElementById('day').addEventListener('click', function() {
        this.style.color = 'black';
    });
};

let currentImageIndex = 1;
const totalImages = 10; // Total number of images you want to cycle through

document.body.addEventListener('click', function() {
  if (currentImageIndex < totalImages) {
    currentImageIndex += 1; // Move to the next image
  } else {
    currentImageIndex = totalImages; // Keep showing the last image after reaching the end
  }
  document.getElementById('dynamicImage').src = `pics/main${currentImageIndex}.png`;
});

setInterval(updateClock, 1000);
updateClock();
updateDate();