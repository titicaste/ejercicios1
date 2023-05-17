//  Que el cliente ingrese tres números por teclado y devolver por pantalla:
//- El resultado de la suma de los tres números
//- La multiplicación del primer número con el tercero
//- La resta del segundo número con el primero
var readline = require("readline-sync");
var numero1 = readline.question("deci un numero: ");
var numero2 = readline.question("deci otro numero: ");
var numero3 = readline.question("deci otro numero mas numero: ");

var suma = numero1 + numero2 + numero3 ;
console.log(suma);

