"use strict";
const elements = {
    rulesBtn: document.getElementById('rules-btn'),
    closeBtn: document.getElementById('close-btn'),
    rules: document.getElementById('rules'),
    canvas: document.getElementById('canvas'),
};
const ctx = elements.canvas.getContext('2d');
const moveBarLeft = () => {
};
const moveBarRight = () => {
};
const drawBricks = () => {
    ctx.fillStyle = '#0095dd';
    ctx.fillRect(45, 55, 70, 20);
};
const drawBall = () => {
};
const drawBar = () => {
};
const moveBar = (e) => {
    const key = e.keyCode;
    if (key !== 37 && key !== 39)
        return;
    if (key === 37)
        moveBarLeft();
    else
        moveBarRight();
    console.log(key);
};
drawBricks();
document.addEventListener('keydown', moveBar);
