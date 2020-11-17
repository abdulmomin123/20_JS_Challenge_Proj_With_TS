"use strict";
const elements = {
    currencies: document.querySelectorAll('#currency-one, #currency-two'),
    amountOne: document.getElementById('amount-one'),
    amountTwo: document.getElementById('amount-two'),
    swap: document.getElementById('swap'),
    rate: document.getElementById('rate'),
};
const getRates = () => {
};
const swapCurrencies = () => {
};
const updateUI = () => {
};
elements.currencies.forEach(currency => currency.addEventListener('input', getRates));
elements.swap.addEventListener('click', swapCurrencies);
elements.amountOne.addEventListener('input', updateUI);
