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
const bookMovie = () => {
  pricePerTicket = +elements.movieSelect.value;
};

// evnent listeners
elements.movieSelect.addEventListener('change', bookMovie);
