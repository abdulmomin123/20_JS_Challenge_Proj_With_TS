// b3e9568b251b29fd43e5e545

// dom elements
const elements = {
  // currencyOne: document.getElementById('currency-one'),
  // currencyTwo: document.getElementById('currency-two'),
  currencies: document.querySelectorAll(
    '#currency-one, #currency-two'
  ) as NodeList,
  amountOne: document.getElementById('amount-one') as HTMLInputElement,
  amountTwo: document.getElementById('amount-two') as HTMLInputElement,

  swap: document.getElementById('swap') as HTMLButtonElement,
  rate: document.getElementById('rate') as HTMLDivElement,
};

// functions
const getRates = () => {
  console.log('hji');
};

const swapCurrencies = () => {
  const selectedCurrencyOne: number = (elements
    .currencies[0] as HTMLSelectElement).selectedIndex;
  const selectedCurrencyTwo: number = (elements
    .currencies[1] as HTMLSelectElement).selectedIndex;
  (elements
    .currencies[0] as HTMLSelectElement).selectedIndex = selectedCurrencyTwo;
  (elements
    .currencies[1] as HTMLSelectElement).selectedIndex = selectedCurrencyOne;
};

const updateUI = () => {
  console.log('hji');
};

// event listeners
// selecting currencies
elements.currencies.forEach(currency =>
  currency.addEventListener('input', getRates)
);

// swapping currencies
elements.swap.addEventListener('click', swapCurrencies);

// increasing currency
elements.amountOne.addEventListener('input', updateUI);
