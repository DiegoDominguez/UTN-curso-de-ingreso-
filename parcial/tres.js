/** 
 * Realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que
 *  muestre cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.
*/

function Mostrar()
{
    var largo, ancho, largoTotal, anchoTotal, perimetro, perimetroTotalConAlambre;

    largo = document.getElementById("largo").value;
    largo = parseInt(largo);

    ancho = document.getElementById("ancho").value;
    ancho = parseInt(ancho);

    largoTotal = largo * 2;
    anchoTotal = ancho * 2;

    perimetro = largoTotal + anchoTotal;

    perimetroTotalConAlambre = perimetro * 3;

    alert("La cantidad de alambre que se necesita es: " + perimetroTotalConAlambre);

}
