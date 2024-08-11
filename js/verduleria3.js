// Declaro un array

let productos = [
	{
	  id: 1,
	  nombre: "Manzanas",
	  precio: 60,
	  imagen: "./img/manzana.jpg",
	},
	{
    	id: 2,
	    nombre: "Bananas",
		precio: 55,
		imagen: "./img/Bananas.jpg",
	},
	{
		id: 3,
		nombre: "Tomates",
		precio: 70,
		imagen: "./img/tomates.webp",
	},
	{
		id: 4,
		nombre: "Uvas",
		precio: 70,
		imagen: "./img/uvas2.jpg",
	},
	{
		id: 5,
		nombre: "Zapallo",
		precio: 70,
		imagen: "./img/Zapallo.png",
	},
	{
		id: 6,
		nombre: "Calabacin",
		precio: 70,
		imagen: "./img/Calabacin.png",
	},
	{
		id: 7,
		nombre: "Cebolla",
		precio: 70,
		imagen: "./img/Cebolla.webp",
	},
	{
		id: 8,
		nombre: "Perejil",
		precio: 30,
		imagen: "./img/Perejil.jpg",
	}
]

// Declaro Arrays

let frutas = [
	{id: 1,descripcion: "manzana", precio: 150},
    {id: 2,descripcion: "banana", precio: 150},
	{id: 3, descripcion: "tomates", precio: 150}
];

let carrito=[];

class ProductoCarrito {
	constructor (id, descripcion,precio,kg ) {
		this.id = id;
		this.descripcion = descripcion;
		this.precio = precio;
		this.kg = kg;
	}
}
let mensaje = "ingrese producto a comprar \n 1- Manzana x kg \n 2 - banana x kg \n 3 - tomate x kg \n 4 -Mostrar Carrito \n 5- Salir";
let mensajeKg = "ingrese kilos";

function validarPrompt (mensaje) {
    let entrada = prompt(mensaje);
	while (entrada === "" || entrada === null) {		
		   alert("No se cargaron datos");
		   entrada = prompt(mensaje);
	}
	return entrada;
}

function validarMenu (){
	let respuesta = parseInt(validarPrompt(mensaje)); 
	if ([1, 2, 3].includes(respuesta)) {
		cargarProducto(respuesta);
	} else if ( respuesta === 4 ) {
		validarCarrito(); 
	} else if (respuesta === 5) {
		alert(" Gracias por Visitar nuestra web");
	} else {
		alert(" Datos mal ingresados");
		validarMenu();
	}
}

function cargarProducto (idProducto) {
	let kilos = parseFloat(validarPrompt(mensajeKg));
	let producto = frutas.find(item => item.id === idProducto);
	if (producto) {
			const nuevoCarrito  = new ProductoCarrito(producto.id, producto.descripcion, producto.precio * kilos, kilos );
			carrito.push(nuevoCarrito);
	}
	console.log(carrito);	
	validarMenu();
}

function validarCarrito() {
	if (carrito.length === 0) {
		alert("carrito Vacio");
	} else {
		muestroCarrito();
	}
	validarMenu();
}

function muestroCarrito() {
	let mostrar = "";
	let precioTotal = 0;
	carrito.forEach(item => {
		 mostrar += ` - ${item.descripcion}  $${item.precio} (${item.kg} Kg)\n`;
		 precioTotal += item.precio;

	});
	alert (`${mostrar}\n Su precio total a Pagar es $${precioTotal}`);
    alert ("Gracias por su compra, lo esperamos pronto");
}	

validarMenu();

/*
// Declaro un array

let productos = [
	{
	  id: 1,
	  nombre: "Manzanas",
	  precio: 60,
	  imagen: "./img/manzana.jpg",
	},
	{
    	id: 2,
	    nombre: "Bananas",
		precio: 55,
		imagen: "./img/Bananas.jpg",
	},
	{
		id: 3,
		nombre: "Tomates",
		precio: 70,
		imagen: "./img/tomates.webp",
	},
	{
		id: 4,
		nombre: "Uvas",
		precio: 70,
		imagen: "./img/uvas2.jpg",
	},
	{
		id: 5,
		nombre: "Zapallo",
		precio: 70,
		imagen: "./img/Zapallo.png",
	},
	{
		id: 6,
		nombre: "Calabacin",
		precio: 70,
		imagen: "./img/Calabacin.png",
	},
	{
		id: 7,
		nombre: "Cebolla",
		precio: 70,
		imagen: "./img/Cebolla.webp",
	},
	{
		id: 8,
		nombre: "Perejil",
		precio: 30,
		imagen: "./img/Perejil.jpg",
	}
]*/
//let Producto = document.getElementbyId("ProductoFruta");
//console.log(ProductoFruta.innerHTML);

const contenedor = document.getElementById("container");

productos.forEach((productos, indice) => {
  
  let card = document.createElement("div");
  
  card.classList.add("card", "col-sm-12", "col-md-3");
  
  card.innerHTML = `<img src="${productos.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${productos.nombre}</h5>
      <p class="card-text">${productos.precio}</p>
      <a href="#cart" class="btn btn-primary" onClick="comprar(${indice})" >Comprar</a>
    </div>
      `;
  
  contenedor.appendChild(card);
});

const comprar = (indice) => {
	alert(`elegiste el ${productos[indice].nombre}`);
}


  