`use stict`;

window.onload = function () {
  let rules = document.querySelector(`#gameRules`);
  let span = document.getElementsByClassName("close")[0];
  rules.style.display = "block";
  span.onclick = function () {
    rules.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == rules) {
      rules.style.display = "none";
    }
  };
};
//Selecting elements
const btn = document.querySelector(`#btn`);
const form = document.querySelector(`#form`);
const output = document.querySelector(`#output`);
const userScore = document.querySelector(`#userScore`);
const reset = document.querySelector(`#reset`);

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
const score = new Set([]);

function add(accumulator, a) {
  return accumulator + a;
}

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
  } else {
    let correctInput = formatter(array);
    basket.push(correctInput);
  }

  return basket;
};

btn.onclick = function fruitPusher() {
  let userInput = form.elements[`fruitName`].value;

  const correctBasket = inputChecker(userInput);

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

  for (const [key, value] of Object.entries(gameFruits)) {
    if (correctBasket.includes(key)) {
      score.add(value);
    } else score.add(0);
  }
  console.log(score);
  let sum = 0;
  for (const val of score) {
    sum = sum + val;
  }
  userScore.innerHTML = `<small> Your Score:</small> ${sum}`;
};

reset.onclick = function () {
  location.reload();
};
