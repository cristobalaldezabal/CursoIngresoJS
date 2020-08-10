function mostrar()
{
let precio;
let cantidadunidades;
let marca;
let fabricante;
let tipo;
let tipomax;
let alcoholmasbarato;
let flag1=0;
let acumuladorjabon=0;
let acumuladoralcohol=0;
let acumuladorbarbijo=0;
let fabricantealcohol;
let contalcohol;
let contbarbijo;
let contjabon;
let promedio;
let contalcoholmin;


contbarbijo=0;
contjabon=0;
contalcohol=0;
contalcoholmin=0;


for(let i = 0 ;i < 5 ; i++  )
{

	do
	{
	tipo=prompt("ingrese tipo de producto: jabon, barbijo, alcohol");


}while(tipo!="jabon" && tipo!="barbijo" && tipo!="alcohol");

	do {


	precio=parseInt(prompt("ingrese precio"));
	
		
	}while(precio < 100 || precio > 300);

	
	do{
		cantidadunidades=parseInt(prompt("ingrese cantidad de unidades"));

	}while(cantidadunidades>1000 || cantidadunidades<1);

fabricante=prompt("ingrese el fabricante");
	marca=prompt("ingrese la marca");


	

		switch(tipo)
		{			


			case "alcohol":
					acumuladoralcohol=acumuladoralcohol+cantidadunidades;
				contalcohol++;
				if(flag1==0 || alcoholmasbarato>precio)
				{
					alcoholmasbarato=precio;
 					contalcoholmin=cantidadunidades;
				fabricantealcohol=fabricante;

					flag1=1;
					
				}
			break;

			case "jabon":
				acumuladorjabon=acumuladorjabon+cantidadunidades;
				contjabon++;
			break;
			case "barbijo":
				acumuladorbarbijo=acumuladorbarbijo+cantidadunidades;
				contbarbijo++;
			break;

		}
	


}
if(contjabon!=0){


	alert("la cantidad de jabon es "+ contjabon);

	}
	if(contalcohol!=0){


	alert("la cantidad de alcohol es " +contalcohol+ " y su fabricante es "+fabricantealcohol  );

	}

	if (acumuladorjabon>acumuladoralcohol&& acumuladorjabon>acumuladorbarbijo)
		{
		tipomax= "jabon";
		promedio=acumuladorjabon/contjabon;
	}
		
		else if(acumuladoralcohol>acumuladorjabon&&acumuladoralcohol>acumuladorbarbijo)
		{
	 tipomax="alcohol";
	 promedio=acumuladoralcohol/contalcohol;
	}
	else{
		tipomax="barbijo";
		promedio=acumuladorbarbijo/contbarbijo;

	 }
	 alert ("el maximo de unidades es de la categoria: " + tipomax + " y el promedio es: " + promedio);

	

}	

