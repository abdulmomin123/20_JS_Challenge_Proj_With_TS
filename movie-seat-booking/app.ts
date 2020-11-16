const elements = {
  container: document.querySelector('.container') as HTMLDivElement,
  seats: document.querySelectorAll('.row .seat:not(.occupied)') as NodeList,
  count: document.getElementById('count') as HTMLParagraphElement,
  total: document.getElementById('total') as HTMLParagraphElement,
  movieSelect: document.getElementById('movie') as HTMLSelectElement,
};

let pricePerTicket: number;
let seatsBooked: number = 0;

// functions
const calculatePrice = () => {
  return pricePerTicket * seatsBooked;
};

const bookMovie = (e: Event) => {
  const target = e.target as HTMLElement;

  if (!target.classList.contains('seat')) return;

  console.log(e);
};

// evnent listeners
elements.movieSelect.addEventListener(
  'change',
  () => (pricePerTicket = +elements.movieSelect.value)
);

elements.container.addEventListener('click', bookMovie);
