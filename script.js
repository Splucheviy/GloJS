// объявление переменных
let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разрабатывать",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа", "15000");
let rollback = 59;
let adaptive = prompt("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let service1Price = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let service2Price = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + service1Price + service2Price;
let percentageOfRollback = fullPrice * (rollback / 100);

//Описание функций
const showTypeOf = (variable) => {
  console.log(variable, typeof variable);
};
// function expression
const getAllServicePrices = (service1Price, service2Price) => {
  return service1Price + service2Price;
};
// function declaration
function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}
const getTitle = (title) => {
  title = title.trim();
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

const getServicePercentPrices = () => {
  return fullPrice - rollback;
};

// Вызов функций
allServicePrices = getAllServicePrices(service1Price, service2Price);
fullPrice = getFullPrice(screenPrice, allServicePrices);

// условия и действия с переменными
if (adaptive == "Да" || "да") {
  adaptive = true;
} else {
  adaptive = false;
}

const getRollBackMessage = (price) => {
  if (price >= 30000) {
    return "Предоставляем скидку 10%";
  } else if (price < 30000 && price > 15000) {
    return "Предоставляем скидку 5%";
  } else if (price <= 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так :(";
  }
};

screens = screens.toLowerCase();
screens = screens.split(",");

//выводы в консоль
// вывод типов данных в консоль
showTypeOf(getTitle(title));
showTypeOf(fullPrice);
showTypeOf(adaptive);
// длина строки screens
console.log(screens);
console.log(getRollBackMessage(fullPrice));
console.log(getTitle(title));
console.log(getServicePercentPrices());
