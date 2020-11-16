const elements = {
  container: document.querySelector('.container') as HTMLDivElement,
  seats: document.querySelectorAll('.row .seat:not(.occupied)') as NodeList,
  count: document.getElementById('count') as HTMLParagraphElement,
  total: document.getElementById('total') as HTMLParagraphElement,
  movieSelect: document.getElementById('movie') as HTMLSelectElement,
};

let pricePerTicket: number = +elements.movieSelect.value;
let seatsBooked: number = +localStorage.getItem('seatsBooked')! || 0;

// functions
const saveData = () => {
  localStorage.setItem('seatsBooked', `${seatsBooked}`);
  localStorage.setItem('seatsBookedHtml', elements.container.innerHTML);
};

const updateTicketPrice = () => {
  pricePerTicket = +elements.movieSelect.value;
  updateStats();
};

const updateStats = () => {
  elements.count.textContent = `${seatsBooked}`;
  elements.total.textContent = `${seatsBooked * pricePerTicket}`;
};

const toggleSeat = (e: Event) => {
  const target = e.target as HTMLElement;

  if (!target.classList.contains('seat')) return;

  target.classList.toggle('selected');

  if (target.classList.contains('selected')) seatsBooked++;
  else seatsBooked--;

  saveData();
};

const bookMovie = (e: Event) => {
  toggleSeat(e);
  updateStats();
};

const init = () => {
  if (localStorage.getItem('seatsBookedHtml'))
    elements.container.innerHTML = localStorage.getItem('seatsBookedHtml')!;
  updateStats();
};

// pull data form the localStorage
init();

// evnent listeners
elements.movieSelect.addEventListener('change', updateTicketPrice);

elements.container.addEventListener('click', bookMovie);
