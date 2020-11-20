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

const displaySearchTerm = (searchTerm: string) => {
  elements.resultHeading.innerHTML = `<h2>Search results for '${searchTerm}':</h2>`;
};

const clearSearchTerm = () => {
  elements.resultHeading.innerHTML = '';
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

const displayFood = (
  { meals }: { meals: object[] },
  isRandom: boolean = false
) => {
  if (isRandom) {
    const markup = `
    <div class="single-meal">
    <h1></h1>
    <img src="" alt="">
    <div class="single-meal-info">
      <p></p>
      <p></p>
    </div>
    <div class="main">
      <p></p>
      <h2>Ingredients</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
    `;
  }
};

const findMeals = async (e: Event) => {
  e.preventDefault();

  const foods = await getFoods(elements.search.value);

  displaySearchTerm(elements.search.value);

  clearInput();

  displayFoods();

  console.log(foods);
};

const findClickedMeal = () => {
  //
};

const findRandomMeal = async () => {
  clearSearchTerm();

  clearInput();

  const randomFood = await getRandomFood();

  displayFood(randomFood, true);

  console.log(randomFood);
};

// event listeners
// the search handler
elements.submit.addEventListener('submit', findMeals);

// food click handler
elements.mealsEl.addEventListener('click', findClickedMeal);

// random meal handler
elements.random.addEventListener('click', findRandomMeal);
