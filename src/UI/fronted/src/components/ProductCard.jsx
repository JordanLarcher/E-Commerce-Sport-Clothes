export default function ProductCard({ product, onAddToCart, onFavorite }) {
  return (
    <div className="bg-white/95 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-accent transition-transform duration-200 border-2 border-gymGray relative animate-fade-in">
      <div className="absolute top-4 right-4 flex gap-2">
        {product.category && (
          <span className="text-xs bg-accent text-white px-3 py-1 rounded-full font-bold shadow">
            {product.category}
          </span>
        )}
        {product.gender && (
          <span className="text-xs bg-gymYellow text-primary px-3 py-1 rounded-full font-bold shadow">
            {product.gender}
          </span>
        )}
      </div>
      <img
        src={product.image || "/placeholder.png"}
        alt={product.name}
        className="w-44 h-44 object-cover rounded-xl mb-6 bg-gymGray shadow-lg border border-gymGray"
      />
      <h3 className="text-2xl font-extrabold text-primary mb-2 tracking-tight text-center">
        {product.name}
      </h3>
      <p className="text-gray-700 mb-4 text-center text-lg">
        {product.description}
      </p>
      <span className="text-2xl font-bold text-accent mb-4">
        ${product.price}
      </span>
      <div className="flex gap-4 w-full justify-center">
        <button
          className="py-3 px-6 bg-accent text-white font-bold rounded-xl shadow-lg hover:bg-gymYellow hover:text-primary transition-all duration-200 text-lg"
          onClick={() => onAddToCart(product)}
        >
          <i className="fas fa-shopping-cart mr-2"></i>Agregar al carrito
        </button>
        <button
          className="py-3 px-6 bg-gymYellow text-primary font-bold rounded-xl shadow-lg hover:bg-accent hover:text-white transition-all duration-200 text-lg"
          onClick={() => onFavorite(product)}
        >
          <i className="fas fa-heart mr-2"></i>Favorito
        </button>
      </div>
    </div>
  );
}
