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
    setInterval(() => {
        const remaningDays = Math.floor(totalSeconds / 60 / 60 / 24);
        totalSeconds %= 86400;
        let remaningHours = Math.floor(totalSeconds / 60 / 60);
        totalSeconds %= 3600;
        let remaningMinutes = Math.floor(totalSeconds / 60);
        totalSeconds %= 60;
        let remaningSeconds = Math.floor(totalSeconds);
        elements.days.textContent = `${remaningDays}`;
        elements.hours.textContent = `${remaningHours}`;
        elements.minutes.textContent = `${remaningMinutes}`;
        elements.seconds.textContent = `${remaningSeconds}`;
    }, 1000);
};
const displayNextYear = () => {
    elements.year.textContent = `${nextYear.getFullYear()}`;
};
displayRemaningTime();
displayNextYear();
