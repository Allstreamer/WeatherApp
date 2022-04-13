$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=53.6477&lon=10.1701&appid=62f8349b2b00a2dc7db78b2c93e8095f", function( data ) {
	document.getElementById("location").innerHTML = data["name"];
	document.getElementById("lat").innerHTML = `lat: ${data["coord"]["lat"]}`;
	document.getElementById("lon").innerHTML = `lon: ${data["coord"]["lon"]}`;
	
});