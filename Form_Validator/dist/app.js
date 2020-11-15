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
        if (elements.username.value.length > 2)
            return true;
        return false;
    }
    else if (field === 'email') {
        if (elements.email.value.includes('@'))
            return true;
        return false;
    }
    else if (field === 'password') {
        if (elements.password.value.length > 5)
            return true;
        return false;
    }
    else if (field === 'confirmPassword') {
        if (elements.password2.value.length > 5 &&
            elements.password2.value === elements.password.value)
            return true;
        return false;
    }
    return;
};
const validateForm = (e) => {
    e.preventDefault();
    console.log(checkField('userName'));
    checkField('email');
    checkField('password');
    checkField('confirmPassword');
};
elements.form.addEventListener('submit', validateForm);
