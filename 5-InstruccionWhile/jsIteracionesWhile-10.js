/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
let respuesta;
let numero;
let sumanegativos=0;
let cantnegativos=0;
let cantpositivos=0;
let sumapositivos=0;
let cantceros=0;
let cantpares=0;
let promediopositivos;
let promedionegativos;

	respuesta="si";



	do
	num= parseInt(prompt("ingrese un numero: "));
	if(num >=0)
	{
sumapositivos= sumapositivos+num;
cantpositivos=
}
else {
sumanegativos= sumagenativos+num	
}		
		respuesta=prompt("desea ingresar otro numero?");
	}while(respuesta=="si");


	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN