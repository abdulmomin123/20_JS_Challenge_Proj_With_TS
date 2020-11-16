// dom elements
const elements = {
  video: document.getElementById('video') as HTMLVideoElement,
  playVideo: document.getElementById('play') as HTMLButtonElement,
  stopVideo: document.getElementById('stop') as HTMLButtonElement,
  progress: document.getElementById('progress') as HTMLInputElement,
  timestamp: document.getElementById('timestamp') as HTMLSpanElement,
};

console.dir(elements.video);

// Functions
const togglePlayback = () => {
  if (elements.video.paused) {
    elements.video.play();
    document.querySelector('i')?.classList.replace('fa-play', 'fa-pause');
  } else {
    elements.video.pause();
    document.querySelector('i')?.classList.replace('fa-pause', 'fa-play');
  }
};

const stopPlayback = () => {
  elements.video.currentTime = 0;
  elements.video.pause();
  document.querySelector('i')?.classList.replace('fa-pause', 'fa-play');
};

const progressVideo = () => {
  //
};

// Event listeners
elements.video.addEventListener('click', togglePlayback);
elements.playVideo.addEventListener('click', togglePlayback);
elements.stopVideo.addEventListener('click', stopPlayback);
elements.progress.addEventListener('click', progressVideo);
