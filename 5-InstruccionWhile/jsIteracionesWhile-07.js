/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador=0;
	let acumulador=0;
	let respuesta ="si";
    let num;
	let suma;
	let promedio;

	do{

num=parseInt(prompt("ingrese un numero"));
acumulador=acumulador + num;
contador++;
 respuesta=prompt("ingresa otro numero? si/no");

	}while(respuesta=="si");
document.getElementById("txtIdSuma").value=parseInt(acumulador);


promedio= acumulador/contador;

document.getElementById("txtIdPromedio").value=parseInt(promedio);



	
	



}//FIN DE LA FUNCIÓN