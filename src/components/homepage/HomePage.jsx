'use client'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Diamond, Crown, Star, Clock } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-amber-900 opacity-90" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-7xl font-serif text-yellow-50 mb-6"
          >
            Timeless Elegance
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-amber-100 mb-8"
          >
            Where luxury meets craftsmanship
          </motion.p>
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.9, duration: 0.3 }}
            className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
          >
            Explore Collection
          </motion.button>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Diamond, title: "Premium Quality", desc: "Finest materials" },
              { icon: Crown, title: "Exclusive Design", desc: "Unique pieces" },
              { icon: Star, title: "Expert Crafted", desc: "Master artisans" },
              { icon: Clock, title: "Timeless Style", desc: "Eternal elegance" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6"
              >
                <feature.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-gray-900 text-center mb-12">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Diamond Ring", price: "$2,499", img: "/api/placeholder/400/500" },
              { name: "Pearl Necklace", price: "$1,899", img: "/api/placeholder/400/500" },
              { name: "Gold Bracelet", price: "$1,299", img: "/api/placeholder/400/500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img src={item.img} alt={item.name} className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900">{item.name}</h3>
                  <p className="text-amber-600 font-semibold mt-2">{item.price}</p>
                  <button className="mt-4 w-full bg-gray-900 text-yellow-50 py-3 rounded-md hover:bg-amber-600 transition-colors flex items-center justify-center gap-2">
                    View Details
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-yellow-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif mb-4">Join Our VIP List</h2>
            <p className="text-amber-200 mb-8">Be the first to know about new collections and exclusive offers</p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <button className="px-6 py-3 bg-amber-600 rounded-md hover:bg-amber-500 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;