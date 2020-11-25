"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const elements = {
    form: document.getElementById('form'),
    search: document.getElementById('search'),
    result: document.getElementById('result'),
    more: document.getElementById('more'),
    songs: document.querySelector('.songs'),
    prevBtn: document.querySelector('.btn-prev'),
    nextBtn: document.querySelector('.btn-next'),
};
const getSongs = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const songs = yield (yield fetch(`https://cors-anywhere.herokuapp.com/${url}`)).json();
    return songs;
});
const getPrevSongs = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const songs = yield getSongs(url);
    renderSongs(songs);
});
const getNextSongs = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const songs = yield getSongs(url);
    console.log(songs);
    renderSongs(songs);
});
const getLyric = (artist, title) => __awaiter(void 0, void 0, void 0, function* () {
    const lyric = yield (yield fetch(`https://cors-anywhere.herokuapp.com/api.lyrics.ovh/v1/${artist}/${title}`)).json();
    return lyric;
});
const renderSongs = (songs) => {
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
    if (songs.next) {
        elements.nextBtn.classList.remove('hide');
        elements.nextBtn.dataset.next = songs.next;
    }
    else {
        elements.nextBtn.classList.add('hide');
    }
    if (songs.prev) {
        elements.prevBtn.classList.remove('hide');
        elements.prevBtn.dataset.previous = songs.prev;
    }
    else {
        elements.prevBtn.classList.add('hide');
    }
};
const renderLyric = ({ artist, title, lyric, }) => {
    elements.songs.innerHTML = `
  <h2><strong>${artist}</strong> - ${title}</h2>

  <span>${lyric.lyrics}</span>
  `;
};
const displaySongs = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const songs = yield getSongs(`api.lyrics.ovh/suggest/${elements.search.value}`);
    renderSongs(songs);
});
const displayLyric = (e) => __awaiter(void 0, void 0, void 0, function* () {
    const target = e.target.closest('.btn');
    if (!target)
        return;
    const artist = target.dataset.artist;
    const title = target.dataset.songtitle;
    const lyric = yield getLyric(artist, title);
    lyric.lyrics = lyric.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
    renderLyric({ artist, title, lyric });
});
elements.form.addEventListener('submit', displaySongs);
elements.result.addEventListener('click', displayLyric);
elements.more.addEventListener('click', e => {
    const target = e.target.closest('.btn');
    if (!target)
        return;
    if (target.classList.contains('btn-prev'))
        getPrevSongs(target.dataset.previous);
    else
        getNextSongs(target.dataset.next);
});
