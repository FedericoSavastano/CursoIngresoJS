function mostrar()
{
	/*al realizar una compra, si compra mas de dos productos se realiza un 
	descuento del 10% y si supera los $2000 se agrega un descuento adicional
	del 15%, si el pago es con tarjeta y no efectivo al precio final
	se le agrega un 10% de recargo*/



	var productosComprados;
	var valorCompra;
	var recargoTarjeta;
	var valorFinal;



	productosComprados=prompt("ingrese cantidad de productos comprados","cantidad");
	valorCompra=prompt("ingrese el precio total de su compra","precio");
	recargoTarjeta=prompt("indique si el pago es con tarjeta o efectivo","tarjeta o efectivo");


	productosComprados=parseInt(productosComprados);
	valorCompra=parseInt(valorCompra);





	if(productosComprados>2 && valorCompra>2000)
	{
		valorFinal=valorCompra*0.75;
	}else if(productosComprados>2 && valorCompra<2000)
		{
			valorFinal=valorCompra*0.90;
		}else
		{
			valorFinal=valorCompra*1;
		}


	if(recargoTarjeta=="tarjeta")
		{
			valorFinal=valorCompra*1.10;
		}

	alert("Su costo final es "+valorFinal);




/*
version vista en clase:



	if(productos>2)
	{
		valorFinal=valorCompra*0.9;
		if(importe>2000)
		{
		valorFinal=valorCompra*0.85;
		}
	}

	if(recargoTarjeta=="tarjeta")
		{
		valorFinal=valorCompra*1.10;
		}

	alert("Su costo final es "+valorFinal);
	
}
*/
}
