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
    constructor(x, y, w, h, speed, dx, visible) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.dx = dx;
        this.visible = visible;
    }
    move(x, y, direction) {
        if (direction === 'left')
            this.x = x;
        this.y = y;
    }
}
