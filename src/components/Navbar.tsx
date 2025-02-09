import { ShoppingCart, Heart, Menu, Home, Package, Clock } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react'
import { Link, useParams } from 'react-router-dom';

interface NavbarProps {
  cartItemsCount: number;
  favoritesCount: number;
}

export default function Navbar({ cartItemsCount, favoritesCount }: NavbarProps) {
  const { currentRoute } = useParams()
  const { isSignedIn } = useAuth()

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center cursor-pointer">
            <Package className="h-8 w-8 text-indigo-600" />
            <span className="hidden md:flex ml-2 text-2xl font-bold text-indigo-600">OnirShop</span>
          </Link>

          <div className="flex items-center md:space-x-8 space-x-4">
            <Link to="/"
              className={`flex items-center space-x-1 ${currentRoute === '' || !currentRoute ? 'text-indigo-600' : 'text-gray-700'}`}
            >
              <Home className="h-5 w-5" />
              <span className='hidden md:flex'>Accueil</span>
            </Link>
            <Link to="/category"
              className={`flex items-center space-x-1 ${currentRoute === 'category' ? 'text-indigo-600' : 'text-gray-700'}`}
            >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="m12 2-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"></path></svg>
              <span className='hidden md:flex'>Catégories</span>
            </Link>
            {isSignedIn ? <Link to="/orders"
              className={`flex items-center space-x-1 ${currentRoute === 'orders' ? 'text-indigo-600' : 'text-gray-700'}`}
            >
              <Clock className="h-5 w-5" />
              <span className='hidden md:flex'>Commandes</span>
            </Link> : null}
          </div>

          <div className="flex items-center space-x-4">

            {isSignedIn ?
              <>
                <Link to="/favorites"
                  className="p-2 hover:bg-gray-100 rounded-full relative"
                >
                  <Heart className={`h-6 w-6 ${currentRoute === 'favorites' ? 'text-red-500' : 'text-gray-600'}`} />
                  {favoritesCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {favoritesCount}
                    </span>
                  )}
                </Link>
                <Link to="/cart"
                  className="p-2 hover:bg-gray-100 rounded-full relative"
                >
                  <ShoppingCart className={`h-6 w-6 ${currentRoute === 'cart' ? 'text-indigo-600' : 'text-gray-600'}`} />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </>
              : null}

            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>

            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

          </div>
        </div>
      </div>
    </nav>
  );
}