
function mostrar()
{
	var ancho;
	var largo;
	var permietro;

	ancho=prompt("ingrese el ancho","ancho");
	largo=prompt("ingrese el largo","largo");
	
	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=2*(ancho+largo);

	alert("el permetro es "+perimetro);

		

}
