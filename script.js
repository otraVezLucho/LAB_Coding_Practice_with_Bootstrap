const textInput = document.getElementById("tareaNueva");
const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("manageDom");
let contador = 0; 
botonAgregar.addEventListener('click', () => {
    const texto = textInput.value.trim();
        console.log(texto);
    if(texto){
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