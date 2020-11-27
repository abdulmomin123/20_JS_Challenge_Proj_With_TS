"use strict";
const elements = {
    rulesBtn: document.getElementById('rules-btn'),
    closeBtn: document.getElementById('close-btn'),
    rules: document.getElementById('rules'),
    canvas: document.getElementById('canvas'),
};
const context = elements.canvas.getContext('2d');
const moveBar = (e) => {
    const key = e.keyCode;
    if (key !== 37 && key !== 39)
        return;
    console.log(key);
};
document.addEventListener('keydown', moveBar);
