function mostrar()
{
//tomo la edad  

	var laEdad;

	laEdad=edad.value;

	laEdad=parseInt(laEdad);

	if(laEdad<17)
	{
		alert("menor de edad");
	}


	if(laEdad>18)
	{
		alert("mayor de edad");
	}

}//FIN DE LA FUNCIÓN