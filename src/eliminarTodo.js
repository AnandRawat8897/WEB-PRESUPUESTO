import { agregarIngresos } from "./ingresos";
let basura = document.getElementById("close");

let eliminarTodo =()=>{
    let contenedorIngresosTabla = document.getElementById("tabla_ingresos");

    basura.addEventListener("click",()=>{
        window.localStorage.clear();
        agregarIngresos();
    })
}

export {eliminarTodo};
