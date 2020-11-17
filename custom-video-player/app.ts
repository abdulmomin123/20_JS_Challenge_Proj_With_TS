// dom elements
const elements = {
  video: document.getElementById('video') as HTMLVideoElement,
  playBtns: document.querySelectorAll('#video, #play'),
  stopVideo: document.getElementById('stop') as HTMLButtonElement,
  progress: document.getElementById('progress') as HTMLInputElement,
  timestamp: document.getElementById('timestamp') as HTMLSpanElement,
};

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
  elements.video.currentTime = +elements.progress.value;
};

const debounce = (fn: () => any, delay: number = 1000) => {
  let timeoutId: number;

  return () => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
};

const progressVideo = () => {
  console.log('hi');
};

// Event listeners
elements.playBtns.forEach(btn => btn.addEventListener('click', togglePlayback));
elements.stopVideo.addEventListener('click', stopPlayback);
elements.progress.addEventListener('input', changeCurrentTime);
elements.video.addEventListener('timeupdate', debounce(progressVideo));
