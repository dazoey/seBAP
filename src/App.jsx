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
      { id: 1, name: "Ceker kalcer", price: 50000000, image: "https://i.pinimg.com/736x/1e/d1/63/1ed1634597fc5556565d2bec53943792.jpg", category: "high heels", description: "" },
      { id: 2, name: "Sikil kalcer", price: 908866, image: "https://i.pinimg.com/736x/b6/d0/91/b6d0912e9ab6331b67e4cd26351984b9.jpg", category: "sepatu", description: "" },
      { id: 3, name: "Sandal koruptor", price: 129128947198124, image: "https://i.pinimg.com/736x/c5/b3/b4/c5b3b4e7e15e41fed53cbdf6b779cf21.jpg", category: "sandal", description: "" },
      { id: 4, name: "Sandal musang king", price: 3427856837465, image: "https://i.pinimg.com/736x/4e/53/3b/4e533bc11729fbaa03f43c6768670dc7.jpg", category: "sandal", description: "" },
      { id: 5, name: "Gawang kiri kanan", price: 210284998, image: "https://i.pinimg.com/736x/4e/ab/8b/4eab8bd8c254b8df9287e33fef26ca8c.jpg", category: "sandal", description: "" },
      { id: 6, name: "Pindang", price: 9009990, image: "https://i.pinimg.com/736x/8d/25/0e/8d250e90bac10ae386156cc4c0c4b3b8.jpg", category: "sandal", description: "" },
      { id: 7, name: "Sandal roda", price: 9183274982364, image: "https://i.pinimg.com/736x/a6/78/d4/a678d4c781a76cc376d3677a05aafcc8.jpg", category: "sandal", description: "" },
      { id: 8, name: "flip-flop", price: 122445757, image: "https://i.pinimg.com/736x/04/09/52/040952d77bab6eb4fc1612af01e2c0ae.jpg", category: "sandal", description: "" }
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
      {/* <Footer /> */}
    </div>
  );
}

const KedaiKatakApp = () => (
  <Router>
    <AppContent />
  </Router>
);

export default KedaiKatakApp;
