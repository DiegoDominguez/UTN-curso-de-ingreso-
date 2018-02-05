/*Ejercicios
1. Crear un programa que defina una variable llamada “variable”. Cargar la variable con el valor 5.
Imprimir la variable por pantalla.

2. Encontrar los errores en el siguiente programa:
            console.log("Hola mundo);

3. Crear un programa que defina tres variables llamadas “variable_a”, “variable_b” y “variable_resultado”.
Cargar las primeras dos con los valores numéricos 33 y 77. Sumar ambas variables y guardar el resultado en la
variable “variable_resultado”. Imprimir el resultado por pantalla.

4. Crear un programa que defina 5 variables llamadas “a”, “b”...“e” y una sexta variable llamada “promedio”.
Cargar las 5 variables con valores y calcular el promedio de los mismos. Imprimir el resultado por pantalla.
*/

/*
Page12 - 1
var variable;
variable = 5;
console.log(variable);
*/

// Page12 - 2
/* console.log("Hola Mundo");*/

// Page12 - 3
/* var variable_a;
var variable_b;
var variable_resultado;

variable_a = 33;
variable_b = 77;

variable_resultado = variable_a + variable_b;

console.log("El resultado es " + variable_resultado); */

// Page12 - 4
/* var variable_a;
var variable_b;
var variable_c;
var variable_d;
var variable_e;
var variable_promedio;

variable_a = 10;
variable_b = 9;
variable_c = 8;
variable_d = 7;
variable_e = 6;

variable_promedio = (variable_a + variable_b + variable_c + variable_d + variable_e) / 5;

console.log("El promedio es " + variable_promedio); */

/* Ejercicios
1. Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a ambas.
Comparar si “nota1” es mayor a “nota2” e imprimir el resultado de la comparación.

2. Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a ambas.
Comparar si “nota1” es mayor a “nota2” imprimir el mensaje “Nota1 es mayor” o “Nota2 es mayor” según el
resultado de la comparación.

3. Las puntuaciones de las películas se clasifican en:
◦ 0:mala
◦ 1:regular
◦ 2:buena
◦ 3:muy buena
◦ 4:excelente
Definir una variable llamada “puntuacion” y cargarla con un valor de 0 a 4.
 Imprimir la clasificación de la película según el valor numérico. */

// Page 21 - 1
/* var nota1;
var nota2;
var resultado;

nota1 = 8;
nota2 = 6;

resultado = nota1 > nota2;

console.log("El resultado de la comparación es " + resultado); */

// Page 21 - 2
/* var nota1;
var nota2;

nota1 = 18;
nota2 = 17;

if (nota1 > nota2) {
    console.log("Nota 1 es mayor");
}
else{
    console.log("Nota 2 es mayor");
} */

// Page 21 - 3
/* var puntuacion;
puntuacion = 3;

switch (puntuacion) {
    case 0:
        console.log("mala");
        break;

    case 1:
        console.log("regular");
        break;

    case 2:
        console.log("buena");
        break;

    case 3:
        console.log("muy buena");
        break;

    case 4:
        console.log("excelente");
        break;
} */

/* Ejercicios
1. Crear un programa que imprima una cuenta regresiva de 59 a 0.

2. Crear un programa que imprima los números pares de 0 a 100.

3. Se escribió un programa para imprimir todos los números de 100 a 0 inclusive, en forma descendiente,
 pero el código contiene errores, encontrar los errores del programa y corregirlos:

var numero;
for (numero=100 , numero>0 , numero=numero+1) {
                        console.log("numero:"+numero);
                  }

4. Crear un programa que imprima los números de 0 a 100 indicando en cada uno de ellos si el número es
 divisible por 3 o no.

5. Indicar la diferencia en los siguientes programas. ¿Se comportan de igual forma?
En el caso de no ser así, indicar la diferencia y la forma de corregirlos para que ambos se comporten de forma
 equivalente.

Programa 1
var numero;
numero = 5;

while (numero > 0)
{
    console.log("numero:"+numero);
    numero--;
}

Programa 2
var numero;
numero = 5;

while (true) {
console.log("numero:"+numero);
numero--;

if(numero < 0)
{
break; }
}
*/

// Page 26 - 1
/* var contador;
contador = 59;
while (contador>=0) {
    console.log("Número " + contador);
    contador = contador-1;
} */

// Page 26 - 2
/* var contador;
contador = 0;

while (contador<=100) {
    if (contador%2==0) {
        console.log(contador);
    }
contador++;
} */

// Page 26 - 3
/* var numero;
for (numero=100 ; numero>=0 ; numero=numero-1) {
                        console.log("numero: "+numero);
} */

// Page 26 - 4
/* var contador;
contador = 0;

while (contador<=100) {
    if (contador%3==0) {
        console.log("Este número es divisible por 3: "+contador);
    }
    else{
        console.log("Este número no es divisible por 3: "+contador);
    }
contador++
} */

// Page 26 - 5
// Programa 1
/* var numero;
numero = 5;

while (numero > 0)
{
    console.log("numero:"+numero);
    numero--;
} */

// Programa 2
var numero;
numero = 5;

while (true) {
console.log("numero:"+numero);
numero--;

if(numero <= 0)
{
break; }
}

/* Resolución: No se conforman de igual forma. Para que se conformen de igual manera hay que agregarle un "="
dentro de la condición del IF luego del "<" */


