import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2 } from 'lucide-react';

const Cart = ({ cart, updateQuantity, removeFromCart, getTotalPrice }) => {
  const navigate = useNavigate();

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
      <h3 className="font-semibold mb-2">Keranjang Belanja</h3>
      <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between text-sm">
            <span className="flex-1 truncate pr-2">{item.name}</span>
            <div className="flex items-center space-x-2">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"><Minus className="w-3 h-3" /></button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"><Plus className="w-3 h-3" /></button>
              <button onClick={() => removeFromCart(item.id)} className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200"><Trash2 className="w-3 h-3 text-red-600" /></button>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t pt-2 mt-2">
        <div className="flex justify-between font-semibold"><span>Total:</span><span>Rp {getTotalPrice().toLocaleString()}</span></div>
        <button onClick={() => navigate('/payment')} className="w-full bg-black text-white py-2 rounded-lg mt-2 hover:bg-yellow-600 hover:shadow-lg transition-all duration-300">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
