const existeLocalStorage = ()=>{

    if(localStorage.length===0){
        window.localStorage.setItem("ingresos",JSON.stringify([]));
        window.localStorage.setItem("gastos",JSON.stringify([]));
        window.localStorage.setItem("ingresosTotales",0);
        window.localStorage.setItem("gastosTotales",0);
        window.localStorage.setItem("id",0);
        

    }

}

export {existeLocalStorage};