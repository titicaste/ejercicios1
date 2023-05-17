//Que el usuario ingrese un número por teclado. Si ese número se encuentra entre el 7 y el 18, mostrar por consola “encontrado”.
var readline = require("readline-sync");
var numero = readline.question("deci un numero: ");

if((numero>=7)&&(numero<=18)){
    console.log("numero encontrado");
}
else {
    console.log("numero no encontrado");
}