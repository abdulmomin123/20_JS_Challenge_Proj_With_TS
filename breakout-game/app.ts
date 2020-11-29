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
let barX = elements.canvas.width / 2 - 80 / 2;
let moveDirection = 0;

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

interface Ball {
  startX: number;
  startY: number;
  radius: number;
}

// functions
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

  const totalWidth = elements.canvas.width - startX * 2;
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

const drawBall = (config: Ball) => {
  const { startX, startY, radius } = config;

  ctx.beginPath();
  ctx.arc(startX, startY, radius, 1, 8);
  ctx.fill();
};

const drawBar = (config: Bar) => {
  const { barX, barY, width, height } = config;

  ctx.clearRect(0, barY, elements.canvas.width, height);

  ctx.fillRect(barX, barY, width, height);
};

const moveBar = () => {
  if (
    (barX <= 0 && moveDirection < 0) ||
    (barX >= elements.canvas.width - 80 && moveDirection > 0)
  )
    return;

  barX += moveDirection;

  drawBar({
    barX,
    barY: elements.canvas.height - 10 * 2,
    width: 80,
    height: 10,
  });
};

const drawAll = () => {
  ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);

  drawBricks({
    startX: 45,
    startY: 60,
    brickHeight: 20,
    bricksPerRow: 9,
    totalRows: 5,
    spaceBetweenBrick: 10,
  });

  drawBall({
    startX: elements.canvas.width / 2,
    startY: elements.canvas.height - (20 + 12),
    radius: 12,
  });

  drawBar({
    barX,
    barY: elements.canvas.height - 10 * 2,
    width: 80,
    height: 10,
  });
};

const updateCanvas = () => {
  moveBar();

  drawAll();

  requestAnimationFrame(updateCanvas);
};

updateCanvas();

// event listeners
// move the bar left or right
document.addEventListener('keydown', e => {
  const key = e.keyCode;

  if (key !== 37 && key !== 39 && key !== 65 && key !== 68) return;

  if (key === 37 || key === 65) {
    moveDirection = -8;
  } else if (key === 39 || key === 68) {
    moveDirection = 8;
  }
});

// reset the movedirection
document.addEventListener('keyup', () => {
  moveDirection = 0;
});

// Rules and close event handlers
elements.rulesBtn.addEventListener('click', () =>
  elements.rules.classList.add('show')
);
elements.closeBtn.addEventListener('click', () =>
  elements.rules.classList.remove('show')
);
