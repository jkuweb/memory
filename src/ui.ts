import { Tablero } from "./modelo";
import {
  esPartidaCompleta,
  iniciaPartida,
  parejaEncontrada,
  parejaNoEncontrada,
  sePuedeVoltearLaCarta,
  sonPareja,
  voltearLaCarta,
} from "./motor";

const imagenes = document.getElementsByTagName("img");

const mostrarImagen = (tablero: Tablero, indice: number) => {
  const imagenSrc = tablero.cartas[indice].imagen;
  const imagen = imagenes[indice];
  imagen.setAttribute("src", imagenSrc);
};

const ocultarImagenes = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
) => {
  const imagenA = imagenes[indiceA];
  const imagenB = imagenes[indiceB];
  imagenA.setAttribute("src", "");
  imagenB.setAttribute("src", "");
  parejaNoEncontrada(tablero, indiceA, indiceB);
};

const ocultarTodasLasImagenes = () => {
  for (let index = 0; index < imagenes.length; index++) {
    const imagen = imagenes[index];
    imagen.setAttribute("src", "");
  }
};

const mostrarBtn = () => {
  const btnBox = document.getElementById("botones");
  const btnNuevaPartida = document.createElement("button");
  btnNuevaPartida.textContent = "Nueva Partida";
  if (
    btnBox !== undefined &&
    btnBox !== null &&
    btnBox instanceof HTMLButtonElement
  ) {
    btnBox.appendChild(btnNuevaPartida);
  }
};

export const handleCompruebaClick = (tablero: Tablero, indice: number) => {
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    voltearLaCarta(tablero, indice);
    mostrarImagen(tablero, indice);
  }
  if (tablero.estadoPartida === "DosCartasLevantadas") {
    const indiceA = tablero.indiceCartaVolteadaA;
    const indiceB = tablero.indiceCartaVolteadaB;
    if (indiceA !== undefined && indiceB !== undefined) {
      if (sonPareja(indiceA, indiceB, tablero)) {
        parejaEncontrada(tablero, indiceA, indiceB);
        if (esPartidaCompleta(tablero)) {
          ocultarTodasLasImagenes();
          mostrarBtn();
          iniciaPartida(tablero);
        }
      } else {
        setTimeout(() => {
          ocultarImagenes(tablero, indiceA, indiceB);
        }, 500);
      }
    }
  }
};
