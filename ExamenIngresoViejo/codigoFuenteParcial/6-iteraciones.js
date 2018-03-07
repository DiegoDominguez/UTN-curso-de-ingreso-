//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var venta;
	var i;
	var max;
	var min;
	var flag=0;

	for (i=0; i<7;i++){
		venta = parseInt(prompt("Ingrese la venta: "));

		while(venta<0){
			venta = parseInt(prompt("Ingrese la venta: "));
		}

		if (venta>max || flag==0) {
			max = venta;
		}
		if (venta<min || flag==0){
			min = venta;
			flag = 1;
		}
	}
	alert("El mayor importe fue: " + max);
	alert("El menor importe fue: " + min);
}