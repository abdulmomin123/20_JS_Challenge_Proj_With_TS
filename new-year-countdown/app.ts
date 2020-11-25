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
  const remaningDays = new Date(2021, 0, 1, 0, 0) - Date.now();
  // const remaningHours
  // const remaningMinutes
  // const remaningSeconds

  elements.days.textContent = `${remaningDays}`;
  console.log(remaningDays);
  return;
};

const displayNextYear = () => {
  elements.year.textContent = `${nextYear.getFullYear()}`;
};

// Display remaning time & year
displayRemaningTime();
displayNextYear();
