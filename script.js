function getMessage() {
  console.log("Hello world");
}

getMessage();

// function clearHadsOperation() {
//   function dirtyHands() {
//     console.log("Испачкать руки");
//   }
//   function goToBathroom() {
//     console.log("Пойти в ванную");
//   }
//   function washHands() {
//     console.log("Помыть руки");
//   }
//   dirtyHands();
//   goToBathroom();
//   washHands();
// }
//functionDeclaration - можно вызвать как до так и после
function clearHadsOperation() {
  function step(index, str) {
    console.log(index + ". " + str);
  }
  step(1, "Испачкать руки");
  step(2, "Пойти в ванную комнату");
  step(3, "Помыть руки");
}
clearHadsOperation();

//functionExpression
const clearHadsOperation2 = function () {
  const step = function () {
    console.log(index + ". " + str);
  };
  step(1, "Испачкать руки");
  step(2, "Пойти в ванную комнату");
  step(3, "Помыть руки");
};
// нельзя вызвать до инициализации

const countSum = (a, b) => {
  return a + b;
};

console.log(countSum(3, 5));
// все переданные значения можно получить по псевдомассиву arguments[]
// чистая функция (без переменных из вне) называется детерминированной (+ не несёт в себе вызовы в консоль, alert и т.д.)

// callback - анонимные функции
const secondFunc = (num) => {
  return num + 2;
};
// нифига не понял, но допустим
const money = 5000;
const expenses1 = 300;
const expenses2 = 200;

const sumExpences = (exp1, exp2) => {
  return exp1 + exp2;
};

const countTotal = (money, sumExpences) => {
  return count - call(expenses1, expenses2);
};

console.log(countTotal(money, sumExpences));
