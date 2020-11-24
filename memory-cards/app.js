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
const cards = [];
class Card {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}
const toggleCardMaker = () => {
    elements.addContainer.classList.toggle('show');
};
const addCard = () => {
    const question = elements.questionEl.value.trim();
    const answer = elements.answerEl.value.trim();
    if (question.length === 0 || answer.length === 0)
        return;
    cards.push(new Card(question, answer));
};
const goThroughCards = () => {
};
const saveCards = () => {
};
const clearCards = () => {
};
const renderCard = () => {
};
elements.showBtn.addEventListener('click', toggleCardMaker);
elements.hideBtn.addEventListener('click', toggleCardMaker);
elements.addCardBtn.addEventListener('click', addCard);
