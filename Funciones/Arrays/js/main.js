//let meses = [...]

let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

meses [2] = "March";
console.log(meses[0]);
console.log(meses[2]);

meses.unshift("December");
console.log(meses[0]);

meses.shift();
console.log(meses[0]);

let mesesMayus = meses.map(mes => mes.toUpperCase());
console.log(mesesMayus);
