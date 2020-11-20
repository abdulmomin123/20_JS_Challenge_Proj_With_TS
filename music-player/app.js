"use strict";
const elements = {
    musicContainer: document.getElementById('music-container'),
    playBtn: document.getElementById('play'),
    prevBtn: document.getElementById('prev'),
    nextBtn: document.getElementById('next'),
    audio: document.getElementById('audio'),
    progress: document.getElementById('progress'),
    progressContainer: document.getElementById('progress-container'),
    title: document.getElementById('title'),
    cover: document.getElementById('cover'),
};
const nowPlaying = 'hey';
const songs = ['hey', 'summer', 'ukulele'];
const togglePlayback = () => {
    elements.musicContainer.classList.toggle('play');
    if (elements.audio.paused)
        elements.audio.play();
    else
        elements.audio.pause();
};
const previousSong = () => {
};
const nextSong = () => {
};
const skip = () => {
};
const test = () => {
};
elements.playBtn.addEventListener('click', togglePlayback);
elements.prevBtn.addEventListener('click', previousSong);
elements.nextBtn.addEventListener('click', nextSong);
elements.progress.addEventListener('click', skip);
