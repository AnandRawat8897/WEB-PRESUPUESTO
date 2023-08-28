import { tablaIngresos, sumaIngresos } from "./variablesComunes";

const agregarIngresos = () => {
  let contenedorIngresosTabla = document.getElementById("tabla_ingresos");
  let localSt = JSON.parse(localStorage.getItem("ingresos"));
  let sumaCantidad = 0;

  if (localSt && localSt.length > 0) {
    contenedorIngresosTabla.innerHTML = "";

    localSt.forEach((element) => {
      let concepto = element.concepto;
      let cantidad = element.cantidad;

      let nuevoIngresoRow = document.createElement("tr");
      let nuevoIngresoConcepto = document.createElement("td");
      let nuevoIngresoCantidad = document.createElement("td");

      nuevoIngresoConcepto.innerText = concepto;
      nuevoIngresoCantidad.innerHTML = `
            
            <p class="eliminar">+ ${parseFloat(cantidad).toLocaleString(
              "es"
            )} €</p>
            <p class="absoluto"><img src="https://img.icons8.com/?size=100&id=46&format=png" alt="" style="height: 1.3em;"></p>
            `;

      nuevoIngresoRow.setAttribute("class", "table_row");
      nuevoIngresoCantidad.setAttribute("class", "padre");

      tablaIngresos.appendChild(nuevoIngresoRow);
      nuevoIngresoRow.appendChild(nuevoIngresoConcepto);
      nuevoIngresoRow.appendChild(nuevoIngresoCantidad);
      sumaCantidad += parseFloat(cantidad);

      window.localStorage.setItem("ingresosTotales", sumaCantidad);
      let ingresosPantallaTotal = window.localStorage.getItem(
        "ingresosTotales",
        sumaCantidad
      );
      sumaIngresos.innerHTML = `
            ${ingresosPantallaTotal} €  `;
    });
  } else {
    contenedorIngresosTabla.innerHTML = "";

    contenedorIngresosTabla.innerHTML = `
    <tr class="table_row">
    <td>No hay ingresos</td>
    </tr>    
    `;

    sumaIngresos.innerHTML = `
            -   `;
  }
};

export { agregarIngresos };
