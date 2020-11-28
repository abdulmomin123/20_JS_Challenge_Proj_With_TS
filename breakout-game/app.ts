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
  startX: number;
  startY: number;
  brickHeight: number;
  bricksPerRow: number;
  totalRows: number;
  spaceBetweenBrick: number;
}

// functions
const moveBarLeft = () => {
  //
};

const moveBarRight = () => {
  //
};

const drawBricks = (config: Bricks) => {
  const {
    canvas,
    startX,
    startY,
    brickHeight,
    bricksPerRow,
    totalRows,
    spaceBetweenBrick,
  } = config;

  let startingPoint = startX;

  const totalWidth = canvas.offsetWidth - startX * 2;
  const widthWithoutSpace = totalWidth - (bricksPerRow - 1) * spaceBetweenBrick;

  const singleBrickWidth = widthWithoutSpace / bricksPerRow;

  ctx.fillStyle = '#0095dd';
  for (let i = 0; i < bricksPerRow; i++) {
    ctx.fillRect(startingPoint, startY, 70, brickHeight);
    startingPoint += singleBrickWidth + spaceBetweenBrick;
    // console.log(i);
  }

  console.log(singleBrickWidth);
  console.log(bricksPerRow, totalRows, startingPoint);
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

drawBricks({
  canvas: elements.canvas,
  startX: 45,
  startY: 60,
  brickHeight: 20,
  bricksPerRow: 9,
  totalRows: 5,
  spaceBetweenBrick: 10,
});

// event listeners
// move the bar left or right
document.addEventListener('keydown', moveBar);
