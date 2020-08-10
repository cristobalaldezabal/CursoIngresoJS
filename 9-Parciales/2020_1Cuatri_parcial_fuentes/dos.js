function mostrar()
	{

		let tipo;
		let cantbolsas;
		let precio;
	    let resp;
	    let preciototal;
	   	let descuento;
		let acumuladorarena=0;
		let acumuladorcemento=0;
		let acumuladorcal=0;
		let maxprecio=0;
		let maxtipo;
		let flag=0;
	   let acumuladorprecio=0;
let acumuladorbolsas=0;

	    resp ="s";

do{
	do
	{

	tipo=prompt("ingrese el tipo");

	switch(tipo)
	{
		case "arena":
		acumuladorarena=acumuladorarena+cantbolsas;
		if(flag==0 || maxprecio>precio)
		{
	     maxprecio="arena";
	     flag==1;
		}
		break;
		case "cal":
		acumuladorcal=acumuladorcal+cantbolsas;
		if(flag==0 || maxprecio>precio)
		{
			maxprecio="cal";
			flag==1;
		}
		break;
		case "cemento":
		acumuladorcemento=acumuladorcemento+cantbolsas;
	if(flag==0 || maxprecio>precio)
	{
		maxprecio="cemento";
	
	flag==1;
	}
	break;

	}


	}while(tipo!="arena" && tipo!="cal" && tipo!= "cemento");

	do
	{

		precio=prompt("ingrese precio");
	acumuladorprecio=acumuladorprecio+precio;

	}while(precio<=0);

	cantbolsas=parseInt(prompt("ingrese cantidad de bolsas"));
	acumuladorbolsas=acumuladorbolsas+cantbolsas;
 resp = prompt("quiere ingresar otro producto: s/n");

}while(resp=="s");

	alert("el importe sin descuento es" + acumuladorprecio);

	if(cantbolsas>10)
	{ 
		descuento=precio * 0.15;
	alert("el precio total es de "+ descuento);
	}
	else if(cant>30)
	{
		descuento=precio * 0.25;
		alert("el precio total es de" + descuento);
	}
	 
	 


	  
	  if(acumuladorarena<acumuladorcal&&acumuladorarena<acumuladorcemento)
	  {
	maxtipo="arena";

	  }
	else if (acumuladorcal<acumuladorarena&&acumuladorcal<acumuladorcemento)
	{
		maxtipo="cal";
	}
	else{
	maxtipo="cemento";
	}
	 
	alert("el tipo con mas cantidad de bolsas es"+ maxtipo);

	alert("el tipo mas caro es "+ maxprecio);


	 }