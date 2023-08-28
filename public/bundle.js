'use strict';

const existeLocalStorage = ()=>{

    if(localStorage.length===0){
        window.localStorage.setItem("ingresos",JSON.stringify([]));
        window.localStorage.setItem("gastos",JSON.stringify([]));
        window.localStorage.setItem("ingresosTotales",0);
        window.localStorage.setItem("gastosTotales",0);

    }

};

let tablaIngresos = document.getElementById("tabla_ingresos");
let tablaGastos = document.getElementById("tabla_gastos");

let formulario = document.forms["navegacion"];
let tipo = formulario["ingreso_gasto"];
let concepto = formulario["concepto"];
let cantidad = formulario["valor"];

let tick = document.getElementById("tick");

let sumaGastos = document.getElementById("gastos_js");
let sumaIngresos = document.getElementById("ingresos_js");

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
     

      nuevoGastoConcepto.innerText = concepto;
      nuevoGastoCantidad.innerHTML = `
              
              <p class="eliminar">- ${parseFloat(cantidad).toLocaleString(
                "es"
              )} €</p>
              <p class="absoluto"><img src="https://img.icons8.com/?size=100&id=46&format=png" alt="" style="height: 1.3em;"></p>
              `;

      nuevoGastoRow.setAttribute("class", "table_row");
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

class Dato{

    constructor(tipo,concepto,cantidad){
        this.tipo = tipo;
        this.concepto=concepto;
        this.cantidad=cantidad;

    }
    
}

const guardarPresupuesto = () => {
  let contenedorCantidadDisponible = document.getElementById(
    "cantidad_disponible"
  );
  let ingresoT = window.localStorage.getItem("ingresosTotales");
  let gastoT = window.localStorage.getItem("gastosTotales");

  if (ingresoT > 0 || gastoT > 0) {
    let presupuestoFinal = ingresoT - gastoT;
    window.localStorage.setItem("presupuestoFinal", presupuestoFinal);
    let presupuestoLS = window.localStorage.getItem("presupuestoFinal");

    contenedorCantidadDisponible.innerHTML = `${presupuestoLS} €`;
  } else {
    contenedorCantidadDisponible.innerHTML = `-`;
  }
};

let ingresoGasto = () => {
  tick.addEventListener("click", () => {
    existeLocalStorage();

    if (concepto.value !== "" && cantidad.value !== "") {
      if (tipo.value === "mas") {
        let ingreso = new Dato(tipo.value, concepto.value, cantidad.value);

        let ingresosLocalStorage = JSON.parse(localStorage.getItem("ingresos"));
        ingresosLocalStorage.push(ingreso);
        localStorage.setItem("ingresos", JSON.stringify(ingresosLocalStorage));

        agregarIngresos();
      } else if (tipo.value === "menos") {
        let gasto = new Dato(tipo.value, concepto.value, cantidad.value);

        let gastosLocalStorage = JSON.parse(localStorage.getItem("gastos"));
        gastosLocalStorage.push(gasto);
        localStorage.setItem("gastos", JSON.stringify(gastosLocalStorage));

        restarGastos();
      }

    }
    concepto.value = "";
    cantidad.value = "";
    guardarPresupuesto();

  });
};

let basura = document.getElementById("close");

let eliminarTodo = () => {
  basura.addEventListener("click", () => {
    window.localStorage.clear();
    agregarIngresos();
    restarGastos();
    guardarPresupuesto();
  });
};

ingresoGasto();
agregarIngresos();
restarGastos();
eliminarTodo();
guardarPresupuesto();
