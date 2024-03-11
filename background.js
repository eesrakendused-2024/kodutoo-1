//Courtesy ChatGPT "Öö/päeva background värvid"
function setBackground() {
    //If it's daytime (6am to 6pm), set light background
    if (hours >= 6 && hours < 18) {
        document.body.style.backgroundColor = 'rgb(255, 255, 255)';
    } else { // Otherwise, it's nighttime
        document.body.style.backgroundColor = 'rgb(0, 0, 0)';
    }
}
setBackground();