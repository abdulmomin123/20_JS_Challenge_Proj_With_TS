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
ctx.font = '20px Arial';

// score
let score = 0;

class Ball {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public speed: number,
    public dx: number,
    public dy: number,
    public visible: boolean
  ) {
    //
  }

  move(directionX: 'left' | 'right', directionY: 'top' | 'bottom') {
    if (directionY === 'top' && directionX === 'right') {
      this.x += this.speed;
      this.y -= this.speed;
    } else if (directionY === 'top' && directionX === 'left') {
      this.x -= this.speed;
      this.y -= this.speed;
    } else if (directionY === 'bottom' && directionX === 'right') {
      this.x += this.speed;
      this.y += this.speed;
    } else if (directionY === 'bottom' && directionX === 'left') {
      this.x -= this.speed;
      this.y += this.speed;
    }
  }
}

class Bar {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public speed: number,
    public dx: number,
    public visible: boolean
  ) {
    //
  }

  move(direction: 'left' | 'right') {
    if (direction === 'left') this.x -= this.dx;
    else this.x += this.dx;
  }
}

class Brick {
  constructor(
    public width: number,
    public height: number,
    public padding: number,
    public offsetX: number,
    public offsetY: number,
    public visible: boolean
  ) {
    //
  }
}

// Instanciating all the classes
// the ball
const ball = new Ball(
  elements.canvas.width / 2,
  elements.canvas.height / 2,
  10,
  4,
  4,
  -4,
  true
);

// the bar
const bar = new Bar(
  elements.canvas.width / 2 - 40,
  elements.canvas.height - 20,
  80,
  10,
  8,
  0,
  true
);

// a single brick
const brick = new Brick(70, 20, 10, 45, 60, true);

// creating the bricks block
const createBricks = (numberOfRows: number, numberOfColumns: number) => {
  const bricks: Brick[] = [];
  let { offsetX, offsetY } = brick;

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfColumns; j++) {
      bricks.push(new Brick(70, 20, 10, offsetX, offsetY, true));

      offsetX += brick.width + brick.padding;
    }

    offsetX = brick.offsetX;
    offsetY += brick.height + brick.padding;
  }

  return bricks;
};

// All bricks
const bricks = createBricks(5, 9);

// // functions
const drawBricks = () => {
  bricks.forEach(brick => {
    ctx.beginPath();
    ctx.rect(brick.offsetX, brick.offsetY, brick.width, brick.height);
    ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
    ctx.fill();
    ctx.closePath();
  });
};

const drawAllBricks = () => bricks.forEach(brick => (brick.visible = true));

const drawBall = () => {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.visible ? '#0095dd' : 'transparent';
  ctx.fill();
  ctx.closePath();
};

const drawBar = () => {
  ctx.beginPath();
  ctx.rect(bar.x, bar.y, bar.width, bar.height);
  ctx.fillStyle = bar.visible ? '#0095dd' : 'transparent';
  ctx.fill();
  ctx.closePath();
};

const drawScore = () => {
  ctx.fillText(`Score: ${score}`, elements.canvas.width - 140, 35);
};

const moveBar = () => {
  bar.x += bar.dx;

  // Wall detection
  if (bar.x + bar.width > elements.canvas.width) {
    bar.x = elements.canvas.width - bar.width;
  }

  if (bar.x < 0) {
    bar.x = 0;
  }
};

const moveBall = () => {};

const drawAll = () => {
  ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);

  drawBricks();
  drawBall();
  drawBar();
  drawScore();
};

const updateCanvas = () => {
  // move the ball & bar
  moveBall();
  moveBar();

  // draw everything
  drawAll();

  // do it again
  requestAnimationFrame(updateCanvas);
};

updateCanvas();

// event listeners
// move the bar left or right
document.addEventListener('keydown', e => {
  const key = e.keyCode;

  if (key !== 37 && key !== 39 && key !== 65 && key !== 68) return;

  if (key === 37 || key === 65) {
    bar.dx = -bar.speed;
  } else if (key === 39 || key === 68) {
    bar.dx = bar.speed;
  }
});

// reset the movedirection
document.addEventListener('keyup', () => {
  bar.dx = 0;
});

// Rules and close event handlers
elements.rulesBtn.addEventListener('click', () =>
  elements.rules.classList.add('show')
);
elements.closeBtn.addEventListener('click', () =>
  elements.rules.classList.remove('show')
);
