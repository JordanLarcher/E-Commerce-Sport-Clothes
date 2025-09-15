import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <div className="relative w-full max-w-3xl mx-auto mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gymYellow via-accent to-gymYellow opacity-30 rounded-3xl blur-xl animate-pulse"></div>
          <h1 className="relative text-6xl md:text-8xl font-display font-extrabold text-gymYellow mb-6 drop-shadow-xl tracking-tight animate-fade-in">
            Oversize Gym Store
          </h1>
        </div>
        <p className="text-2xl md:text-3xl text-white mb-10 max-w-2xl font-body animate-fade-in">
          Encuentra la mejor ropa deportiva oversize para hombres, mujeres y
          unisex.
          <br />
          Catálogo, carrito, historial de pedidos y más.
        </p>
        <a
          href="/catalog"
          className="px-10 py-5 bg-accent text-white rounded-full text-2xl font-bold shadow-2xl hover:bg-gymYellow hover:text-primary transition-all duration-200 animate-bounce"
        >
          Ver Catálogo
        </a>
      </main>
      <Footer />
    </div>
  );
}
