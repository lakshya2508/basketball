import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { ArrowRight, Mail, Phone, MapPin, Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Elevate Your Game with Premium Basketball Gear
              </h1>
              <p className="text-lg mb-8 text-gray-300">
                Professional-grade equipment for athletes who demand excellence. From courts to coaching, we've got everything you need to perform at your best.
              </p>
              <div className="flex gap-4">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 transition flex items-center">
                  Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-gray-700 text-gray-300 px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800"
                alt="Basketball player dunking"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=800"
                  alt="Basketball technology"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm">Pro Player Choice</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">Advanced Ball Technology</h2>
              <p className="text-gray-300 mb-8">
                Our basketballs are engineered with cutting-edge technology to provide unmatched performance on any court. Each ball undergoes rigorous testing to ensure perfect bounce, optimal grip, and exceptional durability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-100">Moisture Control</h3>
                    <p className="text-gray-400 text-sm">Advanced moisture-wicking channels for superior grip in any condition</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-100">Perfect Symmetry</h3>
                    <p className="text-gray-400 text-sm">Precision-aligned panels ensure consistent bounce and trajectory</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-100">Composite Leather</h3>
                    <p className="text-gray-400 text-sm">Premium materials for enhanced durability and feel</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-100">Air Retention</h3>
                    <p className="text-gray-400 text-sm">Specialized butyl bladder maintains optimal pressure longer</p>
                  </div>
                </div>
              </div>
              <button className="mt-8 bg-orange-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 transition flex items-center">
                Explore Technology <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Pro Series Basketball"
              description="Competition-grade basketball with superior grip and control"
              features={["Official size and weight", "Premium composite leather", "Advanced moisture control"]}
              image="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=800"
            />
            <ProductCard
              title="Elite Training System"
              description="Complete training kit for serious athletes"
              features={["Shooting targets", "Agility markers", "Training manual"]}
              image="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&q=80&w=800"
            />
            <ProductCard
              title="Court Equipment"
              description="Professional-grade basketball systems"
              features={["Adjustable height", "Tempered glass backboard", "Pro-flex rim"]}
              image="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Have questions about our products or services? We're here to help you elevate your game.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-orange-500" />
                  <span className="text-gray-300">contact@hoopmaster.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-orange-500" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-orange-500" />
                  <span className="text-gray-300">123 Basketball Court, Sports City, SC 12345</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-100 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;