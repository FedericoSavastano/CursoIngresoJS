/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

//version uno	bien, pero con mismos nombres, confuso y variables puestas al pedo. pero funciona.

	/*
	var dividendo;
	var divisor;
	var resto;


	numeroDividendo=numeroDividendo.value;
	numeroDivisor=numeroDivisor.value;

	numeroDividendo=parseInt(numeroDividendo);
	numeroDivisor=parseInt(numeroDivisor);
 	
 	resto=numeroDividendo%numeroDivisor;

	alert("el resto es " +resto);

	*/

//version dos  bien. mas prolijo y correcto.
	
	var dividendo;
	var divisor;
	var resto;


	dividendo=numeroDividendo.value;
	divisor=numeroDivisor.value;

	numeroDividendo=parseInt(dividendo);
	numeroDivisor=parseInt(divisor);
 	
 	resto=numeroDividendo%numeroDivisor;

	alert("el resto es " +resto);
	

//version tres (mal)
	/*
	var dividendo;
	var divisor;
	var resto;


	dividendo=numeroDividendo.value;
	divisor=numeroDivisor.value;

	dividendo=parseInt(numeroDividendo);
	divisor=parseInt(numeroDivisor);
 	
 	resto=numeroDividendo%numeroDivisor;

	alert("el resto es " +resto);
	*/
}
