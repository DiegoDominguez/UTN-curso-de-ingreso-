/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var nUno;
	var nDos;
	var resultado;

	nUno = document.getElementById("sueldo").value;
	nUno = parseInt(nUno);

	resultado = nUno * 1.10;
	
	document.getElementById("resultado").value = resultado;
	
	
}
