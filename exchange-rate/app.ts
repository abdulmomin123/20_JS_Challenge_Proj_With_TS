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

let selectedCurrency: string = 'USD';

// functions
const getRates = async () => {
  updateCurrency();

  const response = await (
    await fetch(
      `https://v6.exchangerate-api.com/v6/b3e9568b251b29fd43e5e545/latest/${selectedCurrency}`
    )
  ).json();

  if (!response.conversion_rates) return;

  console.log(response);
};

const swapCurrencies = () => {
  const selectedCurrencyOne: number = elements.currencyOne.selectedIndex;
  const selectedCurrencyTwo: number = elements.currencyTwo.selectedIndex;
  elements.currencyOne.selectedIndex = selectedCurrencyTwo;
  elements.currencyTwo.selectedIndex = selectedCurrencyOne;

  getRates();
};

const updateCurrency = () => {
  selectedCurrency = (elements.currencyOne.children[
    elements.currencyOne.selectedIndex
  ] as HTMLOptionElement).value;

  console.log(selectedCurrency);
};

const updateUI = () => {
  //
};

// event listeners
// selecting currencies
elements.currencyOne.addEventListener('input', getRates);
elements.currencyTwo.addEventListener('input', updateUI);

// swapping currencies
elements.swap.addEventListener('click', swapCurrencies);

// increasing currency
elements.amountOne.addEventListener('input', updateUI);
