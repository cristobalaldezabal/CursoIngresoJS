function mostrar()
{
	var edad = parseInt(document.getElementById("txtIdEdad").value);
	
if (!(edad >= 13 && edad <=17))
{
	alert("Usted no es adolecente");

}
}