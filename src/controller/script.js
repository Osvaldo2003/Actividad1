import { bst } from "./dependencies.js";
import Contacto from "./models/Contacto.js";

// Función para agregar un contacto
let btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", () => {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let contacto = new Contacto(firstName, lastName, phoneNumber);
    
    if (bst.add(contacto)) {
        alert("Contacto agregado exitosamente");
    } else {
        alert("El contacto ya existe");
    }

    // Limpiar los campos de entrada
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
});

// Función para buscar un contacto
let btnSearch = document.getElementById("btn-search");
btnSearch.addEventListener("click", () => {
    let lastName = document.getElementById("searchLastName").value;
    let results = bst.search(lastName);

    if (results.length > 0) {
        let resultMessage = results.map(contact => `${contact.lastName}, ${contact.firstName}, Teléfono: ${contact.phoneNumber}`).join("\n");
        alert(`Contactos encontrados:\n${resultMessage}`);
    } else {
        alert(`No se encontraron contactos con el apellido ${lastName}.`);
    }

    // Limpiar el campo de búsqueda
    document.getElementById("searchLastName").value = "";
});
