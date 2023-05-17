//Realizar una función que reciba dos parámetros de entrada (el primero es un nombre, y el segundo 
//un apellido), y que imprima el nombre y apellido de dicha persona

var readline = require("readline-sync");
var nombre = readline.question("deci tu nombre: ");
var apellido = readline.question("deci tu apellido: ");

function a (nombre, apellido){
    return (nombre + apellido)
}
console.log ("Tu nombre y apellido son: " + a (nombre, apellido))

