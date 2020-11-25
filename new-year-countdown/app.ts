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

// functions
const calcRemaningTime = () => {
  //
};

const displayRemaningTime = () => {
  //
};

const displayNextYear = () => {
  elements.year.textContent = `${currentTime.getFullYear() + 1}`;
};

// Display remaning time & year
displayRemaningTime();
displayNextYear();
