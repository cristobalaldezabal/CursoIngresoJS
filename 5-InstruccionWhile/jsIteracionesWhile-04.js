/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroingresado;
	
	do
	{

numeroingresado = parseInt(prompt("ingrese un numero entre 0 y 9."));

	}while(numeroingresado <=0 ||numeroingresado  >=9 );

	document.getElementById("txtIdNumero").value="el numero es correcto";
}