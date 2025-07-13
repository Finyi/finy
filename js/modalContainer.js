const openBtn = document.querySelector('.button-box-secrets');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
openBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.body.style.overflow = '';
});