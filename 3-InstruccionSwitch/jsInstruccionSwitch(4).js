function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
//alert (mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero":
		mensaje="este mes tiene 28 dias";
		break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		mensaje="este mes tiene 31 dias";
		break;

		default:
		mensaje="este mes tiene 30 dias";
		break;
	}

alert(mensaje);

}//FIN DE LA FUNCIÓN