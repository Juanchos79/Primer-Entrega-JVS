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

console.log (productos)

const contenedor = document.getElementById("container");

productos.forEach((producto, indice) => {
  
  let card = document.createElement("div");
  
  card.classList.add("card", "col-sm-12", "col-md-3");
  
  card.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#cart" class="btn btn-primary" onClick="comprar(${indice})" >Comprar</a>
    </div>
      `;
  
  contenedor.appendChild(card);
  
});

// Entrada de Datos//

let Kilos;
let precio_producto = 0;
let precio_total = 0;
let opcion;
let FrutaElegida;
let VerduraElegida;
let ContinuaCiclo = 1;
let AgregarProductos;

// Declaro Arrays

let frutas = [ "Manzanas", "Bananas", "Tomates" ];
let verduras = [ "Boniato", "Cebolla", "Zapallo" ];
const precio_fruta = [ 80, 50, 90 ];
const precio_verdura = [ 60, 45, 50 ];

function elegir() {
    let option = "";
    
    for(let i = 0; i < frutas.int; i++) {
        option += frutas[i].toUpperCase() + " ($" + precio_fruta[i] + ")\n";
    }
    let optionSel = prompt("Elige fruta o verdura que quisieras comprar:\n\n" + option).toLowerCase();

    if(frutas.includes(optionSel)) {
        CompraOptionSel(frutas.indexOf(optionSel));
    } else if(optionSel != null) {
        alert("ERROR: Elije fruta o verdura válida!");
        elegir();
    }

}
// Declaracion de Funciones

let nombrePersona = prompt("Ingrese su nombre por favor:");
saludar(nombrePersona);

function saludar(nombre) {
    alert("Hola " + nombre + "\nBienvenido a: Tu Verduleria!! SAN CRISTOBAL!");
}

// Intente esto pero no logre reflejarlo en los prompt

/*let Frutas (nombre precio_fruta, Kilos) {
        this.nombre = nombre;
        this.precio_fruta = precio_fruta;
        this.Kilos = Kilos;
    } */
/*let MANZANAS = new Fruta (80, precio_total += Kilos*precio_fruta, Kilos);*/
/*let Bananas = new Fruta (50, precio_total += Kilos*precio_fruta, Kilos);*/
/*let TOMATES = new Fruta (50, precio_total += Kilos*precio_fruta, Kilos);*/


/*let Verduras (nombre, precio_fruta, Kilos) {
        this.nombre = nombre;
        this.precio_fruta = precio_fruta;
        this.Kilos = Kilos;
    } */
/*let Boniatos = new Fruta (60, precio_total += Kilos*precio_fruta, Kilos);*/
/*let Cebollas = new Fruta (45, precio_total += Kilos*precio_fruta, Kilos);*/
/*let Zapallo = new Fruta (50, precio_total += Kilos*precio_fruta, Kilos);*/

function costoFruta (fruta, Kilos) {        // Funcion para Fruta
    let precio_fruta;
    switch(fruta) {
        case 1:
            precio_fruta = 80;
            precio_total += Kilos*precio_fruta;
            return alert("Precio de tus manzanas: $" + Kilos*precio_fruta);

            
        case 2:
            precio_fruta = 50;
            precio_total += Kilos*precio_fruta;
            return alert("Precio de tus bananas: $" + Kilos*precio_fruta);
            
            
        case 3:
            precio_fruta = 90;
            precio_total += Kilos*precio_fruta;
            return alert("Precio de tus tomates: $" + Kilos*precio_fruta);
            
            /*let Tomates = { 
                nombre: "Tomates", 
                precio_fruta: 90, 
                Kilos: precio_total += Kilos*precio_fruta
            }
            console.log(frutas.nombre)
            console.log(frutas.precio_fruta)
            console.log(frutas.Kilos) */
            
           
    }
}

function costoVerdura(verdura, Kilos) {       // Funcion para Verdura
    let precio_verdura;
    switch(verdura) {
        case 1:
            precio_verdura = 60;
            precio_total += Kilos*precio_verdura;
            return alert("Precio de tus BONIATOS: $" + Kilos*precio_verdura);
        case 2:
            precio_verdura = 45;
            precio_total += Kilos*precio_verdura;
            return alert("Precio de tus CEBOLLAS: $" + Kilos*precio_verdura);
        case 3:
            precio_verdura = 50;
            precio_total += Kilos*precio_verdura;
            return alert("Precio de tus ZAPALLO: $" + Kilos*precio_verdura);
    }
}


// Procesamiento

do {
    opcion = parseInt(prompt("Ingrese una opcion: \n0: Terminar compra \n1: Fruta \n2: Verdura"));

    if(opcion == 1) {
        FrutaElegida = prompt("Que fruta desea llevar? opcion: \n 0: Terminar compra \n 1: Manzanas \n 2: Bananas \n 3 Tomates").toUpperCase();

        switch(FrutaElegida) {
            case "MANZANA": case "MANZANAS": case "1":
                Kilos = parseFloat(prompt("¿Cuantos Kilos de manzana desea llevar?"));

                if(isNaN(Kilos) || Kilos < 1)
                {
                    alert("No ingreso Fruta");
                }
                else {
                    costoFruta(1, Kilos);
                }
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \nGastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
            case "BANANA": case "BANANAS": case "2":
                Kilos = parseFloat(prompt("¿Cuantos Kilos de banana desea llevar?"));
                costoFruta(2, Kilos);
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \nGastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
            case "TOMATE": case "TOMATES": case "3":
                Kilos = parseFloat(prompt("¿Cuantos Kilos de tomate desea llevar?"));
                costoFruta(3, Kilos);
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \n Gastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
        }
    } else if(opcion == 2) {
        VerduraElegida = prompt("Que Verdura desea llevar? opcion: \n 0: Terminar compra \n 1: Boniatos \n 2: cebolla \n 3 Zapallo").toUpperCase();

        switch(VerduraElegida) {
            case "BONIATO": case "BONIATOS": case "1":
                Kilos = parseFloat(prompt("¿Cuantos Kilos de BONIATOS desea llevar?"));

                if(isNaN(Kilos) || Kilos < 1)
                {
                    alert("No ingreso Verdura");
                }
                else {
                    costoVerdura(1, Kilos);
                }
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \n Gastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
            case "CEBOLLA": case "CEBOLLAS": case "2":
                Kilos = parseFloat(prompt("¿Cuantos Kilos de CEBOLLAS desea llevar?"));
                costoVerdura(2, Kilos);
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \n Gastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
            case "ZAPALLO": case "SAPALLO": case "3":
                Kilos = parseFloat(prompt("¿Cuantos Kilos de ZAPALLO desea llevar?"));
                costoVerdura(3, Kilos);
                
                AgregarProductos = parseInt(prompt("¿Desea llevar algo más? \n1. Si \n2. No"));

                if(AgregarProductos == 1)
                {
                    ContinuaCiclo = 1;
                }
                else if (AgregarProductos == 2)
                {
                    alert("Gracias por tu compra! \n Gastaste un total de: $" + precio_total);
                    ContinuaCiclo = 0;
                }

                break;
        }
    } else if(opcion == 0) {
        alert("Decidiste terminar la compra.");
        ContinuaCiclo = 0;
    } else {
        alert("INGRESA UNA OPCIÓN VALIDA.");
        ContinuaCiclo = 1;
    }
} while (ContinuaCiclo == 1)
