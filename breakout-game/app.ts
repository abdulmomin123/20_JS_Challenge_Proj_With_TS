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

// current positon of the bar
let barX = elements.canvas.width / 2 - 80 / 2;
let moveDirection = 0;

// current positon of the ball
let ballDirectionX: 'left' | 'right' = 'right';
let ballDirectionY: 'top' | 'bottom' = 'top';
let ballX = elements.canvas.width / 3;
let ballY = elements.canvas.height - 150;

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

// const drawBall = (config: Ball) => {
//   const { ballX, ballY, radius } = config;

//   ctx.beginPath();
//   ctx.arc(ballX, ballY, radius, 1, 8);
//   ctx.fill();
// };

// const drawBar = (config: Bar) => {
//   const { barX, barY, width, height } = config;

//   ctx.clearRect(0, barY, elements.canvas.width, height);

//   ctx.fillRect(barX, barY, width, height);
// };

// const drawScore = () => {
//   ctx.fillText(`Score: ${score}`, elements.canvas.width - 140, 35);
// };

// const moveBar = () => {
//   if (
//     (barX <= 0 && moveDirection < 0) ||
//     (barX >= elements.canvas.width - 80 && moveDirection > 0)
//   )
//     return;

//   barX += moveDirection;

//   drawBar({
//     barX,
//     barY: elements.canvas.height - 10 * 2,
//     width: 80,
//     height: 10,
//   });
// };

// const moveBall = () => {
//   if (ballY <= 10 && ballDirectionX === 'right') {
//     ballDirectionX = 'right';
//     ballDirectionY = 'bottom';
//   } else if (ballY <= 10 && ballDirectionX === 'left') {
//     ballDirectionX = 'left';
//     ballDirectionY = 'bottom';
//   } else if (ballX <= 10 && ballDirectionY === 'top') {
//     ballDirectionX = 'right';
//     ballDirectionY = 'top';
//   } else if (ballX <= 10 && ballDirectionY === 'bottom') {
//     ballDirectionX = 'right';
//     ballDirectionY = 'bottom';
//   } else if (
//     ballY >= elements.canvas.height - 30 &&
//     ballDirectionX === 'right'
//   ) {
//     ballDirectionX = 'right';
//     ballDirectionY = 'top';
//   } else if (
//     ballY >= elements.canvas.height - 30 &&
//     ballDirectionX === 'left'
//   ) {
//     ballDirectionX = 'left';
//     ballDirectionY = 'top';
//   } else if (ballX >= elements.canvas.width - 10 && ballDirectionY === 'top') {
//     ballDirectionX = 'left';
//     ballDirectionY = 'top';
//   } else if (
//     ballX >= elements.canvas.width - 10 &&
//     ballDirectionY === 'bottom'
//   ) {
//     ballDirectionX = 'left';
//     ballDirectionY = 'bottom';
//   }

//   // movement
//   if (ballDirectionY === 'top' && ballDirectionX === 'right') {
//     ballX += 4;
//     ballY -= 4;
//   } else if (ballDirectionY === 'top' && ballDirectionX === 'left') {
//     ballX -= 4;
//     ballY -= 4;
//   } else if (ballDirectionY === 'bottom' && ballDirectionX === 'right') {
//     ballX += 4;
//     ballY += 4;
//   } else if (ballDirectionY === 'bottom' && ballDirectionX === 'left') {
//     ballX -= 4;
//     ballY += 4;
//   }
// };

// const drawAll = () => {
//   ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);

//   drawBricks({
//     startX: 45,
//     startY: 60,
//     brickHeight: 20,
//     bricksPerRow: 9,
//     totalRows: 5,
//     spaceBetweenBrick: 10,
//   });

//   drawBall({
//     ballX,
//     ballY,
//     radius: 10,
//   });

//   drawBar({
//     barX,
//     barY: elements.canvas.height - 10 * 2,
//     width: 80,
//     height: 10,
//   });

//   drawScore();
// };

// const updateCanvas = () => {
//   // move the ball & bar
//   moveBall();
//   moveBar();

//   // draw everything
//   drawAll();

//   // do it again
//   requestAnimationFrame(updateCanvas);
// };

// updateCanvas();

// // event listeners
// // move the bar left or right
// document.addEventListener('keydown', e => {
//   const key = e.keyCode;

//   if (key !== 37 && key !== 39 && key !== 65 && key !== 68) return;

//   if (key === 37 || key === 65) {
//     moveDirection = -8;
//   } else if (key === 39 || key === 68) {
//     moveDirection = 8;
//   }
// });

// // reset the movedirection
// document.addEventListener('keyup', () => {
//   moveDirection = 0;
// });

// // Rules and close event handlers
// elements.rulesBtn.addEventListener('click', () =>
//   elements.rules.classList.add('show')
// );
// elements.closeBtn.addEventListener('click', () =>
//   elements.rules.classList.remove('show')
// );
