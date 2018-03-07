/** 
 * Realizar el algoritmo que permita ingresar números positivos (validar que sea positivo)
 * hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
 * a) la cantidad de números pares.
 * b) el promedio de todos los números ingresados.
 * c) la suma de todos los números. 
 * d) El número máximo y el mínimo.
*/

function Mostrar()
{
    var numeros;
    var contador=0;
    var acumulador=0;
    var promedio;
    var numMax;
    var numMin;
    var respuesta = true;
    var flag=0;
    var contadorPares=0;

    while (respuesta==true) {
        numeros = prompt("Ingrese el número: ");
        numeros = parseInt(numeros);  

        while (numeros<0) {
            numeros = prompt("Reingrese el número: ");
            numeros = parseInt(numeros);  
        }

        if (numeros%2==0) {
            contadorPares++;
        }

        acumulador = acumulador + numeros;
        contador++;

        if (numMax>numeros || flag==0) {
            numMax = numeros;
        }

        if (numMin<numeros || flag==0) {
            numMin = numeros;
            flag = 1;
        }

        respuesta = confirm("Desea continuar?");

    }

    promedio = acumulador / contador;
    document.write("a) La cantidad de números pares es: " + contadorPares +
    "b) El promedio de todos los números ingresados es: " + promedio +
    "c) La suma de todos los números ingresados es: " + acumulador +
    "d) El número máximo es: " + numMax + " y el número mínimo es: " + numMin);
}
