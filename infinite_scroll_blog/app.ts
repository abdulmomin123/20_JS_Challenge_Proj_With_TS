// dom elements
const elements = {
  postsContainer: document.getElementById('posts-container') as HTMLDivElement,
  loading: document.querySelector('.loader') as HTMLDivElement,
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
  let markup = '';

  posts.forEach((post: { [prop: string]: any }, i) => {
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

const displayPosts = (markup: string) => {
  elements.postsContainer.insertAdjacentHTML('beforeend', markup);
};

const getAndDisplay = async () => {
  const posts = await getPosts();

  const markup = postTemplate(posts);

  displayPosts(markup);
};

getAndDisplay();

// event listeners
const observer = new IntersectionObserver(getAndDisplay, {
  root: null,
  rootMargin: '-20px',
  threshold: 1,
});
