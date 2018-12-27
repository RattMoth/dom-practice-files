// Cache selectors to improve performance
const enterButton = document.getElementById('enter');
const deleteButton = document.querySelectorAll('.delete');
const input = document.getElementById('userInput');
const ul = document.querySelector('ul');
const listElement = document.querySelectorAll('li');

const checkInputLength = () => input.value.length;

function markDone() {
  this.classList.toggle('done');
}

function removeElement() {
  // console.log('it works');
  this.parentNode.classList.add('erase');
}

// Adds event listener to all preexisting li elements
for (let i = 0; i < listElement.length; i++) {
  listElement[i].addEventListener('click', markDone);
}

// Adds delete button to all preexisting li elements
for (let i = 0; i < listElement.length; i++) {
  const btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Delete'));
  btn.setAttribute('class', 'delete');
  btn.addEventListener('click', removeElement);
  listElement[i].appendChild(btn);
}

const addToList = () => {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  li.appendChild(document.createTextNode(input.value));
  btn.appendChild(document.createTextNode('Delete'));
  btn.setAttribute('class', 'delete');
  li.addEventListener('click', markDone);
  btn.addEventListener('click', removeElement);
  ul.appendChild(li).appendChild(btn);
  input.value = '';
};

const addElementAfterClick = () => {
  if (checkInputLength() > 0) {
    addToList();
  }
};

const addElementAfterEnter = (event) => {
  if (input.value.length > 0 && event.keyCode === 13) {
    addToList();
  }
};

// User actions after everything else
enterButton.addEventListener('click', addElementAfterClick);

input.addEventListener('keypress', addElementAfterEnter);

deleteButton.addEventListener('click', removeElement);

// CHANGES
// Cleaned up and added comments, removed unnecessary for loop to deleteButton event listener,
// changed function declarations to ES6 arrows when possible (for functions not using 'this')
