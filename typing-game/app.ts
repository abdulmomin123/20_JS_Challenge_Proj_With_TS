// dom elements
const elements = {
  word: document.getElementById('word') as HTMLHeadingElement,
  text: document.getElementById('text') as HTMLInputElement,
  scoreEl: document.getElementById('score') as HTMLParagraphElement,
  timeEl: document.getElementById('time') as HTMLParagraphElement,
  endgameEl: document.getElementById('end-game-container') as HTMLDivElement,
  settingsBtn: document.getElementById('settings-btn') as HTMLButtonElement,
  settings: document.getElementById('settings') as HTMLDivElement,
  settingsForm: document.getElementById('settings-form') as HTMLFormElement,
  difficultySelect: document.getElementById('difficulty') as HTMLSelectElement,
  reloadBtn: document.querySelector('.reload') as HTMLButtonElement,
};

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving',
];

// Init word
let randomWord: string;

// Init score
let score = 0;

// Init time
let time = 10;

// timer
let timer: number;

// Set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// functions
const startGame = () => {
  elements.endgameEl.classList.remove('display');
  elements.timeEl.textContent = `10s`;

  // assign a random word
  randomWord = words[Math.floor(Math.random() * words.length)];

  // reset all scores
  score = 0;
  time = 10;

  elements.text.focus();

  // start the timer
  timer = setInterval(() => {
    if (time <= 0) return lostGame();

    time--;
    elements.timeEl.textContent = `${time}s`;
  }, 1000);
};

const checkWord = () => {
  //
};

const increaseScore = () => {
  //
};

const lostGame = () => {
  clearInterval(timer);

  elements.endgameEl.classList.add('display');
};

startGame();

// event listeners
elements.text.addEventListener('input', startGame);

// restart game
elements.reloadBtn.addEventListener('click', startGame);
