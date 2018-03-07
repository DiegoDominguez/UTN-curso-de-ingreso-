/*Rrealizar el algoritmo que lea la base por ID de un cuadrado e informar la superficie del mismo por
alert.*/

function Mostrar()
{
    var base;
    var superficie;

    base = document.getElementById("laBase").value;
    base = parseInt(base);

    superficie = base * base;

    alert("La superficie del cuadrado es: " + superficie);


}
