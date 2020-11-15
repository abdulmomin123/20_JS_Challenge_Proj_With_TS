// DOM Elements
const elements = {
  form: document.querySelector('#form') as HTMLFormElement,
  username: document.querySelector('#username') as HTMLInputElement,
  email: document.querySelector('#email') as HTMLInputElement,
  password: document.querySelector('#password') as HTMLInputElement,
  password2: document.querySelector('#password2') as HTMLInputElement,
};

// Functions
const checkField = (
  field: 'userName' | 'email' | 'password' | 'confirmPassword'
) => {
  //
};

const validateForm = (e: Event) => {
  e.preventDefault();

  // check username
  // check email
  // check password
  // check confirm password
};

// Event listeners
elements.form.addEventListener('submit', validateForm);
