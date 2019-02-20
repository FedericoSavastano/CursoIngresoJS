function mostrar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	var resta;
	var concatenado;


	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;
	resta=numeroUno-numeroDos;
	concatenado=(""+numeroUno+" y "+numeroDos);



	if(numeroUno==numeroDos)
	{
		mensaje=concatenado;
	}else if(numeroUno>numeroDos)
		{
			mensaje=resta;
		}else{
			mensaje=suma;

			if(suma>10)
			{
				mensaje=("la suma es "+suma+" y superó el 10");
			}
			}

	alert(mensaje);

}
