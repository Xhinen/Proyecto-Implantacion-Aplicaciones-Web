// Funcion para validar el formulario usando getElementById
document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
	e.preventDefault();

	var valido = true;

	// Obtener los valores con getElementById
	var nombre = document.getElementById('nombre').value;
	var email = document.getElementById('email').value;
	var asunto = document.getElementById('asunto').value;
	var mensaje = document.getElementById('mensaje').value;
	var privacidad = document.getElementById('privacidad').checked;

	// Validar nombre
	if (nombre.trim() == '') {
		document.getElementById('nombre').classList.add('error');
		document.getElementById('error-nombre').classList.add('visible');
		valido = false;
	} else {
		document.getElementById('nombre').classList.remove('error');
		document.getElementById('error-nombre').classList.remove('visible');
	}

	// Validar email
	// Comprobamos que tenga @ y un punto despues
	var emailValido = email.indexOf('@') !== -1 && email.indexOf('.') !== -1;
	if (email.trim() == '' || !emailValido) {
		document.getElementById('email').classList.add('error');
		document.getElementById('error-email').classList.add('visible');
		valido = false;
	} else {
		document.getElementById('email').classList.remove('error');
		document.getElementById('error-email').classList.remove('visible');
	}

	// Validar asunto
	if (asunto == '') {
		document.getElementById('asunto').classList.add('error');
		document.getElementById('error-asunto').classList.add('visible');
		valido = false;
	} else {
		document.getElementById('asunto').classList.remove('error');
		document.getElementById('error-asunto').classList.remove('visible');
	}

	// Validar mensaje
	if (mensaje.trim().length < 10) {
		document.getElementById('mensaje').classList.add('error');
		document.getElementById('error-mensaje').classList.add('visible');
		valido = false;
	} else {
		document.getElementById('mensaje').classList.remove('error');
		document.getElementById('error-mensaje').classList.remove('visible');
	}

	// Validar privacidad
	if (!privacidad) {
		document.getElementById('error-privacidad').classList.add('visible');
		valido = false;
	} else {
		document.getElementById('error-privacidad').classList.remove('visible');
	}

	// Si todo esta bien, mostrar el mensaje de exito
	if (valido == true) {
		document.getElementById('formulario-seccion').style.display = 'none';
		document.getElementById('exito').style.display = 'block';
	}
});