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
const drawBricks = (config) => {
    const { canvas, startingPoingX, startingPointY, brickHeight, bricksPerRow, totalRows, } = config;
    const workingWidth = canvas.offsetWidth - startingPoingX * 2;
    console.log(workingWidth);
    ctx.fillStyle = '#0095dd';
    ctx.fillRect(startingPoingX, startingPointY, 70, brickHeight);
    console.log(bricksPerRow, totalRows);
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
drawBricks({
    canvas: elements.canvas,
    startingPoingX: 45,
    startingPointY: 60,
    brickHeight: 20,
    bricksPerRow: 9,
    totalRows: 5,
});
document.addEventListener('keydown', moveBar);
