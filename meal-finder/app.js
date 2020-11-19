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
const clearInput = () => {
    elements.search.value = '';
};
const clearSearchTerm = () => {
};
const displaySearchTerm = () => {
};
const displayFoods = () => {
};
const displayFood = (_isRandom = false) => {
};
const findMeals = (e) => {
    e.preventDefault();
    getFoods(elements.search.value);
};
const findRandomMeal = () => {
};
elements.submit.addEventListener('submit', findMeals);
elements.random.addEventListener('click', findRandomMeal);
