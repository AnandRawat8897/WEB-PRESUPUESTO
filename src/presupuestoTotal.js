import { existeLocalStorage } from "./localStorage";

const guardarPresupuesto = () => {
  let contenedorCantidadDisponible = document.getElementById(
    "cantidad_disponible"
  );
  let ingresoT = window.localStorage.getItem("ingresosTotales");
  let gastoT = window.localStorage.getItem("gastosTotales");

  if (ingresoT > 0 || gastoT > 0) {
    let presupuestoFinal = ingresoT - gastoT;
    window.localStorage.setItem("presupuestoFinal", presupuestoFinal);
    let presupuestoLS = window.localStorage.getItem("presupuestoFinal");

    contenedorCantidadDisponible.innerHTML = `${presupuestoLS} €`;
  } else {
    window.localStorage.setItem("presupuestoFinal",0);
    window.localStorage.setItem("id",0);    
    contenedorCantidadDisponible.innerHTML = `-`;
  }
};

export { guardarPresupuesto };
