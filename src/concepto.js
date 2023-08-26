
import { agregarIngresos } from "./ingresos";

import { restarGastos } from "./gastos";

import {tick, tipo, concepto, cantidad } from "./variablesComunes";

import Dato from "./clases";

let sumaIngresos=0,sumaGastos=0;

let htmlIngresos = document.getElementById("ingresos_js")
let htmlGastos = document.getElementById("gastos_js")
let cantidadTotal = document.getElementById("cantidad_disponible")

let ingresoGasto = () => {
  tick.addEventListener("click", () => {

    if (concepto.value !== "" && cantidad.value !== "") {
      if (tipo.value === "mas") {

        console.log(localStorage.length);

        let ingreso =new Dato(tipo.value,concepto.value,cantidad.value);

        let ingresosLocalStorage = JSON.parse(localStorage.getItem("ingresos"));

        if(!ingresosLocalStorage){

           window.localStorage.setItem("ingresos",JSON.stringify(ingreso));

        }else{

        ingresosLocalStorage.push(ingreso);
        localStorage.setItem("ingresos",JSON.stringify(ingresosLocalStorage));
        
        }
        


        // console.log(i);
        
        // console.log(ingresosLocalStorage[i].concepto,ingresosLocalStorage[i].cantidad);

        // agregarIngresos(ingresosLocalStorage[i].concepto, ingresosLocalStorage[i].cantidad);

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


export { ingresoGasto };
