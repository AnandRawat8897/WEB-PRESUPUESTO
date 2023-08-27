import { tablaIngresos } from "./variablesComunes";

const agregarIngresos = () => {
  let contenedorIngresosTabla = document.getElementById("tabla_ingresos");
  let localSt = JSON.parse(localStorage.getItem("ingresos"));
  // let i = concepto.length;

  //   console.log(localSt);
  if (localSt && localSt.length > 0) {
    contenedorIngresosTabla.innerHTML = "";

    localSt.forEach((element) => {
      let concepto = element.concepto;
      let cantidad = element.cantidad;

      let nuevoIngresoRow = document.createElement("tr");
      let nuevoIngresoConcepto = document.createElement("td");
      let nuevoIngresoCantidad = document.createElement("td");
      // let borraElemento = document.createElement("td");

      nuevoIngresoConcepto.innerText = concepto;
      nuevoIngresoCantidad.innerHTML = `
            
            <p class="eliminar">+ ${parseFloat(cantidad).toLocaleString(
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
    });
  } else {
    contenedorIngresosTabla.innerHTML = "";

    contenedorIngresosTabla.innerHTML = `
    <tr class="table_row">
    <td>No hay ingresos</td>
    </tr>

    
    `;
  }
};

// agregarIngresos("hola",1200);

export { agregarIngresos };
