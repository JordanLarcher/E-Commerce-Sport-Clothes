export default function FavoriteItem({ product, onRemove }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <div className="flex items-center gap-4">
        <img
          src={product.imageUrl || "/placeholder.png"}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-lg shadow"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h3>
          {product.brand && <p className="text-gray-500">{product.brand}</p>}
          <p className="text-gymYellow font-bold text-lg">${product.price}</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(product.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition"
        aria-label="Quitar de favoritos"
      >
        Quitar
      </button>
    </div>
  );
}
