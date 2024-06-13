const caja = document.getElementById('imagen');
const imagen = document.getElementsByTagName('img');

caja.addEventListener('click', () => {
  imagen[0].setAttribute('src', 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png');
});