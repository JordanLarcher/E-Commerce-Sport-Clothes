import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Checkout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary">
      <Header />
      <main className="flex-1 p-8">
        <h2 className="text-4xl font-bold text-gymYellow mb-8 text-center">
          Checkout
        </h2>
        <div className="bg-white/95 rounded-3xl shadow-2xl p-10 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Resumen de compra
          </h3>
          {/* Aquí iría el resumen de productos y formulario de pago real */}
          <form className="flex flex-col gap-6 max-w-lg mx-auto">
            <input
              type="text"
              name="card"
              placeholder="Número de tarjeta"
              className="w-full px-5 py-3 rounded-lg border-2 border-gymGray focus:border-accent focus:outline-none text-lg shadow-sm transition"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Nombre en la tarjeta"
              className="w-full px-5 py-3 rounded-lg border-2 border-gymGray focus:border-accent focus:outline-none text-lg shadow-sm transition"
              required
            />
            <input
              type="text"
              name="exp"
              placeholder="MM/AA"
              className="w-full px-5 py-3 rounded-lg border-2 border-gymGray focus:border-accent focus:outline-none text-lg shadow-sm transition"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              className="w-full px-5 py-3 rounded-lg border-2 border-gymGray focus:border-accent focus:outline-none text-lg shadow-sm transition"
              required
            />
            <button className="w-full py-3 bg-accent text-white font-bold text-xl rounded-lg shadow-lg hover:bg-gymYellow hover:text-primary transition-all duration-200">
              Pagar
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
