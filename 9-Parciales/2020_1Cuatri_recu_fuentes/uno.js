function mostrar()
{
let tipo;
let maxtipojabon; 
let maxtipo;
let precio;
let maxprecio;
let cantunidades;
let fabricante;
let fabricantecaro;
let jaboncaro;

let acujabon=0;
let acubarbijos=0;
let acualcohol=0;

let contjabon=0;
let contbarbijos=0;
let contalcohol=0;

let promedio;

let flag=0;



for(let i=0; i<5 ; i++)
{

do
{

tipo=prompt("ingrese tipo de producto");


}while(tipo!="barbijo"&&tipo!="jabon"&&tipo!="alcohol");


do{

	precio=parseInt(prompt("ingrese precio"));

}while(precio<100 || precio>300);

do{

cantunidades=parseInt(prompt("ingrese la cantidad de unidades"));
}while(cantunidades<0 || cantunidades>1000);

fabricante=prompt("ingrese fabricante");

switch(tipo){
	case "jabon":
acujabon=acujabon+cantunidades;
	contjabon++;
	
	if(flag==0|| maxprecio>precio)
	{
	
	maxprecio=precio;
	maxtipojabon=cantunidades;
	fabricantecaro=fabricante;
	}
	break;
	case "barbijo":
	acubarbijos=acubarbijos+cantunidades;
	contbarbijos++;
	break;

	case "alcohol":
	acualcohol=acualcohol+cantunidades;
	contalcohol++;
	break;
	}




}
if(acujabon>acubarbijos&&acujabon>acualcohol)
{
	maxtipo="jabon";
	promedio=acujabon/cantunidades;
}
else if (acubarbijos>acujabon&&acubarbijos>acualcohol)
{
	maxtipo="barbijo";
	promedio=acubarbijos/cantunidades;
}

else{
	maxtipo="alcohol";
	promedio=acualcohol/cantunidades;
} 


alert("el jabon mas caro es "+maxprecio+ "y su fabricante es " + fabricantecaro);
alert("el producto con mayor cantidad de unidades es " +maxtipo+ " y su promedio es "+promedio);
alert("la cantidad de barbijos que se compraron es de "+acubarbijos);






}	
