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
  //
};

const swapCurrencies = () => {
  const currencyOne = elements.currencies[0] as HTMLSelectElement;
  const currencyTwo = elements.currencies[1] as HTMLSelectElement;
  const selectedCurrencyOne: number = currencyOne.selectedIndex;
  const selectedCurrencyTwo: number = currencyTwo.selectedIndex;

  currencyOne.selectedIndex = selectedCurrencyTwo;
  currencyTwo.selectedIndex = selectedCurrencyOne;
};

const updateUI = () => {
  //
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
