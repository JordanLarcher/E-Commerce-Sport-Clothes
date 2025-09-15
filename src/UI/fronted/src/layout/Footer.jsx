export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white py-8 mt-8 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="font-bold text-gymYellow text-lg mb-2 md:mb-0">
          Oversize Gym Store
        </div>
        <div className="text-gray-200">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/JordanLarcher/E-Commerce-Sport-Clothes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="mailto:contacto@gymstore.com"
            className="hover:text-accent transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
