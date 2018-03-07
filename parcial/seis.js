/**
 * Realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”)
 * de los 24 días hábiles del mes por prompt (una por día), e informar cual fue el mayor importe
 * y cuál fue el menor importe de venta.
 */

function Mostrar()
{
    var importe;
    var mayorImporte;
    var menorImporte;
    var acumulador=0;
    var flag=0;

    for(var i=0; i<4; i++){
        importe = prompt("Ingrese el importe: ");
        importe = parseInt(importe);

        while (importe<0) {
            importe = prompt("Reingrese el importe: ");
            importe = parseInt(importe);
        }

        if (importe>mayorImporte || flag==0) {
            mayorImporte = importe;
        }

        if (importe<menorImporte || flag==0) {
            menorImporte = importe;
            flag = 1;
        }
        acumulador = acumulador + importe;
    }
    document.getElementById("importeFinal").value = acumulador;
    alert("El mayor importe es: " + mayorImporte);
    alert("El menor importe es: " + menorImporte);
}
