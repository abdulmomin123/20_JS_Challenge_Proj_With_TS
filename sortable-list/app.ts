// dom elements
const elements = {
  draggable_list: document.getElementById('draggable-list') as HTMLUListElement,
  check: document.getElementById('check') as HTMLButtonElement,
};

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];

// functions
const shuffleArr = (arr: any[]) => {
  let m = arr.length,
    t: any,
    i: any;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;
};

const renderNames = () => {
  const names = shuffleArr(richestPeople);

  console.log(names);
};

const checkOrder = () => {
  //
};

renderNames();

// event listeners
