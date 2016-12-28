function calcular()
{
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var salida = document.getElementById("salida");
	if ((a<0 || b< 0) || (a<0 && b<0)) {
		salida.innerHTML = "Uno de los valores es negativo o los dos negativos 1";
	}
	else{
		salida.innerHTML = "Los dos valores son positivos 0";
	}

}