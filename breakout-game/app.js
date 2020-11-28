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
    const { canvas, startX, startY, brickHeight, bricksPerRow, totalRows, spaceBetweenBrick, } = config;
    let startingPointX = startX;
    let startingPointY = startY;
    const totalWidth = canvas.offsetWidth - startX * 2;
    const widthWithoutSpace = totalWidth - (bricksPerRow - 1) * spaceBetweenBrick;
    const singleBrickWidth = widthWithoutSpace / bricksPerRow;
    ctx.fillStyle = '#0095dd';
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
    startX: 45,
    startY: 60,
    brickHeight: 20,
    bricksPerRow: 9,
    totalRows: 5,
    spaceBetweenBrick: 10,
});
document.addEventListener('keydown', moveBar);
