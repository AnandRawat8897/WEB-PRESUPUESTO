let tablaIngresos = document.getElementById("tabla_ingresos")
let tablaGastos = document.getElementById("tabla_gastos")

let formulario = document.forms["navegacion"];
let tipo = formulario["ingreso_gasto"];
let concepto = formulario["concepto"];
let cantidad = formulario["valor"];

let tick = document.getElementById("tick");

let sumaGastos = document.getElementById("gastos_js");
let sumaIngresos = document.getElementById("ingresos_js");


export {sumaIngresos,sumaGastos,tick,formulario,tipo,concepto,cantidad,tablaGastos,tablaIngresos}