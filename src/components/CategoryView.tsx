import React, { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface CategoryViewProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
}

export default function CategoryView({ products, onAddToCart, onToggleFavorite }: CategoryViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Catégories</h1>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize
              ${selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
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