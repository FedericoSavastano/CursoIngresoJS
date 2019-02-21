function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;

	}
	


	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
// si a la linea de arriba le cambio acumulador/5 por acumulador/contador, me deja poner todos los numeros que quiera
//dif entre contador y acumulador, el contador cuenta literales y el otro variables.
}//FIN DE LA FUNCIÓN