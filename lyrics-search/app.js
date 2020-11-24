"use strict";
const elements = {
    form: document.getElementById('form'),
    search: document.getElementById('search'),
    result: document.getElementById('result'),
    more: document.getElementById('more'),
};
const apiURL = 'https://api.lyrics.ovh';
const test = () => {
};
elements.form.addEventListener('submit', test);
