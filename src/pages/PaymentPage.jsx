import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Banknote, Smartphone } from 'lucide-react';

const PaymentPage = ({ orderCompleted, cart, getTotalPrice, paymentMethod, setPaymentMethod, handlePaymentSubmit }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (orderCompleted) {
      const timer = setTimeout(() => navigate('/'), 5000);
      return () => clearTimeout(timer);
    }
  }, [orderCompleted, navigate]);

  if (orderCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Pesanan Berhasil!</h2>
          <p className="text-gray-600 mb-6">Terima kasih telah memesan di Fuyooo. Anda akan dialihkan ke beranda.</p>
          <div className="bg-green-50 p-4 rounded-lg mb-6 text-left">
            <h3 className="font-semibold mb-2">Detail Pesanan</h3>
            <p>Metode Pembayaran: {paymentMethod === 'cash' ? 'Tunai' : paymentMethod === 'bank' ? 'Transfer Bank' : 'E-Wallet'}</p>
            <p>Total Pembayaran: <span className="font-bold">Rp {(getTotalPrice() + 5000).toLocaleString()}</span></p>
          </div>
          <button onClick={() => navigate('/')} className="w-full bg-amber-800 text-white py-3 rounded-lg hover:bg-amber-900 transition-colors">Kembali ke Beranda Sekarang</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Pembayaran</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Ringkasan Pesanan</h2>
              <div className="max-h-96 overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center"><img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4"/><div><h3 className="font-medium">{item.name}</h3><p className="text-gray-500 text-sm">Rp {item.price.toLocaleString()} x {item.quantity}</p></div></div>
                    <p className="font-semibold">Rp {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between mb-2"><span>Subtotal</span><span>Rp {getTotalPrice().toLocaleString()}</span></div>
                <div className="flex justify-between mb-2"><span>Biaya Pengiriman</span><span>Rp 5.000</span></div>
                <div className="flex justify-between font-bold text-lg mt-3 pt-3 border-t"><span>Total Pembayaran</span><span>Rp {(getTotalPrice() + 5000).toLocaleString()}</span></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Detail Pengiriman</h2>
              <form onSubmit={handlePaymentSubmit}>
                <div className="mb-4"><label className="block text-gray-700 mb-2">Nama Lengkap</label><input required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/></div>
                <div className="mb-4"><label className="block text-gray-700 mb-2">Alamat Lengkap</label><textarea required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea></div>
                <div className="mb-4"><label className="block text-gray-700 mb-2">Nomor Telepon</label><input required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/></div>
                <div className="mb-6"><label className="block text-gray-700 mb-2">Catatan (Opsional)</label><textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contoh: Tolong jangan pakai gula"></textarea></div>
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Metode Pembayaran</h2>
                <div className="space-y-3 mb-6">
                  <div onClick={() => setPaymentMethod('cash')} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'cash' ? 'border-amber-800 bg-amber-50' : 'border-gray-300'}`}><Banknote className="w-6 h-6 mr-3 text-amber-800" /><div><h3 className="font-medium">Bayar di Tempat (Cash)</h3><p className="text-sm text-gray-500">Bayar tunai saat minuman diterima</p></div></div>
                  <div onClick={() => setPaymentMethod('bank')} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'bank' ? 'border-amber-800 bg-amber-50' : 'border-gray-300'}`}><CreditCard className="w-6 h-6 mr-3 text-amber-800" /><div><h3 className="font-medium">Transfer Bank</h3><p className="text-sm text-gray-500">BCA, BNI, BRI, Mandiri</p></div></div>
                  <div onClick={() => setPaymentMethod('ewallet')} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'ewallet' ? 'border-amber-800 bg-amber-50' : 'border-gray-300'}`}><Smartphone className="w-6 h-6 mr-3 text-amber-800" /><div><h3 className="font-medium">E-Wallet</h3><p className="text-sm text-gray-500">Gopay, OVO, Dana, ShopeePay</p></div></div>
                </div>
                <button type="submit" className="w-full bg-amber-800 text-white py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors">Konfirmasi Pembayaran</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
