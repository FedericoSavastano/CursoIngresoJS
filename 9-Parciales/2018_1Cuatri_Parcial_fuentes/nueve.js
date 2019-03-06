function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta="si";
	var contadorTemperaturasPares=0;
	var pesoMasPesado;
	var marcaMasPesada;
	var contadorMenosCeroGrados=0;
	var acumuladorPesos=0;
	var promedioPesos;
	var pesoMenosPesado;
	var contador=0;

	for(respuesta=="si";respuesta=="si";contador++)
	{

		

		marca=prompt("Ingrese la marca");
		while((!(isNaN(marca))))
		{
			marca=prompt("Esa no es una marca valida. Reingrese la marca");
		}


		peso=prompt("Ingrese el peso. entre 1 y 100");
		peso=parseInt(peso);
		while(isNaN(peso)||peso<1||peso>100)
		{
			peso=prompt("Ese no es un peso correcto. Reingrese el peso. QUE SEA entre 1 y 100");
			peso=parseInt(peso);
		}

		temperatura=prompt("Ingrese la temperatura. entre -30 y 30");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)||temperatura<-30||temperatura>30)
		{
			temperatura=prompt("Esa no es una temperatura correcta. Reingrese la temperatura. QUE SEA entre -30 y 30");
			temperatura=parseInt(temperatura);
		}


		if(temperatura%2==0 && temperatura!=0)
		{
			contadorTemperaturasPares++;
		}

		if(peso>pesoMasPesado||pesoMasPesado==undefined)
		{
			pesoMasPesado=peso;
			marcaMasPesada=marca;
		}

		if(peso<pesoMenosPesado||pesoMenosPesado==undefined)
		{
			pesoMenosPesado=peso;
		}

		if(temperatura<0)
		{
			contadorMenosCeroGrados++;
		}

		acumuladorPesos=peso+acumuladorPesos;

		respuesta=prompt("Desea cargar mas datos?");
	}


	promedioPesos=acumuladorPesos/contador;




	document.write("La cantidad de temperaturas pares es "+contadorTemperaturasPares+"<br>");
	document.write("La marca del producto mas pesado es "+marcaMasPesada+"<br>");
	document.write("La cantidad de productos que se conservan bajo cero es "+contadorMenosCeroGrados+"<br>");
	document.write("El promedio del peso de todos los productos es "+promedioPesos+"<br>");
	document.write("El peso maximo es "+pesoMasPesado+" y el minimo es "+pesoMenosPesado+"<br>");
}
