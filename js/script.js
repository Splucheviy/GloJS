// Урок 10 Работа с DOM

// перечень книг
const listBooks = document.querySelectorAll(".book");
// body
const elBody = document.querySelector("body");
// реклама
const advertising = document.querySelector(".adv");
let newLi;

console.log(listBooks);
console.log(elBody);
console.log(advertising);

//1. Порядок книг
listBooks[1].after(listBooks[0]);
listBooks[5].after(listBooks[2]);
listBooks[4].after(listBooks[3]);
// Идея сортировки, потом доделать!! В названии всего одна цифра. Получить содержимое тега <h> через innerHTML. Пробить через parseInt, получить одну цифирку. Далее по цифиркам сравнение перестановка, больше меньше

//Задний фон
elBody.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

//Исправдение заголовка
listBooks[4].querySelector("a").innerText =
  "Книга 3. this и Прототипы Объектов";

// Столкнулся с тем, что книга 4 по списку является книгой 3! Отсортировать порядок. Обратить внимание на compare и sort

// 4. Реклама
advertising.remove();

// // 5. восстановить порядок глав во второй и пятой книге
// Вторая книга
const secondBookLi = listBooks[0].querySelectorAll("li"); // ужасный костыль, глазавырывайка
secondBookLi[9].after(secondBookLi[2]);
secondBookLi[8].after(secondBookLi[4]);
secondBookLi[4].after(secondBookLi[5]);
secondBookLi[5].after(secondBookLi[7]);
// Пятая книга (это ужасно, хочется рыдать)
const theFifthBookLi = listBooks[5].querySelectorAll("li"); // ужасный костыль, глазавырывайка
theFifthBookLi[4].after(theFifthBookLi[2]);
theFifthBookLi[1].after(theFifthBookLi[9]);
theFifthBookLi[7].after(theFifthBookLi[5]);

// Добавление главы в 6 книгу
newLi = document.createElement("li");
newLi.innerText = "Глава 8: За пределами ES6";
listBooks[2].append(newLi);
const theSixthBookLi = listBooks[2].querySelectorAll("li");
theSixthBookLi[8].after(theSixthBookLi[10]);
console.log(theSixthBookLi);
// мне очень за это стыдно((()))
