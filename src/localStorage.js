const existeLocalStorage = () => {
  let ingresos = window.localStorage.getItem("ingresos");
  let gastos = window.localStorage.getItem("gastos");

  if (
    localStorage.length === 0 ||
    (!ingresos && !gastos) ||
    (ingresos.length === 0 && gastos.length === 0)
  ) {
    window.localStorage.setItem("ingresos", JSON.stringify([]));
    window.localStorage.setItem("gastos", JSON.stringify([]));
    window.localStorage.setItem("ingresosTotales", 0);
    window.localStorage.setItem("gastosTotales", 0);
    window.localStorage.setItem("id", 0);
    window.localStorage.setItem("presupuestoFinal", 0);
  }
};

export { existeLocalStorage };
