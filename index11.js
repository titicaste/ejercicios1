//Guardar nombres de 7 alumnos, su nota del primer parcial, su nota del segundo parcial, su nota del 
//tercer parcial. Mostrar toda la información de los 7 alumnos por pantalla.


var readline = require("readline-sync");

console.log("PROGRAMA DE REGISTRO DE NOTAS DE ALUMNO");
console.log("para terminar de cargar datos presione salir");

let alumno =[];
let nota1 = []
let nota2 = []
let nota3 = []


while (true){
    let alumno = readline.question("Ingrese el nombre de alumno: ");
    if (alumno=="salir"){
    break; 
    }

    let nota1 = readline.question("Ingrese la nota: ");
    let nota2 = readline.question("Ingrese la nota: ");
    let nota3 = readline.question("Ingrese la nota: ");
    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    nota3 = parseInt(nota3);
    let notas = (nota1+nota2+nota3)/3;

     if ((notas>=8)&&(notas<11)){
        console.log(alumno+ " Promociono la materia con: "+ notas);
    } 
    else if ((notas>=6)&&(notas<8)){
        console.log(alumno+ " Aprobo la materia, con promedio: "+ notas);
    } 
    else if ((notas>=0)&&(notas<6)){
        console.log(alumno+" Desaprobo la materia. Cierra con promedio:"+ notas);
    } 
    else {
        console.log("Numero erroneo");
    }



}
console.log("el alumno: "+ alumno + ". Se guardo con la notas: ")
console.log("parcial 1: "+nota1+". Parcial 2: "+nota2+". Pcarcial 3: "+nota3);

