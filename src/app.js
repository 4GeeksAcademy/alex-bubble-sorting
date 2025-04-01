import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let resultingArrayEl = document.querySelector('#resulting-array');
let iterationsSection = document.querySelector('#iterations-section');

const btnDraw = document.querySelector('#btn-draw');
const btnSort = document.querySelector('#btn-sort');

let nums = ['A', 'J', 'Q', 'K', 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suits = ['clubs', 'spades', 'hearts', 'diamonds'];

let cardLog = [];

let generateCard = function () {
    let num = nums[Math.floor(Math.random() * nums.length)];
    let suit = suits[Math.floor(Math.random() * suits.length)];

    const html = `<div class="card mt-1 d-flex flex-column justify-content-between">
        <div class="row ">
            <div class="col-12 suite-top d-flex justify-content-start"><img src="assets/img/${suit}.png" class="suite" alt="suite-top" id="suite-top"></div>
        </div>
        <div class="row">
            <div class=" col-12 numberSection d-flex justify-content-center" id="numberElement">${num}</div>
        </div>
        <div class="row">
            <div class="col-12 suite-bottom d-flex justify-content-start"><img src="assets/img/${suit}.png" class="suite" alt="suite-bottom" id="suite-bottom"></div>
        </div>
    </div>`;

    let letterParsing = function (arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let item of arr) {
                if (typeof Number(item.number) === 'number') item.rank = Number(item.number);
                if (item.number === 'A') item.rank = 1;
                if (item.number === 'J') item.rank = 11;
                if (item.number === 'Q') item.rank = 12;
                if (item.number === 'K') item.rank = 13;
            }
        }
    };

    let cardObj = {
        number: `${num}`,
        suit: `${suit}`,
        rank: '',
    };

    const cardExists = cardLog.some(
        (card) => card.number === cardObj.number && card.suit === cardObj.suit
    );

    if (!cardExists) {
        cardLog.push(cardObj);
        letterParsing(cardLog);
        resultingArrayEl.insertAdjacentHTML('beforeend', html);
    }
};

btnDraw.addEventListener('click', function (e) {
    e.preventDefault();
    iterationsSection.innerHTML=''
    resultingArrayEl.innerHTML = '';
    cardLog = [];
    const userInput = Number(document.querySelector('#array-number').value);
    for (let i = 0; i < userInput; i++) {
        generateCard();
    }
});

btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    iterationsSection.innerHTML = '';

    let wall = cardLog.length - 1;
    let iterationCount = 0;

    while (wall > 0) {
        let swapped = false;

        for (let i = 0; i < cardLog.length - 1; i++) {
            if (cardLog[i].rank > cardLog[i + 1].rank) {
                let temp = cardLog[i];
                cardLog[i] = cardLog[i + 1];
                cardLog[i + 1] = temp;
                swapped = true;
            }
        }

        if (swapped) {
            let iterationRow = document.createElement('div');
            iterationRow.classList.add('iteration-row');

            cardLog.forEach((card) => {
                let cardDiv = document.createElement('div');
                cardDiv.classList.add('card', 'mt-1', 'd-flex', 'flex-column', 'justify-content-between');
                cardDiv.innerHTML = `
                    <div class="row ">
                        <div class="col-12 suite-top d-flex justify-content-start"><img src="assets/img/${card.suit}.png" class="suite" alt="suite-top" id="suite-top"></div>
                    </div>
                    <div class="row">
                        <div class=" col-12 numberSection d-flex justify-content-center" id="numberElement">${card.number}</div>
                    </div>
                    <div class="row">
                        <div class="col-12 suite-bottom d-flex justify-content-start"><img src="assets/img/${card.suit}.png" class="suite" alt="suite-bottom" id="suite-bottom"></div>
                    </div>
                `;
                iterationRow.appendChild(cardDiv);
            });

            iterationsSection.appendChild(iterationRow);
            iterationCount++;
        }

        wall--;
    }

});