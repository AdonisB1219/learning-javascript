let encabezado = document.getElementById("encabezado");
let btnEjecutar = document.getElementById("btnEjecutar");
let txtMarca = document.getElementById("txtMarca");
/* let elemento = document.querySelector("ul > li");
console.log(elemento); */

let elementos = document.querySelectorAll("ul > li");
console.log(elementos);

let elementos2 = document.querySelectorAll("ul > li:last-child");//li:first-child

elementos2 = elementos2[0];
console.log(elementos2);


console.log(encabezado.innerHTML = "<u>Hola<u/>");

let listas = document.getElementsByTagName("ul");
console.log(listas.item(0));
console.log(listas.length);


let listas2 = document.getElementsByClassName("list-group");
console.log(listas2.item(0));
console.log(listas2.length);

btnEjecutar.addEventListener("click", function(event){
    txtMarca.value = txtMarca.value.trim();
    if(txtMarca.value.length > 0){
        event.preventDefault();//previene que se vuelva a cargar la pagina
        let li = document.createElement("li");
        li.innerText = txtMarca.value;
        li.className = "list-group-item";
/*         let li2 = document.createElement("li.cloneNode(true)") ES para hacer otro elemento;
        li2.innerText = txtMarca.value;
        li2.className = "list-group-item"; */
        listas.item(0).prepend(li); //append y prepend en la lista | before, after fuera de la lista
       /*  txtMarca.value = "";
        txtMarca.focus(); */
        listas2.item(1).insertAdjacentHTML("beforebegin", `
        <!-- Example split danger button -->
        <div class="btn-group">
          <button type="button" class="btn btn-info">${txtMarca.value}</button>
          <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>`
        );
        //afterbegin, beforeend, afterend
    }
}); 