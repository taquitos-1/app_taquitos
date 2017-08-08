var xhr = new XMLHttpRequest();



var plantilla = '<div class="panel panel-default">' +
	'<div class="panel-body">' +
	'<div class="row">' +
	'<div class="col-md-4 col-xs-4">' +
	'<img src="https://dummyimage.com/100/000/fff" alt="">' +
	'</div>' +
	'<div class="col-md-8 col-xs-8">' +
	'<div class="row">' +
	'<strong>__NOMBRE__RESTAURANTE__</strong>' +
	'</div>' +
	'<div class="row">' +
	'<div>__DESCRIPCION__RESTAURANTE__</div>' +
	'</div>' +
	'<div class="row">' +
	'<div class="col-md-6 col-xs-6">' +
	'<span class="glyphicon glyphicon-star" aria-hidden="true"></span>' +
	'<span>_NE_</span>' +
	'</div>' +
	'<div class="col-md-6 col-xs-4">' +
	'<div>a __N__ km.</div>' +
	'</div>' +
	'</div>' +
	'</div>' +
	'</div>' +
	'</div>' +
	'</div>'
var plantillaFinal = "";

xhr.onreadystatechange = function (e) {
	if (this.readyState === 4) {
		if (this.status === 200) {
			var restaurantes = JSON.parse(this.response);
			crearRestautante(restaurantes);
		}

	}
};

xhr.open("GET", "assets/data/datos.json");

xhr.send();

function crearRestautante(restaurante) {

	var res = restaurante.listadoRestaurante.restaurant
	var ul = document.getElementById("restaurantes");
	

	res.forEach(function (restaurant) {
		
		plantillaFinal += plantilla.replace("__NOMBRE__RESTAURANTE__",restaurant.name)
		.replace("__DESCRIPCION__RESTAURANTE__",restaurant.Descripcion)
		.replace("_NE_",restaurant.popularidad)
		.replace("__N__",restaurant.distancias)
		

	});
	
	
	$("#restaurantes").html(plantillaFinal);
}

function cambioDePantalla() {
	location.href = "pantalla-cinco.html"
}


//    var plantillaContacto =
//        '<article class="restaurante00">' +
//        '<div class="col s12 m7">' +
//        '<div class="card horizontal">' +
//        '<div class="card-image">' +
//        '<img src="https://dummyimage.com/100x110/000/fff">' +
//        '</div>' +
//        ' <div class="card-stacked">' +
//        '<div class="card-content">' +
//        '<h6><strong>__nombre__</strong></h6>' +
//        '<p>__direccion__</p>' +
//        '<p class="tamanio-letra-chico">Tipo: __tipoDeComida__</p>' +
//        ' </div>' +
//        ' </div>' +
//        ' </div>' +
//        '</div>' +
//        '</article>';
//
//    var plantillaFinal = "";
//
//    arregloRestaurantes.forEach(function (contacto) {
//        plantillaFinal += plantillaContacto.replace("__nombre__", contacto.nombre)
//            .replace("__direccion__", contacto.direccion)
//            .replace("__tipoDeComida__", contacto.comida);
//    });
//    $("#sectionRes").html(plantillaFinal);