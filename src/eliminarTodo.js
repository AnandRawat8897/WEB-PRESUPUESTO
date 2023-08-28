import { agregarIngresos } from "./ingresos";
import { restarGastos } from "./gastos";
import { guardarPresupuesto } from "./presupuestoTotal";
let basura = document.getElementById("close");

let eliminarTodo =()=>{
    let contenedorIngresosTabla = document.getElementById("tabla_ingresos");

    basura.addEventListener("click",()=>{
        window.localStorage.clear();
        agregarIngresos();
        restarGastos();
        guardarPresupuesto();
    })
}

export {eliminarTodo};
