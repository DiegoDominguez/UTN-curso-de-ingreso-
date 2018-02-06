/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var nUno;
	var nDos;
	var resultado;

	nUno = document.getElementById("numeroDividendo").value;
	nDos = document.getElementById("numeroDivisor").value;
	
	nUno = parseInt(nUno);
	nDos = parseInt(nDos);
	resultado = nUno % nDos;
	
	alert("El resto es: " + resultado);
}
