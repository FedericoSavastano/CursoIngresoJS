function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var cantidad=0;
	var flag=false;

	var respuesta='si';
/*
	while(respuesta!='no')
	{
		numero=prompt("Ingrese numero");


		if(cantidad == 0)
		{
			maximo=numero;
			minimo=numero;
		}
		else{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero>minimo)
			{
				minimo=numero;
			}
		}

		cantidad++;
		respuesta=prompt("desea ingresar otro numero?");
	
	}

	document.getElementById. 
*/


	while(respuesta!='no')
	{
		numero=prompt("Ingrese numero");


		if(flag==false || numero>maximo)
		{
			maximo=numero;
			//flag=true; esto aca no iria, porque te haria al pedo lo de abajo
		}
		if(flag==false || numero<minimo)
		{
			minimo=numero;
			flag=true;
		}



		cantidad++;
		respuesta=prompt("desea ingresar otro numero?");
	
	}

	document.getElementById.("minimo").value=minimo;
	idem maximo

}//FIN DE LA FUNCIÓN