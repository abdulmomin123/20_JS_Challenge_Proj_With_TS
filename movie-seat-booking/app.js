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
var bookMovie = function () {
    pricePerTicket = +elements.movieSelect.value;
};
elements.movieSelect.addEventListener('change', bookMovie);
