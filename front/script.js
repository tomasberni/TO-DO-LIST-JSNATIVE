console.log("activo");
// contador para ids
let idCounter = 0;

function addtext() {
    const add = document.getElementById("inputtodo");
    const valoradd = add.value;
    //return console.log(valoradd);

    // Hasta aca todo joya

    let pcreate = document.createElement("p");
    pcreate.id = "parrafo-${idCounter++}";

    // Crea p

    pcreate.textContent = valoradd;

    // Boton de eliminar P
    let buttondelete = document.createElement("button");
    buttondelete.textContent = "X";
    buttondelete.onclick = function () {
        deleteText(pcreate.id);
    };
        let container = document.createElement("div");
        container.appendChild(pcreate);
        container.appendChild(buttondelete);

        // intenta agregarle un valor a p - lo hace bien

        let put = document.getElementById("put");
        put.appendChild(container);

    }


    function deleteText(id) {
        // contenedor del párrafo por el ID del párrafo
        let elementoAEliminar = document.getElementById(id).parentElement;
        elementoAEliminar.remove();
    }