import { useFavorites } from "../context/useFavorites";
import FavoriteItem from "../components/FavoriteItem";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary">
      <Header />
      <main className="flex-1 p-8">
        <h2 className="text-4xl font-bold text-gymYellow mb-8 text-center">
          Favoritos
        </h2>
        <div className="bg-white/95 rounded-3xl shadow-2xl p-10 animate-fade-in">
          {favorites.length === 0 ? (
            <div className="text-xl text-gray-700 font-bold text-center py-10">
              <i className="fas fa-heart text-4xl text-accent mb-4"></i>
              <br />
              No tienes productos favoritos.
            </div>
          ) : (
            <div className="grid gap-6">
              {favorites.map((product) => (
                <FavoriteItem
                  key={product.id}
                  product={product}
                  onRemove={removeFavorite}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
