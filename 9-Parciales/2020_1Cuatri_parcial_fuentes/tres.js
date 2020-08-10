function mostrar()
{
let nombre;
let edad;
let sexo;
let estadocivil;
let temperatura;
let maxtemp=0;

let contmayoresviudos=0;
let conthombresviudos=0;
let flag=0;

let conthombressolteros=0;

let conthombrescontemperatura=0;

let acumedadhombressolteros=0;
let promedioedadsolteros;
let resp;

resp="s";


do 
{
nombre=prompt("ingrese su nombre");


	do{
	sexo=prompt("ingrese su sexo: f/m");
	}while(sexo!="f" && sexo!="m");


edad=parseInt(prompt("ingrese su edad"));


	do{
	estadocivil=prompt("ingrese su estado civil: soltero / casado / viudo");
	}while(estadocivil!="soltero" && estadocivil!="casado" && estadocivil!="viudo");

if(edad>=18 && estadocivil=="viudo")
	{
	contmayoresviudos++;
	}
if(sexo=="m"&&estadocivil=="viudo")
	{
	conthombresviudos++;
	}
if(sexo=="m"&& estadocivil=="soltero")
	{
		acumedadhombressolteros=acumedadhombressolteros+edad;
		conthombressolteros++;
	}


temperatura=parseInt(prompt("ingrese su temperatura"));

if(edad>=60&& temperatura>=38)
	{
		conthombrescontemperatura++;
	}
 
if(flag=0|| maxtemp>temperatura)
	{
		maxtemp=temperatura;
		nombre=maxtemp;
		flag=1;
	}

resp=prompt("desea cargar otra persona? s/n");

}while(resp=="s");


	alert("el nombre de la persona con mas temperatura es" + nombre);

	alert("hay " +contmayoresviudos+ "mayores viudos");

	alert("hay " +conthombresviudos+ "hombres viudos y " +conthombressolteros+ "hombres solteros");

	promedioedadsolteros=acumedadhombressolteros/conthombressolteros;

	alert("el promedio de edad de los hombres solteros es de"+ promedioedadsolteros);


}
