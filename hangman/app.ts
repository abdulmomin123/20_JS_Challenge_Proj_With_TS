// dom elements
const elements = {
  wordEl: document.getElementById('word')!,
  wrongLettersEl: document.getElementById('wrong-letters')!,
  playAgainBtn: document.getElementById('play-button')!,
  popup: document.getElementById('popup-container')!,
  notification: document.getElementById('notification-container')!,
  finalMessage: document.getElementById('final-message')!,
  finalMessageRevealWord: document.getElementById('final-message-reveal-word')!,

  figureParts: document.querySelectorAll('.figure-part')!,
};

const words = ['application', 'programming', 'interface', 'wizard'];
let randomWord: string;
const pressedKeys: string[] = [];
let livesLeft: number = 6;

// functions
const selectRandomWord = () => {
  randomWord = words[Math.floor(Math.random() * words.length)];

  console.log(randomWord);
};

const alreadyPressed = () => {
  elements.notification.classList.add('show');

  setTimeout(() => {
    elements.notification.classList.remove('show');
  }, 1500);
};

const correctWord = () => {
  console.log('the word is ...');

  hasWin();
};

const wrongWord = (word: string) => {
  // display the wrong word
  const el = document.createElement('span');
  el.textContent = `${word.toUpperCase()} `;
  elements.wrongLettersEl.append(el);

  // hang the man
  elements.figureParts[elements.figureParts.length - livesLeft].classList.add(
    'hang'
  );

  // decrease one life
  livesLeft--;

  hasLost();
  console.log(`${livesLeft} lives left`);
};

const hasWin = () => {
  //
};

const hasLost = () => {
  //
};

selectRandomWord();

// event listeners
document.addEventListener('keypress', e => {
  // check if the user has already pressed the key
  const pressedKey = e.key;

  if (pressedKeys.indexOf(pressedKey) !== -1) return alreadyPressed();

  // if not then add the key to presskeys
  pressedKeys.push(e.key.toLowerCase());

  // check if the pressed key is in the word
  // if yes reveal the word in the dom
  if (randomWord.includes(pressedKey)) correctWord();
  // if no then start hanging the man
  else wrongWord(pressedKey);
});
