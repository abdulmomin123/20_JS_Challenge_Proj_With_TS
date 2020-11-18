// dom elements
const elements = {
  wordEl: document.getElementById('word'),
  wrongLettersEl: document.getElementById('wrong-letters'),
  playAgainBtn: document.getElementById('play-button'),
  popup: document.getElementById('popup-container'),
  notification: document.getElementById('notification-container'),
  finalMessage: document.getElementById('final-message'),
  finalMessageRevealWord: document.getElementById('final-message-reveal-word'),

  figureParts: document.querySelectorAll('.figure-part'),
};

const words = ['application', 'programming', 'interface', 'wizard'];
const pressedKeys: string[] = [];

// functions

// event listeners
document.addEventListener('keypress', e => {
  pressedKeys.push(e.key.toLowerCase());

  console.log(pressedKeys);
});
