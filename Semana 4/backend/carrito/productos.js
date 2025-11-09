const productos = [
    { id: 1, nombre: "Laptop", precio: 999.99 },
    { id: 2, nombre: "Smartphone", precio: 499.99 },
    { id: 3, nombre: "Auriculares", precio: 59.99 },
    { id: 4, nombre: "Tablet", precio: 299.99 }
];

function mostrarProductos() {
    const contenedor = document.getElementById('productos-container');
    contenedor.innerHTML = '';
    
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto';
        productoDiv.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <button class="btn btn-success" onclick="agregarAlCarrito(${producto.id})">
                Agregar al carrito
            </button>
        `;
        contenedor.appendChild(productoDiv);
    });
}

// Función para encontrar un producto por su ID
function encontrarProducto(id) {
    return productos.find(p => p.id === id);
}
