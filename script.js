// Cache selectors to improve performance
const enterButton = document.getElementById('enter');
const deleteButton = document.querySelectorAll('.delete');
const input = document.getElementById('userInput');
const ul = document.querySelector('ul');
const listElement = document.querySelectorAll('li');

// Declare all functions before they are called. Create new functions as needed to avoid repetition
function checkInputLength() {
  return input.value.length;
}

// Cannot refactor as arrow function, as they do not allow for use of 'this'
function markDone() {
  this.classList.toggle('done');
}

function removeElement() {
  console.log('it works');
  // this.parentNode.removeChild(this);
  this.parentNode.classList.add('erase');
}

// Adds event listener to all preexisting li elements
for (let i = 0; i < listElement.length; i++) {
  listElement[i].addEventListener('click', markDone);
}

for (let i = 0; i < listElement.length; i++) {
  const btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Delete'));
  btn.setAttribute('class', 'delete');
  btn.addEventListener('click', removeElement);
  listElement[i].appendChild(btn);
}

for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener('click', removeElement);
}

function addToList() {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  li.appendChild(document.createTextNode(input.value));
  btn.appendChild(document.createTextNode('Delete'));
  btn.setAttribute('class', 'delete');
  li.addEventListener('click', markDone);
  btn.addEventListener('click', removeElement);
  ul.appendChild(li).appendChild(btn);
  input.value = '';
}

function addElementAfterClick() {
  if (checkInputLength() > 0) {
    addToList();
  }
}

function addElementAfterEnter(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    addToList();
  }
}

// User actions after everything else
enterButton.addEventListener('click', addElementAfterClick);

input.addEventListener('keypress', addElementAfterEnter);

// deleteButton.addEventListener('click', removeElement);
