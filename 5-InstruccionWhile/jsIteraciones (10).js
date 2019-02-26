function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;



	var numero;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	
	{
		numero=prompt("Ingrese numero");
		contador=contador+1;
		numero=parseInt(numero);
		
		
/*
		if(numero<0)
		{
			negativo=negativo*numero;
		}else
		{
			positivo=positivo+numero;
		}
	*/	
		respuesta=prompt("Ingrese si para continuar");
	}

document.write(numero);

}//FIN DE LA FUNCIÓN