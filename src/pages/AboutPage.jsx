import React from 'react';
import { Star, ShoppingCart, Phone, Mail, MapPin } from 'lucide-react';

const AboutPage = () => (
  <div className="min-h-screen py-8">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Tentang Kedai katak</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cerita Kami</h2>
            <p className="text-gray-600 mb-4">Kedai Katak lahir dari bocah tongkrongan yang ngeluh mulu kalo aus, apalagi kalo puasa, Kedai Katak jadi tempat mokel favorit.</p>
          </div>
          <div className="relative"><img src="https://i.imgur.com/L9wEWy6.jpeg" alt="Tim Fuyooo" className="rounded-lg shadow-lg w-full h-80 object-cover"/></div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg"><div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"><Star className="w-8 h-8 text-white" /></div><h3 className="text-xl font-semibold mb-2 text-gray-800">Kualitas</h3><p className="text-gray-600">Mengutamakan kualitas bahan dan proses pembuatan yang higienis</p></div>
          <div className="text-center p-6 bg-green-50 rounded-lg"><div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"><ShoppingCart className="w-8 h-8 text-white" /></div><h3 className="text-xl font-semibold mb-2 text-gray-800">Pelayanan</h3><p className="text-gray-600">Memberikan pelayanan terbaik dan pengalaman berbelanja yang memuaskan</p></div>
          <div className="text-center p-6 bg-yellow-50 rounded-lg"><div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4"><Phone className="w-8 h-8 text-white" /></div><h3 className="text-xl font-semibold mb-2 text-gray-800">Inovasi</h3><p className="text-gray-600">Terus berinovasi dalam menciptakan varian minuman yang unik</p></div>
        </div> */}
        <div className="bg-amber-600 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Hubungi Customer Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center"><Phone className="w-12 h-12 mx-auto mb-4 p-2 bg-amber-800 rounded-full" /><h3 className="font-semibold mb-2">Telepon</h3><p className="text-blue-100">089619525316</p><p className="text-sm text-blue-100 mt-1">Senin - Minggu: 12:00 - 22:00</p></div>
            <div className="text-center"><Mail className="w-12 h-12 mx-auto mb-4 p-2 bg-amber-800 rounded-full" /><h3 className="font-semibold mb-2">Email</h3><p className="text-blue-100">ayathaarch@gmail.com</p><p className="text-sm text-blue-100 mt-1">Respon dalam 25 jam</p></div>
            <div className="text-center"><MapPin className="w-12 h-12 mx-auto mb-4 p-2 bg-amber-800 rounded-full" /><h3 className="font-semibold mb-2">Alamat</h3><p className="text-blue-100">Jl.tiap weeknd</p><p className="text-sm text-blue-100 mt-1">Bogor, Indonesia</p></div>
          </div>
          <div className="text-center mt-8"><button className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Hubungi Sekarang</button></div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
