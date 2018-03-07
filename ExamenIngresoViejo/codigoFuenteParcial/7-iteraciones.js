//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notas;
	var sexo;

	for(var i=0; i<6; i++)
	{
		notas = parseInt(prompt("Ingrese la nota: "));
		while(notas<0 || notas>10)
		{
			notas = parseInt(prompt("Reingrese la nota: "));
		}

		sexo = prompt("Ingrese el sexo");
		while(sexo !="f" && sexo !="m")
		{
			sexo = parseInt(prompt("Reingrese la nota: "));
		}
	}
}

