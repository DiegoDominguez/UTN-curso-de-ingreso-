//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numUno;
	var numDos;
	var resultado;

	numUno = parseInt(prompt("Ingrese primer número: "));
	numDos = parseInt(prompt("Ingrese el segundo número: "));

	if (numUno == numDos) {
		resultado = numUno * numDos;
	}	
	else if (numUno>numDos) {
		resultado = numUno - numDos;
	}
	else {
		resultado = numUno + numDos;
	}
	document.write(resultado);
}

