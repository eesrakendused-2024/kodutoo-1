function updateTime() {
    const now = new Date();
    let offset = 2;

    const location = document.getElementById('location').value;

    if (location === 'new-york') {
        offset = -5;
    } else if (location === 'london') {
        offset = 0;
    } else if (location === 'sidney') {
        offset = +11;
    }

    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const newTime = new Date(utc + (3600000 * offset));

    const hours = String(newTime.getHours()).padStart(2, '0');
    const minutes = String(newTime.getMinutes()).padStart(2, '0');
    const seconds = String(newTime.getSeconds()).padStart(2, '0');

    const days = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];
    const months = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
    const dateStr = days[newTime.getDay()] + ', ' + newTime.getDate() + ' ' + months[newTime.getMonth()] + ', ' + newTime.getFullYear();

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = dateStr;
}
setInterval(updateTime, 1000);

updateTime();

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    }
  });

  const slider = document.getElementById('slider');

  slider.addEventListener('input', function() {
    const value = this.value;
    document.body.style.backgroundColor = `rgba(0, 0, 0, ${value / 100})`;
    this.style.backgroundColor = `rgba(255, 255, 255, ${value / 100})`; 
  });
  

