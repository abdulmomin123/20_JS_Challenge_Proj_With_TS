// dom elements
const elements = {
  video: document.getElementById('video') as HTMLVideoElement,
  playVideo: document.getElementById('play') as HTMLButtonElement,
  stopVideo: document.getElementById('stop') as HTMLButtonElement,
  progress: document.getElementById('progress') as HTMLInputElement,
  timestamp: document.getElementById('timestamp') as HTMLSpanElement,
};

// Functions
const togglePlayback = () => {
  //
};

const stopPlayback = () => {
  //
};

const progressVideo = () => {
  //
};

// Event listeners
elements.video.addEventListener('click', togglePlayback);
elements.playVideo.addEventListener('click', togglePlayback);
elements.stopVideo.addEventListener('click', stopPlayback);
elements.progress.addEventListener('click', progressVideo);
