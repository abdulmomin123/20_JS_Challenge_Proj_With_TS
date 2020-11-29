"use strict";
const elements = {
    rulesBtn: document.getElementById('rules-btn'),
    closeBtn: document.getElementById('close-btn'),
    rules: document.getElementById('rules'),
    canvas: document.getElementById('canvas'),
};
const ctx = elements.canvas.getContext('2d');
ctx.fillStyle = '#0095dd';
let barX = elements.canvas.width / 2 - 80 / 2;
const drawBricks = (config) => {
    const { startX, startY, brickHeight, bricksPerRow, totalRows, spaceBetweenBrick, } = config;
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
const drawBall = (config) => {
    const { startX, startY, radius } = config;
    ctx.beginPath();
    ctx.arc(startX, startY, radius, 1, 8);
    ctx.fill();
};
const drawBar = (config) => {
    const { barX, barY, width, height } = config;
    ctx.clearRect(0, barY, elements.canvas.width, height);
    ctx.fillRect(barX, barY, width, height);
};
const moveBar = (direction) => {
    if (direction === 'left' && barX > 0) {
        barX -= 15;
    }
    else if (direction === 'right' && barX < elements.canvas.width - 80) {
        barX += 15;
    }
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
    drawAll();
    requestAnimationFrame(updateCanvas);
};
drawAll();
document.addEventListener('keydown', e => {
    const key = e.keyCode;
    if (key !== 37 && key !== 39 && key !== 65 && key !== 68)
        return;
    if (key === 37 || key === 65)
        moveBar('left');
    else
        moveBar('right');
});
elements.rulesBtn.addEventListener('click', () => elements.rules.classList.add('show'));
elements.closeBtn.addEventListener('click', () => elements.rules.classList.remove('show'));
