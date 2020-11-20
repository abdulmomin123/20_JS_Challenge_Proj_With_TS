// dom elements
const elements = {
  musicContainer: document.getElementById('music-container') as HTMLDivElement,
  playBtn: document.getElementById('play') as HTMLButtonElement,
  prevBtn: document.getElementById('prev') as HTMLButtonElement,
  nextBtn: document.getElementById('next') as HTMLButtonElement,

  audio: document.getElementById('audio') as HTMLAudioElement,
  progress: document.getElementById('progress') as HTMLDivElement,
  progressContainer: document.getElementById(
    'progress-container'
  ) as HTMLDivElement,
  title: document.getElementById('title') as HTMLHeadingElement,
  cover: document.getElementById('cover') as HTMLImageElement,
};

// functions
const togglePlayback = () => {
  //
};

const previousSong = () => {
  //
};

const nextSong = () => {
  //
};

const skip = () => {
  //
};

const test = () => {
  //
};

// event handlers
// play
elements.playBtn.addEventListener('click', test);

// previous
elements.prevBtn.addEventListener('click', test);

// next
elements.nextBtn.addEventListener('click', test);

// skip
elements.progress.addEventListener('click', test);
