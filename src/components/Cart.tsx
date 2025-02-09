import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onCheckout: () => void;
}

export default function Cart({ items, setCart, onCheckout }: CartProps) {
  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="pt-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre panier est vide</h2>
        <p className="text-gray-600">Ajoutez des articles à votre panier pour commencer vos achats.</p>
      </div>
    );
  }

  return (
    <div className="pt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Votre Panier</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {items.map(item => (
          <div key={item.id} className="flex items-center py-6 border-b border-gray-200 last:border-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            
            <div className="flex-1 ml-6">
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4 text-gray-600" />
                  </button>
                  <span className="text-gray-900 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-indigo-600">
                    {(item.price * item.quantity).toLocaleString('fr-FR', {
                      style: 'currency',
                      currency: 'EUR'
                    })}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total</span>
            <span className="text-indigo-600">
              {total.toLocaleString('fr-FR', {
                style: 'currency',
                currency: 'EUR'
              })}
            </span>
          </div>
          
          <button
            onClick={onCheckout}
            className="w-full mt-6 bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Procéder au paiement
          </button>
        </div>
      </div>
    </div>
  );
}