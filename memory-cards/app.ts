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
let activeCard = 0;
let cards: Card[] = [];

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

const clearCardMaker = () => {
  elements.questionEl.value = '';
  elements.answerEl.value = '';
};

const addCard = () => {
  const question = elements.questionEl.value.trim();
  const answer = elements.answerEl.value.trim();

  // validation
  if (question.length === 0 || answer.length === 0) return;

  cards.push(new Card(question, answer));

  insertCard(cards[cards.length - 1]);
  saveCards();
  clearCardMaker();
  toggleCardMaker();
};

const insertCard = (card: card) => {
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

const goThroughCards = (e: Event) => {
  const btn = (e.target as HTMLElement).closest('.nav-button');

  if (btn?.id === 'prev' && activeCard !== 0) activeCard--;
  if (
    btn?.id === 'next' &&
    activeCard !== cards.length - 1 &&
    cards.length !== 0
  )
    activeCard++;
};

const saveCards = () => {
  localStorage.setItem('memoryCards', JSON.stringify(cards));
};

const clearCards = () => {
  cards.splice(0, cards.length);
  saveCards();
};

const renderSavedCards = () => {
  if (localStorage.getItem('memoryCards'))
    cards = JSON.parse(localStorage.getItem('memoryCards')!);
  else cards = [];

  // now render active card
  if (cards.length !== 0)
    cards.forEach((card: card) => {
      insertCard(card);
      elements.cardsContainer.firstElementChild!.classList.add('active');
    });
};

renderSavedCards();

// event listeners
elements.showBtn.addEventListener('click', toggleCardMaker);
elements.hideBtn.addEventListener('click', toggleCardMaker);

// add card
elements.addCardBtn.addEventListener('click', addCard);

// clear cards
elements.clearBtn.addEventListener('click', clearCards);

// go through cards
elements.prevBtn.addEventListener('click', goThroughCards);
elements.nextBtn.addEventListener('click', goThroughCards);
