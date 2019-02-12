function mostrar()
{
//tomo la edad  

	var laEdad;

	laEdad=edad.value;

	laEdad=parseInt(laEdad);
/*
	if(laEdad>1 && laEdad<13)
	{
		alert("usted NO es adolescente");
	}


	if(laEdad>18 && laEdad<99)
	{
		alert("usted NO es adolescente");
	}

*/
//Esto"(!)" es la negativa de la instrucción, 
//cuidado con poner anomalias matematicas ahi

	if(! (laEdad>13 && laEdad<17))
	{
		alert("usted NO es adolescente");
	}




}//FIN DE LA FUNCIÓN