'use strict';


import { tablaGastos } from "./variablesComunes";

const restarGastos  = (concepto,cantidad)=>{

    let nuevoGastoRow=document.createElement("tr");
    let nuevoGastoConcepto=document.createElement("td");
    let nuevoGastoCantidad=document.createElement("td");
    

    nuevoGastoConcepto.innerText =concepto;
    nuevoGastoCantidad.innerText=`- ${cantidad} €`;
    
    nuevoGastoRow.setAttribute("class","table_row");

    tablaGastos.appendChild(nuevoGastoRow)
    nuevoGastoRow.appendChild(nuevoGastoConcepto);
    nuevoGastoRow.appendChild(nuevoGastoCantidad);
    
}

export {restarGastos};

