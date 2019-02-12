function mostrar()
{
//tomo la edad  


	var laEdad;

	laEdad=edad.value;

	laEdad=parseInt(laEdad);

	if(laEdad>18)
	{
		alert("usted es mayor de edad");
	}
	else if(laEdad<13)
			{ 
				alert("usted es un niño/a");
			}
			else
				{
					alert("usted es adolescente");
				}
	






/*
	if(laEdad>18)
	{
		alert("usted es mayor de edad");
	}
	

	if(laEdad>13 && laEdad<17)
	{
		alert("usted es adolescente");
	}
	
	if(laEdad<12)
	{
		alert("usted es niño/a");
	}


*/

}//FIN DE LA FUNCIÓN