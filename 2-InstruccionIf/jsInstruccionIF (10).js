function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom=Math.floor((Math.random() * 10) + 1);

	

	if(numeroRandom>8)
	{
		alert(numeroRandom+" EXCELENTE");
		}
		else if (numeroRandom<4)
		{
			alert(numeroRandom+" Vamos, la proxima se puede");
		}
			else if (numeroRandom>5)
					{
						alert(numeroRandom+" APROBÓ");
					}
	




}//FIN DE LA FUNCIÓN