/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador=0;
	let acumulador=0;
	let respuesta ="si";
    let num;
	let sumapositivos=0;
	let productonegativo=0;
let multiplicacion=1;
	do{

num=parseInt(prompt("ingrese un numero"));
if (num >=0)
{
	sumapositivos= sumapositivos+num; 
}
else {
	productonegativo= productonegativo * multiplicacion;
}

contador++;
 respuesta=prompt("ingresa otro numero? si/no");

	}while(respuesta=="si");

document.getElementById("txtIdSuma").value=sumapositivos;


document.getElementById("txtIdProducto").value=productonegativo;
	

}