// Que el usuario pueda ingresar un número por teclado, si es mayor a 5 mostrar el mensaje  “aprobado”, si es menor a 5 mostrar el mensaje “no aprobado”.
// Al ejercicio 2 agregarle que el usuario solamente pueda ingresar números del 0 al 10.
var readline = require("readline-sync");
var numero = readline.question("deci un numero: ");

console.log("su nota es:"+ numero);
if ((numero>=8) && (numero<=10)){
    console.log("exelente");
} 
else if ((numero>=6)&&(numero<8)){
    console.log("aprobado");
}
else if (numero<6){
    console.log("desaprobado");
}else {
    console.log("nota no valida");
}