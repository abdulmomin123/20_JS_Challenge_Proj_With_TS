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
let randomWord = words[Math.floor(Math.random() * words.length)];

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// functions
const startGame = () => {
  //
};

const checkWord = () => {
  //
};

const increaseScore = () => {
  //
};

const lostGame = () => {
  //
};
// event listeners
elements.text.addEventListener('input', startGame);
