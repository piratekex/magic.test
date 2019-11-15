const suit = ['hearts', 'diamonds', 'clubs', 'spades']; //all of the suit names
const cardsWrapper = document.querySelector('.cards-wrapper');


function createCards() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card
for (let x = 0; x < suit.length; x++){
  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: suit[x]
    };
  cards.push(cardObject);
  }
}

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 30; // shifted by 30 to make sure all of the values are visible
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

//shuffle function, I used the create card function to render the cards, and make my life easyer. 

 function shu() {
  const cards = [];
for (let x = 0; x < suit.length; x++){
  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit: suit[x]
    };
  cards.push(cardObject);
  }
}

//the shuffle loop itself

  for (let i=0; i < 1000; i++){
    let location1 = Math.floor(Math.random() * cards.length);
    let location2 = Math.floor(Math.random() * cards.length);
    let tmp = cards[location1];
    cards[location1] = cards[location2];
    cards[location2] = tmp;
  }

  cards.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
} 


// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
  document.getElementById('start-game').style.display = 'none';  //hide the start button

  //create the buttons and add ids and event listeners to them

  const s = document.createElement('button');
  s.setAttribute('id', 'sh');
  s.setAttribute('class', 'btn btn-secondary btn-lg mt-3 ml-5'); //add bootstrap classes to style the buttons a bit
  s.innerHTML = 'Shuffle';
  document.body.appendChild(s);
  document.getElementById('sh').addEventListener('click', shu);

  const showHide = document.createElement('button');
  showHide.setAttribute('id', 'hide');
  showHide.setAttribute('class', 'btn btn-secondary btn-lg mt-3 ml-2');
  showHide.innerHTML = 'Show \/ Hide';
  document.body.appendChild(showHide);
  document.getElementById('hide').addEventListener('click', hide);

  const magic = document.createElement('button');
  magic.setAttribute('id', 'magic');
  magic.setAttribute('class', 'btn btn-secondary btn-lg mt-3 ml-2');
  magic.innerHTML = 'Magic';
  document.body.appendChild(magic);
  document.getElementById('magic').addEventListener('click', createCards);

}

//show and hide the cards with a simple class toggle
function hide(){
  cardsWrapper.classList.toggle('hidden');
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}
 /*
  I commented out the start game button eventlister, because If I understand the bonus point the game should start automatically, 
  so I add a new event listener. If you comment out the new one, and activate the button again, you could test the original
  game. 

  I hope this was the solution for the bonus, I also made the cards value visible for another bonus point, and made same style
  on the buttons with bootsrtap. 
 */

document.addEventListener('DOMContentLoaded', startGame);  




//document.getElementById('start-game').addEventListener('click', startGame);