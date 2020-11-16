"use strict";
const elements = {
    video: document.getElementById('video'),
    playVideo: document.getElementById('play'),
    stopVideo: document.getElementById('stop'),
    progress: document.getElementById('progress'),
    timestamp: document.getElementById('timestamp'),
};
console.dir(elements.video);
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
};
const progressVideo = () => {
};
elements.video.addEventListener('click', togglePlayback);
elements.playVideo.addEventListener('click', togglePlayback);
elements.stopVideo.addEventListener('click', stopPlayback);
elements.progress.addEventListener('click', progressVideo);
