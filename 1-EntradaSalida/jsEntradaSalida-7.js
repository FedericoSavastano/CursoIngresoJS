/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	alert("la suma es "+suma);


}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resta=primerNumero-segundoNumero;

	alert("la resta es "+resta);
	

}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicación;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	multiplicación=primerNumero*segundoNumero;

	alert("la multiplicación es "+multiplicación);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var división;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	división=primerNumero/segundoNumero;

	alert("la división es "+división);
}

