`use stict`;
//Selecting elements
const btn = document.querySelector(`#btn`);
const form = document.querySelector(`#form`);
const output = document.querySelector(`#output`);
const calcScore = document.querySelector(`#score`);

const basket = [];
const gameFruits = {
  banana: 5,
  lime: 7,
  pineapple: 2,
  strawberry: 4,
  lemon: 12,
  orange: 9,
  apple: 3,
};

//Formatē ievaīto tekstu..
const formatter = function (arg) {
  let formatted = arg.toLowerCase().trim();
  return formatted;
};

const inputChecker = function (array) {
  for (let i = 0; i < 10; i++) {
    if (array.includes(i) || array === " ") {
      return alert(`Incorrect Input no empty values or numbers 🚩`);
    }
  }
  if (basket.length === 5) {
    alert(`Ok, thats Enough! 😅`);
    calcScore.style.display = `block`;
  } else {
    let correctInput = formatter(array);
    basket.push(correctInput);
    console.log(basket);
  }

  return basket;
};

btn.onclick = function fruitPusher() {
  let userInput = form.elements[`fruitName`].value;

  const correctBasket = inputChecker(userInput);
  console.log(correctBasket);
  if (correctBasket === undefined) {
    alert(`Please add fruit names!`);
  } else {
    let text = `<ul>`;
    for (let i = 0; i < correctBasket.length; i++) {
      text += `<li> ${correctBasket[i]} </li>`;
    }
    text += `</ul>`;
    output.innerHTML = text;
  }

  form.elements[`fruitName`].value = " ";
};

calcScore.onclick = function showScore() {};
