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
const postTemplate = (posts) => {
    let markup = '';
    posts.forEach((post, i) => {
        markup += `
    <div class="post">
      <div class="number">${i + 1}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    </div>
    `;
    });
    return markup;
};
const displayPosts = (markup) => {
    elements.postsContainer.insertAdjacentHTML('beforeend', markup);
};
const getAndDisplay = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield getPosts();
    const markup = postTemplate(posts);
    displayPosts(markup);
});
getAndDisplay();
const observer = new IntersectionObserver(getAndDisplay, {
    root: null,
    rootMargin: '-20px',
    threshold: 1,
});
