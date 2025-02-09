import { Product } from '../types';
import ProductCard from './ProductCard';
import { Zap, Shield, Truck, Clock } from 'lucide-react';

interface HomeProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
}

export default function Home({ products, onAddToCart, onToggleFavorite }: HomeProps) {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: "Livraison Rapide",
      description: "Recevez vos produits en 24-48h"
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Paiement Sécurisé",
      description: "Transactions 100% sécurisées"
    },
    {
      icon: <Truck className="h-8 w-8 text-indigo-600" />,
      title: "Retours Gratuits",
      description: "30 jours pour changer d'avis"
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: "Support 24/7",
      description: "Une équipe à votre écoute"
    }
  ];

  return (
    <div className="pt-6">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1920&q=80"
            alt="Shopping"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative px-8 py-24 sm:px-12 sm:py-32">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Découvrez Notre Collection
          </h1>
          <p className="mt-6 max-w-lg text-xl text-indigo-100">
            Les dernières tendances et les meilleurs produits tech à Madagascar.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Produits Populaires</h2>
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
      </section>

      {/* New Arrivals Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Nouveautés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
              alt="Tech Nouveautés"
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Tech Innovante</h3>
                <p className="text-white/90 mb-4">Découvrez les dernières innovations technologiques</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Accessoires"
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Accessoires Premium</h3>
                <p className="text-white/90 mb-4">Une sélection d'accessoires haut de gamme</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}