// dom elements
const elements = {
  rulesBtn: document.getElementById('rules-btn') as HTMLButtonElement,
  closeBtn: document.getElementById('close-btn') as HTMLButtonElement,
  rules: document.getElementById('rules') as HTMLDivElement,
  canvas: document.getElementById('canvas') as HTMLCanvasElement,
};

// global variables
const ctx = elements.canvas.getContext('2d') as CanvasRenderingContext2D;
ctx.fillStyle = '#0095dd';

// current positon of the bar
let barX = elements.canvas.offsetWidth / 2 - 80 / 2;

interface Bricks {
  startX: number;
  startY: number;
  brickHeight: number;
  bricksPerRow: number;
  totalRows: number;
  spaceBetweenBrick: number;
}

interface Bar {
  barX: number;
  barY: number;
  width: number;
  height: number;
}

// functions
const moveBarLeft = () => {
  if (barX <= 0) return;

  barX -= 10;

  drawBar({
    barX,
    barY: elements.canvas.offsetHeight - 10 * 2,
    width: 80,
    height: 10,
  });
};

const moveBarRight = () => {
  if (barX >= elements.canvas.offsetWidth - 80) return;

  barX += 10;

  drawBar({
    barX,
    barY: elements.canvas.offsetHeight - 10 * 2,
    width: 80,
    height: 10,
  });
};

const drawBricks = (config: Bricks) => {
  const {
    startX,
    startY,
    brickHeight,
    bricksPerRow,
    totalRows,
    spaceBetweenBrick,
  } = config;

  let startingPointX = startX;
  let startingPointY = startY;

  const totalWidth = elements.canvas.offsetWidth - startX * 2;
  const widthWithoutSpace = totalWidth - (bricksPerRow - 1) * spaceBetweenBrick;

  const singleBrickWidth = widthWithoutSpace / bricksPerRow;

  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < bricksPerRow; j++) {
      ctx.fillRect(startingPointX, startingPointY, 70, brickHeight);
      startingPointX += singleBrickWidth + spaceBetweenBrick;
    }

    startingPointX = startX;
    startingPointY += brickHeight + spaceBetweenBrick;
  }
};

const drawBall = () => {
  //
};

const drawBar = (config: Bar) => {
  const { barX, barY, width, height } = config;

  ctx.clearRect(0, barY, elements.canvas.offsetWidth, height);

  ctx.fillRect(barX, barY, width, height);
};

const moveBar = (e: KeyboardEvent) => {
  const key = e.keyCode;

  if (key !== 37 && key !== 39 && key !== 65 && key !== 68) return;

  if (key === 37 || key === 65) moveBarLeft();
  else moveBarRight();
};

drawBricks({
  startX: 45,
  startY: 60,
  brickHeight: 20,
  bricksPerRow: 9,
  totalRows: 5,
  spaceBetweenBrick: 10,
});

drawBall();

drawBar({
  barX,
  barY: elements.canvas.offsetHeight - 10 * 2,
  width: 80,
  height: 10,
});

// event listeners
// move the bar left or right
document.addEventListener('keydown', moveBar);
