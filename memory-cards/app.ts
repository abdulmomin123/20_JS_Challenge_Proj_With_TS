// dom elements
const elements = {
  cardsContainer: document.getElementById('cards-container') as HTMLDivElement,
  prevBtn: document.getElementById('prev') as HTMLButtonElement,
  nextBtn: document.getElementById('next') as HTMLButtonElement,
  currentEl: document.getElementById('current') as HTMLParagraphElement,
  showBtn: document.getElementById('show') as HTMLButtonElement,
  hideBtn: document.getElementById('hide') as HTMLButtonElement,
  questionEl: document.getElementById('question') as HTMLTextAreaElement,
  answerEl: document.getElementById('answer') as HTMLTextAreaElement,
  addCardBtn: document.getElementById('add-card') as HTMLButtonElement,
  clearBtn: document.getElementById('clear') as HTMLButtonElement,
  addContainer: document.getElementById('add-container') as HTMLDivElement,
};

// global variables
let currentActiveCard = 0;
const cards = [];

// card class
interface card {
  question: string;
  answer: string;
}

class Card implements card {
  constructor(public question: string, public answer: string) {
    //
  }
}

// functions
const toggleCardMaker = () => {
  elements.addContainer.classList.toggle('show');
};
const addCard = () => {
  //
};

const clearCards = () => {
  //
};

const goThroughCards = () => {
  //
};

// event listeners
elements.showBtn.addEventListener('click', toggleCardMaker);
elements.hideBtn.addEventListener('click', toggleCardMaker);
