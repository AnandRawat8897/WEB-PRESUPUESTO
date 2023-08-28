"use strict";

import { tablaGastos, sumaGastos } from "./variablesComunes";


const restarGastos = () => {
  let contenedorGastosTabla = document.getElementById("tabla_gastos");
  let localSt = JSON.parse(localStorage.getItem("gastos"));
  let sumaCantidad = 0;

  if (localSt && localSt.length > 0) {
    contenedorGastosTabla.innerHTML = "";

    localSt.forEach((element) => {
      let concepto = element.concepto;
      let cantidad = element.cantidad;

      let nuevoGastoRow = document.createElement("tr");
      let nuevoGastoConcepto = document.createElement("td");
      let nuevoGastoCantidad = document.createElement("td");
      // let borraElemento = document.createElement("td");

      nuevoGastoConcepto.innerText = concepto;
      nuevoGastoCantidad.innerHTML = `
              
              <p class="eliminar">- ${parseFloat(cantidad).toLocaleString(
                "es"
              )} €</p>
              <p class="absoluto"><img src="https://img.icons8.com/?size=100&id=46&format=png" alt="" style="height: 1.3em;"></p>
              `;

      nuevoGastoRow.setAttribute("class", "table_row");
      // nuevoIngresoConcepto.setAttribute("class","eliminar");
      nuevoGastoCantidad.setAttribute("class", "padre");

      tablaGastos.appendChild(nuevoGastoRow);
      nuevoGastoRow.appendChild(nuevoGastoConcepto);
      nuevoGastoRow.appendChild(nuevoGastoCantidad);
      sumaCantidad += parseFloat(cantidad);

      window.localStorage.setItem("gastosTotales", sumaCantidad);
      let gastosPantallaTotal = window.localStorage.getItem(
        "gastosTotales",
        sumaCantidad
      );
      sumaGastos.innerHTML = `
            ${gastosPantallaTotal} €  `;
    });
  } else {
    contenedorGastosTabla.innerHTML = "";

    contenedorGastosTabla.innerHTML = `
      <tr class="table_row">
      <td>No hay ingresos</td>
      </tr>
  
      
      `;

    sumaGastos.innerHTML = `
            -   `;
  }
};

export { restarGastos };
