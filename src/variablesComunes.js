// const concept = document.getElementById("concepto")

// const selection = document.querySelector("#ingreso_gasto")
let crearLocalStorage = ()=>{

    if(localStorage.length===0){
    
    window.localStorage.setItem("ingresos",JSON.stringify([]));
    window.localStorage.setItem("gastos",JSON.stringify([]));
}
}
let tablaIngresos = document.getElementById("tabla_ingresos")
let tablaGastos = document.getElementById("tabla_gastos")

let formulario = document.forms["navegacion"];
let tipo = formulario["ingreso_gasto"];
let concepto = formulario["concepto"];
let cantidad = formulario["valor"];

let tick = document.getElementById("tick");


export {crearLocalStorage,tick,formulario,tipo,concepto,cantidad,tablaGastos,tablaIngresos}