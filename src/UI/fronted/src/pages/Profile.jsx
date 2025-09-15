import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="bg-white/95 rounded-3xl shadow-2xl p-10 w-full max-w-lg animate-fade-in">
          <h2 className="text-4xl font-extrabold text-primary mb-8 text-center tracking-tight">
            <span className="inline-block bg-gradient-to-r from-gymYellow via-accent to-gymYellow bg-clip-text text-transparent">
              Mi Perfil
            </span>
          </h2>
          {/* Aquí iría la información del usuario y opciones de edición */}
          <div className="text-lg text-gray-700 text-center">
            Próximamente: Detalles y edición de perfil.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
