//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var largoTotal;
	var anchoTotal;
	var perimetro;
	var perimetroX6;

	ancho = document.getElementById("ancho").value;
	ancho = parseInt(ancho);

	largo = document.getElementById("largo").value;
	largo = parseInt(largo);

	anchoTotal = ancho * 2;
	largoTotal = largo * 2;

	perimetro = anchoTotal + largoTotal;

	perimetroX6 = perimetro * 6;

	alert("La cantidad de alambre que necesita es: " + perimetroX6);
}

