function mostrar()
{

let maximo =10;
let minimo =1;
let num;

num = Math.round(Math.random() * (maximo - minimo) + minimo );
alert(num);	
if (num === 10 || num ===9) 
{
	alert("Excelente");
}
if (num >= 4 && num <9)
{
	alert("Aprobado")
}
if (num <4)
{
	alert("Vamos, la proxima se puede!")
}
}