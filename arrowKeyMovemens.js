//Courtesy ChatGPT paneb autori ekraanil liikuma noole nuppudega
const movingDiv = document.getElementById('movingDiv');
let xPos = 0;
let yPos = 0;
const moveStep = 10;

// Function to update div position
function updatePosition() {
    movingDiv.style.left = xPos + 'px';
    movingDiv.style.top = yPos + 'px';
}

// Event listener for keydown events
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            yPos -= moveStep;
            break;
        case 'ArrowDown':
            yPos += moveStep;
            break;
        case 'ArrowLeft':
            xPos -= moveStep;
            break;
        case 'ArrowRight':
            xPos += moveStep;
            break;
        default:
            return; // Exit function if arrow key not pressed
    }
    
    // Update div position
    updatePosition();
});