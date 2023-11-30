let formulario = document.forms['form']; // .forms da mejor contexto, ataca referncia igual que con getElemebtBy...

formulario.addEventListener('submit', (e) => {

  e.preventDefault();

  //crear un objeto donde se almacenen estos valores con una llave
  //Se hace uso de dot notation para acceder al texto del input para nacionalidad y evitar las condicionales dentro de la función agregarInvitado
  const user = {
    nombre: formulario.elements['name'].value,
    edad: formulario.elements['age'].value,
    nacionalidad: formulario.elements['nationality'].options[formulario.elements['nationality'].selectedIndex].text
  }

  // //Agregar función que revise estas condiciones
  if (verifyUser(user)) {
    agregarInvitado(user)
  }
}
);

//Se pasan parametros mediante desestructuración de objeto user
const verifyUser = ({ nombre, edad }) => {

  let response = false;

  if (nombre.length === 0) {
    nombre.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error")
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    response = true;
  }

  return response;

}

let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado({ nombre, edad, nacionalidad }) {

  let lista = document.getElementById("lista-de-invitados");

  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidad, elementoLista);


  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  let corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
};

function crearElemento(descripcion, valor, elemento) {

  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor
  elemento.appendChild(spanNombre)
  elemento.appendChild(inputNombre)
  elemento.appendChild(espacio)
}