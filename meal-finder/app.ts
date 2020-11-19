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
const clearInput = () => {
  elements.search.value = '';
};

const displaySearchTerm = (_searchTerm: string) => {
  //
};

const clearSearchTerm = () => {
  //
};

const getFoods = async (searchTerm: string) => {
  try {
    const data = await (
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      )
    ).json();

    return data;
  } catch (err) {
    alert('Something went wrong. Please try again : (');
  }
};

const getFood = async (id: string) => {
  try {
    const data = await (
      await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    ).json();

    return data;
  } catch (err) {
    alert('Something went wrong. Please try again : (');
  }
};

const getRandomFood = async () => {
  try {
    const data = await (
      await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    ).json();

    return data;
  } catch (err) {
    alert('Something went wrong. Please try again : (');
  }
};

const displayFoods = () => {
  //
};

const displayFood = (isRandom: boolean = false) => {
  console.log(isRandom);
};

const findMeals = async (e: Event) => {
  e.preventDefault();

  clearSearchTerm();

  displaySearchTerm('hi');

  const foods = await getFoods(elements.search.value);

  displayFoods();

  console.log(foods);
};

const findClickedMeal = () => {
  //
};

const findRandomMeal = async () => {
  const randomFood = await getRandomFood();

  displayFood(true);

  console.log(randomFood);
};

// event listeners
// the search handler
elements.submit.addEventListener('submit', findMeals);

// food click handler
elements.mealsEl.addEventListener('click', findClickedMeal);

// random meal handler
elements.random.addEventListener('click', findRandomMeal);
