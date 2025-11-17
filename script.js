const textInput = document.getElementById("tareaNueva");
const botonAgregar = document.getElementById("agregar");
const botonBorrar = document.getElementById("borrar")
const lista = document.getElementById("manageDom");
let contador = 0;

// Agregar elementos a la 
botonAgregar.addEventListener('click', () => {
    const texto = textInput.value.trim();
    console.log(texto);
    if (texto) {
        contador++;
        const idName = contador + "CheckBox";
        const nuevoItem = document.createElement("li");
        const nuevoCheckBox = document.createElement("input");
        const nuevoLabel = document.createElement("label");
        nuevoLabel.textContent = texto;
        nuevoItem.className = "list-group-item";
        nuevoCheckBox.className = "form-check-input me-1";
        nuevoCheckBox.id = idName;
        nuevoCheckBox.type = "checkbox";
        nuevoLabel.className = "form-check-label";
        nuevoLabel.htmlFor = idName;
        lista.appendChild(nuevoItem);
        nuevoItem.appendChild(nuevoCheckBox);
        nuevoItem.appendChild(nuevoLabel);
        textInput.value = "";
    }
});


botonBorrar.addEventListener("click", () => {

    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked'); /* devuelve un NodeList (aunque esté vacío). */
    
    if (checkbox.length === 0 ){
        alert("No hay elementos seleccionados");      
    }else{
        console.log(); 
        for (let i = 0; i < checkbox.length; i++){
            checkbox[i].closest('li').remove();
            //console.log("Id de Elemento borrado: ",checkbox[i].value); 
            
        }
    }
});