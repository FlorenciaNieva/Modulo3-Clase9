const $ = (Selector) => document.querySelector(Selector);

//Crea un ID random
const randomID = () => self.crypto.randomUUID();

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
                <button class="button is-primary" id="${producto.id}">Comprar</button>
            </div>
        </div>
    </div> `
    });
}
crearCards(productos);

const carrito = [];

const agregarAlCarrito = (idProducto) => {
    carrito.push(idProducto);
    let productoFiltrado = productos.filter(prop => productoFiltrado.id === idProducto);
}

agregarAlCarrito();

const botones = $$('button');

botones.forEach((boton) => boton.addEventListener('click', () => agregarAlCarrito(boton.id)));
