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
const nextYear = currentTime.getFullYear() + 1;
const displayRemaningTime = () => {
    const remaningDays = nextYear - Date.now();
    elements.days.textContent = `${remaningDays}`;
    console.log(remaningDays);
    return;
};
const displayNextYear = () => {
    elements.year.textContent = `${currentTime.getFullYear() + 1}`;
};
displayRemaningTime();
displayNextYear();
