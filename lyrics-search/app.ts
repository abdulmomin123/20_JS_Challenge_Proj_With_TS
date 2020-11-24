// dom elements
const elements = {
  form: document.getElementById('form') as HTMLFormElement,
  search: document.getElementById('search') as HTMLInputElement,
  result: document.getElementById('result') as HTMLDivElement,
  more: document.getElementById('more') as HTMLDivElement,
  songs: document.querySelector('.songs') as HTMLElement,
};

// global variables
// structure of a song
interface Song {
  title: string;
  artist: { name: string };
}

interface Lyric {
  lyrics: string;
}

let nextPage: string;

// functions
const getSongs = async () => {
  const response = await (
    await fetch(`https://api.lyrics.ovh/suggest/${elements.search.value}`)
  ).json();

  return response;
};

const getPrevSongs = () => {
  //
};

const getNextSongs = () => {
  //
};

const getLyric = async (artist: string, title: string) => {
  // https://api.lyrics.ovh/v1/artist/title
  const response = await (
    await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  ).json();

  return response;
};

const renderSongs = (songs: Song[]) => {
  songs.forEach(song => {
    const markup = `
    <li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>
    `;

    elements.songs.insertAdjacentHTML('beforeend', markup);
  });
};

const displaySongs = async (e: Event) => {
  e.preventDefault();

  const songs = await getSongs();

  renderSongs(songs.data);
};

const displayLyric = async (e: Event) => {
  const target = (e.target as HTMLButtonElement).closest('.btn') as HTMLElement;

  if (!target) return;

  const artist = target.dataset.artist!;
  const title = target.dataset.songtitle!;

  const lyric = await getLyric(artist, title);

  console.log(lyric, artist, title);
};

// event listeners
// search
elements.form.addEventListener('submit', displaySongs);

// indivisual song click
elements.result.addEventListener('click', displayLyric);

// next & previous btn click
elements.more.addEventListener('click', e => {
  const target = (e.target as HTMLButtonElement).closest('.btn');

  if (!target) return;

  if (target.classList.contains('btn-prev')) getPrevSongs();
  else getNextSongs();

  console.log(target);
});
