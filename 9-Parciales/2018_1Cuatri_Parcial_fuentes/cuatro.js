function mostrar()
{	
	var numeroUno;
	var numeroDos;

	numeroUno=prompt("Ingrese el primer numero");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("Ingrese el segundo numero");
	numeroDos=parseInt(numeroDos);


	if(numeroUno==numeroDos)
	{
		mensaje=(numeroUno+" y "+numeroDos);
	}else
	{
		if(numeroUno>numeroDos)
		{
			mensaje=numeroUno/numeroDos;
		}else
		{
			if(numeroUno<numeroDos)
			{
				mensaje=numeroUno+numeroDos
				if(mensaje<50)
				{
					mensaje=("la suma es "+mensaje+" y es menor a 50");
				}
			}
		}
	}



	alert(mensaje);




/*



	var importeUno;
	var importeDos;
	var importeTres;
	var importeCuatro;
	var sumaCuatroImportes;
	var menosDiezPorCiento;
	var menosCincoPorCiento;
	var masQuincePorCiento;
	var mensajeDos;

	importeUno=prompt("ingrese el primer importe");
	importeDos=prompt("ingrese el segundo importe");
	importeTres=prompt("ingrese el tercer importe");
	importeCuatro=prompt("ingrese el cuarto importe");

	importeUno=parseInt(importeUno);
	importeDos=parseInt(importeDos);
	importeTres=parseInt(importeTres);
	importeCuatro=parseInt(importeCuatro);

	sumaCuatroImportes=importeUno+importeDos+importeTres+importeCuatro;
	menosDiezPorCiento=sumaCuatroImportes*0.9
	menosCincoPorCiento=sumaCuatroImportes*0.95
	masQuincePorCiento=sumaCuatroImportes*1.15

	if(sumaCuatroImportes>=100)
	{
		mensaje=("su total es "+sumaCuatroImportes+" y tiene un descuento del 10%, su total es " +menosDiezPorCiento);

	}else if(sumaCuatroImportes>=50 && sumaCuatroImportes<=99)
	{
		mensaje=("su total es "+sumaCuatroImportes+" y tiene un descuento del 5%, su total es " +menosCincoPorCiento);
	}else{
		mensaje=("su total es "+sumaCuatroImportes+" y tiene una recarga del 15%, su total es "  +masQuincePorCiento);
	}


	if(importeUno>importeDos && importeUno>importeTres && importeUno>importeCuatro)
	{
		mensajeDos=("el mayor importe es " +importeUno+"");
	}else if(importeDos>importeUno && importeDos>importeTres && importeDos>importeCuatro)
	{
		mensajeDos=("el mayor importe es " +importeDos+"");
	}else if(importeTres>importeUno && importeTres>importeDos && importeTres>importeCuatro)
	{
		mensajeDos=("el mayor importe es "+importeTres+"");
	}else if(importeCuatro>importeUno && importeCuatro>importeDos && importeCuatro>importeTres)
	{
		mensajeDos=("el mayor importe es "+importeCuatro+"");
	}else 
	{
		mensajeDos=("el mayor importe es "+importeUno+"");
	}

	alert(mensajeDos+" y "+mensaje);
	
	























/*
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
*/
}
