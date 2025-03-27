import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let numElement = document.querySelector('#numberElement')
  let suiteTop = document.querySelector('#suite-top')
  let suiteBottom = document.querySelector('#suite-bottom')

  let nums = ['A', 'J', 'Q', 'K', 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let suites = ['clubs', 'spades', 'heart', 'diamonds']

  let generateCard = function () {
    let num = nums[Math.floor(Math.random() * nums.length)]
    let suit = suites[Math.floor(Math.random() * suites.length)]

    numElement.textContent = num;
    suiteTop.src = `assets/img/${suit}.png`
    suiteBottom.src = `assets/img/${suit}.png`

  }

  generateCard()
};
