const cartas = ['🦊', '🦝', '🐮', '🐷', '🐸', '🐨', '🦊', '🦝', '🐮', '🐷', '🐸', '🐨'];

const barajarCartar = (cartas) => {
  for (let i = cartas.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
};

console.log(barajarCartar(cartas))

