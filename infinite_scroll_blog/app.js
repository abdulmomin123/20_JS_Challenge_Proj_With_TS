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
    postsContainer: document.getElementById('posts-container'),
    loading: document.querySelector('.loader'),
    filter: document.getElementById('filter'),
};
let limit = 5;
let page = 1;
const displayLoader = () => {
};
const clearLoader = () => {
};
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (yield fetch(`https://jsonplaceholder.typicode.com/users/${page}/posts`)).json();
    return response.slice(0, 5);
});
const postTemplate = (_posts) => {
    return 'hi';
};
const displayPosts = (_markup) => {
    return 'hi';
};
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield getPosts();
    const markup = postTemplate(posts);
    displayPosts(markup);
    console.log(posts);
});
init();
