function mostrar()
{
	var hora;
	var mensaje;

	hora=laHora.value;
	hora=parseInt(hora);


	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		mensaje="es de mañana";
		break;

		default:
		mensaje="es de noche";
		if(hora>=20 && hora<=24)
	}

	alert(mensaje);


}
