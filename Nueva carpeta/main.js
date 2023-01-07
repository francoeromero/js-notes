// inicializo con la libreria MUURI, y seleccionamos a la clase grid del html #5 https://github.com/haltu/muuri
const grid = new Muuri('.grid', {
	//el layout se encuentra en el  link, y elegimos rounding de todas las formas que se puede trabajar
	layout: {
		rounding: false //para trabajar con medidas exactas
	}
});

// INICIO configuracion para que aparescan las imagenes juntas en opacidad CSS Linea 91
window.addEventListener('load', () => {
	grid.refreshItems().layout(); //esto es de la libreria MUURI, el refreshItems calcula las dimensiones de las imagenes con respecto al viewport de la web o del dispositivo 
	document.getElementById('grid').classList.add('imagenes-cargadas');//seleccionamos a grid de HTML y a imagenes-cargadas de CSS
//FIN configuracion de las imagenes que aparescan juntas y en opacidad



	// INICIO de los enlaces de las categorias de la galeria de imagen
	const enlaces = document.querySelectorAll('#categorias a'); //creamos una variable y seleccionamos el id categorias (que se encuentra en el header HTML) y todos los enlaces osea los elementos a

	//ahora hay que iterar sobre los enlaces creamos una funcion
	enlaces.forEach((elemento) => {
		//el eventListener es para que se quite la clase active al cada enlace y entre otra nueva
		elemento.addEventListener('click', (evento) => { //como parametro pongo evento
			evento.preventDefault(); //esto evita el comportamiento por defecto del navegador al dar click
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));//esto elimina la clase 'activo' que es el enlace anterior al dar click 
			evento.target.classList.add('activo');//esto es para traer el enlace que diste click
			//definicion evento.target = encuentra el elemento  classList.add('activo) = agregar la clase activo

			//ahora quiero que cuando le de click a cada enlace se muestre visualmente
			const categoria = evento.target.innerHTML.toLowerCase();//accedemos al codigo html y me trae la categoria
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`); //el grid.filter filtra las imagenes segun la categoria, osea agarra a "data-categoria" y segun el nombre que le diste en  html, lo va a ir filtrando 
			//otra forma  grid.filter(`[data-categoria="${categoria}"]`);
			// variable === 'todos' ?  instruccion 1 : instruccion 2; (si la categoria es "todos" me ejecutas instruccion 1 sino ejecutas instruccion 2)
		});
	});

	// INICIO BUSCADOR es algo similar al de los enlaces de las categorias
		// accedemos al id barra-busqueda que tiene alojado el buscador y creamos una funcion en el input
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value; // el valor que escriba el usuario lo colocamos en la variable "busqueda"
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) ); //accedemos alas etiquetas del data que pusimos en html y si coincide aparece
	});

	// IMAGENES GRANDES AL DAR CLICK, crear imagenes emergentes 
	const overlay = document.getElementById('overlay'); //accedemos al id overlay que es la X
	document.querySelectorAll('.grid .item img').forEach((elemento) => { //seleccionamos que el contenedor grid dentro de item y dentro la imagen, osea que cada vez que se de click a cualquier img, del contenedor grid, se pueda agrandar la imagen  
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src'); //obtenemos la ruta de la imagen de cada una
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;//obtenemos la descripcion tambien, dataset se refiere al los datas del div, parentNode es meterse dentro de cada contenedor, para no escribir todos sus nombres de los contenedores 

			overlay.classList.add('activo'); // con esto ya activamos la imagen grande pero no podemos cerrar
			document.querySelector('#overlay img').src = ruta; // la ruta sea igual a la obtenida anteriormente de cada uno
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;//lo mismo pero con la descripcion
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo'); // para cerrar cuando se de click al elelemto #btn-cerrar-popup
	});

	// Eventlistener del overlay, boton del fondo para cerrar
	overlay.addEventListener('click', (evento) => {
		//podria ser lo mismo: overlay.classList.remove('activo'); 
		//pero lo que sucede es que si le das click a la imagen grande abierta, se cerrará entonces hacemos una condicional, osea si doy click en overlay me dara Verdadero si doy click en img me dara False
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});