const socket = io();

const btnName = document.querySelector('.btn-name');
const inputName = document.querySelector('.user-name input');
const userLabel = document.querySelector('.form-msg label');
const login = document.querySelector('.login');
const formMsg = document.querySelector('.form-msg');
const chat = document.querySelector('.chat');
const msg = document.getElementById('msg');
const btnSave = document.getElementById('btn-save');
let userName= '';

btnName.addEventListener('click', ()=>{
    userName = inputName.value;
    userLabel.innerHTML = userName;
    login.style.display = "none";
    socket.emit('user_connected', userName);
});

formMsg.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    socket.emit('send_msg', {name: userName, msg: msg.value})
    
    msg.value = '';
});
socket.on('new_msg', message => {
    const li = document.createElement('li')
    li.innerHTML = `
    <p class="name">${message.name}</p>
    <p class="message">${message.msg}</p>`;
    chat.appendChild(li);
});


btnSave.addEventListener('click', () => {
  // Вызываем роут на сервере для сохранения сообщений
  fetch('/save')
    .then(response => response.text())
    .then(message => console.log(message))
    .catch(error => console.log('Error saving messages:', error));
});