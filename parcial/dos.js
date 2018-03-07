/** 
 * Realiazar el algoritmo que lea un importe de un producto por prompt y muestre el importe final
 * por ID sumándole el IVA (21%).
*/

function Mostrar()
{
    var importe, importeFinal;

    importe = prompt("Ingrese el importe: ");
    importe = parseInt(importe);

    importeFinal = importe * 1.21;

    document.getElementById("importeFinal").value = importeFinal;
}
