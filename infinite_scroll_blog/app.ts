// dom elements
const elements = {
  postsContainer: document.getElementById('posts-container'),
  loading: document.querySelector('.loader'),
  filter: document.getElementById('filter'),
};

let limit = 5;
let page = 1;

// functions
const displayLoader = () => {
  //
};

const clearLoader = () => {
  //
};

const getPosts = async () => {
  const response: object[] = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${page}/posts`)
  ).json();

  return response.slice(0, 5);
};

const postTemplate = (posts: object[]) => {
  //
};

const displayPosts = () => {
  //
};

const init = async () => {
  const posts = await getPosts();

  const markup = postTemplate(posts);

  displayPosts(markup);

  console.log(posts);
};

init();

// event listeners
