//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 4-if");

	var numUno;
	var numDos;
	var resultado;

	numUno = parseInt(prompt("Ingrese el número uno: "));
	numDos = parseInt(prompt("Ingrese el número dos: "));

	if (numUno==numDos) {
		resultado = numUno * numDos;
	}
	else{
		if (numUno>numDos) {
			resultado = numUno - numDos;
		}
		else{
			resultado = numUno + numDos;
		}
	}
	document.write(resultado);
	
}

