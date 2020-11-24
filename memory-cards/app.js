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
let cards = [];
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
    insertCard(cards[cards.length - 1]);
    displayCard();
    clearCardMaker();
    toggleCardMaker();
    saveCards();
};
const insertCard = (card) => {
    const markup = `
  <div class="card">
    <div class="inner-card">
      <div class="inner-card-front">
        <p>
          ${card.question}
        </p>
      </div>
      <div class="inner-card-back">
        <p>
        ${card.answer}
        </p>
      </div>
    </div>
  </div>
`;
    elements.cardsContainer.insertAdjacentHTML('beforeend', markup);
};
const saveCards = () => {
    localStorage.setItem('memoryCards', JSON.stringify(cards));
};
const clearCards = () => {
    cards.splice(0, cards.length);
    saveCards();
};
const displayCard = () => {
    const allCards = elements.cardsContainer.querySelectorAll('.card');
    allCards.forEach(card => card.classList.remove('active'));
    allCards[activeCard].classList.add('active');
};
const displaySavedCards = () => {
    if (localStorage.getItem('memoryCards'))
        cards = JSON.parse(localStorage.getItem('memoryCards'));
    else
        cards = [];
    if (cards.length === 0)
        return;
    cards.forEach((card) => insertCard(card));
    displayCard();
};
const goThroughCards = (e) => {
    const btn = e.target.closest('.nav-button');
    if ((btn === null || btn === void 0 ? void 0 : btn.id) === 'prev' && activeCard !== 0)
        activeCard--;
    if ((btn === null || btn === void 0 ? void 0 : btn.id) === 'next' &&
        activeCard !== cards.length - 1 &&
        cards.length !== 0)
        activeCard++;
    displayCard();
};
const flipCard = (e) => {
    const target = e.target;
    if (!target.classList.contains('card'))
        return;
    console.log(target);
};
displaySavedCards();
elements.showBtn.addEventListener('click', toggleCardMaker);
elements.hideBtn.addEventListener('click', toggleCardMaker);
elements.addCardBtn.addEventListener('click', addCard);
elements.clearBtn.addEventListener('click', clearCards);
elements.prevBtn.addEventListener('click', goThroughCards);
elements.nextBtn.addEventListener('click', goThroughCards);
elements.cardsContainer.addEventListener('click', flipCard);
