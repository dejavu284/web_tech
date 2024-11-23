const playground = document.querySelector('.playground');
const object = document.querySelector('.object');
const speedControl = document.getElementById('speed-control');

// Инициализация начальных координат и текущей фазы
let x = 0;
let y = 0;
let phase = 0; // 0: верхняя горизонталь, 1: диагональ вниз, 2: нижняя горизонталь

function moveZ() {
    const speed = parseInt(speedControl.value);
    const step = speed;
    const zWidth = playground.clientWidth - object.clientWidth; // Ширина прямоугольника
    const zHeight = playground.clientHeight - object.clientHeight; // Высота прямоугольника

    switch (phase) {
        case 0: // Верхняя горизонталь (движение вправо)
            x += step;
            if (x >= zWidth) {
                x = zWidth; // Остановка у правой границы
                phase = 1; // Переход на диагональ
            }
            break;
        case 1: // Диагональ (движение вниз-влево)
            x -= step;
            y += (zHeight / zWidth) * step; // Пропорциональное смещение по диагонали
            if (x <= 0 && y >= zHeight) {
                x = 0; // Установка в левый нижний угол
                y = zHeight;
                phase = 2; // Переход на нижнюю горизонталь
            }
            break;
        case 2: // Нижняя горизонталь (движение вправо)
            x += step;
            if (x >= zWidth) {
                x = 0; // Возврат в левый верхний угол
                y = 0;
                phase = 0; // Возврат к верхней горизонтали
            }
            break;
    }

    // Установка позиции объекта
    object.style.left = `${x}px`;
    object.style.top = `${y}px`;
}

// Запуск движения
setInterval(moveZ, 41);

// Корректировка позиции при изменении размера окна
window.addEventListener('resize', () => {
    x = Math.min(x, playground.clientWidth - object.clientWidth);
    y = Math.min(y, playground.clientHeight - object.clientHeight);
});
