function mostrar()
{

	let destino = document.getElementById("txtIdDestino").value;
 	

switch (destino)
{
 case "Bariloche":
 alert("Oeste");
 break;
 case "Mar del plata":
 alert("Este");
 break;
 case "Cataratas":
 alert("Norte");
 break;
 case "Ushuaia":
 alert("Sur");
 break;
 default:
 alert("esta provincia no esta contemplada");
break;
}

}
