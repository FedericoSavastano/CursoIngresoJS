function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var numeroRecorrido;
	var acumulador;

	numeroIngresado=prompt("Ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);


	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>1;numeroRecorrido--)
	{
		for(numeroAnterior=numeroRecorrido-1;numeroAnterior>1;numeroAnterior--)
		{
			if(numeroIngresado%numeroAnterior==0)
			{
				
				acumulador=acumulador+numeroAnterior;	
			}
		}

		if(acumulador==numeroIngresado)
		{
			console.log("es perfecto "+numeroIngresado);
		}


	}

}