function mostrar()
{
	var mesDelAño
	mesDelAño=document.getElementById("txtIdMes").value;

switch (mesDelAño)
{
	case "Junio": case "Julio": case "Agosto":
{
	alert("abrigate que hace frio");
	break;
}
case "Enero": case "Febrero": case "Marzo": case "Abril": case "Mayo":
{
	alert("falta para el invierno");
	break;
}
case "Septiembre": case "Octubre": case "Noviembre": case "Diciembre": 
{
alert("Ya paso el invierno ahora calor!!!");
break;
}



}//FIN DE LA FUNCIÓN
}