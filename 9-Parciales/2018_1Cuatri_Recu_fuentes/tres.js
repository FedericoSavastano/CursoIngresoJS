function mostrar()
{
	var precioIngresado;
	var porcentajeIngresado;
	var porcentaje;
	var porcentajeAQuitar;
	var precioFinal;

	precioIngresado=prompt("Ingrese el precio","precio");
	porcentajeIngresado=prompt("Ingrese el porcentaje","porcentaje");

	precioIngresado=parseInt(precioIngresado);
	porcentajeIngresado=parseInt(porcentajeIngresado);

	porcentaje=porcentajeIngresado*0.01;

	porcentajeAQuitar=precioIngresado*porcentaje;

	precioFinal=precioIngresado-porcentajeAQuitar;

	

	elPrecioFinal.value=precioFinal;






}
