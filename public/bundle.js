'use strict';

const existeLocalStorage = ()=>{

    if(localStorage.length===0){
        window.localStorage.setItem("ingresos",JSON.stringify([]));
        window.localStorage.setItem("gastos",JSON.stringify([]));
        window.localStorage.setItem("ingresosTotales",0);
        window.localStorage.setItem("gastosTotales",0);

    }

};

// const concept = document.getElementById("concepto")

// const selection = document.querySelector("#ingreso_gasto")

let tablaIngresos = document.getElementById("tabla_ingresos");
let tablaGastos = document.getElementById("tabla_gastos");

let formulario = document.forms["navegacion"];
let tipo = formulario["ingreso_gasto"];
let concepto = formulario["concepto"];
let cantidad = formulario["valor"];

let tick = document.getElementById("tick");

let sumaGastos$1 = document.getElementById("gastos_js");
let sumaIngresos$1 = document.getElementById("ingresos_js");

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
      sumaCantidad += parseFloat(cantidad);

      window.localStorage.setItem("ingresosTotales", sumaCantidad);
      let ingresosPantallaTotal = window.localStorage.getItem(
        "ingresosTotales",
        sumaCantidad
      );
      sumaIngresos$1.innerHTML = `
            ${ingresosPantallaTotal} €  `;
    });
  } else {
    
    contenedorIngresosTabla.innerHTML = "";

    contenedorIngresosTabla.innerHTML = `
    <tr class="table_row">
    <td>No hay ingresos</td>
    </tr>    
    `;

    sumaIngresos$1.innerHTML = `
            -   `;
  }
};

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
      sumaGastos$1.innerHTML = `
            ${gastosPantallaTotal} €  `;
    });
  } else {
    contenedorGastosTabla.innerHTML = "";

    contenedorGastosTabla.innerHTML = `
      <tr class="table_row">
      <td>No hay ingresos</td>
      </tr>
  
      
      `;

      sumaGastos$1.innerHTML = `
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

let sumaIngresos=0,sumaGastos=0;

document.getElementById("ingresos_js");
document.getElementById("gastos_js");
let cantidadTotal = document.getElementById("cantidad_disponible");

let ingresoGasto = () => {
  tick.addEventListener("click", () => {
    existeLocalStorage();

    if (concepto.value !== "" && cantidad.value !== "") {
      if (tipo.value === "mas") {       

        let ingreso =new Dato(tipo.value,concepto.value,cantidad.value);

        let ingresosLocalStorage = JSON.parse(localStorage.getItem("ingresos"));
        ingresosLocalStorage.push(ingreso);
        localStorage.setItem("ingresos",JSON.stringify(ingresosLocalStorage));
        

        // let sumatorioIngresos = parseFloat(cantidad.value);
        // sumaIngresos+=sumatorioIngresos;
        // htmlIngresos.innerHTML =sumaIngresos.toLocaleString("es")+ "€";
        agregarIngresos();
        

      } else if (tipo.value === "menos") {

        let gasto =new Dato(tipo.value,concepto.value,cantidad.value);

        let gastosLocalStorage = JSON.parse(localStorage.getItem("gastos"));
        gastosLocalStorage.push(gasto);
        localStorage.setItem("gastos",JSON.stringify(gastosLocalStorage));
        
        
        // let sumatorioGastos = parseFloat(cantidad.value);
        // sumaGastos+=sumatorioGastos;
        // htmlGastos.innerHTML =sumaGastos.toLocaleString("es")+ "€";
        restarGastos();

      }

      let sobrante=sumaIngresos-sumaGastos;
      cantidadTotal.innerHTML = sobrante+ "€";
    }
    concepto.value="";
    cantidad.value="";
  });

};

let basura = document.getElementById("close");

let eliminarTodo =()=>{
    document.getElementById("tabla_ingresos");

    basura.addEventListener("click",()=>{
        window.localStorage.clear();
        agregarIngresos();
        restarGastos();
    });
};

ingresoGasto();
agregarIngresos();
restarGastos();
eliminarTodo();
