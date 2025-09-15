import { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";
import Notification from "../components/Notification";
import { fetchProducts } from "../services/api";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/useFavorites";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();
  const { addFavorite } = useFavorites();

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then(setProducts)
      .catch(() => setError("No se pudieron cargar los productos."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary">
      <Header />
      <main className="flex-1 p-8">
        <h2 className="text-4xl font-extrabold text-gymYellow mb-8 text-center tracking-tight">
          Catálogo
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtros laterales */}
          <aside className="w-full md:w-1/4 bg-white/95 rounded-2xl shadow-xl p-6 h-fit animate-fade-in mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-primary mb-4">Filtrar</h3>
            {/* Aquí irían los filtros reales */}
            <div className="flex flex-col gap-4">
              <button className="bg-gymGray text-primary px-4 py-2 rounded-lg shadow hover:bg-accent hover:text-white transition">
                Hombre
              </button>
              <button className="bg-gymGray text-primary px-4 py-2 rounded-lg shadow hover:bg-accent hover:text-white transition">
                Mujer
              </button>
              <button className="bg-gymGray text-primary px-4 py-2 rounded-lg shadow hover:bg-accent hover:text-white transition">
                Niños
              </button>
              <button className="bg-gymGray text-primary px-4 py-2 rounded-lg shadow hover:bg-accent hover:text-white transition">
                Ver todo
              </button>
            </div>
          </aside>
          {/* Grid de productos */}
          <div className="w-full md:w-3/4">
            {loading && <Loader />}
            {error && <Notification message={error} type="error" />}
            {!loading && !error && (
              <ProductGrid
                products={products}
                onAddToCart={addToCart}
                onFavorite={addFavorite}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
