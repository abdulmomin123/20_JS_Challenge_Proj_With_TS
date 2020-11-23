// dom elements
const elements = {
  main: document.querySelector('main') as HTMLDivElement,
  voicesSelect: document.getElementById('voices') as HTMLSelectElement,
  textarea: document.getElementById('text') as HTMLTextAreaElement,
  readBtn: document.getElementById('read') as HTMLButtonElement,
  toggleBtn: document.getElementById('toggle') as HTMLButtonElement,
  closeBtn: document.getElementById('close') as HTMLDivElement,
};

// functions
const speak = (phrase: string) => {
  console.log(phrase);
};

const openModal = () => {
  //
};

const closeModal = () => {
  //
};

// event listeners
// text box open handler
elements.toggleBtn.addEventListener('click', openModal);

// pre-rendered phrase click handler
elements.main.addEventListener('click', openModal);

// speech mode change handler
elements.voicesSelect.addEventListener('change', openModal);

// read provided text handler
elements.readBtn.addEventListener('click', openModal);

// close modal handler
elements.closeBtn.addEventListener('click', closeModal);
