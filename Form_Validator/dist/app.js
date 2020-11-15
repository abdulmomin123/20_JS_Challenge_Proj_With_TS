"use strict";
const elements = {
    form: document.querySelector('#form'),
    username: document.querySelector('#username'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password'),
    password2: document.querySelector('#password2'),
};
const checkField = (field) => {
    if (field === 'username') {
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
const updateField = (field, isPassed) => {
    if (field === 'username') {
        const target = document.querySelector('#username ~ small');
        isPassed
            ? (elements.username.classList.add('success'), (target.textContent = ''))
            : (target.textContent = 'Username should be greater than 3 characters');
    }
    else if (field === 'email') {
        const target = document.querySelector('#email ~ small');
        isPassed
            ? (elements.email.classList.add('success'), (target.textContent = ''))
            : (target.textContent = 'Invalid Email');
    }
    else if (field === 'password') {
        const target = document.querySelector('#password ~ small');
        isPassed
            ? (elements.password.classList.add('success'), (target.textContent = ''))
            : (target.textContent = 'Password should be greater than 5 characters');
    }
    else if (field === 'confirmPassword') {
        const target = document.querySelector('#password2 ~ small');
        isPassed
            ? (elements.password2.classList.add('success'), (target.textContent = ''))
            : (target.textContent = "Passwords doesn't match");
    }
};
const validateForm = (e) => {
    e.preventDefault();
    const isUsername = checkField('username');
    updateField('username', isUsername);
    const isEmail = checkField('email');
    updateField('email', isEmail);
    const isPassword = checkField('password');
    updateField('password', isPassword);
    const isConfirmPassword = checkField('confirmPassword');
    updateField('confirmPassword', isConfirmPassword);
};
elements.form.addEventListener('submit', validateForm);
