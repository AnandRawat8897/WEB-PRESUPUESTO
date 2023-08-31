import { tablaGastos,tablaIngresos } from "./variablesComunes";
import { agregarIngresos } from "./ingresos";
import { restarGastos } from "./gastos";
import { guardarPresupuesto } from "./presupuestoTotal";

const eliminarElemento = ()=>{
tablaIngresos.addEventListener("click", (e) => {
  if (e.target.matches(".btn-eliminar")) {
    let id = e.target.closest(".table_row").id;

    let LS = JSON.parse(window.localStorage.getItem("ingresos"));
    

    let nuevoLS = LS.filter((elemento) => {
      let idLS = elemento.id;

      if (id != idLS && LS.length > 0) {
        return elemento;       
      } 

    });
    
    
    let nuevoLSJSON = JSON.stringify(nuevoLS);
   
    window.localStorage.setItem("ingresos",nuevoLSJSON)
    
    
  }
  
  agregarIngresos();
  guardarPresupuesto();

 
});

tablaGastos.addEventListener("click", (e) => {
    if (e.target.matches(".btn-eliminar")) {
      let id = e.target.closest(".table_row").id;
  
      let LS = JSON.parse(window.localStorage.getItem("gastos"));
      
  
      let nuevoLS = LS.filter((elemento) => {
        let idLS = elemento.id;
  
        if (id != idLS && LS.length > 0) {
          return elemento;       
        } 
  
      });
      
      
      let nuevoLSJSON = JSON.stringify(nuevoLS);
     
      window.localStorage.setItem("gastos",nuevoLSJSON)
      
      
    }
    
    restarGastos();
    guardarPresupuesto();
  
   
  });

}

export {eliminarElemento}