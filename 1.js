const temperatureC = +prompt("Введите температуру в градусах Цельсия  ");
//const temperatureF = Math.trunc(((9 / 5) * temperatureC + 32) * 100) / 100; (До сотых)
const temperatureF = Math.trunc(((9 / 5) * temperatureC + 32) * 10) / 10; // (До десятых)
alert(`Температура в градусах Цельсия ${temperatureC} по Фаренгейту равны:  ${temperatureF}`);