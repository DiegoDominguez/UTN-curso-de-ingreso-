//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 1-EntradaSalida");

	var lado;
	var perimetro;

	lado = document.getElementById("lado").value;
	
	lado = parseInt(lado);

	perimetro = lado * 3;

	alert("El perimetro es: " + perimetro);
	
}

