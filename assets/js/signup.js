(function (argument) {

    var cargarPagina = function () {
        var obtenerPerfil = localStorage.getItem('nombre');
        console.log(obtenerPerfil);
        $("#nombre").val(obtenerPerfil);
        var obtenerEmail = localStorage.getItem('correoUsuario');
        console.log(obtenerEmail);
        $("#email").val(obtenerEmail);
        validacionDatos();
    }

    var validacionDatos = function() {
        $("#email").change(validarEmail);
        $("#telefono").keyup(validarTelefono);
        //    $('#boton').click(direccionar);


    }

    function validarEmail() {
        var expresionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        var email = $("#email").val();
        if (expresionRegular.test(email)) {
            console.log(email);
            alert("todo bien");
        } else {
            alert("correo invalido");
        }
    }

    function validarTelefono(e) {
        var telefono = $("#telefono").val().trim();
        var expresionRegular = /^([0-9])*$/;
        if (telefono.length == 10 && expresionRegular.test(telefono)) {
            console.log(telefono);
            alert("telefono correcto");
        }
    }

    function direccionar(e) {
        e.preventDefault();
        location.href = './restaurantes.html';
    }


    $(document).ready(cargarPagina);
})();
