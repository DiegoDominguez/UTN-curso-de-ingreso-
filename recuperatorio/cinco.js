/** 
 * (SWITCH) Realizar el algoritmo que pida un MES por prompt, si es “Diciembre” informar por alert
 *  “Se vienen las fiestas” ,si es “Enero” informar por alert “comienza el año”, de lo contrario
 *  informar por alert “no es enero, ni diciembre”.
*/

function Mostrar()
{
    var mes;

    mes = prompt("Ingrese un mes: ");

    switch (mes) {
        case "diciembre":
            alert("Se vienen las fiestas");
            break;

        case "enero":
            alert("Comienza el año");
            break;
    
        default:
            alert("No es enero, ni diciembre");
            break;
    }
}
