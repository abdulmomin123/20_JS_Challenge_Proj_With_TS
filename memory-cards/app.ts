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
  displayCard();
  clearCardMaker();
  toggleCardMaker();
  saveCards();
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

const saveCards = () => {
  localStorage.setItem('memoryCards', JSON.stringify(cards));
};

const clearCards = () => {
  cards.splice(0, cards.length);
  saveCards();
};

const displayCard = () => {
  const allCards = elements.cardsContainer.querySelectorAll(
    '.card'
  ) as NodeList;

  allCards.forEach(card => (card as HTMLDivElement).classList.remove('active'));

  (allCards[activeCard] as HTMLDivElement).classList.add('active');
};

const displaySavedCards = () => {
  if (localStorage.getItem('memoryCards'))
    cards = JSON.parse(localStorage.getItem('memoryCards')!);
  else cards = [];

  // now render active card
  if (cards.length === 0) return;

  cards.forEach((card: card) => insertCard(card));
  displayCard();
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

  displayCard();
};

const flipCard = (e: Event) => {
  const target = e.target as HTMLDivElement;

  if (!target.classList.contains('card')) return;

  console.log(target);
};

displaySavedCards();

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

// flip the card
elements.cardsContainer.addEventListener('click', flipCard);
