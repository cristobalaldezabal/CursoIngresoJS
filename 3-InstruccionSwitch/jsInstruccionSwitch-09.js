function mostrar()
{
let estacion;
let destino;
const estadiabase= 15000;



estacion= document.getElementById("txtIdEstacion").value;
destino = document.getElementById("txtIdDestino").value;


switch(estacion) { 

case "Invierno":
switch(destino)
{
	case "Bariloche" : 
	alert("el costo es $" + (estadiabase + (estadiabase *0.2)));
	break;
	case "Cataratas": "Cordoba": 
	alert("el costo es de $" + (estadiabase - (estadiabase*0.1)));
	break;
	case "Mar del plata":
alert("el costo es de $"+ (estadiabase-(estadiabase*0.2))); 
	break;


	}
	break;

case "Verano": 
switch(destino)
{
	case "Bariloche":
 alert("el costo es de $"+ (estadiabase - (estadiabase *0.2)));
	break;
	case "Cataratas": "Cordoba": 
	alert("el costo es de $"+(estadiabase + (estadiabase*0.1)));
	break;
	case "Mar del plata":
	alert("el costo es de $"+(estadiabase+(estadiabase*0.2))); 
	break;
}
break;

case "Otoño": case "Primavera":
switch(destino)
{
	case "Bariloche": "Mar del plata" : "Cataratas":
	alert("el costo es de $"+ (estadiabase + (estadiabase*0.1)));
	break;
	case "Cordoba":
alert("el costo es de $"+ estadiabase);
	break;


}
break;
}

}