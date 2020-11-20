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
const play = () => {
  elements.audio.play();
};

const pause = () => {
  elements.audio.pause();
};

const displaySongInfo = () => {
  //
};

const togglePlayback = () => {
  if (elements.audio.paused) {
    play();
    document
      .querySelector('.fa-play')!
      .classList.replace('fa-play', 'fa-pause');
  } else {
    pause();
    document
      .querySelector('.fa-pause')!
      .classList.replace('fa-pause', 'fa-play');
  }
};

const previousSong = () => {
  pause();

  elements.audio.src = `music/${songs[songs.indexOf(nowPlaying) - 1]}.mp3`;

  play();

  nowPlaying = songs[songs.indexOf(nowPlaying) - 1];
};

const nextSong = () => {
  pause();

  elements.audio.src = `music/${songs[songs.indexOf(nowPlaying) + 1]}.mp3`;

  play();

  nowPlaying = songs[songs.indexOf(nowPlaying) + 1];
};

const skip = () => {
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
