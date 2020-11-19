// dom elements
const elements = {
  search: document.getElementById('search') as HTMLInputElement,
  submit: document.getElementById('submit') as HTMLFormElement,
  random: document.getElementById('random') as HTMLButtonElement,
  mealsEl: document.getElementById('meals'),
  resultHeading: document.getElementById('result-heading'),
  single_mealEl: document.getElementById('single-meal'),
};

// functions
const test = () => {
  //
};

// event listeners
elements.submit.addEventListener('submit', test);
