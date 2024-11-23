const playground = document.querySelector('.playground');
const object = document.querySelector('.object');
const speedControl = document.getElementById('speed-control');

let x = 0;
let y = 0;
let direction = 'right'; // Начальное направление

function moveRectangle() {
    const speed = parseInt(speedControl.value);
    const step = speed;
    const rectWidth = playground.clientWidth - object.clientWidth;
    const rectHeight = playground.clientHeight - object.clientHeight;

    switch (direction) {
        case 'right':
            x += step;
            if (x >= rectWidth) direction = 'down';
            break;
        case 'down':
            y += step;
            if (y >= rectHeight) direction = 'left';
            break;
        case 'left':
            x -= step;
            if (x <= 0) direction = 'up';
            break;
        case 'up':
            y -= step;
            if (y <= 0) direction = 'right';
            break;
    }

    // Обновляем позицию объекта
    object.style.left = `${x}px`;
    object.style.top = `${y}px`;
}

// Запуск движения
setInterval(moveRectangle, 41);

// Обновление размеров при изменении окна
window.addEventListener('resize', () => {
    x = Math.min(x, playground.clientWidth - object.clientWidth);
    y = Math.min(y, playground.clientHeight - object.clientHeight);
});
