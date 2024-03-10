/* let nombre = "Juan Bautista Pasc";
let apellidoP = "Ecutia";
let apellidoM = "Martínez";
let fechaNacimiento = "25 de febrero de 1827"

console.log(`${nombre} ${apellidoP} ${apellidoM} nació el ${fechaNacimiento}`);
console.log(`[${apellidoM.trim()}]`); */

/* let regex = /[A-Z]{4}/i;
let rfc = "bema";
console.log(regex.test(rfc)); */

let regex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
let rfc = "BEMA000429IZ9";
console.log(regex.test(rfc));

let regexTel = /^[0-9]{10}$/;
let tel = "5510701213";
console.log(regexTel.test(tel));

let regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let email = "adonisbec@gmail.com";
console.log(regexMail.test(email));
