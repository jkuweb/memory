const cajas = document.querySelectorAll('div.caja');
const imagenes = document.getElementsByTagName('img');

cajas.forEach((caja, i) => {
  caja.addEventListener('click', () => {
    imagenes[i].setAttribute('src', `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/${++i}.png`);
  });
});