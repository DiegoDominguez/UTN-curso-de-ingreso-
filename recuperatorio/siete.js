/** 
 * Realizar el algoritmo que permita el ingreso por prompt de edades (validar entre 0 y 100) 
 * y el sexo (validar el sexo “f” o “m”) de 100 personas, informar por alert: 
 * a) el promedio de edad.
 * b) la edad más baja. 
 * c) la cantidad de varones que su edad sea mayor o igual a 20.
*/

function Mostrar()
{
 var edad;
 var sexo;
 var acumulador=0;
 var contador=0;
 var edadMasBaja;
 var flag=0;

    for(var i=0; i<3; i++){
        edad = prompt("Ingrese la edad: ");
        edad = parseInt(edad);

        sexo = prompt("Ingrese su sexo: ");

        while (edad<0 || edad>100) {
            edad = prompt("Reingrese su edad: ");
            edad = parseInt(edad);
        }

        while (sexo !=="m" && sexo !=="f") {
            sexo = prompt("Reingrese su sexo: ");
        }

        if (sexo=="m" && edad>=20) {
            contador++;
        }

        if (edad<edadMasBaja || flag == 0) {
            edadMasBaja = edad;
            flag = 1;
        }

        acumulador = acumulador + edad;
    }
    promedio = acumulador / 3;
    alert("El promedio de edad es: " + promedio);
    alert("La edad más baja es: " + edadMasBaja);
    alert("La cantidad de varones cuya edad es mayor a 20 años es: " + contador);
}
