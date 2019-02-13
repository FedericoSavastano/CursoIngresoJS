function mostrar()
{
//tomo la edad  
	var edadIngresada;

	edadIngresada=edad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Usted es mayor de edad");
	}else
	{
		alert("Usted es menor de edad");
	}

	//esto funciona en la medida que pongan numeros, si ponen letras saltará el "else". para evitar eso, habria que poner dos if, pero 
	//eso demanda otro trabajo para el procesador. 


}//FIN DE LA FUNCIÓN