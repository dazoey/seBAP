import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">{product.category}</span>
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-amber-800">Rp {product.price.toLocaleString()}</span>
          <button onClick={() => addToCart(product)} className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900 hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Tambah</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
