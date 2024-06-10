// Declarando variables
contenedorBusqueda = document.getElementById("ctn__input__busqueda");
inputBusqueda = document.getElementById("busqueda");
cajaBusqueda = document.getElementById("resultado__busqueda");
cover = document.getElementById("cover__busqueda");

// Creamos funciones
function mostrarBuscador(){
  contenedorBusqueda.style.top = "75px";
  cover.style.display = "block";
  inputBusqueda.focus();

  if(inputBusqueda.value === ""){
    cajaBusqueda.style.display = "none";
  }

}

// Funcion para ocultar el buscador
function ocultarBuscador() {
  contenedorBusqueda.style.top = "-80px";
  cover.style.display = "none";
  inputBusqueda.value = "";
  cajaBusqueda.style.display = "none";
}

// Creando filtrado de busqueda
function buscadorInterno() {
  filter = inputBusqueda.value.toUpperCase();
  li = cajaBusqueda.getElementsByTagName("li");

  //Recorriendo elementos a filtrar mediante los "li"
  for (let i = 0; i < li.length; i++){

    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;

    if(textValue.toUpperCase().indexOf(filter) > -1){

        li[i].style.display = "";
        cajaBusqueda.style.display = "block";

        if (inputBusqueda.value === ""){
          cajaBusqueda.style.display = "none";
        }

    }else{
        li[i].style.display = "none";
    }
  }
}

// Ejecutando funciones
document.getElementById("icono__busqueda").addEventListener("click", mostrarBuscador);
document.getElementById("cover__busqueda").addEventListener("click", ocultarBuscador);
document.getElementById("busqueda").addEventListener("keyup", buscadorInterno);