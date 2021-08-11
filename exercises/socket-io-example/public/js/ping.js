const socket = window.io();

const button = document.querySelector('#pingButton');
button.addEventListener('click', () => socket.emit('ping'));

const createMessage = (message) => {
  const messageUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messageUl.appendChild(li);
};
socket.on('ola', (message) => createMessage(message));

socket.on('pong', (message) => createMessage(message));

