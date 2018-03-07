//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 7-iteraciones");

	var nota;
	var acumulado=0;
	var cantVarones=0;
	var promedio;

	for(i=0; i<6;i++){

		nota = parseInt(prompt("Ingrese: "));
		while(nota<0 || nota>10){
			nota = parseInt(prompt("Ingrese: "));
		}

		sexo = prompt("Ingrese: ");
		while(sexo!="f" && sexo!="m" && sexo!="F" && sexo!="M"){
			sexo = prompt("Ingrese: ");
		}	

		acumulado = acumulado + nota;
		if (i==0 || nota<min) {
			min=nota;
		}

		if (sexo=="m" && nota>=6) {
			cantVarones++;
		}

	}

	promedio = acumulado / i;

	alert("La nota mínima es: " + min);
	alert("Cantidad de varones que superen la nota 6: " + cantVarones);
	alert("El promedio " + promedio);

}

