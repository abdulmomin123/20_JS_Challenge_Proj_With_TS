// dom elements
const elements = {
  rulesBtn: document.getElementById('rules-btn') as HTMLButtonElement,
  closeBtn: document.getElementById('close-btn') as HTMLButtonElement,
  rules: document.getElementById('rules') as HTMLDivElement,
  canvas: document.getElementById('canvas') as HTMLCanvasElement,
};

const ctx = elements.canvas.getContext('2d') as CanvasRenderingContext2D;

// functions
const moveBarLeft = () => {
  //
};

const moveBarRight = () => {
  //
};

const drawBricks = () => {
  ctx.fillStyle = '#0095dd';
  ctx.fillRect(45, 55, 70, 20);
};

const drawBall = () => {
  //
};

const drawBar = () => {
  //
};

const moveBar = (e: KeyboardEvent) => {
  const key = e.keyCode;

  if (key !== 37 && key !== 39) return;

  if (key === 37) moveBarLeft();
  else moveBarRight();

  console.log(key);
};

drawBricks();

// event listeners
// move the bar left or right
document.addEventListener('keydown', moveBar);
