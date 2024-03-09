let hours, minutes, seconds, date, day, month, year, dayValue;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
window.addEventListener('keypress', textSize);
let timeFontSize = 4;
document.getElementById('clock').style.fontSize = timeFontSize + "em";

/* Change clock color */

const colorPicker1 = document.querySelector('#textColor');
const elems1 = document.querySelectorAll('.changeTextColor');

colorPicker1.addEventListener('change', function() {
  Array.from(elems1).forEach(v => v.style.color = this.value);
});

const colorPicker2 = document.querySelector('#backColor');
const elems2 = document.querySelector('#clockContainer');

colorPicker2.addEventListener('change', function() {
    const selectedColor = colorPicker2.value;
    elems2.style.backgroundColor = selectedColor;
});

const colorPicker3 = document.querySelector('#borderColor');
const elems3 = document.querySelector('#clockContainer');

colorPicker3.addEventListener('change', function() {
    const selectedColor2 = colorPicker3.value;
    elems3.style.borderColor = selectedColor2;
});

/* */

const fontSelector = document.getElementById('fontSelector');
const fontChangeElements = document.querySelectorAll('.changeFont');

fontSelector.addEventListener('change', function() {
    const selectedFont = this.value;

    fontChangeElements.forEach(element => {
      element.style.fontFamily = selectedFont;
    });
});

/* Algne kood võetud aadressilt: https://www.w3schools.com/howto/howto_js_draggable.asp 
ChatGPT ja minu poolt muudetud oma vajaduste jaoks.
*/

const elements = document.getElementsByClassName("draggable");

for (let i = 0; i < elements.length; i++) {
  dragElement(elements[i]);
}

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  const header = elmnt.querySelector(".header");
  if (header) {
    header.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/* */

function textSize(e){
    console.log(e.keyCode);
    if(e.keyCode == 45){
        timeFontSize = timeFontSize - 0.1;
        document.getElementById('clock').style.fontSize = timeFontSize + "em";
    }

    if(e.keyCode == 43){
        timeFontSize = timeFontSize + 0.1;
        document.getElementById('clock').style.fontSize = timeFontSize + "em";
    }
}

/* */

function updateClocks() {
  const timezoneSelection = document.getElementById('timezoneSelector').value;
  let date;

  // Update Digital Clock
  if (timezoneSelection === "system") {
    // Use the system's local time
    date = new Date();
  } else {
    // Calculate time based on the selected timezone
    const timezoneOffset = parseInt(timezoneSelection, 10);
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    date = new Date(utc + (3600000 * timezoneOffset));
  }

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById('hoursElement').innerHTML = hours;
  document.getElementById('minutesElement').innerHTML = ":" + minutes;
  document.getElementById('secondsElement').innerHTML = ":" + seconds;

  // Update Analog Clock
  const secondAngle = (360 / 60) * seconds;
  const minuteAngle = (360 / 60) * minutes + (seconds / 60) * 6;
  const hourAngle = (360 / 12) * hours + (minutes / 60) * 30;

  document.getElementById('hourHand').style.transform = `rotate(${hourAngle}deg)`;
  document.getElementById('minuteHand').style.transform = `rotate(${minuteAngle}deg)`;
  document.getElementById('secondHand').style.transform = `rotate(${secondAngle}deg)`;
}

// Set an interval to update the clocks every second
setInterval(updateClocks, 1000);

// Update the clocks immediately
updateClocks();

function updateDate() {
  const timezoneSelection = document.getElementById('timezoneSelector').value;
  let date;
  if (timezoneSelection === "system") {
    // Use the system's local date
    date = new Date();
  } else {
    // Calculate date based on the selected timezone
    const timezoneOffset = parseInt(timezoneSelection, 10);
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    date = new Date(utc + (3600000 * timezoneOffset));
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayValue = date.getDay();

  document.getElementById('dayElement').innerHTML = day;
  document.getElementById('monthElement').innerHTML = months[month];
  document.getElementById('yearElement').innerHTML = year;
  document.getElementById('day').innerHTML = days[dayValue];
}

updateDate();
updateClocks();
setInterval(updateClocks, 1000);
