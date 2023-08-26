let basura = document.getElementById("close");

let eliminarTodo =()=>{

    basura.addEventListener("click",()=>{
        localStorage.clear();
    })
}

export {eliminarTodo};
