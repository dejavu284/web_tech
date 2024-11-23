const playground = document.querySelector('.playground');
const object = document.querySelector('.object');
const speedControl = document.getElementById('speed-control');

let x = 100;
let y = 100;
let dx = 3;
let dy = 3;

function moveObject() {
    const speed = parseInt(speedControl.value);
    const playgroundWidth = playground.clientWidth;
    const playgroundHeight = playground.clientHeight;

    x += dx * speed / 5; // Регулируем скорость
    y += dy * speed / 5;

    // Отражение от стенок
    if (x <= 0 || x + object.clientWidth >= playgroundWidth) dx = -dx;
    if (y <= 0 || y + object.clientHeight >= playgroundHeight) dy = -dy;

    // Обновление позиции
    object.style.left = `${x}px`;
    object.style.top = `${y}px`;
}

// Запускаем движение
setInterval(moveObject, 41);
