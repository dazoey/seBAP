import React from 'react';
import { Search } from 'lucide-react';
import { SearchBar, ProductCard, Cart } from '../components/ui';

const ProductsPage = ({ isLoading, filteredProducts, searchTerm, setSearchTerm, addToCart, cart, updateQuantity, removeFromCart, getTotalPrice }) => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Koleksi Minuman Kami</h1>
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat produk...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12"><Search className="w-16 h-16 text-gray-400 mx-auto mb-4" /><p className="text-gray-600">Tidak ada produk yang ditemukan</p></div>
            )}
          </>
        )}

        <Cart 
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          getTotalPrice={getTotalPrice}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
