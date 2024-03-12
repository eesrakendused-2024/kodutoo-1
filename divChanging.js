// Konstandid et muuta asju lehel
const button = document.getElementById('authorButton');
const authorText = document.getElementById('authorText');
const dayName = document.getElementById('dayValue');
const clockElement = document.getElementById('clock');
const dayElement = document.getElementById('day');
const dayValueElement = document.getElementById('dayValue');

//Courtesy ChatGPT Vajutad nupule, siis näitab autorit
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

//Muudab teksti suurust kui vajutad + või -
window.addEventListener('keypress', textSize)
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