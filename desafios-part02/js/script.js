const nightMode = document.getElementById('switch');
const pagina = document.getElementById('container');
nightMode.addEventListener('click', () => {
  // document.documentElement.classList.toggle('night-mode');
  pagina.classList.toggle('night-mode');
});
