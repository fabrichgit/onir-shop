import { Product } from '../types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Casque Audio Premium',
    description: 'Casque audio sans fil avec réduction de bruit active',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Audio',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Montre Connectée Sport',
    description: 'Montre intelligente avec suivi d\'activité et notifications',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    category: 'Accessoires',
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Appareil Photo Numérique',
    description: 'Appareil photo mirrorless haute résolution',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    category: 'Photo',
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Enceinte Portable',
    description: 'Enceinte Bluetooth waterproof',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
    category: 'Audio',
    isFavorite: false,
  },
];