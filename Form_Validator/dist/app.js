"use strict";
const elements = {
    form: document.querySelector('#form'),
    username: document.querySelector('#username'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password'),
    password2: document.querySelector('#password2'),
};
const validateForm = (e) => {
    e.preventDefault();
};
elements.form.addEventListener('submit', validateForm);
