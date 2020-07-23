/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Numero1;
	var Numero2;
	Numero1= parseInt(document.getElementById("txtIdNumeroDividendo").value);
	Numero2= parseInt(document.getElementById("txtIdNumeroDivisor").value);
	alert("El resultado es: " + (Numero1 % Numero2));
}