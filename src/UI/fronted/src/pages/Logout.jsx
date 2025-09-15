import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    // Aquí iría la lógica para limpiar el estado de autenticación
    navigate("/login");
  }, [navigate]);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="bg-white/90 rounded-xl shadow-xl p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Cerrando sesión...
          </h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}
