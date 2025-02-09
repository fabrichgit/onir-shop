import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useAuth } from '@clerk/clerk-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onToggleFavorite }: ProductCardProps) {
 
  const { isSignedIn } = useAuth()
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => isSignedIn ? onToggleFavorite(product) : null}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <Heart
            className={`h-5 w-5 ${product.isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">
            {product.price.toLocaleString('fr-FR', {
              style: 'currency',
              currency: 'EUR'
            })}
          </span>
          <button
            onClick={() => isSignedIn ? onAddToCart(product) : null}
            className="flex items-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Ajouter</span>
          </button>
        </div>
      </div>
    </div>
  );
}