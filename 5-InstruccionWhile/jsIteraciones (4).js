function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	numero=parseInt(numero);

	/*
	while(numero>0 && numero<10)
		//esto esta mal, el while tiene que buscar el error.
		(numero<0 && numero>9)
		//esto es un error tambien , porque no hay numero que sea 0 Y 9, tiene que ser O
		(numero<0 || numero>9) este si esta bien,
		otra es buscar la negacion del primero tipo (!(numero>0 && numero<10))
	*/

	while (numero<0 || numero>9)
	{
		alert("numero invalido");
		numero=prompt("ingrese un número entre 0 y 10.");
	}

Numero.value=numero;

}//FIN DE LA FUNCIÓN