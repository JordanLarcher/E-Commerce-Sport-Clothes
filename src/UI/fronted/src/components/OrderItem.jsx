export default function OrderItem({ order }) {
  return (
    <div className="bg-white/90 rounded-xl shadow-lg p-6 mb-4">
      <h4 className="text-lg font-bold text-primary mb-2">
        Pedido #{order.id}
      </h4>
      <div className="text-gray-700 mb-2">Fecha: {order.date}</div>
      <div className="text-gray-700 mb-2">
        Total: <span className="font-bold text-accent">${order.total}</span>
      </div>
      <div className="text-gray-700">
        Estado: <span className="font-bold text-gymYellow">{order.status}</span>
      </div>
      {/* Aquí puedes mapear los productos del pedido */}
    </div>
  );
}
