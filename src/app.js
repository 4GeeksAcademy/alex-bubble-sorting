import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let resultingArrayEl = document.querySelector('#resulting-array')

const btnDraw = document.querySelector('#btn-draw') 
const btnSort = document.querySelector('#btn-sort')

let nums = ['A', 'J', 'Q', 'K', 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suits = ['clubs', 'spades', 'hearts', 'diamonds']

let cardLog = []

let generateCard = function () {
  let num = nums[Math.floor(Math.random() * nums.length)]
  let suit = suits[Math.floor(Math.random() * suits.length)]

  const html =`<div class="card mt-1 d-flex flex-column justify-content-between">
      <div class="row ">
        <div class="col-12 suite-top d-flex justify-content-start"><img src="assets/img/${suit}.png" class="suite"
            alt="suite-top" id="suite-top"></div>
      </div>
      <div class="row">
        <div class=" col-12 numberSection d-flex justify-content-center" id="numberElement">${num}</div>
      </div>
      <div class="row">
        <div class="col-12 suite-bottom d-flex justify-content-start"><img src="assets/img/${suit}.png"
            class="suite" alt="suite-bottom" id="suite-bottom"></div>
      </div>
    </div>`

    let letterParsing = function (arr) {
      for (let item of arr) {
        if (item.number === 'A') return 1;
        if (item.number === 'J') return 11;
        if (item.number === 'Q') return 12;
        if (item.number === 'K') return 13;
      }
    }

    let cardObj =
    cardLog.push({
      number: `${num}`,
      suit: `${suit}`,
      rank: ''})

    resultingArrayEl.insertAdjacentHTML('beforeend', html)
}

btnDraw.addEventListener('click', function(e) {
  e.preventDefault()
  resultingArrayEl.innerHTML = ''
  cardLog= []
const userInput = Number(document.querySelector('#array-number').value)
for (let i=0 ; i < userInput ; i++) {
  generateCard()
}
console.log(cardLog)
})

btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  
  let wall = cardLog.length - 1;
  

  while (wall > 0) {
  letterParsing(cardLog)
    for (let i=0 ; i < cardLog.length ; i++) {
      if (cardLog[i].number > cardLog[i + 1].number) {
        let temp = cardLog[i];
        cardLog[i] = cardLog[i +1]
        cardLog[i+1] = temp;
      }
    }

    wall--
  }
  console.log('sorted cards: ' + cardLog)
})