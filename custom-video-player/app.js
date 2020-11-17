"use strict";
const elements = {
    video: document.getElementById('video'),
    playBtns: document.querySelectorAll('#video, #play'),
    stopVideo: document.getElementById('stop'),
    progress: document.getElementById('progress'),
    timestamp: document.getElementById('timestamp'),
};
let passedSeconds = 0;
let timestamp = new Date(0);
const playVideo = () => {
    var _a;
    elements.video.play();
    (_a = document.querySelector('i')) === null || _a === void 0 ? void 0 : _a.classList.replace('fa-play', 'fa-pause');
};
const pauseVideo = () => {
    var _a;
    elements.video.pause();
    (_a = document.querySelector('i')) === null || _a === void 0 ? void 0 : _a.classList.replace('fa-pause', 'fa-play');
};
const togglePlayback = () => {
    if (elements.video.paused)
        playVideo();
    else
        pauseVideo();
};
const stopPlayback = () => {
    passedSeconds = 0;
    timestamp = new Date(0);
    elements.video.currentTime = 0;
    pauseVideo();
};
const changeCurrentTime = () => {
    elements.video.currentTime =
        (+elements.progress.value * elements.video.duration) / 100;
    passedSeconds = (+elements.progress.value * elements.video.duration) / 100;
    timestamp.setSeconds(passedSeconds);
    displayTime();
};
const advanceTime = () => {
    if (elements.video.currentTime <= passedSeconds)
        return;
    passedSeconds++;
    timestamp.setSeconds(passedSeconds);
};
const displayTime = () => {
    elements.timestamp.textContent = timestamp.toISOString().substr(11, 8);
};
const progressVideo = () => {
    elements.progress.value = `${(elements.video.currentTime / elements.video.duration) * 100}`;
    advanceTime();
    displayTime();
};
elements.playBtns.forEach(btn => btn.addEventListener('click', togglePlayback));
elements.stopVideo.addEventListener('click', stopPlayback);
elements.video.addEventListener('ended', stopPlayback);
elements.progress.addEventListener('input', changeCurrentTime);
elements.video.addEventListener('timeupdate', progressVideo);
