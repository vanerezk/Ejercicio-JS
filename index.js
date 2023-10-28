"use strict";

let contador = document.querySelector("#numero");

let valor = contador.value;

function aumentar() {
  valor++;
  contador.value = valor;
}

document.querySelector("#boton_1").addEventListener("click", aumentar);

function disminuir() {
  valor--;
  contador.value = valor;
}

document.querySelector("#boton_2").addEventListener("click", disminuir);
