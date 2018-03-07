//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");

	var ancho;
	var largo;
	var anchoTotal;
	var largoTotal;
	var superficie;
	var total;

	ancho = document.getElementById("ancho").value;
	ancho = parseInt(ancho);

	largo = document.getElementById("largo").value;
	largo = parseInt(largo);

	anchoTotal = ancho * 2;
	largoTotal = largo * 2;

	superficie = anchoTotal + largoTotal;

	total = superficie * 6;

	alert("El total del alambrado con 6 vueltas es: " + total);
	
}

