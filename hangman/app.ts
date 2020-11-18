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
let pressedKeys: string[] = [];
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

const correctWord = (word: string) => {
  // display the word(s) in the correct place
  [...randomWord].forEach((randWord, i) =>
    randWord === word ? (elements.wordEl.children[i].textContent = word) : null
  );

  // check if the user has won
  // hasWin();

  console.log('correct');
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

  // check if the user has lost
  hasLost();

  console.log(`${livesLeft} lives left`);
};

const hasWin = () => {
  // display win msg
  elements.finalMessage.textContent = 'Congratulations! You won! 😃';

  document.removeEventListener('keypress', startGame);
};

const hasLost = () => {
  // display lose msg
  if (!livesLeft) {
    elements.popup.classList.add('popup-active');

    elements.finalMessage.textContent = 'Unfortunately you lost! 😕';

    document.removeEventListener('keypress', startGame);
  }
};

const resetGame = () => {
  pressedKeys = [];
  livesLeft = 6;

  selectRandomWord();

  elements.popup.classList.remove('popup-active');

  elements.wrongLettersEl.innerHTML = '<p>Wrong Letters</p>';

  elements.figureParts.forEach(part => part.classList.remove('hang'));

  document.addEventListener('keypress', startGame);
};

const createPlaceholder = () => {
  const markup = '<span class="letter"></span>';

  [...randomWord].forEach(_word =>
    elements.wordEl.insertAdjacentHTML('beforeend', markup)
  );
};

const startGame = (e: KeyboardEvent) => {
  // check if the user has already pressed the key
  const pressedKey = e.key;

  if (pressedKeys.indexOf(pressedKey) !== -1) return alreadyPressed();

  // if not then add the key to presskeys
  pressedKeys.push(e.key.toLowerCase());

  // check if the pressed key is in the word
  // if yes reveal the word in the dom
  if (randomWord.includes(pressedKey)) correctWord(pressedKey);
  // if no then start hanging the man
  else wrongWord(pressedKey);
};

selectRandomWord();
createPlaceholder();

// event listeners
document.addEventListener('keypress', startGame);
elements.playAgainBtn.addEventListener('click', resetGame);
