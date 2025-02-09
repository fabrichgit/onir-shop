import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface FavoritesProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
}

export default function Favorites({ products, onAddToCart, onToggleFavorite }: FavoritesProps) {
  if (products.length === 0) {
    return (
      <div className="pt-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Aucun favori</h2>
        <p className="text-gray-600">Ajoutez des articles à vos favoris pour les retrouver facilement.</p>
      </div>
    );
  }

  return (
    <div className="pt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Mes Favoris</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}