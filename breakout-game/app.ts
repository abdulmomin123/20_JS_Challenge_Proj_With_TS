// dom elements
const elements = {
  rulesBtn: document.getElementById('rules-btn') as HTMLButtonElement,
  closeBtn: document.getElementById('close-btn') as HTMLButtonElement,
  rules: document.getElementById('rules') as HTMLDivElement,
  canvas: document.getElementById('canvas') as HTMLCanvasElement,
};

const context = elements.canvas.getContext('2d');

// functions
const moveBarLeft = () => {
  //
};

const moveBarRight = () => {
  //
};

const moveBar = (e: KeyboardEvent) => {
  const key = e.keyCode;

  if (key !== 37 && key !== 39) return;

  if (key === 37) moveBarLeft();
  else moveBarRight();

  console.log(key);
};

// event listeners
// move the bar left or right
document.addEventListener('keydown', moveBar);
