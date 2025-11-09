let carrito = [];

function agregarAlCarrito(id) {
    const producto = encontrarProducto(id);
    if (!producto) return;
    
    const itemExistente = carrito.find(item => item.id === id);
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

function actualizarCarrito() {
    const tbody = document.getElementById('carrito-body');
    tbody.innerHTML = '';
    
    let subtotal = 0;
    
    carrito.forEach(item => {
        const tr = document.createElement('tr');
        const itemSubtotal = item.precio * item.cantidad;
        subtotal += itemSubtotal;
        
        tr.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td>$${itemSubtotal.toFixed(2)}</td>
            <td>
                <button class="btn btn-danger" onclick="eliminarDelCarrito(${item.id})">
                    Eliminar
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    const impuestos = subtotal * 0.15; // 15% de impuestos
    const total = subtotal + impuestos;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('impuestos').textContent = `$${impuestos.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

export function eliminarDelCarrito(id) {
  carrito = carrito.filter(c => c.id !== id);
  actualizarVistaCarrito();
}

export function calcularTotales() {
  const subtotal = carrito.reduce((acc, c) => acc + (c.precio * c.cantidad), 0);
  const impuestos = subtotal * 0.15; // ejemplo 15%
  const total = subtotal + impuestos;
  return { subtotal, impuestos, total };
}

function actualizarVistaCarrito() {
  // lógica de DOM para refrescar la tabla y totales
}