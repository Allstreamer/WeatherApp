function getLocation(querry) {
	$.getJSON(`http://api.positionstack.com/v1/forward?access_key=d855ff4423298235093322d417df6c6d&query=${querry}`, (data) => {
		console.log(data);
		update_ui(data[0]["longitude"], data[0]["latitude"]);
	});
}

function update_ui(lat,lon) {
	$.getJSON(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=62f8349b2b00a2dc7db78b2c93e8095f`, function( data ) {
		console.log(data);

		document.getElementById("location").innerHTML = data["name"];
		document.getElementById("temp").innerHTML = `${data["main"]["temp"]} C°`;
		document.getElementById("maxtemp").innerHTML = `${data["main"]["temp_max"]} C°`;
		document.getElementById("mintemp").innerHTML = `${data["main"]["temp_min"]} C°`;
		document.getElementById("wind_speed").innerHTML = `<span class="material-icons">air</span>${data["wind"]["speed"]} km/h`;
		document.getElementById("humidity").innerHTML = `<span class="material-icons">cloud</span>${data["main"]["humidity"]}%`;
	});
}

document.getElementById("getweather").addEventListener("click", (e) => {
	e.preventDefault();
	let pos = getLocation(document.getElementById("address").value);
});

update_ui(0.0, 0.0);