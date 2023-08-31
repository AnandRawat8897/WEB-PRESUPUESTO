import { ingresoGasto } from "./concepto";
import { agregarIngresos } from "./ingresos";
import { eliminarTodo } from "./eliminarTodo";
import { restarGastos } from "./gastos";
import { guardarPresupuesto } from "./presupuestoTotal";

ingresoGasto();
agregarIngresos();
restarGastos();
eliminarTodo();
guardarPresupuesto();

let tablaIngresos = document.getElementById("tabla_ingresos");

tablaIngresos.addEventListener("click", (e) => {
  if (e.target.matches(".btn-eliminar")) {
    let id = e.target.closest(".table_row").id;

    let LS = JSON.parse(window.localStorage.getItem("ingresos"));
    console.log(LS);

    let nuevoLS = LS.filter((elemento) => {
      let idLS = elemento.id;

      if (id != idLS && LS.length > 0) {
        return elemento;       
      } 

    });
    
    console.log(nuevoLS);
    let nuevoLSJSON = JSON.stringify(nuevoLS);
    console.log(nuevoLSJSON);
    window.localStorage.setItem("ingresos",nuevoLSJSON)

  }
  agregarIngresos();
  guardarPresupuesto();

 
});