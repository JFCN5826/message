const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');
const message = document.getElementById('message');
const insultoText = document.getElementById('insultoText');

const INSULTO = '¡Eres una sapa hijueputa!';

showBtn.addEventListener('click', () => {
insultoText.textContent = INSULTO;
message.style.display = 'block';
});

hideBtn.addEventListener('click', () => {
insultoText.textContent = '';
message.style.display = 'none';
});