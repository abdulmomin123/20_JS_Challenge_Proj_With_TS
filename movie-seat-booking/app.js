"use strict";
var elements = {
    container: document.querySelector('.container'),
    seats: document.querySelectorAll('.row .seat:not(.occupied)'),
    count: document.getElementById('count'),
    total: document.getElementById('total'),
    movieSelect: document.getElementById('movie'),
};
var pricePerTicket = +elements.movieSelect.value;
var seatsBooked = 0;
var updateStats = function () {
    elements.count.textContent = "" + seatsBooked;
    elements.total.textContent = "" + seatsBooked * pricePerTicket;
};
var toggleSeat = function (e) {
    var target = e.target;
    if (!target.classList.contains('seat'))
        return;
    target.classList.toggle('selected');
    if (target.classList.contains('selected'))
        seatsBooked++;
    else
        seatsBooked--;
};
var bookMovie = function (e) {
    toggleSeat(e);
    updateStats();
};
var updateTicketPrice = function () {
    pricePerTicket = +elements.movieSelect.value;
    updateStats();
};
elements.movieSelect.addEventListener('change', updateTicketPrice);
elements.container.addEventListener('click', bookMovie);
