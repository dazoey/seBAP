import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

const Header = ({ getTotalItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to} onClick={() => setIsMobileMenuOpen(false)} className={`px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-white text-amber-800 shadow-md' : 'hover:bg-amber-600'}`}>
        {children}
      </Link>
    );
  };

  return (
    <header className="bg-stone-50 text-neutral-700 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-amber-800">Kedai Katak</h1>
            <span className="text-sm opacity-90 hidden sm:inline">Pilihan Tongkrongan Kalian</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">Beranda</NavLink>
            <NavLink to="/products">Produk</NavLink>
            <NavLink to="/about">Tentang</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/payment" className="relative p-2 hover:bg-amber-600 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <Link to="/profile" className="relative p-2 hover:bg-amber-600 rounded-lg transition-colors">
              <User className="w-6 h-6" />
            </Link>
            
            <button 
              className="md:hidden p-2 hover:bg-amber-600 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}> 
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              <NavLink to="/">Beranda</NavLink>
              <NavLink to="/products">Produk</NavLink>
              <NavLink to="/about">Tentang</NavLink>
              <NavLink to="/profile">Profil</NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
