<<<<<<< HEAD
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()

{
	var importe;
	var descuento;

	importe=parseInt(document.getElementById("txtIdImporte").value);
	descuento=importe-importe*0.25;
	
	document.getElementById("txtIdResultado").value=descuento;

}
=======
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	alert("ok");
}
>>>>>>> f17becf8d5184dd4089a09667c8c760496f646a2
