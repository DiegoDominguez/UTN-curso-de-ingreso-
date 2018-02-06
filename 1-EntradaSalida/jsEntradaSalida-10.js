/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var nUno;
	var nDos;
	var resultado;

	nUno = document.getElementById("importe").value;
	nUno = parseInt(nUno);

	resultado = nUno * 0.75;
	
	document.getElementById("resultado").value = resultado;
}
