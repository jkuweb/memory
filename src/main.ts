import { tablero } from "./modelo";
import { iniciaPartida } from "./motor";
import { handleCompruebaClick } from "./ui";

const btnInicio = document.getElementById("btn-inicio");
const cajas = document.querySelectorAll(".grid-item");

if (
  btnInicio !== null &&
  btnInicio !== undefined &&
  btnInicio instanceof HTMLElement
) {
  btnInicio.addEventListener("click", () => {
    iniciaPartida(tablero);
  });
}

cajas.forEach((caja) => {
  caja.addEventListener("click", () => {
    const cajaIndice = caja.getAttribute("data-indice-array");

    if (cajaIndice !== undefined && cajaIndice !== null) {
      const cajaId = parseInt(cajaIndice);
      handleCompruebaClick(tablero, cajaId);
    }
  });
});
