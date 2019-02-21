function mostrar()
{
	var dia;
	var mensaje;

	dia=prompt("Ingrese un dia de la semana");
	mensaje=("ese no es un dia valido");

	switch(dia)
	{
		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
		mensaje="a trabajar";
		break;

		case "Sabado":
		case "Domingo":
		mensaje="buen finde";
		break;
	}

	alert(mensaje);
}
