// dom elements
const elements = {
  form: document.getElementById('form') as HTMLFormElement,
  search: document.getElementById('search') as HTMLInputElement,
  result: document.getElementById('result') as HTMLDivElement,
  more: document.getElementById('more') as HTMLDivElement,
};

// global variables
const apiURL = 'https://api.lyrics.ovh';

// functions
const test = () => {
  //
};

// event listeners
// search
elements.form.addEventListener('submit', test);
