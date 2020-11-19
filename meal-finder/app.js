"use strict";
const elements = {
    search: document.getElementById('search'),
    submit: document.getElementById('submit'),
    random: document.getElementById('random'),
    mealsEl: document.getElementById('meals'),
    resultHeading: document.getElementById('result-heading'),
    single_mealEl: document.getElementById('single-meal'),
};
const test = (e) => {
    e.preventDefault();
    console.log('hi');
};
const clearInput = () => {
    elements.search.value = '';
};
const displaySearchTerm = () => {
};
elements.submit.addEventListener('submit', test);
elements.random.addEventListener('click', test);
