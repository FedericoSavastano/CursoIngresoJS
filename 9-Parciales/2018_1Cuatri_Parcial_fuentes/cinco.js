function mostrar()
{
	var planeta;
	var mensaje;

	planeta=prompt("Ingrese un planeta del sistema solar");
	mensaje="este no es un planeta válido";


	switch(planeta)
	{
		case "tierra":
		mensaje="aca vivimos";
		break;
		
		case "mercurio":
		case "venus":
		case "marte":
		case "jupiter":
		mensaje="aca hace mas calor";
		break;

		case "saturno":
		case "urano":
		case "neptuno":
		mensaje="aca hace mas frio";
		break;
	}


	alert(mensaje);

}
