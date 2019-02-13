/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;

	primerPrecio=getElementsById("PrecioUno").value;
	segundoPrecio=getElementsById("PrecioDos").value;
	tercerPrecio=getElementsById("PrecioTres").value;

	
	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	suma=primerPrecio+segundoPrecio+tercerPrecio;

	alert("la suma es "+suma);





}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}