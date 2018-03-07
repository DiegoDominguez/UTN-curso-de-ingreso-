//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeFinal;

	importe = parseInt(prompt("Ingrese el importe: "));

	importeFinal = importe * 1.21;

	document.getElementById("importe").value = importeFinal;
	
}

