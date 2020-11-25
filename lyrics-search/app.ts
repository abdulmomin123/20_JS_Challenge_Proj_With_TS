// dom elements
const elements = {
  form: document.getElementById('form') as HTMLFormElement,
  search: document.getElementById('search') as HTMLInputElement,
  result: document.getElementById('result') as HTMLDivElement,
  more: document.getElementById('more') as HTMLDivElement,
  songs: document.querySelector('.songs') as HTMLElement,
  prevBtn: document.querySelector('.btn-prev') as HTMLButtonElement,
  nextBtn: document.querySelector('.btn-next') as HTMLButtonElement,
};

// global variables
// structure of a song
interface Songs {
  data: Song[];
  next?: string;
  prev?: string;
}

interface Song {
  title: string;
  artist: { name: string };
}

interface Lyric {
  lyrics: string;
}

// functions
const getSongs = async (url: string) => {
  const songs: Songs = await (
    await fetch(`https://cors-anywhere.herokuapp.com/${url}`)
  ).json();

  return songs;
};

const getPrevSongs = async (url: string) => {
  const songs = await getSongs(url);

  renderSongs(songs);
};

const getNextSongs = async (url: string) => {
  const songs = await getSongs(url);

  console.log(songs);
  renderSongs(songs);
};

const getLyric = async (artist: string, title: string) => {
  const lyric: Lyric = await (
    await fetch(
      `https://cors-anywhere.herokuapp.com/api.lyrics.ovh/v1/${artist}/${title}`
    )
  ).json();

  return lyric;
};

const renderSongs = (songs: Songs) => {
  elements.songs.innerHTML = '';

  songs.data.forEach(song => {
    const markup = `
    <li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>
    `;

    elements.songs.insertAdjacentHTML('beforeend', markup);
  });
};

const renderLyric = ({
  artist,
  title,
  lyric,
}: {
  artist: string;
  title: string;
  lyric: Lyric;
}) => {
  elements.songs.innerHTML = `
  <h2><strong>${artist}</strong> - ${title}</h2>

  <span>${lyric.lyrics}</span>
  `;
};

const displaySongs = async (e: Event) => {
  e.preventDefault();

  const songs = await getSongs(
    `api.lyrics.ovh/suggest/${elements.search.value}`
  );

  renderSongs(songs);

  // make the buttons visible
  // add the next or previous link data into the buttons
  if (songs.next) {
    elements.nextBtn.classList.remove('hide');
    elements.nextBtn.dataset.next = songs.next;
  }

  if (songs.prev) {
    elements.prevBtn.classList.remove('hide');
    elements.prevBtn.dataset.previous = songs.prev;
  }
};

const displayLyric = async (e: Event) => {
  const target = (e.target as HTMLButtonElement).closest('.btn') as HTMLElement;

  if (!target) return;

  const artist = target.dataset.artist!;
  const title = target.dataset.songtitle!;

  const lyric = await getLyric(artist, title);

  lyric.lyrics = lyric.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

  renderLyric({ artist, title, lyric });
};

// event listeners
// search
elements.form.addEventListener('submit', displaySongs);

// indivisual song click
elements.result.addEventListener('click', displayLyric);

// next & previous btn click
elements.more.addEventListener('click', e => {
  const target = (e.target as HTMLButtonElement).closest('.btn') as HTMLElement;

  if (!target) return;

  if (target.classList.contains('btn-prev'))
    getPrevSongs(target.dataset.previous!);
  else getNextSongs(target.dataset.next!);
});
