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
    document.querySelector('.second-strelka').style.transform = `rotate(${seconds * 6}deg)`;
    document.querySelector('.minute-strelka').style.transform = `rotate(${minutes * 6}deg)`;
    document.querySelector('.hour-strelka').style.transform   = `rotate(${(hours % 12) * 30}deg)`;
});
