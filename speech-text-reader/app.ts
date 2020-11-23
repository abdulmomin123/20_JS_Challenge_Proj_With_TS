// dom elements
const elements = {
  main: document.querySelector('main') as HTMLDivElement,
  voicesSelect: document.getElementById('voices') as HTMLSelectElement,
  textarea: document.getElementById('text') as HTMLTextAreaElement,
  readBtn: document.getElementById('read') as HTMLButtonElement,
  toggleBtn: document.getElementById('toggle') as HTMLButtonElement,
  closeBtn: document.getElementById('close') as HTMLDivElement,
  textBox: document.querySelector('.text-box') as HTMLDivElement,
};

let voices: object[] = [];

// functions
const speak = (phrase: string) => {
  const utterance = new SpeechSynthesisUtterance(phrase);
  speechSynthesis.speak(utterance);
};

const openModal = () => {
  elements.textBox.classList.add('show');
};

const closeModal = () => {
  elements.textBox.classList.remove('show');
};

const configureSpeech = () => {
  voices.push(...speechSynthesis.getVoices());

  voices.forEach((voice: { [prop: string]: any }) => {
    const markup = `<option value="${voice.voiceURI}">${voice.voiceURI} ${voice.lang}</option>`;

    elements.voicesSelect.insertAdjacentHTML('beforeend', markup);
  });
};

// event listeners
// text box open handler
elements.toggleBtn.addEventListener('click', openModal);

// close modal handler
elements.closeBtn.addEventListener('click', closeModal);

// speech mode change handler
elements.voicesSelect.addEventListener('change', openModal);

// read provided text handler
elements.readBtn.addEventListener('click', () => {
  const text = elements.textarea.value;

  speak(text);
});

// pre-rendered phrase click handler
elements.main.addEventListener('click', e => {
  const target = (e.target as HTMLElement).closest('.box');

  if (!target?.classList.contains('box')) return;

  target.classList.add('active');
  setTimeout(() => target.classList.remove('active'), 1000);

  const info = `${target.querySelector('.info')?.textContent}`;

  speak(info);
});

// when the voices are loaded
window.speechSynthesis.onvoiceschanged = () => {
  configureSpeech();
};
