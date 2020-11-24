// dom elements
const elements = {
  form: document.getElementById('form') as HTMLFormElement,
  search: document.getElementById('search') as HTMLInputElement,
  result: document.getElementById('result') as HTMLDivElement,
  more: document.getElementById('more') as HTMLDivElement,
};

// global variables
// structure of a song
interface Song {
  id: number;
  title: string;
  artist: { name: string };
}

let nextPage: string;

// functions
const getSongs = async (e: Event) => {
  e.preventDefault();

  const response = await (
    await fetch(`https://api.lyrics.ovh/suggest/${elements.search.value}`)
  ).json();

  console.log(response);
  return response;
};

const getPrevSongs = () => {
  //
};

const getNextSongs = () => {
  //
};

const getLyric = () => {
  //
};

const renderSongs = (_songs: Song[]) => {
  //
};

const displaySongs = () => {
  //
};

// event listeners
// search
elements.form.addEventListener('submit', displaySongs);

// indivisual song click
elements.result.addEventListener('click', test);

// next & previous btn click
elements.more.addEventListener('click', e => {
  const target = (e.target as HTMLButtonElement).closest('.btn');

  if (!target) return;

  if (target.classList.contains('btn-prev')) getPrevSongs();
  else getNextSongs();

  console.log(target);
});
