import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary">
      <Header />
      <main className="flex-1 p-8">
        <h2 className="text-4xl font-bold text-gymYellow mb-8 text-center">
          Carrito de Compras
        </h2>
        <div className="bg-white/95 rounded-3xl shadow-2xl p-10 animate-fade-in">
          {cart.length === 0 ? (
            <div className="text-xl text-gray-700 font-bold text-center py-10">
              <i className="fas fa-shopping-cart text-4xl text-accent mb-4"></i>
              <br />
              Tu carrito está vacío.
            </div>
          ) : (
            <>
              <div className="grid gap-6 mb-8">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={removeFromCart}
                    onUpdateQty={updateQty}
                  />
                ))}
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
                <span className="text-2xl font-extrabold text-primary">
                  Total:{" "}
                  <span className="text-accent">${total.toFixed(2)}</span>
                </span>
                <div className="flex gap-4">
                  <Button
                    onClick={() => clearCart()}
                    className="bg-gymGray text-primary font-bold px-6 py-3 rounded-xl shadow hover:bg-accent hover:text-white transition-all duration-200"
                  >
                    Vaciar carrito
                  </Button>
                  <Button
                    onClick={() => navigate("/checkout")}
                    className="bg-accent text-white font-bold px-6 py-3 rounded-xl shadow hover:bg-gymYellow hover:text-primary transition-all duration-200"
                  >
                    Ir a pagar
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
