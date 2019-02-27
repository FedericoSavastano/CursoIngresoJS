function mostrar()
{

	var numeroRandom;
	var contadorDe1=0;
	var contadorDe2=0;
	var contadorDe3=0;
	var contadorDe4=0;
	var contadorDe5=0;
	var contadorDe6=0;
	var contadorDe7=0;
	var contadorDe8=0;
	var contadorDe9=0;
	var contadorDe10=0;


	for(contador=0;contador<100;contador++)
	{
		numeroRandom=Math.floor((Math.random() * 10) + 1);
		console.log(numeroRandom);
		switch(numeroRandom)
		{
			case 1 :
			contadorDe1++;
			break;

			case 2 :
			contadorDe2++;
			break;

			case 3 :
			contadorDe3++;
			break;

			case 4 :
			contadorDe4++;
			break;

			case 5 :
			contadorDe5++;
			break;

			case 6 :
			contadorDe6++;
			break;

			case 7 :
			porSiete=contadorDe7*100/contador;
			if(porSiete>6) //para reducir la cantidad de 7
			{
				contador--;
				continue;
			}
			contadorDe7++;
			break;

			case 8 :
			contadorDe8++;
			break;

			case 9 :
			contadorDe9++;
			break;

			case 10 :
			contadorDe10++;
			break;
		}

	}


	console.log("el 1 salió "+contadorDe1+" veces y da un "+contadorDe1*100/contador+" %");
	console.log("el 2 salió "+contadorDe2+" veces y da un "+contadorDe2*100/contador+" %");
	console.log("el 3 salió "+contadorDe3+" veces y da un "+contadorDe3*100/contador+" %");
	console.log("el 4 salió "+contadorDe4+" veces y da un "+contadorDe4*100/contador+" %");
	console.log("el 5 salió "+contadorDe5+" veces y da un "+contadorDe5*100/contador+" %");
	console.log("el 6 salió "+contadorDe6+" veces y da un "+contadorDe6*100/contador+" %");
	console.log("el 7 salió "+contadorDe7+" veces y da un "+contadorDe7*100/contador+" %");
	console.log("el 8 salió "+contadorDe8+" veces y da un "+contadorDe8*100/contador+" %");
	console.log("el 9 salió "+contadorDe9+" veces y da un "+contadorDe9*100/contador+" %");
	console.log("el 10 salió "+contadorDe10+" veces y da un "+contadorDe10*100/contador+" %");

	suma=contadorDe1+contadorDe2+contadorDe3+contadorDe4+contadorDe5+contadorDe6+contadorDe7+contadorDe8+contadorDe9+contadorDe10;
	console.log("total de tiros sumados "+suma);

	console.log("total del contador "+contador);







/*
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