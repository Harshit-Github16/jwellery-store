'use client'
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-50 to-yellow-50 shadow-md">
      {/* Top border stripe */}
      <div className="bg-gray-900 text-yellow-50 text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          Sign up for our newsletter to receive special offers
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900 tracking-wider">DAZZORA</h2>
          <p className="mt-2 text-gray-600">Luxury in Every Detail</p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-800">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={18} className="text-amber-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={18} className="text-amber-600" />
                <span>info@dazzora.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={18} className="text-amber-600" />
                <span>123 Jewelry Lane, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-800 hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link href="/collections" className="text-gray-800 hover:text-amber-600 transition-colors">
                Collections
              </Link>
              <Link href="/new-arrivals" className="text-gray-800 hover:text-amber-600 transition-colors">
                New Arrivals
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-amber-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-amber-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-800 mb-4">Subscribe for exclusive offers</p>
            <div className="flex gap-2 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white border border-gray-300 rounded-md flex-grow focus:outline-none focus:border-amber-600"
              />
              <button className="px-4 py-2 bg-gray-900 text-yellow-50 rounded-md hover:bg-amber-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-800 hover:text-amber-600 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-800 hover:text-amber-600 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-800 hover:text-amber-600 transition-colors">
            <Twitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-200 pt-8">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Dazzora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}