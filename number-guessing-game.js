/*Используйте функции alert, confirm, prompt для общения с пользователем.
Написать игровой бот.
"Загадывание случайного числа от 1 до 100"
Что должна делать программа:
— спрашивает пользователя: "Угадай число от 1 до 100".
— если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
—  если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение  "Поздравляю, Вы угадали!!!".
Программа должны быть выполнена с помощью рекурсии, без единого цикла.
Загаданное число должно храниться «в замыкании»*/
let isNumber = function(n) {
    return !isNaN(parseFloat(n));
};
let randomNum = Math.ceil(Math.random() * (100 - 1) + 1);

function guessNumber(guess) {
    console.log(guess);
    let attemp = prompt('Угадай число от 1 до 100');
    if (attemp == guess) {
        alert('Поздравляю, Вы угадали!!!');
    } else if (!attemp) {
        alert('Игра окончена');
    } else if (!isNumber(attemp)) {
        alert("Введите число");
        guessNumber(guess);
    } else if (attemp < guess) {
        alert("Загаданное число больше.");
        guessNumber(guess);
    } else if (attemp > guess) {
        alert("Загаданное число меньше.");
        guessNumber(guess);
    }
};
guessNumber(randomNum);
