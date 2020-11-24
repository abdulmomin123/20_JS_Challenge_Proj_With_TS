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
};
const getSongs = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const response = yield (yield fetch(`https://api.lyrics.ovh/suggest/${elements.search.value}`)).json();
    console.log(response);
    return response;
});
const getLyric = () => {
};
const test = () => {
};
elements.form.addEventListener('submit', getSongs);
elements.result.addEventListener('click', test);
elements.more.addEventListener('click', test);
