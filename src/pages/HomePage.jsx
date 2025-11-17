import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Phone, Plus } from 'lucide-react';

const HomePage = ({ products, addToCart }) => (
  <div className="min-h-screen">
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Segarkan Harimu dengan <span className="text-amber-800">Kedai Katak</span></h1>
            <p className="text-xl text-gray-600 mb-8">Belinya disini, minumnya pas nogkrong.....</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-amber-800 text-white px-8 py-4 rounded-lg hover:bg-amber-900 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center">Lihat Produk</Link>
              <Link to="/about" className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-lg hover:bg-amber-800 hover:text-white transition-all duration-300 text-center">Pelajari Lebih Lanjut</Link>
            </div>
          </div>
          <div className="relative"><div className="bg-amber-800 rounded-full p-8 shadow-2xl"><img src="https://i.imgur.com/gYodsX4.jpeg" alt="Minuman Seger" className="rounded-full w-full h-full object-cover"/></div></div>
        </div>
      </div>
    </section>
    {/* <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mengapa Memilih Fuyooo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"><div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"><Star className="w-8 h-8 text-white" /></div><h3 className="text-xl font-semibold mb-4 text-gray-800">Kualitas Premium</h3><p className="text-gray-600">Bahan-bahan berkualitas tinggi dipilih khusus untuk menghasilkan rasa terbaik</p></div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"><div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"><ShoppingCart className="w-8 h-8 text-white" /></div><h3 className="text-xl font-semibold mb-4 text-gray-800">Mudah Dipesan</h3><p className="text-gray-600">Sistem pemesanan yang mudah dan pengiriman cepat</p></div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"><div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4"><Phone className="w-8 h-8 text-white" /></div><h3 className="text-xl font-semibold mb-4 text-gray-800">Layanan 25/7</h3><p className="text-gray-600">Customer service yang siap membantu Anda kapan saja</p></div>
        </div>
      </div>
    </section> */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Produk Populer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-800">Rp {product.price.toLocaleString()}</span>
                  <button onClick={() => addToCart(product)} className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900 hover:shadow-lg transition-all duration-300"><Plus className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8"><Link to="/products" className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-900 hover:shadow-lg transition-all duration-300">Lihat Semua Produk</Link></div>
      </div>
    </section>
  </div>
);

export default HomePage;
