import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import useDebounce from './hooks/useDebounce';
import { Header, Footer } from './components/layout';
import { HomePage, ProductsPage, AboutPage, PaymentPage, ProfilePage } from './pages';

const AppContent = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [orderCompleted, setOrderCompleted] = useState(false);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const localProducts = [
      { id: 1, name: "Esteh Anget", price: 3500, image: "https://i.imgur.com/CT92xZA.jpeg", category: "Teh", description: "pokoknya teh" },
      { id: 2, name: "Kopsu", price: 6000, image: "https://i.imgur.com/7MvlKK9.jpeg", category: "Kopi", description: "Kopi zuzuuu" },
      { id: 3, name: "nuruk", price: 5000, image: "https://i.imgur.com/aknoB4D.jpeg", category: "Jus", description: "Nutrisari jeruk ajh" },
      { id: 4, name: "Smoothies", price: 10000, image: "https://i.imgur.com/gYodsX4.jpeg", category: "Smoothies", description: "Smoothie creamy tapi tapi tapi" },
      { id: 5, name: "Susu Goyang", price: 8000, image: "https://i.imgur.com/8FBBG1m.jpeg", category: "Milkshake", description: "Milkshake es tapi anget" },
      { id: 6, name: "Es Kelapa Young", price: 9000, image: "https://i.imgur.com/3cax3Vm.jpeg", category: "Tradisional", description: "Buah kelapa di pukul2, terus di kasih es" },
      { id: 7, name: "Thai Tea", price: 5000, image: "https://i.imgur.com/ZgGmXDm.jpeg", category: "Teh", description: "wong fei hung jago silat" },
      { id: 8, name: "RRQ Lemon Tea", price: 5000, image: "https://i.imgur.com/dfzyTAt.jpeg", category: "Teh", description: "Jendral hirohito kalo jadi minuman" }
    ];
    setIsLoading(true);
    const timer = setTimeout(() => {
      setProducts(localProducts);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useCallback(() => {
    if (!debouncedSearchTerm) return products;
    return products.filter(product =>
      product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [products, debouncedSearchTerm]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setOrderCompleted(true);
      setCart([]); 
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header getTotalItems={getTotalItems} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage products={products} addToCart={addToCart} />} />
          <Route path="/products" element={
            <ProductsPage 
              isLoading={isLoading}
              filteredProducts={filteredProducts()}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              addToCart={addToCart}
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              getTotalPrice={getTotalPrice}
            />
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/payment" element={
            <PaymentPage 
              orderCompleted={orderCompleted}
              cart={cart}
              getTotalPrice={getTotalPrice}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              handlePaymentSubmit={handlePaymentSubmit}
            />
          } />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const KedaiKatakApp = () => (
  <Router>
    <AppContent />
  </Router>
);

export default KedaiKatakApp;
