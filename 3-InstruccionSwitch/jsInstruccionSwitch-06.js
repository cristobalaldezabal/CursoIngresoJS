function mostrar()
{
let hora
hora= parseInt(document.getElementById("txtIdHora").value);

if(hora >=7 && hora <=11)
{
	alert("es de ma;ana");
}
else if(hora>=12 && hora<=19)
{
	alert("es de tarde");
}
else if((hora>=0 && hora<=6) || (hora>=20 && <=24))
{
alert("es de noche");
}
else
{
	alert("La hora no existe");
}


}



/*{
	//tomo la hora
	let hora 

	hora= parseInt(document.getElementById("txtIdHora").value);

	switch(hora)
	{
		case 7: case 8: case 9: case 10: case 11:
		{
	alert("es de ma;ana");
	break;
}
case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19:
{
	alert("es de tarde");
	break;
}
case 20: case 21: case 22: case 23: case 24: case 0: case 1: case 2: case 3: case 4: case 5: case 6:
{
	alert("es de noche");
	break;
}
default:
			alert ("La hora no existe");
			break;
	}

}