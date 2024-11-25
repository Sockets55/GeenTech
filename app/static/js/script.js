// Script for handling the cart
document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    let cartItems = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            cartItems++;
            cartCount.textContent = cartItems;
            alert('Producto agregado al carrito');
        });
    });

    // Search functionality
    const searchBar = document.getElementById('search-bar');
    const products = document.querySelectorAll('.product');

    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        products.forEach(product => {
            const name = product.getAttribute('data-name').toLowerCase();
            product.style.display = name.includes(query) ? 'block' : 'none';
        });
    });
});
