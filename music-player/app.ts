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

let nowPlaying = 'ukulele';
const songs = ['summer', 'ukulele', 'hey'];

// functions
const togglePlayback = () => {
  elements.musicContainer.classList.toggle('play');

  if (elements.audio.paused) elements.audio.play();
  else elements.audio.pause();
};

const previousSong = () => {
  elements.audio.src = `music/${songs[songs.indexOf(nowPlaying) - 1]}.mp3`;
};

const nextSong = () => {
  elements.audio.src = `music/${songs[songs.indexOf(nowPlaying) + 1]}.mp3`;
};

const skip = () => {
  //
};

const test = () => {
  //
};

// event handlers
// play
elements.playBtn.addEventListener('click', togglePlayback);

// previous
elements.prevBtn.addEventListener('click', previousSong);

// next
elements.nextBtn.addEventListener('click', nextSong);

// skip
elements.progress.addEventListener('click', skip);
