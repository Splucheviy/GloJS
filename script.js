// Элементы страницы
// Кнопка
const btn = document.getElementById("btn");
// Контроллеры
// range + span-range
const range = document.getElementById("range");
const spanRange = document.getElementById("range-span");
// text + text-span
const text = document.getElementById("text");
const textRange = document.getElementById("text-span");
//Ссылка (id-шника нет)
const link = document.querySelector("a");
// Квадрат
const square = document.getElementById("square");
// Круг
const circle = document.getElementById("circle");
// Кнопка круга
const e_btn = document.getElementById("e_btn");

// функция изменения цвета
const changeColor = () => {
  const choiceColor = text.value.trim().toLowerCase();
  square.style.backgroundColor = choiceColor;
  text.value = "";
};
const testColor = () => {};

// Размер кружочка (сложна)
const resizeCircle = (event) => {
  const persent = event.target.value + "%";
  circle.style.width = persent;
  circle.style.height = persent;
  spanRange.textContent = persent;
};

// События
// 1. Смена цвета по нажатию на кнопку
btn.addEventListener("click", changeColor);

// 2. В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "
// Шутка Джокера - "Оп, и она испарилась"
e_btn.style.display = "none";

// 3.Повесить на input[type=range] обработчик события input и реализовать такой функционал: при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!)
range.value = Math.round((circle.offsetWidth * 100) / square.offsetWidth);
spanRange.textContent = range.value + "%";

range.addEventListener("input", resizeCircle);
