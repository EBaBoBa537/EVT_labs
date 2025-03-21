document.addEventListener("DOMContentLoaded", function() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    // Углы для начальной установки стрелок:
    // 360°/60 = 6°
    // 6° на минуту
    // 30° на час
  
    // Задаём начальное положение стрелок
    document.querySelector(':root').style.setProperty('--var-time-sec', (seconds * 6 + 90) + 'deg');
    document.querySelector(':root').style.setProperty('--var-time-sec-2', (450 + seconds * 6) + 'deg');
    document.querySelector(':root').style.setProperty('--var-time-min', (minutes * 6 + 90) + 'deg');
    document.querySelector(':root').style.setProperty('--var-time-min-2', (450 + minutes * 6) + 'deg');
    document.querySelector(':root').style.setProperty('--var-time-hour', ((hours % 12) * 30 + minutes * 0.5 + 90) + 'deg');
    document.querySelector(':root').style.setProperty('--var-time-hour-2', ((450 + (hours % 12) * 30 + minutes * 0.5)) + 'deg');
});
