/** 
 * (IF) Realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, 
 * si el primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado
 * por document.write.
*/

function Mostrar()
{
    var numUno, numDos, resultado;

    numUno = prompt("Ingrese el primero número");
    numUno = parseInt(numUno);

    numDos = prompt("Ingrese el primero número");
    numDos = parseInt(numDos);

    if (numUno==numDos) {
        resultado = numUno + numDos;
    }
    else if (numUno>numDos) {
        resultado = numUno - numDos;
    }
    else{
        resultado = numUno + numDos;
    }
    document.write("El resultado es: " + resultado);

}
