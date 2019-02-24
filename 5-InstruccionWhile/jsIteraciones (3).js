function mostrar()
{

	var clave;
	var intentos=0;

	clave=prompt("Ingrese la clave");

	while(clave!="UTN750")
	{
		intentos=intentos+1;
		if(intentos<3)
		{
			alert("clave incorrecta!, ingrese nuevamente");
			clave=prompt("ingrese la clave");
		}
		else
		{
			alert("salga de aca, ya probó mucho")
			break;
		}
		if(clave=="UTN750")
		{
			alert("clave correcta. bienvenido");
		}
	}

	










/*
	var clave = prompt("ingrese la clave");
	var intentos = 0;
	var flag = false;

/*
	while(clave!="UTN750")
	{
		alert("Clave incorrecta. Reingrese");
		clave = prompt("ingrese la clave");
	}

	while(clave!="UTN750")
	{
		alert("Clave incorrecta. Reingrese");
		clave = prompt("ingrese la clave");
		intentos=intentos + 1;
		if(intentos==3) //con esto pide 4 veces total
		{
			flag = true;
			break;
		}
	}

	if(flag==false)
	{
		alert("bienvenido al sistema");
	}
	



*/




/*
var clave = prompt("ingrese el número clave.");


	while(clave!="utn750")
	{
		//aca se piensa en base a la incorrecta
		clave=prompt("ingrese el numero clave");

	}
	alert("bien, entraste")
	*/

}//FIN DE LA FUNCIÓN
