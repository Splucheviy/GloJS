let title = prompt("Как называется ваш проект?");
console.log(title);
let screens = prompt(
  "Какие типы экранов нужно разрабатывать",
  "Простые, Сложные, Интерактивные"
);
console.log(screens);
let screenPrice = +prompt("Сколько будет стоить данная работа", "15000");
console.log(screenPrice);
let rollback = 59;

let adaptive = prompt("Нужен ли адаптив на сайте?");
if (adaptive == "Да") {
  adaptive = true;
} else {
  adaptive = false;
}
console.log(adaptive);

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let service1Price = +prompt("Сколько это будет стоить?");
console.log(service1Price);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let service2Price = +prompt("Сколько это будет стоить?");
console.log(service2Price);

let fullPrice = screenPrice + service1Price + service2Price;
console.log(fullPrice);
let servicePercentPrice = fullPrice - rollback;
console.log(servicePercentPrice);

if (fullPrice >= 30000) {
  console.log("Предоставляем скидку 10%");
} else if (fullPrice < 30000 && fullPrice > 15000) {
  console.log("Предоставляем скидку 5%");
} else if (fullPrice <= 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что-то пошло не так :(");
}
// вывод типов данных в консоль
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
// длина строки screens
console.log(screens.length);
console.log(
  "Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани"
);
console.log(
  "Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани"
);
screens = screens.toLowerCase();
screens = screens.split(",");
console.log(screens);
let percentageOfRollback = fullPrice * (rollback / 100);
console.log(percentageOfRollback);
