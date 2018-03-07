/**
 * Realizar el algoritmo que lea un importe de un producto por prompt y muestre el importe final por ID
 * descontando un (25%) por fin de temporada.
 */

function Mostrar()
{
    var importe;
    var importeFinal;

    importe = prompt("Ingrese el importe: ")
    importe = parseInt(importe);
    
    importeFinal = importe * 0.75;

    document.getElementById("importeFinal").value = importeFinal;

}
