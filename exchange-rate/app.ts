// b3e9568b251b29fd43e5e545

// dom elements
const elements = {
  currencyOne: document.getElementById('currency-one') as HTMLSelectElement,
  currencyTwo: document.getElementById('currency-two') as HTMLSelectElement,
  amountOne: document.getElementById('amount-one') as HTMLInputElement,
  amountTwo: document.getElementById('amount-two') as HTMLInputElement,

  swap: document.getElementById('swap') as HTMLButtonElement,
  rate: document.getElementById('rate') as HTMLDivElement,
};

let primaryCurrency: string = 'USD';
let secondaryCurrency: string = 'EUR';
let exchangeRates: {
  [prop: string]: string;
};

// functions
const updateCurrency = () => {
  primaryCurrency = (elements.currencyOne.children[
    elements.currencyOne.selectedIndex
  ] as HTMLOptionElement).value;

  secondaryCurrency = (elements.currencyTwo.children[
    elements.currencyTwo.selectedIndex
  ] as HTMLOptionElement).value;
};

const swapCurrencies = () => {
  const selectedCurrencyOne: number = elements.currencyOne.selectedIndex;
  const selectedCurrencyTwo: number = elements.currencyTwo.selectedIndex;
  elements.currencyOne.selectedIndex = selectedCurrencyTwo;
  elements.currencyTwo.selectedIndex = selectedCurrencyOne;

  calculateRate();
};

const getRates = async () => {
  const response = await (
    await fetch(
      `https://v6.exchangerate-api.com/v6/b3e9568b251b29fd43e5e545/latest/${primaryCurrency}`
    )
  ).json();

  if (!response.conversion_rates) return;

  exchangeRates = response.conversion_rates;
};

const calculateRate = async () => {
  updateCurrency();

  await getRates();

  updateUI();
};

const updateUI = () => {
  updateCurrency();

  elements.rate.textContent = `1 ${primaryCurrency} = ${exchangeRates[secondaryCurrency]} ${secondaryCurrency}`;

  elements.amountTwo.value = (
    +elements.amountOne.value * +exchangeRates[secondaryCurrency]
  ).toFixed(2);
};

// initial state of the app
calculateRate();

// event listeners
// selecting currencies
elements.currencyOne.addEventListener('input', calculateRate);
elements.currencyTwo.addEventListener('input', updateUI);

// swapping currencies
elements.swap.addEventListener('click', swapCurrencies);

// increasing currency
elements.amountOne.addEventListener('input', updateUI);
