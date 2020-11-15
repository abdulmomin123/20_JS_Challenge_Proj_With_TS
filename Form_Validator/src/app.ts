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
  field: 'username' | 'email' | 'password' | 'confirmPassword'
) => {
  if (field === 'username') {
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

const updateField = (
  field: 'username' | 'email' | 'password' | 'confirmPassword',
  isPassed: boolean
) => {
  if (field === 'username') {
    const target = document.querySelector('#username ~ small')!;

    isPassed
      ? (elements.username.classList.add('success'), (target.textContent = ''))
      : (target.textContent = 'Username should be greater than 3 characters');
  } else if (field === 'email') {
    const target = document.querySelector('#email ~ small')!;

    isPassed
      ? (elements.email.classList.add('success'), (target.textContent = ''))
      : (target.textContent = 'Invalid Email');
  } else if (field === 'password') {
    const target = document.querySelector('#password ~ small')!;

    isPassed
      ? (elements.password.classList.add('success'), (target.textContent = ''))
      : (target.textContent = 'Password should be greater than 5 characters');
  } else if (field === 'confirmPassword') {
    const target = document.querySelector('#password2 ~ small')!;

    isPassed
      ? (elements.password2.classList.add('success'), (target.textContent = ''))
      : (target.textContent = "Passwords doesn't match");
  }
};

const validateForm = (e: Event) => {
  e.preventDefault();

  // check username
  const isUsername: boolean = checkField('username') as boolean;

  updateField('username', isUsername);
  // check email
  const isEmail: boolean = checkField('email') as boolean;

  updateField('email', isEmail);
  // check password
  const isPassword: boolean = checkField('password') as boolean;

  updateField('password', isPassword);
  // check confirm password
  const isConfirmPassword: boolean = checkField('confirmPassword') as boolean;
  updateField('confirmPassword', isConfirmPassword);
};

// Event listeners
elements.form.addEventListener('submit', validateForm);
