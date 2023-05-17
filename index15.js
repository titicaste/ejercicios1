// Realizar una función que reciba un arreglo de números y retorne el mayor del arreglo.


let notitas = [1, 2, 3, 4];
function mayorNota(notitas)
{
    let i = 0;
    let n = 0;
    while (notitas[i] < notitas.length)
    {
        if (n > i)
        {
            i = n;
        }
        i++;
        console.log("El valor de i es:" + i);
        console.log("El valor de n es:" + n);
    }
}

mayorNota(notitas);