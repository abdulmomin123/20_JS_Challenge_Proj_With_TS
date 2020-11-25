"use strict";
const elements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    countdown: document.getElementById('countdown'),
    year: document.getElementById('year'),
};
const currentTime = new Date();
const calcRemaningTime = () => {
};
const displayRemaningTime = () => {
};
const displayNextYear = () => {
    elements.year.textContent = `${currentTime.getFullYear() + 1}`;
};
displayRemaningTime();
displayNextYear();
