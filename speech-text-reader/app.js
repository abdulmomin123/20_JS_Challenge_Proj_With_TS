"use strict";
const elements = {
    main: document.querySelector('main'),
    voicesSelect: document.getElementById('voices'),
    textarea: document.getElementById('text'),
    readBtn: document.getElementById('read'),
    toggleBtn: document.getElementById('toggle'),
    closeBtn: document.getElementById('close'),
};
const speak = (phrase) => {
    console.log(phrase);
};
const openModal = () => {
};
const closeModal = () => {
};
elements.toggleBtn.addEventListener('click', openModal);
elements.main.addEventListener('click', openModal);
elements.voicesSelect.addEventListener('change', openModal);
elements.readBtn.addEventListener('click', openModal);
elements.closeBtn.addEventListener('click', closeModal);
