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
let activeCard = 0;
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
const clearCardMaker = () => {
    elements.questionEl.value = '';
    elements.answerEl.value = '';
};
const addCard = () => {
    const question = elements.questionEl.value.trim();
    const answer = elements.answerEl.value.trim();
    if (question.length === 0 || answer.length === 0)
        return;
    cards.push(new Card(question, answer));
    clearCardMaker();
    toggleCardMaker();
};
const goThroughCards = () => {
};
const saveCards = () => {
};
const clearCards = () => {
    cards.splice(0, cards.length);
    saveCards();
    console.log(cards);
};
const renderCard = () => {
};
renderCard();
elements.showBtn.addEventListener('click', toggleCardMaker);
elements.hideBtn.addEventListener('click', toggleCardMaker);
elements.addCardBtn.addEventListener('click', addCard);
elements.clearBtn.addEventListener('click', clearCards);
