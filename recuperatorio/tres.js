/** 
 * Realizar el algoritmo que tome por ID tres datos: precio1, precio2 y precio3 de una compra y luego
 * que muestre la suma y el promedio de los precios.
 */

function Mostrar()
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var promedio;

    precio1 = document.getElementById("precioUno").value;
    precio1 = parseInt(precio1);

    precio2 = document.getElementById("precioDos").value;
    precio2 = parseInt(precio2);

    precio3 = document.getElementById("precioTres").value;
    precio3 = parseInt(precio3);

    suma = precio1 + precio2 + precio3;
    promedio = suma / 3;

    document.write("La suma de la compra es: " + suma + " El promedio de la compra es: " + promedio);

}
