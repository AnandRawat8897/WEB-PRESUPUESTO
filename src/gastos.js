"use strict";

import { tablaGastos } from "./variablesComunes";

// const restarGastos = (concepto, cantidad) => {
//   let nuevoGastoRow = document.createElement("tr");
//   let nuevoGastoConcepto = document.createElement("td");
//   let nuevoGastoCantidad = document.createElement("td");

//   nuevoGastoConcepto.innerText = concepto;
//   nuevoGastoCantidad.innerText = `- ${cantidad} €`;

//   nuevoGastoRow.setAttribute("class", "table_row");

//   tablaGastos.appendChild(nuevoGastoRow);
//   nuevoGastoRow.appendChild(nuevoGastoConcepto);
//   nuevoGastoRow.appendChild(nuevoGastoCantidad);
// };

const restarGastos = () => {
  let contenedorGastosTabla = document.getElementById("tabla_gastos");
  let localSt = JSON.parse(localStorage.getItem("gastos"));
  let sumaCantidad = 0;

  if (localSt && localSt.length > 0) {
    contenedorGastosTabla.innerHTML = "";

    localSt.forEach((element) => {
      let concepto = element.concepto;
      let cantidad = element.cantidad;

      let nuevoIngresoRow = document.createElement("tr");
      let nuevoIngresoConcepto = document.createElement("td");
      let nuevoIngresoCantidad = document.createElement("td");
      // let borraElemento = document.createElement("td");

      nuevoIngresoConcepto.innerText = concepto;
      nuevoIngresoCantidad.innerHTML = `
              
              <p class="eliminar">+ ${parseFloat(-cantidad).toLocaleString(
                "es"
              )} €</p>
              <p class="absoluto"><img src="https://img.icons8.com/?size=100&id=46&format=png" alt="" style="height: 1.3em;"></p>
              `;

      nuevoIngresoRow.setAttribute("class", "table_row");
      // nuevoIngresoConcepto.setAttribute("class","eliminar");
      nuevoIngresoCantidad.setAttribute("class", "padre");

      tablaIngresos.appendChild(nuevoIngresoRow);
      nuevoIngresoRow.appendChild(nuevoIngresoConcepto);
      nuevoIngresoRow.appendChild(nuevoIngresoCantidad);
      sumaCantidad += parseFloat(cantidad);
      window.localStorage.setItem("gastosTotales", sumaCantidad);
    });
  } else {
    contenedorGastosTabla.innerHTML = "";

    contenedorGastosTabla.innerHTML = `
      <tr class="table_row">
      <td>No hay ingresos</td>
      </tr>
  
      
      `;
  }
};

export { restarGastos };
