function mostrar()
{
	
	/*
	var dia;
	var mensaje;

	dia=prompt("Ingrese un dia");

	switch(dia)
	{
		case lunes:
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		mensaje="a trabajar";
		break;

		case "sabado":
		case "domingo":
		mensaje="buen finde":
		break;

		default:
		mensaje="ese no es un dia valido";
		break;

	}

	alert(mensaje);









	/*cada habitacion de un hotel tiene un precio, hay promociones segunel tipo de pago
	si es con tarjeta visa un 10%, si es por pay pal un 15%, por mercado pago un 10%, 
	efectivo 20%, cualquier otro medio solo un 5%
	Si compraste el paquete "todoIncluido" y pagas con paypal se te suma un 10% al descuento
	si pagas en efectivo, tenes varias opciones, el paquete "solo desayunos" te suma un 10% 
	al descuento, si el paquete es "todoIncluido" te suma un 15% y para el resto de los paquetes no tiene
	descuento adicional

*/

	var pago;
	var tipoDePago;
	var paquete;
	var descuento;
	var costoTotal;


	pago=prompt("Ingrese el monto de su pago");
	tipoDePago=prompt("Ingrese el tipo de pago");
	paquete=prompt("Indique si adquirió un paquete");

	pago=parseInt(pago);

	switch(tipoDePago)
	{
		case "tarjeta visa":
		case "mercado pago":
			//costoTotal=pago*0.90;
			descuento=0.90;
		break;

		case "paypal":
			switch(paquete)
			{
				case "todoIncluido":
				descuento=0.75;
				break;

				default:
				descuento=0.85;
				break;
			}		
		break;

		case "efectivo":
			switch(paquete)
			{
			case "soloDesayunos":
			descuento=0.70;
			break;

			case "todoIncluido":
			descuento=0.65;
			break;

			default:
			descuento=0.80;
			break;
			}
		break;	

		default:
		descuento=0.95;
		break;

	}


	costoTotal=pago*descuento

	alert("Su paquete tiene un costo total de "+costoTotal);








/*
	var planeta;
	var mensaje;

	planeta=prompt("Ingrese un planeta del sistema solar");
	mensaje="este no es un planeta válido";


	switch(planeta)
	{
		case "tierra":
		mensaje="aca vivimos";
		break;
		
		case "mercurio":
		case "venus":
		case "marte":
		case "jupiter":
		mensaje="aca hace mas calor";
		break;

		case "saturno":
		case "urano":
		case "neptuno":
		mensaje="aca hace mas frio";
		break;
	}


	alert(mensaje);
*/
}
