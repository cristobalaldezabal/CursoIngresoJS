/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
function comenzar()
{
  let numerosecreto;	
	let maximo = 100;
  let minimo = 1;
  
  numerosecreto = parseInt(Math.round(Math.random() * (maximo - minimo) + minimo));

}

function verificar()
{	
  let numerosecreto;
	let maximo =100;
  let minimo =1;
  

  let contador = 1; // = 1 ? 
  let adivinador;
while(contador > 1)
	{
    contador = contador + 1;
		document.getElementById("txtIdIntentos").value = contador;
	}

  // no se como generar el loop del contador y no se como definir la var numerosecreto una sola vez. while? 
  


  document.getElementById("txtIdIntentos").value = contador;
  adivinador = document.getElementById("txtIdNumero").value;
  numerosecreto = "comenzar()";


  if (adivinador == numerosecreto)
  {
    alert ("Usted es un ganador!, y en solo " + contador + " intentos.");
  }
  else if (adivinador < numerosecreto)
  {
    alert("Te quedaste corto, amigue");
  }
  else if (adivinador > numerosecreto)
  {
    alert ("Te pasaste, maquina");
  }

}