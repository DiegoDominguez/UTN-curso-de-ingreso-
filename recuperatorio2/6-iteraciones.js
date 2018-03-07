//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteraciones");

	var venta;
	var i;
	var max=0;
	var min=0;

	

	for(i=0; i<7;i++){

	venta = parseInt(prompt("Ingrese numero"));
	
	while(venta<=0){
	venta = parseInt(prompt("Ingrese numero"));
		}
		
		if (i==0) {
			max=venta;
			min=venta;
		}
		if (venta>max) {
			max=venta;
		}
		if (venta<min) {
			min=venta;
		}
	}
	alert("El valor máximo es " + max);
	alert("El valor mínimo es " + min);
	
}

