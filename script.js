const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const gameBot = () => {
  let riddleNumber = getRandomInt(1, 100);
  console.log("Загаданное число = ", riddleNumber);

  function goRiddle(message) {
    let answer = prompt(message);

    if (answer === null) {
      alert("Игра окончена");
    } else if (+answer < 1 || +answer > 100) {
      goRiddle("Введите целое число от 1 до 100");
    } else if (+answer === riddleNumber) {
      alert("Поздравляю, Вы угадали !!!");
    } else if (+answer > riddleNumber) {
      goRiddle(
        `Загаданное число меньше ${answer.trim()}\nВведите новый вариант`
      );
    } else if (+answer < riddleNumber) {
      goRiddle(
        `Загаданное число больше ${answer.trim()}\nВведите новый вариант`
      );
    }
  }
  goRiddle("Угадай число от 1 до 100");
};

gameBot();
