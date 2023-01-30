const temperatureC = +prompt("Введите температуру градусах Цельсия  ");
const temperatureF = Math.trunc(((9 / 5) * temperatureC + 32) * 100) / 100;
alert(`Температура в градусах Цельсия ${temperatureC} по Фаренгейту равны:  ${temperatureF}`);