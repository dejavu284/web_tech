// Функция для обновления часов
function updateClock() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `Сейчас: ${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
}

// Запускаем обновление часов каждую секунду
setInterval(updateClock, 1000);
updateClock(); // Обновляем часы при загрузке страницы

// Функция для проверки, является ли строка числом
function isNumeric(value) {
    return /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(value); // Проверка на числа, включая десятичные
}

// Функция для выполнения операции
function calculate() {
    const operand1 = document.getElementById('operand1').value.trim();
    const operand2 = document.getElementById('operand2').value.trim();
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');

    // Проверка на наличие только чисел в обоих операндах
    const isOperand1Numeric = isNumeric(operand1);
    const isOperand2Numeric = isNumeric(operand2);

    if (operation !== 'concat' && (!isOperand1Numeric || !isOperand2Numeric)) {
        resultElement.textContent = 'Ошибка: для арифметических операций оба значения должны быть числами!';
        resultElement.style.color = 'red';
        return;
    }

    let result;

    // Обработка конкатенации строк
    if (operation === 'concat') {
        result = operand1 + operand2;
        resultElement.textContent = `Результат: ${result}`;
        resultElement.style.color = '#4CAF50';
        return;
    }

    // Преобразуем строки в числа
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    // Выполнение арифметических операций
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultElement.textContent = 'Ошибка: деление на ноль!';
                resultElement.style.color = 'red';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = 'Ошибка: неизвестная операция!';
            resultElement.style.color = 'red';
            return;
    }

    resultElement.textContent = `Результат: ${result}`;
    resultElement.style.color = '#4CAF50';
}

// Добавляем обработчик события на кнопку
document.getElementById('calculate-button').addEventListener('click', calculate);
