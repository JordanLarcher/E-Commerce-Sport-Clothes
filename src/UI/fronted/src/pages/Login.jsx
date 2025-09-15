import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login as loginApi } from "../services/api";
import Loader from "../components/Loader";
import Notification from "../components/Notification";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await loginApi(email, password);
      login(result.user, result.token);
      navigate("/catalog");
    } catch (err) {
      setError("Credenciales inválidas o error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="bg-white/90 rounded-3xl shadow-2xl p-10 w-full max-w-md animate-fade-in">
          <h2 className="text-4xl font-extrabold text-primary mb-8 text-center tracking-tight">
            <span className="inline-block bg-gradient-to-r from-gymYellow via-accent to-gymYellow bg-clip-text text-transparent">
              Iniciar Sesión
            </span>
          </h2>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="w-full px-5 py-3 rounded-lg border-2 border-gymGray focus:border-accent focus:outline-none text-lg shadow-sm transition"
                required
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-accent text-xl">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="w-full px-5 py-3 rounded-lg border-2 border-gymGray focus:border-accent focus:outline-none text-lg shadow-sm transition"
                required
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-accent text-xl">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            <button
              className="w-full py-3 bg-accent text-white font-bold text-xl rounded-lg shadow-lg hover:bg-gymYellow hover:text-primary transition-all duration-200"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
          {loading && <Loader />}
          {error && <Notification message={error} type="error" />}
          <div className="mt-6 text-center">
            <a
              href="/register"
              className="text-accent font-bold hover:underline"
            >
              ¿No tienes cuenta? <span className="underline">Regístrate</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
