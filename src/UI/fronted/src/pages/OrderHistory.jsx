import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function OrderHistory() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary">
      <Header />
      <main className="flex-1 p-8">
        <h2 className="text-4xl font-bold text-gymYellow mb-8 text-center">
          Historial de Pedidos
        </h2>
        <div className="bg-white/95 rounded-3xl shadow-2xl p-10 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Historial de pedidos
          </h3>
          {/* Aquí iría la lista de pedidos anteriores */}
          <div className="text-lg text-gray-700 text-center">
            Próximamente: Listado de pedidos realizados.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
