/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoIngresado;
	var aumento;
	var sueldoConAumento;

	sueldoIngresado=sueldo.value;

	sueldoIngresado=parseInt(sueldoIngresado);

	aumento=sueldoIngresado*0.10;

	sueldoConAumento=sueldoIngresado+aumento;

	resultado.value=sueldoConAumento;









}
