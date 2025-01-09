'use client'
import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-amber-50 to-yellow-50 shadow-md">
      {/* Top bar with contact info */}
      <div className="bg-gray-900 text-yellow-50 text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          Free shipping on orders over $500 | Contact: (555) 123-4567
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-3xl font-serif text-gray-900 tracking-wider">
            DAZZORA
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-amber-600 transition-colors">
              Home
            </a>
            <a href="/collections" className="text-gray-800 hover:text-amber-600 transition-colors">
              Collections
            </a>
            <a href="/new-arrivals" className="text-gray-800 hover:text-amber-600 transition-colors">
              New Arrivals
            </a>
            <a href="/about" className="text-gray-800 hover:text-amber-600 transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-800 hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-amber-600 text-amber-900 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-amber-600  text-amber-900 transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 hover:text-amber-600 text-amber-900 transition-colors">
              <ShoppingBag size={20} />
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-800 hover:text-amber-600 transition-colors">
                Home
              </a>
              <a href="/collections" className="text-gray-800 hover:text-amber-600 transition-colors">
                Collections
              </a>
              <a href="/new-arrivals" className="text-gray-800 hover:text-amber-600 transition-colors">
                New Arrivals
              </a>
              <a href="/about" className="text-gray-800 hover:text-amber-600 transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-800 hover:text-amber-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;