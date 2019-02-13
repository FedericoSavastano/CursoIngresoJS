/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	
	var nombreIngresado;

	nombreIngresado=prompt("ingrese su nombre","nombre y apellido");

	getElementById(elNombre).value=nombreIngresado;

	//elNombre.value=nombreIngresado;


}

