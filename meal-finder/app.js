"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const elements = {
    search: document.getElementById('search'),
    submit: document.getElementById('submit'),
    random: document.getElementById('random'),
    mealsEl: document.getElementById('meals'),
    resultHeading: document.getElementById('result-heading'),
    single_mealEl: document.getElementById('single-meal'),
};
const clearInput = () => {
    elements.search.value = '';
};
const displaySearchTerm = (searchTerm) => {
    elements.resultHeading.innerHTML = `<h2>Search results for '${searchTerm}':</h2>`;
};
const clearSearchTerm = () => {
    elements.resultHeading.innerHTML = '';
};
const getFoods = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (yield fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)).json();
        return data;
    }
    catch (err) {
        alert('Something went wrong. Please try again : (');
    }
});
const getFood = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (yield fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json();
        return data;
    }
    catch (err) {
        alert('Something went wrong. Please try again : (');
    }
});
const getRandomFood = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (yield fetch('https://www.themealdb.com/api/json/v1/1/random.php')).json();
        return data;
    }
    catch (err) {
        alert('Something went wrong. Please try again : (');
    }
});
const displayFoods = () => {
};
const displayFood = (isRandom = false) => {
    console.log(isRandom);
};
const findMeals = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    displaySearchTerm(elements.search.value);
    clearInput();
    const foods = yield getFoods(elements.search.value);
    displayFoods();
    console.log(foods);
});
const findClickedMeal = () => {
};
const findRandomMeal = () => __awaiter(void 0, void 0, void 0, function* () {
    clearSearchTerm();
    clearInput();
    const randomFood = yield getRandomFood();
    displayFood(true);
    console.log(randomFood);
});
elements.submit.addEventListener('submit', findMeals);
elements.mealsEl.addEventListener('click', findClickedMeal);
elements.random.addEventListener('click', findRandomMeal);
