function convert() {
	var temp = parseFloat(document.getElementById("temp").value);
	var scale = document.getElementById("scale").value;
	
	if (scale === "celsius") {
		var fahrenheit = (temp * 9/5) + 32;
		var kelvin = temp + 273.15;
		document.getElementById("result").innerHTML = temp + " &deg;C = " + fahrenheit.toFixed(2) + " &deg;F = " + kelvin.toFixed(2) + " K";
	} else if (scale === "fahrenheit") {
		var celsius = (temp - 32) * 5/9;
		var kelvin = (temp - 32) * 5/9 + 273.15;
		document.getElementById("result").innerHTML = temp + " &deg;F = " + celsius.toFixed(2) + " &deg;C = " + kelvin.toFixed(2) + " K";
	} else if (scale === "kelvin") {
		var celsius = temp - 273.15;
		var fahrenheit = (temp - 273.15) * 9/5 + 32;
		document.getElementById("result").innerHTML = temp + " K = " + celsius.toFixed(2) + " &deg;C = " + fahrenheit.toFixed(2) + " &deg;F";
	}
}