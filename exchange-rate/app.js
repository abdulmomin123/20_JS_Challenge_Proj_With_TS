"use strict";
const elements = {
    currencies: document.querySelectorAll('#currency-one, #currency-two'),
    amountOne: document.getElementById('amount-one'),
    amountTwo: document.getElementById('amount-two'),
    swap: document.getElementById('swap'),
    rate: document.getElementById('rate'),
};
const getRates = () => {
    console.log('hji');
};
const swapCurrencies = () => {
    const selectedCurrencyOne = elements
        .currencies[0].selectedIndex;
    const selectedCurrencyTwo = elements
        .currencies[1].selectedIndex;
    elements
        .currencies[0].selectedIndex = selectedCurrencyTwo;
    elements
        .currencies[1].selectedIndex = selectedCurrencyOne;
};
const updateUI = () => {
    console.log('hji');
};
elements.currencies.forEach(currency => currency.addEventListener('input', getRates));
elements.swap.addEventListener('click', swapCurrencies);
elements.amountOne.addEventListener('input', updateUI);
