import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Phone, Plus } from 'lucide-react';

const HomePage = ({ products, addToCart }) => (
  <div className="min-h-screen">

    {/* HERO CINEMATIC */}
    <section
      className="relative h-[90vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2020/07/23/971283318.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-2xl">
          Nendang orang kurang afdol? <span className="text-yellow-400">seBAP</span> jadi solusi
        </h1>
        <p className="text-gray-200 text-xl mt-6 max-w-xl">
          sepatu bapak kurang kalcer pak
        </p>
        <div className="flex gap-4 mt-10">
          <Link
            to="/products"
            className="bg-yellow-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition-all"
          >
            Gass cekott!
          </Link>
          <Link
            to="/about"
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all"
          >
            Lihat Detail
          </Link>
        </div>
      </div>
    </section>

    {/* FEATURES */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Kenapa Harus seBAP?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Bahan Berkualitas",
              desc: "Ga ecek-ecek aseli",
              color: "bg-yellow-600",
              icon: <Star className="w-10 h-10 text-white" />
            },
            {
              title: "Harga Mahasiswa",
              desc: "Bukan toko cina pelit",
              color: "bg-green-600",
              icon: <ShoppingCart className="w-10 h-10 text-white" />
            },
            {
              title: "Siap Antar",
              desc: "Pesan online, langsung meluncur ke tempatmu.",
              color: "bg-blue-600",
              icon: <Phone className="w-10 h-10 text-white" />
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
            >
              <div
                className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Apa Kata Mereka?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Wong fei hung",
              text: "saya beli sepatu super disini",
              img: "https://i.pravatar.cc/150?img=12"
            },
            {
              name: "Megawati",
              text: "rill kalcer!",
              img: "https://i.pravatar.cc/150?img=32"
            },
            {
              name: "el joko",
              text: "anjay",
              img: "https://i.pravatar.cc/150?img=44"
            }
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h3 className="font-semibold text-lg text-gray-800">{t.name}</h3>
              </div>
              <p className="text-gray-600 italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PRODUK POPULER */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Produk Populer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">
                    Rp {product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-yellow-600 hover:shadow-lg transition-all duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/products"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-yellow-600 hover:shadow-lg transition-all duration-300"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>

    {/* CTA SECTION */}
    <section className="py-24 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Siap nendang org?</h2>
      <p className="text-lg mb-10">
        Klik tombol di bawah dan temukan sepatu sekarang juga!
      </p>

      <Link
        to="/products"
        className="bg-white text-black px-10 py-4 text-lg rounded-xl font-semibold hover:bg-gray-200 transition-all"
      >
        Pesan Sekarang
      </Link>
    </section>
  </div>
);

export default HomePage;
