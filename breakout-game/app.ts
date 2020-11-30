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

  move(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}

class Bar {
  constructor(
    public x: number,
    public y: number,
    public w: number,
    public h: number,
    public speed: number,
    public dx: number,
    public visible: boolean
  ) {
    //
  }
}

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

// // functions
// const drawBricks = (config: Bricks) => {
//   const {
//     startX,
//     startY,
//     brickHeight,
//     bricksPerRow,
//     totalRows,
//     spaceBetweenBrick,
//   } = config;

//   let startingPointX = startX;
//   let startingPointY = startY;

//   const totalWidth = elements.canvas.width - startX * 2;
//   const widthWithoutSpace = totalWidth - (bricksPerRow - 1) * spaceBetweenBrick;

//   const singleBrickWidth = widthWithoutSpace / bricksPerRow;

//   for (let i = 0; i < totalRows; i++) {
//     for (let j = 0; j < bricksPerRow; j++) {
//       ctx.fillRect(startingPointX, startingPointY, 70, brickHeight);
//       startingPointX += singleBrickWidth + spaceBetweenBrick;
//     }

//     startingPointX = startX;
//     startingPointY += brickHeight + spaceBetweenBrick;
//   }
// };

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
