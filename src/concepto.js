import { existeLocalStorage } from "./localStorage";
import { agregarIngresos } from "./ingresos";
import { restarGastos } from "./gastos";
import { tick, tipo, concepto, cantidad } from "./variablesComunes";
import { Ingreso, Gasto } from "./clases";
import { guardarPresupuesto } from "./presupuestoTotal";

let ingresoGasto = () => {
  existeLocalStorage();
  tick.addEventListener("click", () => {
    let id = window.localStorage.getItem("id");

    if (concepto.value !== "" && cantidad.value !== "") {
      if (tipo.value === "mas") {
        let ingreso = new Ingreso(
          id,
          tipo.value,
          concepto.value,
          cantidad.value
        );

        let ingresosLocalStorage = JSON.parse(localStorage.getItem("ingresos"));
        ingresosLocalStorage.push(ingreso);
        localStorage.setItem("ingresos", JSON.stringify(ingresosLocalStorage));

        agregarIngresos();
      } else if (tipo.value === "menos") {
        let gasto = new Gasto(id, tipo.value, concepto.value, cantidad.value);

        let gastosLocalStorage = JSON.parse(localStorage.getItem("gastos"));
        gastosLocalStorage.push(gasto);
        localStorage.setItem("gastos", JSON.stringify(gastosLocalStorage));

        restarGastos();
      }

      id++;
      window.localStorage.setItem("id", id);
    }
    concepto.value = "";
    cantidad.value = "";
    guardarPresupuesto();
  });
};

export { ingresoGasto };
