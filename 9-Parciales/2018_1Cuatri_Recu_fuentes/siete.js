function mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var promedio;
	var acumulador=0;
	var notaMasBaja;
	var sexoNotBaja;
	var contadorVarones=0;



	while(contador<5)
	{
		contador++;

		nota=prompt("Ingrese nota entre 0 y 10");
		nota=parseInt(nota);

		while(nota<0 || nota>10)
		{
			nota=prompt("Error, reingrese nota entre 0 y 10");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese f o m");

		while(sexo!= "f" && sexo!="m")
		{
			sexo=prompt("error,reingrese f o m");
		}
	




	if (contador==1)
	{
		notaMasBaja=nota;
		sexoNotBaja=sexo;
	}
	else
	{
		if(nota<notaMasBaja)
		{
			notaMasBaja=nota;
			sexoNotBaja=sexo;
		}
	}


	if(sexo=="m" && nota >= 6)
	{
		contadorVarones=contadorVarones+1;
	}


	acumulador=acumulador+nota;
	}
	

	promedio= acumulador / 5;

	alert("El promedio de las notas totales es "+promedio);
	alert("La nota mas baja es "+notaMasBaja+" y el sexo de esa persona es "+sexoNotBaja);
	alert("La cantidad de varones con nota mayor o igual a 6 es "+contadorVarones);
}
