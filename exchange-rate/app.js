"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const elements = {
    currencyOne: document.getElementById('currency-one'),
    currencyTwo: document.getElementById('currency-two'),
    amountOne: document.getElementById('amount-one'),
    amountTwo: document.getElementById('amount-two'),
    swap: document.getElementById('swap'),
    rate: document.getElementById('rate'),
};
let selectedCurrency = 'USD';
const getRates = () => __awaiter(void 0, void 0, void 0, function* () {
    updateCurrency();
    const response = yield (yield fetch(`https://v6.exchangerate-api.com/v6/b3e9568b251b29fd43e5e545/latest/${selectedCurrency}`)).json();
    if (!response.conversion_rates)
        return;
    console.log(response);
});
const swapCurrencies = () => {
    const selectedCurrencyOne = elements.currencyOne.selectedIndex;
    const selectedCurrencyTwo = elements.currencyTwo.selectedIndex;
    elements.currencyOne.selectedIndex = selectedCurrencyTwo;
    elements.currencyTwo.selectedIndex = selectedCurrencyOne;
    getRates();
};
const updateCurrency = () => {
    selectedCurrency = elements.currencyOne.children[elements.currencyOne.selectedIndex].value;
    console.log(selectedCurrency);
};
const updateUI = () => {
};
elements.currencyOne.addEventListener('input', getRates);
elements.currencyTwo.addEventListener('input', updateUI);
elements.swap.addEventListener('click', swapCurrencies);
elements.amountOne.addEventListener('input', updateUI);
