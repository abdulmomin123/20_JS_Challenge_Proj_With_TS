"use strict";
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
    reloadBtn: document.querySelector('.reload'),
};
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
let randomWord;
let score = 0;
let time = 10;
let timer;
let difficulty = localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';
const startGame = () => {
    elements.endgameEl.classList.remove('display');
    elements.timeEl.textContent = `10s`;
    elements.scoreEl.textContent = '0';
    randomWord = words[Math.floor(Math.random() * words.length)];
    elements.word.textContent = randomWord;
    score = 0;
    time = 10;
    elements.text.focus();
    timer = setInterval(() => {
        if (time <= 0)
            return lostGame();
        time--;
        elements.timeEl.textContent = `${time}s`;
    }, 1000);
};
const checkWord = () => {
    if (elements.text.value === randomWord)
        increaseScore();
};
const increaseScore = () => {
    time += 5;
    score++;
    elements.text.value = '';
    randomWord = words[Math.floor(Math.random() * words.length)];
    elements.word.textContent = randomWord;
    console.log('hi');
};
const lostGame = () => {
    clearInterval(timer);
    elements.endgameEl.classList.add('display');
};
startGame();
elements.text.addEventListener('input', checkWord);
elements.reloadBtn.addEventListener('click', startGame);
