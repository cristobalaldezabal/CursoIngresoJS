function mostrar()
{
	let edad
	edad= parseInt(document.getElementById("txtIdEdad").value);


if (edad >= 18)
 {

	alert("es mayor de edad");

}
else if (edad >= 13 && edad <= 17 ) 
	{
alert("es adolescente");
	}
else if (edad < 65) 
{
alert("es mayor de edad");

}
}