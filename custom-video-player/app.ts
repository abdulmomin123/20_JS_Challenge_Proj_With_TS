// dom elements
const elements = {
  video: document.getElementById('video') as HTMLVideoElement,
  playBtns: document.querySelectorAll('#video, #play'),
  stopVideo: document.getElementById('stop') as HTMLButtonElement,
  progress: document.getElementById('progress') as HTMLInputElement,
  timestamp: document.getElementById('timestamp') as HTMLSpanElement,
};

let passedSeconds: number = 0;
let timestamp: Date = new Date(0);

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

const changeCurrentTime = () => {
  elements.video.currentTime =
    (+elements.progress.value * elements.video.duration) / 100;
};

const updateTime = () => {
  if (elements.video.currentTime < passedSeconds) return;

  passedSeconds++;
  timestamp.setSeconds(passedSeconds);

  elements.timestamp.textContent = timestamp.toISOString().substr(11, 8);
};

const progressVideo = () => {
  elements.progress.value = `${
    (elements.video.currentTime / elements.video.duration) * 100
  }`;

  updateTime();
};

// Event listeners
elements.playBtns.forEach(btn => btn.addEventListener('click', togglePlayback));
elements.stopVideo.addEventListener('click', stopPlayback);
elements.progress.addEventListener('input', changeCurrentTime);
elements.video.addEventListener('timeupdate', progressVideo);
elements.video.addEventListener('ended', stopPlayback);
