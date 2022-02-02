// рекурсия и циклические операторы

// рекурсия (используется редко)
let potato = 10;

const peelPotato = (potatoIndex) => {
  if (potatoIndex > 0) {
    console.log("Картошка № " + potatoIndex + " почищена");
    potatoIndex--;
    peelPotato(potatoIndex);
  }
};

peelPotato(potato);

// циклические операторы
// Цикл for
for (let i = 1; i <= 10; i++) {
  console.log("Картошка № " + i + " почищена");
}

// цикл while
let potato = 10;
while (potato > 0) {
  console.log("Картошка № " + potato + " почищена");
  potato--;
}

// цикл do while (хотя бы раз сработает)
let potato = 10;
do {
  console.log("Картошка № " + potato + " почищена");
  potato--;
} while (false); // while(potato > 0)
