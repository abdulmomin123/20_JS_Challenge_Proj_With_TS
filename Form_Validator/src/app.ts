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
  if (field === 'userName') {
    if (elements.username.value.length > 2) return true;
    return false;
    //   'Username should be greater than 3 characters';
  } else if (field === 'email') {
    if (elements.email.value.includes('@')) return true;
    return false;
  } else if (field === 'password') {
    if (elements.password.value.length > 5) return true;
    return false;
  } else if (field === 'confirmPassword') {
    if (
      elements.password2.value.length > 5 &&
      elements.password2.value === elements.password.value
    )
      return true;
    return false;
  }

  return;
};

const validateForm = (e: Event) => {
  e.preventDefault();

  // check username
  console.log(checkField('userName'));

  // check email
  checkField('email');

  // check password
  checkField('password');

  // check confirm password
  checkField('confirmPassword');
};

// Event listeners
elements.form.addEventListener('submit', validateForm);
