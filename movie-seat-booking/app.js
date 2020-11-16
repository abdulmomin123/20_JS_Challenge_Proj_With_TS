"use strict";
var elements = {
    container: document.querySelector('.container'),
    seats: document.querySelectorAll('.row .seat:not(.occupied)'),
    count: document.getElementById('count'),
    total: document.getElementById('total'),
    movieSelect: document.getElementById('movie'),
};
var pricePerTicket;
var seatsBooked = 0;
var calculatePrice = function () {
    return pricePerTicket * seatsBooked;
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
var updateTicketPrice = function () {
    pricePerTicket = +elements.movieSelect.value;
};
elements.movieSelect.addEventListener('change', updateTicketPrice);
elements.container.addEventListener('click', toggleSeat);
