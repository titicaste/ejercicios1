// 18. Realizar una función que reciba un arreglo de números y retorne los tres mayores del arreglo.

let numeros = [3, 23, 12, 30, 25, 2, 50];

let nuevoOrden = numeros.sort(function (a, b) { return b - a });

console.log("Esta es la array ordenada de Mayor a Menor: ")

console.log(nuevoOrden)

console.log("Estos son los tres numeros mayores del arreglo: ")

for (var i = 0; i < 3; i++) {
    console.log(numeros[i]);
}