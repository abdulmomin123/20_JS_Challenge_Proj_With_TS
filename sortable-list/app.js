"use strict";
const elements = {
    draggable_list: document.getElementById('draggable-list'),
    check: document.getElementById('check'),
};
const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page',
];
const shuffleArr = (arr) => {
    let m = arr.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
};
const renderNames = () => {
    const names = shuffleArr(richestPeople);
    console.log(names);
};
const checkOrder = () => {
};
renderNames();
