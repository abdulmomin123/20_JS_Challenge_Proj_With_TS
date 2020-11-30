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
const bricks = [];
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
const createBricks = () => {
};
