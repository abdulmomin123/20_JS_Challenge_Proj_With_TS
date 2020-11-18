"use strict";
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
let randomWord;
let pressedKeys = [];
let livesLeft = 6;
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
const correctWord = (word) => {
    [...randomWord].forEach((randWord, i) => randWord === word ? (elements.wordEl.children[i].textContent = word) : null);
    console.log('correct');
};
const wrongWord = (word) => {
    const el = document.createElement('span');
    el.textContent = `${word.toUpperCase()} `;
    elements.wrongLettersEl.append(el);
    elements.figureParts[elements.figureParts.length - livesLeft].classList.add('hang');
    livesLeft--;
    hasLost();
    console.log(`${livesLeft} lives left`);
};
const hasWin = () => {
    elements.finalMessage.textContent = 'Congratulations! You won! 😃';
    document.removeEventListener('keypress', startGame);
};
const hasLost = () => {
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
    [...randomWord].forEach(_word => elements.wordEl.insertAdjacentHTML('beforeend', markup));
};
const startGame = (e) => {
    const pressedKey = e.key;
    if (pressedKeys.indexOf(pressedKey) !== -1)
        return alreadyPressed();
    pressedKeys.push(e.key.toLowerCase());
    if (randomWord.includes(pressedKey))
        correctWord(pressedKey);
    else
        wrongWord(pressedKey);
};
selectRandomWord();
createPlaceholder();
document.addEventListener('keypress', startGame);
elements.playAgainBtn.addEventListener('click', resetGame);
