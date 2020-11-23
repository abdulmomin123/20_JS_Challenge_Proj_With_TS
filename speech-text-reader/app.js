"use strict";
const elements = {
    main: document.querySelector('main'),
    voicesSelect: document.getElementById('voices'),
    textarea: document.getElementById('text'),
    readBtn: document.getElementById('read'),
    toggleBtn: document.getElementById('toggle'),
    closeBtn: document.getElementById('close'),
    textBox: document.querySelector('.text-box'),
};
const speak = (phrase) => {
    const utterance = new SpeechSynthesisUtterance(phrase);
    speechSynthesis.speak(utterance);
};
const openModal = () => {
    elements.textBox.classList.add('show');
    console.log('h');
};
const closeModal = () => {
    elements.textBox.classList.remove('show');
};
const configureSpeech = () => {
};
configureSpeech();
elements.toggleBtn.addEventListener('click', openModal);
elements.main.addEventListener('click', openModal);
elements.voicesSelect.addEventListener('change', openModal);
elements.readBtn.addEventListener('click', () => {
    const text = elements.textarea.value;
    speak(text);
});
elements.closeBtn.addEventListener('click', closeModal);
