/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declarar una variable
	var vNombre;
	//asignacion
	vNombre = "Yanina";

	 vNombre = prompt("Ingrese un nombre");
	
	alert(vNombre);

	//declarar una constante
	const cNombre = "Pepe";

	var vDato;
	var vDato2;

	vDato = prompt("Ingrese un Dato"); //asignando prompt a vNombre
	
	vDato2 = prompt("Ingrese un Dato"); //asignando prompt a vNombre
	alert(vDato+ " " +vDato2);
}

