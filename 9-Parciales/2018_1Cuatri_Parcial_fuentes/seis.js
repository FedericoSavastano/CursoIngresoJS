function mostrar()
{



	var hora;

	hora=laHora.value;
	hora=parseInt(hora);

	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		mensaje=("es de mañana");
		break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		mensaje=("es de tarde");
		break;

		default:
		if(!(hora>=0 && hora<=24))
		{
			mensaje=("hora invalida");
		}else{
			mensaje=("es de noche");
			if(hora>=20&&hora<24)
			{
				mensaje=("es de noche, a dormir");
			}
		}

		

	}

	alert(mensaje);



	/*




	var hora;
	var mensaje;
	//var mensajeDos;

	hora=laHora.value;
	mensaje="esa hora no es valida";
	//mensajeDos="";



	if(hora>=20 && hora<=24)
	{
		mensaje="Es de noche, anda a dormir";
	}else if (hora>=0 && hora<=19)
		{
			switch(hora)
			{
			case "6":
			case "7":
			case "8":
			case "9":
			case "10":
			case "11":
			mensaje="es de mañana";
			break;

			case "12":
			case "13":
			case "14":
			case "15":
			case "17":
			case "18":
			case "19":
			mensaje="es de tarde";
			break;

			default:
			mensaje="es de noche";
			break;
			}
		}

		alert(mensaje);











/*
	switch(hora)
	{
		case "6":
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
		mensaje="es de mañana";
		break;

		case "12":
		case "13":
		case "14":
		case "15":
		case "17":
		case "18":
		case "19":
		mensaje="es de tarde";
		break;

		default:
		mensaje="es de noche";
		break;
	} 

	if(mensaje="es de noche")
		{
			mensajeDos=" anda a dormir";
		}

	alert(mensaje+mensajeDos);

	*/
}
