// dom elements
const elements = {
  days: document.getElementById('days') as HTMLHeadingElement,
  hours: document.getElementById('hours') as HTMLHeadingElement,
  minutes: document.getElementById('minutes') as HTMLHeadingElement,
  seconds: document.getElementById('seconds') as HTMLHeadingElement,
  countdown: document.getElementById('countdown') as HTMLDivElement,
  year: document.getElementById('year') as HTMLDivElement,
};

// global variables
const currentTime = new Date();
const nextYear = new Date(currentTime.getFullYear() + 1, 0, 1, 0, 0);

// functions
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

// Display remaning time & year
displayRemaningTime();
displayNextYear();
