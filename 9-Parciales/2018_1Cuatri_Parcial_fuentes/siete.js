function mostrar()
{
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


}
