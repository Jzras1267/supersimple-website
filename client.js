const socket = io('http://localhost:5000');

socket.on('message', (msg) => {
    const li = document.createElement('li');
    li.textContent = msg;
    document.getElementById('messages').appendChild(li);
});

function sendMessage() {
    const message = document.getElementById('message').value;
    socket.emit('message', message);
}