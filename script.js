const humbergerBtn = document.querySelector('.fa-bars');
const timesBtn = document.querySelector('.fa-times');
const menuBar = document.querySelector('.menu-bar');

humbergerBtn.addEventListener('click', () => {
  menuBar.style.display = 'block';
});
timesBtn.addEventListener('click', () => {
  menuBar.style.display = 'none';
});