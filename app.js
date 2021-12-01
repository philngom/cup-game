// import functions and grab DOM elements

// let state

// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state


  //get DOM elements
const cups = document.querySelectorAll('.cup');
const buttons = document.querySelectorAll('button');
const correct = document.querySelector('#correct');
const incorrect = document.querySelector('#incorrect');
const total = document.querySelector('#total');
const ball = document.querySelectorAll('img');

  //declare state variable counters
const hidingPlaces = [
    'left',
    'middle',
    'right'
];

let correctCount = 0;
let totalCount = 0;

  //click events
for (const button of buttons) {
    button.addEventListener('click', () => {
        let correctSpot = randomCup(hidingPlaces);
        handleGuess(button.textContent, correctSpot);
    });
}

  //functions
function randomCup(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function handleGuess(guess, correctSpot) {
    resetCups();
    totalCount++;
    const correctCup = document.querySelector('.' + correctSpot);

    correctCup.classList.add('show');
    if (guess === correctSpot) {
        correctCount++;
    }
    correct.textContent = correctCount;
    incorrect.textContent = totalCount - correctCount;
    total.textContent = totalCount;
}

function resetCups() {
    for (const cup of cups) {
        cup.classList.remove('show');
    }
}




