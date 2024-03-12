function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').innerHTML = timeString;
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('et-EE', options);
  document.getElementById('date').innerHTML = formattedDate;

  const weekday = now.toLocaleDateString('et-EE', { weekday: 'long' });
  document.getElementById('weekday').innerHTML = weekday;
}

document.addEventListener('DOMContentLoaded', function() {
  updateClock();
  setInterval(updateClock, 1000);

  document.getElementById('increaseBtn').addEventListener('click', function() {
    const clock = document.querySelector('.clock');
    const fontSize = window.getComputedStyle(clock, null).getPropertyValue('font-size');
    const currentSize = parseFloat(fontSize);
    clock.style.fontSize = `${currentSize + 2}px`;
  });

  document.getElementById('decreaseBtn').addEventListener('click', function() {
    const clock = document.querySelector('.clock');
    const fontSize = window.getComputedStyle(clock, null).getPropertyValue('font-size');
    const currentSize = parseFloat(fontSize);
    clock.style.fontSize = `${Math.max(currentSize - 2, 10)}px`;
  });

  // Function to generate a random color in hexadecimal format
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to change the color of the clock container's content to a random color
  function changeContentColor() {
    const clockContainer = document.querySelector('.clock-container');
    const clockContent = clockContainer.querySelectorAll('.clock, .date, .weekday');
    clockContent.forEach(element => {
      element.style.color = getRandomColor(); // Change text color to a random color
    });
  }

  // Event listener for the color change button
  document.getElementById('colorChangeBtn').addEventListener('click', function() {
    changeContentColor(); // Call the function to change content color
  });
});
