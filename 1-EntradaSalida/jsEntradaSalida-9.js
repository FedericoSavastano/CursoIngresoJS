/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldoConAumento;
	var aumento
	var resultado;


	sueldo=sueldo.value;
	resultado=resultado.value;
	aumento=(1.10);

	sueldo=parseInt(sueldo);
	resultado=parseInt(resultado);
	aumento=parseInt(aumento)
	


	sueldoConAumento=resultado*aumento;

	//resultado.value=(sueldoConAumento);

	//document.getElementById("sueldo").value=sueldo;


	
}
