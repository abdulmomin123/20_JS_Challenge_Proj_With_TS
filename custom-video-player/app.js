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
const togglePlayback = () => {
    var _a, _b;
    if (elements.video.paused) {
        elements.video.play();
        (_a = document.querySelector('i')) === null || _a === void 0 ? void 0 : _a.classList.replace('fa-play', 'fa-pause');
    }
    else {
        elements.video.pause();
        (_b = document.querySelector('i')) === null || _b === void 0 ? void 0 : _b.classList.replace('fa-pause', 'fa-play');
    }
};
const stopPlayback = () => {
    var _a;
    elements.video.currentTime = 0;
    elements.video.pause();
    (_a = document.querySelector('i')) === null || _a === void 0 ? void 0 : _a.classList.replace('fa-pause', 'fa-play');
};
const changeCurrentTime = () => {
    elements.video.currentTime =
        (+elements.progress.value * elements.video.duration) / 100;
};
const updateTime = () => {
    if (elements.video.currentTime < passedSeconds)
        return;
    passedSeconds++;
    timestamp.setSeconds(passedSeconds);
    elements.timestamp.textContent = timestamp.toISOString().substr(11, 8);
};
const progressVideo = () => {
    elements.progress.value = `${(elements.video.currentTime / elements.video.duration) * 100}`;
    updateTime();
};
elements.playBtns.forEach(btn => btn.addEventListener('click', togglePlayback));
elements.stopVideo.addEventListener('click', stopPlayback);
elements.progress.addEventListener('input', changeCurrentTime);
elements.video.addEventListener('timeupdate', progressVideo);
elements.video.addEventListener('ended', stopPlayback);
