
function mostrar()
{
	
	var ancho=prompt("Ingrese el ancho");
	var largo=prompt("Ingrese el largo");
	var perimetro;

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=(ancho+largo)*2;

	alert("El perimetro es "+perimetro);
/*


	var nombreUno;
	var nombreDos;
	var edadUno;
	var edadDos;
	var sumaEdades;

	nombreUno=prompt("Ingrese el nombre de la primera persona","nombre y apellido");
	nombreDos=prompt("Ingrese el nombre de la segunda persona","nombre y apellido");
	edadUno=prompt("Ingrese la edad de la primera persona","edad");
	edadDos=prompt("Ingrese la edad de la segunda persona","edad");


	edadUno=parseInt(edadUno);
	edadDos=parseInt(edadDos);

	sumaEdades=edadUno+edadDos

	alert("Ustedes son "+nombreUno+" y "+nombreDos+" , sus edades son "+edadUno+" y "+edadDos+" , y la suma de sus edades es "+sumaEdades);








//otro



	var ancho;
	var largo;
	var permietro;

	ancho=prompt("ingrese el ancho","ancho");
	largo=prompt("ingrese el largo","largo");
	
	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=2*(ancho+largo);

	alert("el permetro es "+perimetro);

		
*/
}
