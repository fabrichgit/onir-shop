import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CategoryView from './components/CategoryView';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import Favorites from './components/Favorites';
import { Product, CartItem } from './types';
import { sampleProducts } from './data/products';
import { useNavigate, useParams } from 'react-router-dom';

function HomeApp() {
  const {currentRoute} = useParams()
  const nav = useNavigate()
  const [products] = useState<Product[]>(sampleProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const toggleFavorite = (product: Product) => {
    setFavorites(prev => {
      const isFavorite = prev.some(p => p.id === product.id);
      if (isFavorite) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const renderRoute = () => {
    switch (currentRoute) {
      case 'home':
        return <Home products={products} onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />;
      case 'category':
        return <CategoryView products={products} onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />;
      case 'cart':
        return <Cart items={cart} setCart={setCart} onCheckout={() => nav('/checkout')} />;
      case 'checkout':
        return <Checkout cart={cart} onOrderComplete={() => {
          setCart([])
          nav('/orders');
        }} />;
      case 'orders':
        return <Orders />;
      case 'favorites':
        return <Favorites products={favorites} onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />;
      default:
        return <Home products={products} onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartItemsCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        favoritesCount={favorites.length}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* <Routes>
          <Route path='/' element={<Home products={products} onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />}/>
          <Route path='/category' element={<CategoryView products={products} onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />}/>
          <Route path='/cart' element={<Cart items={cart} setCart={setCart} onCheckout={() => setCurrentRoute('checkout')} />}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/favorites' element={<Favorites products={favorites} onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />}/>
          <Route path='/checkout' element={<Favorites products={favorites} onAddToCart={addToCart} onToggleFavorite={toggleFavorite} />}/>
        </Routes> */}
        {renderRoute()}
      </main>
    </div>
  );
}

export default HomeApp;