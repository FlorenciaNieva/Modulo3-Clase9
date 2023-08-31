const $ = (Selector) => document.querySelector(Selector);
const $$ = (Selector) => document.querySelectorAll(Selector);
//Crea un ID random
const randomID = () => self.crypto.randomUUID();

const tienda = JSON.parse(localStorage.getItem('Florería')) || {
    usuarios: [],
    ventas: [],
    favoritos: [],
    carrito: [],
};

const actualizarTienda = (datos) => {
    localStorage.setItem("Florería", JSON.stringify(datos));
}

const traerDatos = () => {
    //Buscar lo que tenia almacenada en el local storage
    return JSON.parse(localStorage.getItem('Florería'));
}

const productos = [{
    id: randomID(),
    nombre: 'Haworthiopsis fasciata',
    precio: '5000',
    foto: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    }, 
    {
    id: randomID(),
    nombre: 'Pilosocereus',
    precio: '3000',
    foto: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    },
    {
        id: randomID(),
        nombre: 'Anthurium crystallinum',
        precio: '8000',
        foto: 'https://images.unsplash.com/photo-1603436326446-74e2d65f3168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80',
    },
    {
    id: randomID(),
    nombre: 'Philodendron',
    precio: '7500',
    foto: 'https://images.unsplash.com/photo-1537039557108-4a42c334fd5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    },
];

const cardContainer = $('#card-container');

const crearCards = (listaProductos) => {
    listaProductos.forEach((producto) => {
        cardContainer.innerHTML += `<div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="${producto.foto}" alt="Image plant" />
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <h5>${producto.nombre}</h5>
                <h5>$${producto.precio}</h5>
                <button class="button is-primary add-button" id="${producto.id}">Agregar al carrito</button>
            </div>
        </div>
    </div> `
    });
}

crearCards(productos);

const agregarAlCarrito = (idProducto) => {
    let productoFiltrado = productos.filter((prod) => prod.id === idProducto);
    if(!tienda.carrito.includes(productoFiltrado[0])) {
        tienda.carrito.push(productoFiltrado[0]);
    }
    actualizarTienda(tienda);
    mostrarCarrito();
};

const botones = $$('.add-button');

botones.forEach((boton) => 
    boton.addEventListener('click', () => agregarAlCarrito(boton.id))
);

const eliminarDelCarrito = () => {
    let datosActualizados = traerDatos();
}

//Activar modal al hacer click en el carrito
$('#carrito').addEventListener('click', () => {
    $('#modal').classList.add('is-active');
    
});

//Cerrar el modal al hacer click en la cruz
$('#close-modal').addEventListener('click', () => {
    $('#modal').classList.remove('is-active');
});

//Mostrar en el modal del carrito lo que agrege
const mostrarCarrito = () => {
    $('#modal-content').innerHTML = "";
    traerDatos().carrito.forEach(
        (item) => ($('#modal-content').innerHTML += `<li>${item.nombre}</li>`)
    );
};

mostrarCarrito();
