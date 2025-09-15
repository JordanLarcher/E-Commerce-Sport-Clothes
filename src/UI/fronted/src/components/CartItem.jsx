export default function CartItem({ item, onRemove, onUpdateQty }) {
  return (
    <div className="flex items-center justify-between bg-white/80 rounded-lg p-4 mb-4 shadow">
      <div className="flex items-center gap-4">
        <img
          src={item.image || "/placeholder.png"}
          alt={item.name}
          className="w-20 h-20 object-cover rounded bg-gymGray"
        />
        <div>
          <h4 className="text-lg font-bold text-primary">{item.name}</h4>
          <p className="text-gray-700">
            ${item.price} x {item.quantity}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="btn px-2 py-1 bg-gymYellow text-primary rounded"
          onClick={() => onUpdateQty(item, item.quantity - 1)}
        >
          -
        </button>
        <span className="font-bold">{item.quantity}</span>
        <button
          className="btn px-2 py-1 bg-gymYellow text-primary rounded"
          onClick={() => onUpdateQty(item, item.quantity + 1)}
        >
          +
        </button>
        <button
          className="btn px-2 py-1 bg-accent text-white rounded"
          onClick={() => onRemove(item)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
