function mostrar()
{
	var numeroUno;
	var numeroDos;
	var concatenados;
	var division;
	var suma;


	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	concatenados=(""+numeroUno+" y "+numeroDos);
	division=numeroUno/numeroDos;
	suma=numeroUno+numeroDos;

	if(numeroUno=numeroDos)
	{
		mensaje=concatenados;
	
	if(numeroUno>numeroDos)
		{
			mensaje=division
		}
		else
		{
		mensaje=suma
			if(suma<50)
			{
				mensaje=("la suma es "+suma+" y es menor a 50");
			}
		
		}

	}

	alert(mensaje);
	
}	
