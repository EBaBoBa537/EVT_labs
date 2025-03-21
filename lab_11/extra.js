document.addEventListener("DOMContentLoaded", function() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    // Углы для начальной установки стрелок:
    // 360°/60 = 6°
    // 6° на минуту + смещение от секунд
    // 30° на час + 0.5° на минуту
  
    // Задаём начальное положение стрелок
    document.querySelector('.second-strelka').style.transform = `rotate(${seconds * 6}deg)`;
    document.querySelector('.minute-strelka').style.transform = `rotate(${minutes * 6 + seconds * 0.1}deg)`;
    document.querySelector('.hour-strelka').style.transform   = `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`;
  
    //  Для синхронизации анимации с реальным временем отрицательная задержка, чтобы анимация началась с нужного смещения

    document.querySelector('.second-strelka').style.animationDelay = `-${seconds}s`;
    document.querySelector('.minute-strelka').style.animationDelay = `-${(minutes * 60 + seconds)}s`;
    document.querySelector('.hour-strelka').style.animationDelay   = `-${(((hours % 12) * 3600) + (minutes * 60) + seconds)}s`;
});
  