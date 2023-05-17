// Realizar el ejercicio 3 con funciones y darle los números por parámetros de entrada.


var readline = require("readline-sync");
var a = readline.question("deci un numero: ");
var b = readline.question("deci otro numero: ");
var c = readline.question("deci otro numero mas numero: ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

function suma (a, b, c){
    return a+b+c;
}
console.log (("La suma de los tres numeros es: ")+ suma(a, b, c));

function multiplicacion (a, b, c){
    return a*c;
}
console.log (("La multiplicacion del primero con el tercero es: ")+ multiplicacion(a, b, c));

function resta (a, b, c){
    return b-a;
}
console.log (("La resta del segundo con el primero es: ")+ resta(a, b, c));
