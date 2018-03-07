/** 
 * (SWITCH)realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o “Domingo”
 *  informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!” .
*/

function Mostrar()
{
    var dia;

    dia = prompt("Ingrese el día de la semana: ");

    switch (dia) {
        case "Sábado":
        case "Domingo":
            alert("Es fin de semana");
            break;
    
        default:
        alert("A trabajar!!!");
            break;
    }
}
