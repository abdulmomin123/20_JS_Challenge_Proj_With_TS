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

const toggleSeat = (e: Event) => {
  const target = e.target as HTMLElement;

  if (!target.classList.contains('seat')) return;

  target.classList.toggle('selected');

  if (target.classList.contains('selected')) seatsBooked++;
  else seatsBooked--;
};

const updateTicketPrice = () => {
  pricePerTicket = +elements.movieSelect.value;
};

// evnent listeners
elements.movieSelect.addEventListener('change', updateTicketPrice);

elements.container.addEventListener('click', toggleSeat);
