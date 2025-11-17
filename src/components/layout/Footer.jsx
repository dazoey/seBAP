import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star } from 'lucide-react';

const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-black">Kedai katak</h3>
            <p className="text-gray-400 mb-4">Toko minuman segar.</p>
            {/* <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div> */}
          </div>
          <div>
            <h4 className="font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Produk</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Tentang</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Teh</li>
              <li>Kopi</li>
              <li>Mix</li>
              <li>Smoothies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2"><Phone className="w-4 h-4" /><span>089619525316</span></div>
              <div className="flex items-center space-x-2"><Mail className="w-4 h-4" /><span>ayathaarch@gmail.com</span></div>
              <div className="flex items-center space-x-2"><MapPin className="w-4 h-4" /><span>Bogor, Indonesia</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Kedai katak. all rights reserved.</p>
        </div>
      </div>
    </footer>
);

export default Footer;
