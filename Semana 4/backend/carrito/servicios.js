const CLAVE_CARRITO = "mi_carrito";

// Guardar el carrito en localStorage
function guardarCarritoLocal() {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

// Cargar el carrito desde localStorage
function cargarCarritoLocal() {
    const carritoGuardado = localStorage.getItem(CLAVE_CARRITO);
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
}

// Cargar el carrito cuando se inicia la página
document.addEventListener('DOMContentLoaded', cargarCarritoLocal);

// Guardar el carrito cada vez que se modifica
const carritoOriginal = actualizarCarrito;
actualizarCarrito = function() {
    carritoOriginal();
    guardarCarritoLocal();
};

export function limpiarCarrito() {
  localStorage.removeItem(CLAVE_CARRITO);
}

/**
 * Calcula totales del carrito (subtotal, impuestos y total)
 * @param {Array} carrito 
 */
export function calcularTotales(carrito) {
  const subtotal = carrito.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  const impuestos = subtotal * 0.15; // 15% de impuesto
  const total = subtotal + impuestos;
  return { subtotal, impuestos, total };
}
