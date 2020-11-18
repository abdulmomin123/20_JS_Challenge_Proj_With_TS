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
const pressedKeys = [];
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
const correctWord = () => {
    console.log('the word is ...');
};
const wrongWord = (word) => {
    const el = document.createElement('span');
    el.textContent = `${word.toUpperCase()} `;
    elements.wrongLettersEl.append(el);
    elements.figureParts[elements.figureParts.length - livesLeft].classList.add('hang');
    livesLeft--;
    console.log(`${livesLeft} lives left`);
};
selectRandomWord();
document.addEventListener('keypress', e => {
    const pressedKey = e.key;
    if (pressedKeys.indexOf(pressedKey) !== -1)
        return alreadyPressed();
    pressedKeys.push(e.key.toLowerCase());
    if (randomWord.includes(pressedKey))
        correctWord();
    else
        wrongWord(pressedKey);
});
