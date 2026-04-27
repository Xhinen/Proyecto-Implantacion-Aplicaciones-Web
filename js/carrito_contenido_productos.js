// Cambios de imagen del producto
function cambiarImagen(ruta) {
	document.getElementById('imagen-principal').src = ruta;
}

function agregarCarrito() {
	var cantidad = document.getElementById('cantidad').value;
	var mensaje = document.getElementById('mensaje-carrito');
	mensaje.textContent = '✅ Producto añadido al carrito: RTX 5060 x' + cantidad;
	mensaje.style.display = 'block';
	// Ocultar el mensaje despues de 3 segundos
	setTimeout(function () {
		mensaje.style.display = 'none';
	}, 3000);
}

function cambiarTab(id, boton) {
	// Ocultar todos los contenidos
	var contenidos = document.querySelectorAll('.tab-contenido');
	for (var i = 0; i < contenidos.length; i++) {
		contenidos[i].classList.remove('activo');
	}
	// Quitar clase activo de todos los botones
	var botones = document.querySelectorAll('.tab-btn');
	for (var i = 0; i < botones.length; i++) {
		botones[i].classList.remove('activo');
	}
	// Mostrar el contenido seleccionado
	document.getElementById('tab-' + id).classList.add('activo');
	boton.classList.add('activo');
}