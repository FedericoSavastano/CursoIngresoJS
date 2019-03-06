function mostrar()
{

	var nota;
	var sexo;
	var contador=0;
	var acumuladorNotas=0;
	var promedioNotas;
	var notaMasBaja;
	var sexoMasBajo;
	var contadorVaronesSeis=0;

	while(contador<5)
	{
		nota=prompt("Ingrese la nota, entre 0 y 10");
		nota=parseInt(nota);
		while(isNaN(nota) || nota<0 || nota>10)
		{
			nota=prompt("Error. Reingrese la nota, debe ser entre 0 y 10");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese el sexo");
		while( (!(isNaN(sexo))) || sexo!="f" && sexo!="m"   )
		{
			sexo=prompt("Error. Re ingrese el sexo, debe ser [ f ] o [ m ] ");
		}

		contador++;

		acumuladorNotas=nota+acumuladorNotas;

		if(nota<notaMasBaja || notaMasBaja == undefined)
		{
			notaMasBaja=nota;
			sexoMasBajo=sexo;
		}

		if(nota>=6 && sexo=="m")
		{
			contadorVaronesSeis++;
		}


	}

	promedioNotas=acumuladorNotas/5;

	alert("El promedio de las notas es "+promedioNotas+" la nota mas baja es "+notaMasBaja+" y es del sexo "+sexoMasBajo+" , la cantidad de varones con mas de seis es "+contadorVaronesSeis);




/*





	var nota
	var sexo
	var contador=0;
	var contVarMasSeis=0;
	var acumuladorNota=0;
	var sexoNotaMasBaja;
	var notaMasBaja;
	var


	while(contador>5)
	{
		contador++;
		nota=prompt("ingrese la nota");
		sexo=prompt("ingrese el sexo");
		
		if(nota>0 && nota<10)
		{
			nota=parseInt(nota);
			acumuladorNota=acumuladorNota+nota;
		}


		if(nota<notaMasBaja)
		{
			notaMasBaja=nota;
			sexo=sexoNotaMasBaja;
		}


		if(nota>=6 && sexo=="m")
		{
			contVarMasSeis++;
		}
	}



	promedio=acumulador/5;

	alert("el promedio de las notas es "+promedio+"la nota mas baja es "+notaMasBaja+" su sexo es "+sexoNotaMasBaja+" la cantidad de varones con 6 es "+contVarMasSeis);

*/
}
