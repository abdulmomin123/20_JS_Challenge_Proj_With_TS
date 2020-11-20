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
    elements.musicContainer.classList.add('play');
    document.querySelector('.fa-play').classList.replace('fa-play', 'fa-pause');
};
const pause = () => {
    elements.audio.pause();
    elements.musicContainer.classList.remove('play');
    document.querySelector('.fa-pause').classList.replace('fa-pause', 'fa-play');
};
const displaySongInfo = () => {
    elements.cover.src = `images/${nowPlaying}.jpg`;
    elements.title.textContent = `${nowPlaying.toUpperCase()}`;
};
const togglePlayback = () => {
    displaySongInfo();
    if (elements.audio.paused) {
        play();
    }
    else {
        pause();
    }
};
const previousSong = () => {
    if (!elements.audio.paused)
        pause();
    if (songs.indexOf(nowPlaying) === 0)
        nowPlaying = songs[songs.length - 1];
    else
        nowPlaying = songs[songs.indexOf(nowPlaying) - 1];
    elements.audio.src = `music/${nowPlaying}.mp3`;
    displaySongInfo();
    play();
};
const nextSong = () => {
    if (!elements.audio.paused)
        pause();
    if (songs.indexOf(nowPlaying) === songs.length - 1)
        nowPlaying = songs[0];
    else
        nowPlaying = songs[songs.indexOf(nowPlaying) + 1];
    elements.audio.src = `music/${nowPlaying}.mp3`;
    displaySongInfo();
    play();
};
const progressSong = () => {
    elements.progress.style.width = `${(elements.audio.duration * elements.audio.currentTime) / 100}px`;
};
elements.playBtn.addEventListener('click', togglePlayback);
elements.prevBtn.addEventListener('click', previousSong);
elements.nextBtn.addEventListener('click', nextSong);
elements.progress.addEventListener('click', () => { });
elements.audio.addEventListener('timeupdate', progressSong);
elements.audio.addEventListener('ended', nextSong);
