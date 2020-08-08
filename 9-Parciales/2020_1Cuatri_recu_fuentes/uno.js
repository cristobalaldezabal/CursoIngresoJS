
function mostrar()
{
let precio;
let cantidadunidades;
let acumuladorjabon=0;
let acumuladoralcohol=0;
let marca;
let fabricante;
let producto;
let tipo;
let alcoholmasbarato;
let flag1=0;
let acumuladorbarbijo=0;
let fabricantealcohol;
let contalcohol;
let contbarbijo;
let contjabon;

contbarbijo=0;
contjabon=0;
contalcohol=0;



for(let i = 0 ;i < 5 ; i++  )
{



	producto=prompt("ingrese un articulo");


	do {
		precio=prompt("ingrese precio");
	}while(precio<300 && precio>100);

	fabricante=prompt("ingrese el fabricante");
	marca=prompt("ingrese la marca");

	do{
		cantidadunidades=prompt("ingrese cantidad de unidades");
	}while(cantidadunidades<1000 && cantidadunidades>1);

	do
	{
	tipo=prompt("ingrese categoria: jabon, barbijo, alcohol");

		switch(tipo)
		{			


			case "alcohol":
					contadoralcohol=contadoralcohol+cantidadunidades;

				if(flag1==0 || alcoholmasbarato>precio){
					alcoholmasbarato=precio;
				fabricantealcohol=fabricante;
					flag1=1;
					contalcohol++;
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
	}while(tipo!="jabon" || tipo!="barbijo" || tipo!="alcohol");


}


	if (acumuladorjabon>acumuladoralcohol&& acumuladorjabon>acumuladorbarbijo)
		{
		
		acumuladorjabon/cantidadunidades=promedio;
		
		else if(acumuladoralcohol>acumuladorjabon&&acumuladoralcohol>acumuladorbarbijo)
	 acumuladoralcohol/cantidadunidades=promedio;
	else
		acumuladorbarbijo/cantidadunidades=promedio;

	 }

	if(producto=="jabon"){


	alert("la cantidad de jabon es "+ acumuladorjabon);

	}
	if(producto=="alcohol"){


	alert("la cantidad de alcohol es " +acumuladoralcohol+ " y su fabricante es "+fabricantealcohol  );

	}

}	
