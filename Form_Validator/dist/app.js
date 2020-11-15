"use strict";
const elements = {
    form: document.querySelector('#form'),
    username: document.querySelector('#username'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password'),
    password2: document.querySelector('#password2'),
};
const checkField = (field) => {
    if (field === 'userName') {
    }
    else if (field === 'email') {
    }
    else if (field === 'password') {
    }
    else if (field === 'confirmPassword') {
    }
};
const validateForm = (e) => {
    e.preventDefault();
};
elements.form.addEventListener('submit', validateForm);
