
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

tablaIngresos.addEventListener("click",(e)=>{

    
    if(e.target.matches(".btn-eliminar")){
        
        let id = e.target.closest(".table_row").id
        // console.log(id);
        let LS = JSON.parse(window.localStorage.getItem("ingresos"))
        LS.forEach((elemento)=>{

            let idLS = elemento.id;
            
            let nuevoLS = LS.filter((elemento)=>{
                if(id!=idLS){
                    console.log(idLS);
                }
            })
        })

                
    
                

        


        
        // if(id)
        
    }

})
    




