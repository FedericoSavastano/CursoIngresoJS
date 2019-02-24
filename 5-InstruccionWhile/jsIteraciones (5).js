function mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	
	while(sexo!="f" && sexo!="m")
	{
		alert("eso no es un sexo");
		sexo = prompt("ingrese f ó m .");
	}

	Sexo.value=sexo;





	/*

	while(sexo=="f" || sexo=="m") esto es lo correcto, por lo tanto esta mal. si se le pone el (!) adelante va
	while (sexo!="f" && sexo!="m") este es el que va







	while (sexo!="f" && sexo!="m")
	{
		alert("Sexo invalido");
		sexo=prompt("ingrese f o m");
	}

document.getElementById('Sexo').value=sexo;
*/
}//FIN DE LA FUNCIÓN