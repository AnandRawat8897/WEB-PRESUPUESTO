import { agregarIngresos } from "./ingresos";
import { restarGastos } from "./gastos";
import { guardarPresupuesto } from "./presupuestoTotal";
let basura = document.getElementById("close");

let eliminarTodo = () => {
  basura.addEventListener("click", () => {
    window.localStorage.clear();
    agregarIngresos();
    restarGastos();
    guardarPresupuesto();
  });
};

export { eliminarTodo };
