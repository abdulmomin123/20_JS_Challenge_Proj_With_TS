"use strict";
const elements = {
    video: document.getElementById('video'),
    playVideo: document.getElementById('play'),
    stopVideo: document.getElementById('stop'),
    progress: document.getElementById('progress'),
    timestamp: document.getElementById('timestamp'),
};
const togglePlayback = () => {
};
const stopPlayback = () => {
};
const progressVideo = () => {
};
elements.video.addEventListener('click', togglePlayback);
elements.playVideo.addEventListener('click', togglePlayback);
elements.stopVideo.addEventListener('click', stopPlayback);
elements.progress.addEventListener('click', progressVideo);
