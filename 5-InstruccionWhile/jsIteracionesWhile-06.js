function mostrar()
{
	let num;
	

	let suma;
	let promedio;

	num=parseInt(prompt("ingrese un numero"));
	
	num=num + parseInt(prompt("ingrese un numero"));
	num=num + parseInt(prompt("ingrese un numero"));
    num=num + parseInt(prompt("ingrese un numero"));
	num=num + parseInt(prompt("ingrese un numero"));
	num=num + parseInt(prompt("ingrese un numero"));

promedio=num/ 5;





	document.getElementById("txtIdSuma").value=parseInt(num);
	document.getElementById("txtIdPromedio").value=parseInt(promedio);
}//FIN DE LA FUNCIÓN