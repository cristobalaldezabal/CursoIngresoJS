function mostrar()
{
	let num
	let cont=0;

	
	do
	{
		num = parseInt(prompt("ingrese el número de repeticiones"));
	}while(num>1 && isNaN(num) );

	for(let i=1; i<=num  ;i++ )
	{
		if(num % i ==0){
			cont++;
}
if (cont == 2){

			alert("el numero que ingresaste es primo");
			break;
		}
		else{
			parseInt(prompt("este numero no es primo "));
		}

	}






}//FIN DE LA FUNCIÓN