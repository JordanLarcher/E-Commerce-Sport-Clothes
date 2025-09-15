import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-primary text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          to="/"
          className="text-3xl font-display font-extrabold tracking-wide text-gymYellow drop-shadow-lg hover:scale-105 transition-transform"
        >
          <span className="bg-gradient-to-r from-gymYellow via-accent to-gymYellow bg-clip-text text-transparent">
            Oversize Gym Store
          </span>
        </Link>
        <button
          className="md:hidden text-gymYellow text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex gap-8 text-lg font-semibold items-center ${
            menuOpen
              ? "block absolute top-16 left-0 w-full bg-primary py-6 shadow-xl"
              : "hidden md:flex"
          }`}
        >
          <li>
            <Link
              to="/catalog"
              className="hover:text-accent transition font-bold px-2 py-1 rounded hover:bg-gymGray"
            >
              Catálogo
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-accent transition font-bold px-2 py-1 rounded hover:bg-gymGray"
            >
              Carrito
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="hover:text-accent transition font-bold px-2 py-1 rounded hover:bg-gymGray"
            >
              Favoritos
            </Link>
          </li>
          <li>
            <Link
              to="/orderhistory"
              className="hover:text-accent transition font-bold px-2 py-1 rounded hover:bg-gymGray"
            >
              Pedidos
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="hover:text-accent transition font-bold px-2 py-1 rounded hover:bg-gymGray"
            >
              Perfil
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-accent transition font-bold px-2 py-1 rounded hover:bg-gymGray"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
// ...existing code...
// Eliminar duplicados y corregir cierre de JSX
