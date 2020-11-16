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
var bookMovie = function (e) {
    var target = e.target;
    if (!target.classList.contains('seat'))
        return;
    console.log(e);
};
elements.movieSelect.addEventListener('change', function () { return (pricePerTicket = +elements.movieSelect.value); });
elements.container.addEventListener('click', bookMovie);
