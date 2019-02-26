function mostrar()
{

	//estamos buscando un numero primo- 
	//este esta bien, pero tiene fallo de performance, porque de la mitad para arriba al pedo calcular de un numero

	var numeroIngresado;
	var numeroAnterior;
	var numeroRecorrido;
	var acumulador;

	numeroIngresado=prompt("Ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);


	//aca recorre y te muestra los primos

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
			alert("es perfecto "+numeroIngresado);
		}


	}
	




	





/*

	//aca recorre y te muestra los primos

	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>1;numeroRecorrido--)
	{
		for(numeroAnterior=numeroRecorrido-1;numeroAnterior>1;numeroAnterior--)
		{
			if(numeroRecorrido%numeroAnterior==0)
			{
				break;
			}
		}
	}

	if(numeroAnterior==1)
	{
		console.log("es primo "+numeroRecorrido);
	}








/*
for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
		{
			//console.log(numeroAnterior);
			if(numeroIngresado%numeroIngresado==0)
			{
				break;
			}
		}
	}
//ingresando 15,el numero sale con 1 asi.

	if(numeroAnterior==1)
	{
		console.log("es primo ");
	}else
	{
		console.log("no es primo");
	}





	var contador
	contador=0
	
	for(;contador<10;)
	{
		console.log(contador);
		contador++;
	}


	for(;;)
	{
		if(contador==9)
		{
			break;
			contador++;
			console.log(contador);
		}
	}

	*/
}