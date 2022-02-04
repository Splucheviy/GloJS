// объявление переменных
let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

// проверка валидности строки текста
const isValidText = (str) => {
  const regexp = /^[А-Яа-яA-Za-z0-9]+$/;
  return regexp.test(str.replace(/\s+/g, ''));
};
// перевод строки текста в валидный
const toValidText = (str) => {
  // убираем начальные и конечные пробелы и конвертируем 2 и более пробелов в 1
  return str.trim().replace(/\s{2,}/g, " ");
};

// перевод title в валидный вид, где первый символ с большой буквы, остальные с маленькой
const getTitle = (title = '') => {
  title = toValidText(title);
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
};

// перевод screens в валидный вид ( дополнительно убираем пустые значения, "форматируем" оставшиеся)
const getScreens = (input, separator = ',') => (
  input.split(separator).map(el => toValidText(el)).filter((el) => el.length).join(separator + ' ')
);

// проверяет на запись числа в строке:
// целая часть - не более int-разрядов (по умолчанию 9), 
// дробная - 1 или 2 разряда, разделитель: . или запятая
const isNumber = (input, int = 9) => {
  const regexp = new RegExp(`(^0$)|(^0(\\.|,)\\d?\\d$)|` +
    `(^[1-9]\\d{0,${int - 1}}$)|(^[1-9]\\d{0,${int - 1}}(\\.|,)\\d?\\d$)`);
  return regexp.test((input + '').trim());
};
// перевод числа из строки ввода в число
const toNumber = (strInput) => +(strInput.replace(/[,]/g, '.').trim());

// вопросы заказчику
const asking = function () {

  title = 'Калькулятор верстки';
  do {
    title = prompt('Как называется Ваш проект ?', title) || '';
  } while (!isValidText(title));
  title = getTitle(title);

  screens = 'Простые, Сложные, Интерактивные';
  do {
    screens = prompt('Какие типы экранов нужно разработать? \n ( перечислите через запятую )',
      screens) || '';
  } while (!isValidText(screens.replace(/[,]/g, '')));
  screens = getScreens(screens);

  do {
    screenPrice = prompt('Сколько будет стоить данная работа? \n(в рублях)',
      screenPrice || '');
    // валидирование данных screenPrice, полученных из  promtp
  } while (!isNumber(screenPrice));
  screenPrice = toNumber(screenPrice);

  adaptive = confirm('Нужен ли адаптив на сайте?');
};

// запрос типов и цен на дополнительные услуги, возвращает их сумму 
const getAllServicePrices = function () {
  let sum = 0;
  // дополнительные услуги и их стоимость
  for (let i = 0; i < 2; i++) {
    let service = 'услуга ' + (i + 1), servicePrice;

    do {
      service = prompt('Какой дополнительный тип услуги нужен?:', service) || '';
    } while (!isValidText(service));
    service = toValidText(service);

    if (i === 0) { service1 = service; }
    else if (i === 1) { service2 = service; }

    do {
      servicePrice = prompt(`Сколько будет стоить услуга: ${(i === 0) ? service1 : service2}?`,
        servicePrice || '');
      // валидирование данных servicePrice, полученных из  promtp
    } while (!isNumber(servicePrice));

    sum += toNumber(servicePrice);
  }
  return sum;
};

// вывод типов переменных
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

// определение суммы верстки 
function getFullPrice(screenPrice = 0, allServicePrices = 0) {
  return screenPrice + allServicePrices;
}

// расчет итоговой стоимости за вычетом отката
// (итоговая стоимость уменьшенная на сумму отката посреднику, 
// округленная в большую сторону)
const getServicePercentPrices = (fullPrice, rollback) => {
  return Math.ceil(fullPrice * (100 - rollback)) / 100;
};

// предоставление скидки
const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return 'Даем скидку в 10%';
  } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%';
  } else if (price > 0 && price < 15000) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что то пошло не так...';
  }
};


// вопросы заказчику
asking();
// стоимость дополнительных услуг
allServicePrices = getAllServicePrices();
// итоговая стоимость работы
fullPrice = getFullPrice(screenPrice, allServicePrices);
// доход разработчика
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);


// название проета
showTypeOf(title);
// заказчик предлогает за верстку экранов
showTypeOf(screenPrice);
// необходимост в адаптиве на сайте
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);
// предоставление скидки пользователю
console.log(getRollbackMessage(fullPrice));
// ??? в уроке почему-то: screens.length
console.log('Необходимо разработать типы экранов: [', screens, ']');
console.log(`ДОХОД разработчика - ${servicePercentPrice} рублей`);

console.log("Стоимость верстки экранов - " + screenPrice + " рублей",
  "Стоимость разработки сайта - " + fullPrice + " рублей");