function mostrar()
{
//tomo la edad  
	var laEdad;
	var situacionSentimental;
	var mensaje;


	laEdad=edad.value;
	situacionSentimental=estadoCivil.value;

	laEdad=parseInt(laEdad);

	if(laEdad<18 && situacionSentimental=="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	


}//FIN DE LA FUNCIÓN