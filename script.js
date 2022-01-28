let title = "Урок 2";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 15000;
console.log(typeof screenPrice);
let rollback = 59;
let fullPrice = 70000;
let adaptive = true;

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
