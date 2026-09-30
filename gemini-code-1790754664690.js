// Data Produk Awal
const initialProducts = [
  { id: 1, name: 'Nasi Goreng Spesial', category: 'makanan', price: 25000, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500' },
  { id: 2, name: 'Ayam Bakar Madu', category: 'makanan', price: 30000, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500' },
  { id: 3, name: 'Es Teh Manis Jumbo', category: 'minuman', price: 5000, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500' },
  { id: 4, name: 'Roti Bakar Cokelat Keju', category: 'camilan', price: 18000, image: 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bff?w=500' }
];

let cart = [];

// DOM Elements
const productContainer = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total');
const searchInput = document.getElementById('search-input');

// Render Produk
function renderProducts(items) {
  productContainer.innerHTML = '';
  if (items.length === 0) {
    productContainer.innerHTML = '