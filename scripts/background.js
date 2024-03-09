function updateBackgroundColor() {
    // Define the day and night colors
    const dayColor = '#87CEEB';
    const nightColor = '#2C3E50';

    // Get the current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Calculate the percentage of the day that has passed
    const percentageOfDayPassed = (hours + minutes / 60) / 24;

    // Interpolate between day and night colors based on the time
    const currentColor = interpolateColor(dayColor, nightColor, percentageOfDayPassed);

    // Apply the interpolated color as background
    document.body.style.backgroundColor = currentColor;
}

function interpolateColor(color1, color2, factor) {
    if (factor > 1) factor = 1;
    else if (factor < 0) factor = 0;

    const result = color1.slice(1).match(/.{2}/g)
        .map((hex, index) => {
            const color1Val = parseInt(hex, 16);
            const color2Val = parseInt(color2.slice(1).match(/.{2}/g)[index], 16);
            const interpolatedVal = Math.round(color1Val + (color2Val - color1Val) * factor).toString(16).padStart(2, '0');
            return interpolatedVal;
        })
        .join('');

    return `#${result}`;
}

// Update the background color upon script load and every 5 minutes thereafter
updateBackgroundColor();
setInterval(updateBackgroundColor, 300000); // 300,000 milliseconds = 5 minutes