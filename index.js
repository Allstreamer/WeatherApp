$.getJSON("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=52.6477&lon=10.5701&appid=62f8349b2b00a2dc7db78b2c93e8095f", function( data ) {
	console.log(data);

	document.getElementById("location").innerHTML = data["name"];
	document.getElementById("temp").innerHTML = `${data["main"]["temp"]} C°`;
	document.getElementById("maxtemp").innerHTML = `${data["main"]["temp_max"]} C°`;
	document.getElementById("mintemp").innerHTML = `${data["main"]["temp_min"]} C°`;
	document.getElementById("wind_speed").innerHTML = `<span class="material-icons">air</span>${data["wind"]["speed"]} km/h`;
	document.getElementById("humidity").innerHTML = `<span class="material-icons">cloud</span>${data["main"]["humidity"]}%`;
});