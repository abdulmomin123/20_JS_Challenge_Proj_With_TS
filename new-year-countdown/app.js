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
const nextYear = new Date(currentTime.getFullYear() + 1, 0, 1, 0, 0);
const displayRemaningTime = () => {
    let totalSeconds = (+nextYear - Date.now()) / 1000;
    const remaningDays = Math.floor(totalSeconds / 60 / 60 / 24);
    let remaningHours;
    let remaningMinutes;
    let remaningSeconds;
    elements.days.textContent = `${remaningDays}`;
    elements.hours.textContent = `${remaningHours}`;
    elements.minutes.textContent = `${remaningMinutes}`;
    elements.seconds.textContent = `${remaningSeconds}`;
    console.log(remaningDays);
    return;
};
const displayNextYear = () => {
    elements.year.textContent = `${nextYear.getFullYear()}`;
};
displayRemaningTime();
displayNextYear();
