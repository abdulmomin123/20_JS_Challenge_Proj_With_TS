"use strict";
const elements = {
    cardsContainer: document.getElementById('cards-container'),
    prevBtn: document.getElementById('prev'),
    nextBtn: document.getElementById('next'),
    currentEl: document.getElementById('current'),
    showBtn: document.getElementById('show'),
    hideBtn: document.getElementById('hide'),
    questionEl: document.getElementById('question'),
    answerEl: document.getElementById('answer'),
    addCardBtn: document.getElementById('add-card'),
    clearBtn: document.getElementById('clear'),
    addContainer: document.getElementById('add-container'),
};
let currentActiveCard = 0;
const cardsEl = [];
const toggleCardMaker = () => {
    elements.addContainer.classList.toggle('show');
};
const addCard = () => {
};
const clearCards = () => {
};
const goThroughCards = () => {
};
elements.showBtn.addEventListener('click', toggleCardMaker);
elements.hideBtn.addEventListener('click', toggleCardMaker);
