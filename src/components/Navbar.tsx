import { Menu, X, Dumbbell } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-white">HoopMaster</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-300 hover:text-orange-500 transition">Products</a>
            <a href="#services" className="text-gray-300 hover:text-orange-500 transition">Services</a>
            <a href="#about" className="text-gray-300 hover:text-orange-500 transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-500 transition">Contact</a>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
              Shop Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a href="#products" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Products</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-orange-500">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Contact</a>
            <button className="w-full text-left px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}