const existeLocalStorage = ()=>{

    if(localStorage.length===0){
        window.localStorage.setItem("ingresos",JSON.stringify([]));
        window.localStorage.setItem("gastos",JSON.stringify([]));

    }

}

export {existeLocalStorage};