import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Notification from "../components/Notification";
import { registerUser } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await registerUser(form);
      setSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setError(err.message || "Error al registrar usuario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary">
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white/95 rounded-3xl shadow-2xl p-10 max-w-lg w-full animate-fade-in">
          <h2 className="text-4xl font-extrabold text-primary mb-8 text-center tracking-tight">
            <span className="inline-block bg-gradient-to-r from-gymYellow via-accent to-gymYellow bg-clip-text text-transparent">
              Crear cuenta
            </span>
          </h2>
          {error && <Notification message={error} type="error" />}
          {success && <Notification message={success} type="success" />}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={form.name}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg border-2 border-gymGray focus:border-accent focus:outline-none text-lg shadow-sm transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg border-2 border-gymGray focus:border-accent focus:outline-none text-lg shadow-sm transition"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg border-2 border-gymGray focus:border-accent focus:outline-none text-lg shadow-sm transition"
              required
            />
            <button
              className="w-full py-3 bg-accent text-white font-bold text-xl rounded-lg shadow-lg hover:bg-gymYellow hover:text-primary transition-all duration-200"
              disabled={loading}
            >
              {loading ? "Registrando..." : "Registrarse"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
