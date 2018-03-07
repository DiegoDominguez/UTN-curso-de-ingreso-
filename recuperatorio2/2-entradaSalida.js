//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");

	var importe;
	var resultado;

	importe = parseInt(prompt("Ingrese el importe: "));

	resultado = importe * 1.21;

	document.getElementById("importe").value = resultado; 
	
}

