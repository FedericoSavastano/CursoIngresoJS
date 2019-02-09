/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	

	var sueldo;
	var sueldoConAumento;
	var aumento;

	sueldo=document.getElementById("sueldo").value;

	sueldo=parseInt(sueldo);
	//sueldo=parseFloat(sueldo); con este calcula numeros con coma decimales

	aumento = sueldo * 0.1;

	sueldoConAumento = sueldo + aumento;

	document.getElementById("resultado").value = sueldoConAumento;






	//sacar el porcentaje primero dice. y despues hacer el calculo 
	//de sueldo mas el porcentaje.
	//pero despues mas comodo es directamente multiplicarlo por 1.20
	//si queres sacar el 20 por ciento 



/*
	var montoIngresado;
	var montoConAumento;
	var aumento;


	montoIngresado=document.getElementById("sueldo").value;
	montoConAumento=document.getElementById("resultado").value;
	aumento=1.10

	montoIngresado=parseInt(montoIngresado);
	montoConAumento=parseInt(montoConAumento);
	aumento=parseFloot(aumento);

	resultado.value=montoIngresado*aumento;












/*
	var monto;
	var montoConAumento;
	var aumento;


	monto=sueldo.value;
	montoConAumento=resultado.value;
	aumento=(10);

	monto=parseInt(monto);
	montoConAumento=parseInt(montoConAumento);
	aumento=parseInt(aumento)
	
	resultado=monto*aumento


	resultado.value=montoConAumento
	//montoConAumento=resultado*aumento;

	//resultado.value=(sueldoConAumento);

	//document.getElementById("sueldo").value=sueldo;
*/

	
}
