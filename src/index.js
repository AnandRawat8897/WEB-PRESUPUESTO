import { ingresoGasto } from "./concepto";
import { agregarIngresos } from "./ingresos";
import { eliminarTodo } from "./eliminarTodo";
import { restarGastos } from "./gastos";
import { guardarPresupuesto } from "./presupuestoTotal";
import { existeLocalStorage } from "./localStorage";
import { eliminarElemento } from "./eliminarElemento";

existeLocalStorage();
ingresoGasto();
agregarIngresos();
restarGastos();
eliminarTodo();
guardarPresupuesto();
eliminarElemento();
