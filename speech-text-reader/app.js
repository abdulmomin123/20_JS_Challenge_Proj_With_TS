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
elements.closeBtn.addEventListener('click', closeModal);
elements.voicesSelect.addEventListener('change', openModal);
elements.readBtn.addEventListener('click', () => {
    const text = elements.textarea.value;
    speak(text);
});
elements.main.addEventListener('click', e => {
    var _a;
    const target = e.target.closest('.box');
    if (!(target === null || target === void 0 ? void 0 : target.classList.contains('box')))
        return;
    target.classList.add('active');
    setTimeout(() => target.classList.remove('active'), 1000);
    const info = `${(_a = target.querySelector('.info')) === null || _a === void 0 ? void 0 : _a.textContent}`;
    speak(info);
});
