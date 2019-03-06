function mostrar()
{
	var letra;
	var numero;
	var respuesta="si";
	var contadorNumerosPares=0;
	var contadorNumerosImpares=0;
	var contadorCeros=0;
	var contador=0;
	var acumuladorPositivos=0;
	var contadorPositvos=0;
	var promedioPositivos;
	var acumuladorNegativos=0;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaxima;
	var letraMinima;

	for(respuesta=="si";respuesta=="si";contador++)
	{

		letra=prompt("Ingrese una letra");
		while((!isNaN(letra)))
		{
			letra=prompt("Esa no es una letra valida. Reingrese una letra");
		}

		numero=prompt("Ingrese un numero entre el -100 y el 100");
		numero=parseInt(numero);
		while(isNaN(numero)|| numero<-100 || numero>100)
		{
			numero=prompt("Ese no es un numero valido. Reingrese un numero entre el -100 y el 100");
			numero=parseInt(numero);
		}


		if(numero%2==0 && numero!=0)
		{
			contadorNumerosPares++;
		}
		else
		{		
			if(numero!=0)
			{
				contadorNumerosImpares++;
			}
			else{
				contadorCeros++;
			}
		}


		if(numero>0)
		{
			acumuladorPositivos=numero+acumuladorPositivos;
			contadorPositvos++;
		}else{
			acumuladorNegativos=numero+acumuladorNegativos;
		}


		if(numero<numeroMinimo || numeroMinimo==undefined)
		{
			numeroMinimo=numero;
			letraMinima=letra;
		}
		if(numero>numeroMaximo || numeroMaximo==undefined)
		{
			numeroMaximo=numero;
			letraMaxima=letra;
		}



		respuesta=prompt("Desea seguir cargando datos?");
	}

	promedioPositivos=acumuladorPositivos/contadorPositvos;



	document.write("La cantidad de numeros pares es "+contadorNumerosPares+"<br>");
	document.write("La cantidad de numeros impares es "+contadorNumerosImpares+"<br>");
	document.write("La cantidad de ceros es "+contadorCeros+"<br>");
	document.write("El promedio de los numeros positivos es "+promedioPositivos+"<br>");
	document.write("La suma de todos los negativos es "+acumuladorNegativos+"<br>");
	document.write("El numero maximo es "+numeroMaximo+" y su letra es "+letraMaxima+"<br>");
	document.write("El numero minimo es "+numeroMinimo+" y su letra es "+letraMinima+"<br>");
}
