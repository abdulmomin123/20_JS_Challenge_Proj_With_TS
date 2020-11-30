"use strict";
const elements = {
    rulesBtn: document.getElementById('rules-btn'),
    closeBtn: document.getElementById('close-btn'),
    rules: document.getElementById('rules'),
    canvas: document.getElementById('canvas'),
};
const ctx = elements.canvas.getContext('2d');
ctx.fillStyle = '#0095dd';
ctx.font = '20px Arial';
let score = 0;
let barX = elements.canvas.width / 2 - 80 / 2;
let moveDirection = 0;
let ballDirectionX = 'right';
let ballDirectionY = 'top';
let ballX = elements.canvas.width / 3;
let ballY = elements.canvas.height - 150;
class Ball {
    constructor(x, y, radius, speed, dx, dy, visible) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.dx = dx;
        this.dy = dy;
        this.visible = visible;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}
class Bar {
    constructor(x, y, width, height, speed, dx, visible) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.dx = dx;
        this.visible = visible;
    }
    move(direction) {
        if (direction === 'left')
            this.x -= this.dx;
        else
            this.x += this.dx;
    }
}
class Brick {
    constructor(width, height, padding, offsetX, offsetY, visible) {
        this.width = width;
        this.height = height;
        this.padding = padding;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.visible = visible;
    }
}
const ball = new Ball(elements.canvas.width / 2, elements.canvas.height / 2, 10, 4, 4, -4, true);
const bar = new Bar(elements.canvas.width / 2 - 40, elements.canvas.height - 20, 80, 10, 8, 0, true);
const brick = new Brick(70, 20, 10, 45, 60, true);
const createBricks = (numberOfRows, numberOfColumns) => {
    const bricks = [];
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
const bricks = createBricks(5, 9);
console.log(bricks);
