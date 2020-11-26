"use strict";
const elements = {
    draggable_list: document.getElementById('draggable-list'),
    check: document.getElementById('check'),
};
const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page',
];
const shuffleArr = (arr) => {
    let m = arr.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
};
const renderNames = () => {
    const names = shuffleArr([...richestPeople]);
    names.forEach((name, i) => {
        const markup = `
      <li ondragover="event.preventDefault()">
        <span class="number">${i + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${name}</p>
          <i class="fas fa-grip-lines" aria-hidden="true"></i>
        </div>
      </li>
    `;
        elements.draggable_list.insertAdjacentHTML('beforeend', markup);
    });
};
const checkOrder = () => {
    const userOder = [...elements.draggable_list.querySelectorAll('li')];
    userOder.forEach((user, i) => {
        const name = user.querySelector('.person-name').textContent;
        if (i === richestPeople.indexOf(name))
            user.className = 'right';
        else
            user.className = 'wrong';
    });
};
const startDrag = (e) => {
    var _a;
    const target = e.target;
    (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('text/plain', target.querySelector('.person-name').textContent);
};
const endDrag = (e) => {
    const target = e.target.closest('li');
    const data = e.dataTransfer.getData('text/plain');
    target.classList.remove('over');
    target.querySelector('.person-name').textContent = data;
    console.log(target);
};
renderNames();
elements.check.addEventListener('click', checkOrder);
elements.draggable_list.addEventListener('dragstart', startDrag);
elements.draggable_list.addEventListener('dragover', e => e.target.closest('li').classList.add('over'));
elements.draggable_list.addEventListener('dragleave', e => e.target.closest('li').classList.remove('over'));
elements.draggable_list.addEventListener('drop', endDrag);
