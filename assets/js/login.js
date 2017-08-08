(function() {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyBatK17DTwN3yX9nqAQG7BihCBF6Tq2ZFQ",
		authDomain: "chatyo-92c7e.firebaseapp.com",
		databaseURL: "https://chatyo-92c7e.firebaseio.com",
		projectId: "chatyo-92c7e",
		storageBucket: "chatyo-92c7e.appspot.com",
		messagingSenderId: "722620662374"
	};
	firebase.initializeApp(config);

	var cargarPagina = function() {
		$("#boton-facebook").click(loginFacebook);
		$("#boton-google").click(loginGoogle);
	}

	var login = function(provider) {
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  var token = result.credential.accessToken;
		  var user = result.user;
		  var nombreUsuario = user.displayName;
		  localStorage.setItem('nombre', nombreUsuario);
          var correo = user.email;
          console.log(user)  
		  console.log(nombreUsuario , correo);
		  localStorage.setItem('correoUsuario', correo);
		}).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  var email = error.email;
		  var credential = error.credential;
		});
	}

	var loginFacebook = function() {
		var provider = new firebase.auth.FacebookAuthProvider();
        login(provider);
        location.href = "./signup.html"
    }
    
    var loginGoogle = function() {
		var provider = new firebase.auth.GoogleAuthProvider();
        login(provider);
        location.href = "./signup.html"
    }	
	
	$(document).ready(cargarPagina);
})();
