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
