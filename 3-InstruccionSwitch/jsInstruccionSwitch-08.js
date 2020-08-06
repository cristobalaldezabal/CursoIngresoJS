function mostrar()
{

	let destino = document.getElementById("txtIdDestino").value;
 	

switch (destino)
{
 case "Bariloche": case "Ushuaia":
 alert("Hace frio");
 break;
 case "Mar del plata":  case "Cataratas":
 alert("Hace calor");
 break;

 default:
 alert("esta provincia no esta contemplada");
break;
}

}