/** 
 * Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10)
 * y el sexo (validar el sexo “f” o “m”) de 100 alumnos, informar por alert: 
 * a) el promedio de las notas totales.
 *  b) la nota más baja.
 *  c) la cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function Mostrar()
{
    var notas;
    var notaMasBaja;
    var sexo;
    var flag=0;
    var contador=0;
    var acumulador=0;

    for(var i=0; i<10; i++){
        notas = prompt("Ingrese la nota: ");
        notas = parseInt(notas);

        while (notas<0 || notas>10) {
            notas = prompt("Reingrese la nota: ");
            notas = parseInt(notas);
        }

        sexo = prompt("Ingrese el sexo: ");

        while (sexo!="f" && sexo!="m") {
            sexo = prompt("Reingrese el sexo");
        }
        acumulador = acumulador + notas;

        if (notas<notaMasBaja || flag==0) {
            notaMasBaja = notas;
            flag=1;
        }

        if (sexo=="m" && notas>=6) {
            contador++;
        }
    }
    promedio = acumulador/i;
    alert("El promedio de las notas totales es: " + promedio);
    alert("La nota más baja es: " + notaMasBaja);
    alert("La cantidad de varones que su nota es mayor a 6 es: " + contador);

}
