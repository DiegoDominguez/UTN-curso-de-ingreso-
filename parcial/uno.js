/*
* Realizar el algoritmo que lea la base por ID de un cuadrado e informar el perímetro
* del mismo por alert.
*/
function Mostrar()
{
    var base, perimetro;

    base = document.getElementById("laBase").value;
    base = parseInt(base);

    perimetro = base * 4;

    alert("El perímetro del cuadrado es: " + perimetro);
}
