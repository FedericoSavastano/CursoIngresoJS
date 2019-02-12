
function mostrar()
{
	var ancho=prompt("introduzca el ancho del rectángulo");
	var largo=prompt("introduzca el largo del rectángulo");
	var perimetro;


	//ancho=prompt("introduzca el ancho del rectángulo");
	//largo=prompt("introduzca el largo del rectángulo");
	ancho=parseInt(ancho);
	largo=parseInt(largo);
	perimetro=2*(ancho+largo);

	alert("el perimtero es " +perimetro);
}
