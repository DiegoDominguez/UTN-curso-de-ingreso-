/** 
 * (IF) Realizar el algoritmo que pida dos números por prompt, lo sume e informe si el resultado de 
 * la suma “positivo”,” negativo” o “cero” por document.write.
*/

function Mostrar()
{
    var num1;
    var num2;
    var suma;

    num1 = prompt("Ingrese el primer número");
    num1 = parseInt(num1);

    num2 = prompt("Ingrese el segundo número");
    num2 = parseInt(num2);

    suma = num1 + num2;

    if (suma==0) {
        document.write("El resultado es cero");
    }
    else if (suma>0) {
        document.write("El resultado es positivo");
    }
    else{
        document.write("El resultado es negativo");
    }

}
