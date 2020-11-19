// dom elements
const elements = {
  search: document.getElementById('search') as HTMLInputElement,
  submit: document.getElementById('submit') as HTMLFormElement,
  random: document.getElementById('random') as HTMLButtonElement,
  mealsEl: document.getElementById('meals') as HTMLDivElement,
  resultHeading: document.getElementById('result-heading') as HTMLDivElement,
  single_mealEl: document.getElementById('single-meal') as HTMLDivElement,
};

// functions
const test = (e: Event) => {
  e.preventDefault();

  console.log('hi');
};

const clearInput = () => {
  elements.search.value = '';
};

const displaySearchTerm = () => {
  //
};

// event listeners
// the search handler
elements.submit.addEventListener('submit', test);

// random meal handler
elements.random.addEventListener('click', test);
