// Ciclo que sume los 100 primeros números naturales}
/* var resultado = 0;
for (var cont = 1; cont <= 100; cont++){
    resultado += cont;
    console.log(resultado);
} */



//Ciclo que hace un triángulo
/* var resultado = "*";
console.log(resultado)

for (var cont = 1; cont <= 5; cont++){
    resultado += "*";
    console.log(resultado);
} */



/* var resultado = "";

for (var reng = 1; reng <= 6; reng++){
    for (var col = 1; col <= reng; col++)
      resultado += "*";
    console.log(resultado);
    resultado = "";
} */


/* for (let col1 = 1; col1 <= 3; col1++){
    for (let col2 = 1; col2 <= 3; col2++){
        console.log(col1 + " " + col2);
    }
} */

let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
/* for(let cont = 0; cont < meses.length; cont++){
    console.log(meses[cont]);
} */

/* meses.forEach(function(mes, indice){
    console.log((indice + 1) + ".-" + mes.toLowerCase())
});
 */

let mesesToUpper = meses.map(function (mes){
    return mes.toUpperCase();
});
console.log(mesesToUpper);