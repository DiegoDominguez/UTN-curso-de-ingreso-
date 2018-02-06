/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var nUno;
	var nDos;
	var resultado;

	nUno = document.getElementById("numeroUno").value;
	nDos = document.getElementById("numeroDos").value;
	
	nUno = parseInt(nUno);
	nDos = parseInt(nDos);
	resultado = nUno + nDos;
	
	alert("La suma es: " + resultado);
}

