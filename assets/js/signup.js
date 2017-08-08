(function(argument) {
	
	var cargarPagina = function () {
	$('.numeroAleatorio').keydown(validarNumero);
	var obtenerPerfil = localStorage.getItem('nombre');
	console.log(obtenerPerfil);
	var obtenerEmail = localStorage.getItem('correoUsuario');
	console.log(obtenerEmail);
	}

	var validarNumero = function() {
		alert('validar');
	}


	$(document).ready(cargarPagina);
})();


