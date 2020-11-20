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
let nowPlaying = 'ukulele';
const songs = ['summer', 'ukulele', 'hey'];
const play = () => {
    elements.audio.play();
};
const pause = () => {
    elements.audio.pause();
};
const displaySongInfo = () => {
};
const togglePlayback = () => {
    if (elements.audio.paused) {
        play();
        document
            .querySelector('.fa-play')
            .classList.replace('fa-play', 'fa-pause');
    }
    else {
        pause();
        document
            .querySelector('.fa-pause')
            .classList.replace('fa-pause', 'fa-play');
    }
};
const previousSong = () => {
    pause();
    elements.audio.src = `music/${songs[songs.indexOf(nowPlaying) - 1]}.mp3`;
    play();
    nowPlaying = songs[songs.indexOf(nowPlaying) - 1];
};
const nextSong = () => {
    pause();
    elements.audio.src = `music/${songs[songs.indexOf(nowPlaying) + 1]}.mp3`;
    play();
    nowPlaying = songs[songs.indexOf(nowPlaying) + 1];
};
const skip = () => {
};
elements.playBtn.addEventListener('click', togglePlayback);
elements.prevBtn.addEventListener('click', previousSong);
elements.nextBtn.addEventListener('click', nextSong);
elements.progress.addEventListener('click', skip);
