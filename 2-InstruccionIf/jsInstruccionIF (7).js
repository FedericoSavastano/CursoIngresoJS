function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada=edad.value;
	estadoCivilIngresado=estadoCivil.value;

	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<18 && estadoCivilIngresado=="Casado")
	{
		alert("Es muy pequeño para NO ser soltero");
	}else if(edadIngresada<18 && estadoCivilIngresado=="Divorciado")
	{
		alert("Es muy pequeño para NO ser soltero");
	}


	


}//FIN DE LA FUNCIÓN