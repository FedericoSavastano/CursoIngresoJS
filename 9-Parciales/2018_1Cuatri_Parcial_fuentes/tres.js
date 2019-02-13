function mostrar()
{
	var precioIngresado;
	var porcentajeIngresado;
	var porcentajeAQuitar;
	var valorDelPorcentaje;
	var precioFinal;

	precioIngresado=prompt("ingrese el precio");
	porcentajeIngresado=prompt("ingrese el porcentaje de descuento");

	precioIngresado=parseInt(precioIngresado);
	porcentajeIngresado=parseInt(porcentajeIngresado);

	
	porcentajeAQuitar=porcentajeIngresado*0.01


	valorDelPorcentaje=precioIngresado*porcentajeAQuitar;

	
	precioFinal=precioIngresado-valorDelPorcentaje;


	elPrecioFinal.value=precioFinal;




}
