

document.addEventListener('DOMContentLoaded', function () {
    const catalog = document.getElementById('catalog');
    const cart = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    // Función para obtener productos desde la API
    async function fetchProducts() {
        const response = await fetch('/api/products');
        const products = await response.json();

        // Renderiza cada producto en el catálogo
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <span>${product.name} - $${product.price}</span>
                <button onclick="addToCart(${product.id})">Agregar al carrito</button>
            `;
            catalog.appendChild(productElement);
        });
    }

    // Función para renderizar el carrito
    function renderCart() {
        cart.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.id = 'cart-item';
            cartItemElement.innerHTML = `
                <span>${item.name} x${item.quantity}</span>
                <span>$${item.price * item.quantity}</span>
            `;
            cart.appendChild(cartItemElement);
            total += item.price * item.quantity;
        });
        totalElement.textContent = `Total: $${total}`;
    }

    // Función para agregar productos al carrito
    function addToCart(productId) {
        // Implementa la lógica para agregar productos al carrito
    }

    // Array para almacenar los elementos del carrito
    const cartItems = [];

    // Obtiene productos al cargar la página y renderiza el carrito
    fetchProducts();
    renderCart();
});
