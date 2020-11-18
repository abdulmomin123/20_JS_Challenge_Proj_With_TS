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
const pressedKeys = [];
const alreadyPressed = () => {
    elements.notification.classList.add('show');
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 1500);
};
document.addEventListener('keypress', e => {
    const pressedKey = e.key;
    if (pressedKeys.indexOf(pressedKey) !== -1)
        return alreadyPressed();
    pressedKeys.push(e.key.toLowerCase());
    console.log(pressedKeys, pressedKey);
});
