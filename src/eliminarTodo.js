let basura = document.getElementById("close");

let eliminarTodo =()=>{

    basura.addEventListener("click",()=>{
        window.localStorage.clear();
    })
}

export {eliminarTodo};
