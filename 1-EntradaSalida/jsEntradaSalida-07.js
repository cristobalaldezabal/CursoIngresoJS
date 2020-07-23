/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()

{
var Numerouno;
	var Numerodos;
	var Suma;

	Numerouno = document.getElementById("txtIdNumeroUno").value;
	Numerodos = document.getElementById("txtIdNumeroDos").value;

	Suma = parseInt(Numerouno) + parseInt(Numerodos);

	alert("la suma es "+Suma);
}

function restar()
{
	var Numerouno;
	var Numerodos;
	var Resta;

	Numerouno = document.getElementById("txtIdNumeroUno").value;
	Numerodos = document.getElementById("txtIdNumeroDos").value;

	Resta = parseInt(Numerouno) - parseInt(Numerodos);

	alert("la suma es "+Resta);
}
function dividir()
{
	var Numerouno;
	var Numerodos;
	var DIVISION;

	Numerouno = document.getElementById("txtIdNumeroUno").value;
	Numerodos = document.getElementById("txtIdNumeroDos").value;

	DIVISION = parseFloat (Numerouno) / parseFloat(Numerodos);

	alert("la division es "+DIVISION);
}
function multiplicar()
{
	var Numerouno;
	var Numerodos;
	var Multiplicacion;

	Numerouno = document.getElementById("txtIdNumeroUno").value;
	Numerodos = document.getElementById("txtIdNumeroDos").value;

	Multiplicacion = parseInt(Numerouno) * parseInt(Numerodos);

	alert("la multiplicacion es "+Multiplicacion);
}

