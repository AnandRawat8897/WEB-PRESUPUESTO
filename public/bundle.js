'use strict';

// const concept = document.getElementById("concepto")

// const selection = document.querySelector("#ingreso_gasto")
let crearLocalStorage = ()=>{

    if(localStorage.length===0){
    
    window.localStorage.setItem("ingresos",JSON.stringify([]));
    window.localStorage.setItem("gastos",JSON.stringify([]));
}
};
let tablaIngresos = document.getElementById("tabla_ingresos");
let tablaGastos = document.getElementById("tabla_gastos");

let formulario = document.forms["navegacion"];
let tipo = formulario["ingreso_gasto"];
let concepto = formulario["concepto"];
let cantidad = formulario["valor"];

let tick = document.getElementById("tick");

const agregarIngresos  = (concepto,cantidad)=>{

    let nuevoIngresoRow=document.createElement("tr");
    let nuevoIngresoConcepto=document.createElement("td");
    let nuevoIngresoCantidad=document.createElement("td");
    document.createElement("td");
    

    nuevoIngresoConcepto.innerText =concepto;
    nuevoIngresoCantidad.innerHTML=`
    
    <p class="eliminar">+ ${parseFloat(cantidad).toLocaleString("es")} €</p>
    <p class="absoluto"><img src="https://img.icons8.com/?size=100&id=46&format=png" alt="" style="height: 1.3em;"></p>
    `;
    
    
    nuevoIngresoRow.setAttribute("class","table_row");
    // nuevoIngresoConcepto.setAttribute("class","eliminar");
    nuevoIngresoCantidad.setAttribute("class","padre");

    tablaIngresos.appendChild(nuevoIngresoRow);
    nuevoIngresoRow.appendChild(nuevoIngresoConcepto);
    nuevoIngresoRow.appendChild(nuevoIngresoCantidad);
    
    

    
};

const restarGastos  = (concepto,cantidad)=>{

    let nuevoGastoRow=document.createElement("tr");
    let nuevoGastoConcepto=document.createElement("td");
    let nuevoGastoCantidad=document.createElement("td");
    

    nuevoGastoConcepto.innerText =concepto;
    nuevoGastoCantidad.innerText=`- ${cantidad} €`;
    
    nuevoGastoRow.setAttribute("class","table_row");

    tablaGastos.appendChild(nuevoGastoRow);
    nuevoGastoRow.appendChild(nuevoGastoConcepto);
    nuevoGastoRow.appendChild(nuevoGastoCantidad);
    
};

class Dato{

    constructor(tipo,concepto,cantidad){
        this.tipo = tipo;
        this.concepto=concepto;
        this.cantidad=cantidad;

    }
    
}

let sumaIngresos=0,sumaGastos=0;

let htmlIngresos = document.getElementById("ingresos_js");
let htmlGastos = document.getElementById("gastos_js");
let cantidadTotal = document.getElementById("cantidad_disponible");

let ingresoGasto = () => {
  tick.addEventListener("click", () => {

    if (concepto.value !== "" && cantidad.value !== "") {
      if (tipo.value === "mas") {

        let ingreso =new Dato(tipo.value,concepto.value,cantidad.value);
        

        let ingresosLocalStorage = JSON.parse(localStorage.getItem("ingresos"));
        ingresosLocalStorage.push(ingreso);
        localStorage.setItem("ingresos",JSON.stringify(ingresosLocalStorage));
        let i= ingresosLocalStorage.length-1;

        console.log(i);
        
        console.log(ingresosLocalStorage[i].concepto,ingresosLocalStorage[i].cantidad);

        agregarIngresos(ingresosLocalStorage[i].concepto, ingresosLocalStorage[i].cantidad);

        let sumatorioIngresos = parseFloat(cantidad.value);
        sumaIngresos+=sumatorioIngresos;
        htmlIngresos.innerHTML =sumaIngresos.toLocaleString("es")+ "€";

      } else if (tipo.value === "menos") {
        restarGastos(concepto.value, cantidad.value);
        
        let sumatorioGastos = parseFloat(cantidad.value);
        sumaGastos+=sumatorioGastos;
        htmlGastos.innerHTML =sumaGastos.toLocaleString("es")+ "€";

      }

      let sobrante=sumaIngresos-sumaGastos;
      cantidadTotal.innerHTML = sobrante+ "€";
    }
  });

};

// import { agregarIngresos } from "./ingresos";

crearLocalStorage();
ingresoGasto();