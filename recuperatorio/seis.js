/** 
 * Realizar el algoritmo que pida el peso en kilos (validar que sea mayor a 0,”cero”) de cada uno de
 * los 50 contenedores (pedir 50 veces) de un deposito por prompt, e informar cual fue el más pesado
 * y cuál fue el menos pesado.
*/

function Mostrar()
{
    var peso;
    var masPesado;
    var menosPesado;
    var flag=0;

    for(var i=0; i<5; i++){
        peso = prompt("Ingrese el peso en kilos: ");
        peso = parseInt(peso);

        while (peso<0) {
            peso = prompt("Reingrese el peso en kilos (debe ser mayor a cero): ");
        }

        if (peso>masPesado || flag==0) {
            masPesado = peso;
        }

        if (peso<menosPesado || flag==0) {
            menosPesado = peso;
            flag = 1;
        }
    }
    alert("El más pesado es: " + masPesado);
    alert("El menos pesado es: " + menosPesado);
}
