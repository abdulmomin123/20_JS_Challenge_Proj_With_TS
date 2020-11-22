// dom elements
const elements = {
  word: document.getElementById('word'),
  text: document.getElementById('text'),
  scoreEl: document.getElementById('score'),
  timeEl: document.getElementById('time'),
  endgameEl: document.getElementById('end-game-container'),
  settingsBtn: document.getElementById('settings-btn'),
  settings: document.getElementById('settings'),
  settingsForm: document.getElementById('settings-form'),
  difficultySelect: document.getElementById('difficulty'),
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
let randomWord;

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

// event listeners
