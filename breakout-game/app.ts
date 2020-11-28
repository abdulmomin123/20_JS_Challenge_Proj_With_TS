// dom elements
const elements = {
  rulesBtn: document.getElementById('rules-btn') as HTMLButtonElement,
  closeBtn: document.getElementById('close-btn') as HTMLButtonElement,
  rules: document.getElementById('rules') as HTMLDivElement,
  canvas: document.getElementById('canvas') as HTMLCanvasElement,
};

// global variables
const ctx = elements.canvas.getContext('2d') as CanvasRenderingContext2D;

interface Bricks {
  canvas: HTMLCanvasElement;
  startingPoingX: number;
  startingPointY: number;
  brickHeight: number;
  bricksPerRow: number;
  totalRows: number;
}

// functions
const moveBarLeft = () => {
  //
};

const moveBarRight = () => {
  //
};

const drawBricks = (
  startX: number,
  startY: number,
  brickHeight: number,
  bricksPerRow: number,
  totalRows: number
) => {
  ctx.fillStyle = '#0095dd';
  ctx.fillRect(startX, startY, 70, brickHeight);

  console.log(bricksPerRow, totalRows);
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

drawBricks(45, 60, 20, 9, 5);

// event listeners
// move the bar left or right
document.addEventListener('keydown', moveBar);
