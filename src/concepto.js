import { existeLocalStorage } from "./localStorage";

import { agregarIngresos } from "./ingresos";

import { restarGastos } from "./gastos";

import {tick, tipo, concepto, cantidad } from "./variablesComunes";

import Dato from "./clases";

import { guardarPresupuesto } from "./presupuestoTotal";

let sumaIngresos=0,sumaGastos=0;

let cantidadTotal = document.getElementById("cantidad_disponible")

let ingresoGasto = () => {
  tick.addEventListener("click", () => {
    existeLocalStorage();

    if (concepto.value !== "" && cantidad.value !== "") {
      if (tipo.value === "mas") {       

        let ingreso =new Dato(tipo.value,concepto.value,cantidad.value);

        let ingresosLocalStorage = JSON.parse(localStorage.getItem("ingresos"));
        ingresosLocalStorage.push(ingreso);
        localStorage.setItem("ingresos",JSON.stringify(ingresosLocalStorage));
        

        agregarIngresos();
        
        

      } else if (tipo.value === "menos") {

        let gasto =new Dato(tipo.value,concepto.value,cantidad.value);

        let gastosLocalStorage = JSON.parse(localStorage.getItem("gastos"));
        gastosLocalStorage.push(gasto);
        localStorage.setItem("gastos",JSON.stringify(gastosLocalStorage));
        
        
        restarGastos();

      }

      let sobrante=sumaIngresos-sumaGastos;
      cantidadTotal.innerHTML = sobrante+ "€";
    }
    concepto.value="";
    cantidad.value="";
    guardarPresupuesto();
    
    
  });

};


export { ingresoGasto };
