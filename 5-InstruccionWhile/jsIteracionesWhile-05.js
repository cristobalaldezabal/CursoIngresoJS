/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	
do
{


sexo = prompt("ingrese f ó m .");

}while(sexo !="f" && sexo!="m" && sexo !="M" && sexo!="F");



switch(sexo)
{
	case "f": case "F": 


document.getElementById("txtIdSexo").value= "femenino" ;

break;

case "m": case "M":

document.getElementById("txtIdSexo").value= "masculino";
break;


}





}//FIN DE LA FUNCIÓN