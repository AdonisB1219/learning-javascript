let today = new Date();
let seconds = today.getSeconds();
console.log(seconds);

if (seconds % 2 == 0){
    console.log("Par");
} else{
    console.log("Impar");
}

let msg = (seconds % 2 == 0) ? console.log("Par") : console.log("Impar");

let age = 2;
access = (age >= 18);
console.log(access);