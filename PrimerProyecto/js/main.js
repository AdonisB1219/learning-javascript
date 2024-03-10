console.log("Hola CH29...");

let nombre = "Adonis";
let otroNombre = "JC";
let num = 3.14;
let str = "3.1x416";

console.log(Number(str));

console.log(typeof(nombre));
console.log(typeof(otroNombre));
console.log(num, typeof(num));

console.log(parseInt(num));
console.log(parseFloat(num));

let isHoliday = false;

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate()); //Dia en numero
console.log(fecha.getDay());  //Numero del día de la semana

console.log(fecha.getFullYear() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getDate());
