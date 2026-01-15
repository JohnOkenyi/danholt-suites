'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const RestaurantPage = () => {
  const menuItems = [
    { id: 1, name: 'Jollof Rice & Chicken', price: '₦3,500', category: 'Main Course', description: 'Authentic Nigerian jollof rice with grilled chicken' },
    { id: 2, name: 'Pepper Soup', price: '₦2,500', category: 'Soup', description: 'Traditional spiced pepper soup with assorted meat' },
    { id: 3, name: 'Egusi Soup', price: '₦3,000', category: 'Soup', description: 'Rich egusi soup with vegetables and proteins' },
    { id: 4, name: 'Suya', price: '₦2,000', category: 'Appetizer', description: 'Spiced grilled meat skewers' },
    { id: 5, name: 'Pounded Yam & Egusi', price: '₦3,500', category: 'Main Course', description: 'Smooth pounded yam with creamy egusi sauce' },
    { id: 6, name: 'Grilled Fish', price: '₦4,500', category: 'Main Course', description: 'Fresh grilled fish with seasonal vegetables' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <section className="py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-semibold mb-4 text-center">Culinary Excellence</h1>
          <p className="text-xl text-center text-gray-600 mb-16">Experience authentic Nigerian cuisine prepared by our world-class chefs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">{item.category}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-bold text-xl">{item.price}</span>
                  <button className="bg-[#1a1a2e] text-white px-4 py-2 rounded-lg hover:bg-[#2a2a4e] transition-colors">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RestaurantPage;
