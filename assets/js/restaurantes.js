var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (e) {
	if (this.readyState === 4) {
		if (this.status === 200) {
			var squads = JSON.parse(this.response);	
			crearSquads(squads);
		}
		
	}
};

xhr.open("GET", "assets/data/datos.json");

xhr.send();

function crearRestautante(restaurantes) {
	
	
	var ul = document.getElementById("restaurantes");

	restaurantes.forEach(function (restaurante) {
		var li = document.createElement("li");
		li.textContent = restaurante.nombre;

		ul.appendChild(li);
	});
}

function cambioDePantalla(){
	location.href="pantalla-cinco.html"
}
