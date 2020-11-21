// dom elements
const elements = {
  postsContainer: document.getElementById('posts-container') as HTMLDivElement,
  loading: document.querySelector('.loader') as HTMLDivElement,
  filter: document.getElementById('filter'),
};

let page = 1;

// functions
const displayLoader = () => {
  elements.loading.classList.add('show');
};

const clearLoader = () => {
  elements.loading.classList.remove('show');
};

const getPosts = async () => {
  const response: object[] = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${page}/posts`)
  ).json();

  return response;
};

const postTemplate = (posts: object[]) => {
  let markup = '';

  posts.forEach((post: { [prop: string]: any }) => {
    markup += `
    <div class="post">
      <div class="number">${post.id}</div>
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

  page++;
};

getAndDisplay();

// event listeners
const observer = new IntersectionObserver(getAndDisplay, {
  root: null,
  rootMargin: '-20px',
  threshold: 1,
});
