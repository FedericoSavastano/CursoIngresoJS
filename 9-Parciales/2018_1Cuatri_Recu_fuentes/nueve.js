function mostrar()
{	
	var animal;
	var peso;
	var temperatura;
	var contador=0;
	var contadorDePeso=0;
	var acumuladorPeso=0;
	var contTempPares=0;
	var contAnimalesBajoCero=0;

	var acumuladorPesoBajoCero=0;
	var respuesta="si";

	while(respuesta=="si")
	{
		contador++;
		animal=prompt("Ingrese el animal");
		peso=prompt("Ingrese el peso");
		temperatura=prompt("Ingrese temperatura");


		//cantidad de temperaturas pares
		//La cantidad de animales que viven a menos de 0 grados. 

		if(temperatura>-30 && temperatura<30)
		{
			temperatura=parseInt(temperatura);

			if(temperatura%2 ==0)
			{
				contTempPares++;
			}

			if(temperatura<0)
			{
				contAnimalesBajoCero++;

				acumuladorPeso=peso+acumuladorPesoBajoCero;
			}
		}
		
		
		//promedio del peso de todos los animales
		if(peso>1 && peso<1000)
		{
			peso=parseInt(peso);
			//contadorDePeso++;
			acumuladorPeso=peso+acumuladorPeso;
		}
		




		respuesta=prompt("desea continuar?");
	}




	promedioPeso=acumuladorPeso/contador;


	alert("El promedio de pesos es "+promedioPeso);
	alert("la cantidad de animales que viven bajo cero es "+contAnimalesBajoCero);
	alert("temperaturas pares son "+contTempPares);



}
