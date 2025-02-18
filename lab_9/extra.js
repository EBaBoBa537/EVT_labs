let container = document.querySelector('.extra');
let images = container.querySelectorAll('img');

function positionImages() {
    let container_width = container.clientWidth;
    let img_width = images[0].clientWidth;
    let count = images.length;

    let spacing = (container_width - img_width) / (count - 1);

    // Если пробел больше или равен ширине картинки, значит перекрытия нет
    if (spacing > img_width) {
        spacing = img_width;
    }

    images.forEach((img, i) => {
        let left = i * spacing;
        let top = i * 0.2 * (img_width - spacing);

        img.style.left = left + 'px';
        img.style.top = top + 'px';
    });
}

positionImages();
window.addEventListener('resize', positionImages);