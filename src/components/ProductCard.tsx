import { Check } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function ProductCard({ title, description, features, image }: ProductCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 border border-gray-700">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <Check className="h-5 w-5 text-orange-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}