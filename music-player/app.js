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
const togglePlayback = () => {
    elements.musicContainer.classList.toggle('play');
    if (elements.audio.paused)
        play();
    else
        pause();
};
const previousSong = () => {
    pause();
    elements.audio.src = `music/${songs[songs.indexOf(nowPlaying) - 1]}.mp3`;
    play();
};
const nextSong = () => {
    pause();
    elements.audio.src = `music/${songs[songs.indexOf(nowPlaying) + 1]}.mp3`;
    play();
};
const skip = () => {
};
elements.playBtn.addEventListener('click', togglePlayback);
elements.prevBtn.addEventListener('click', previousSong);
elements.nextBtn.addEventListener('click', nextSong);
elements.progress.addEventListener('click', skip);
