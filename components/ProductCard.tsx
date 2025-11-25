'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import OrderModal from './OrderModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vermicompost':
        return 'bg-primary-100 text-primary-700 border-primary-200';
      case 'eggshell':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'mushroom':
        return 'bg-rose-100 text-rose-700 border-rose-200';
      case 'cow_dung':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'mustard_cake':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'potting_soil':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'vermiwash':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-primary-100 text-primary-700 border-primary-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-primary-200">
      {/* Product Image */}
      <div className="relative h-56 bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.inStock && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 z-10">
            <CheckCircle className="h-3 w-3" />
            <span>In Stock</span>
          </div>
        )}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(product.category)} z-10`}>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-primary-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-primary-800 text-sm mb-4 line-clamp-2 leading-relaxed font-medium">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <li key={index} className="text-primary-800 text-xs flex items-start font-medium">
              <span className="text-primary-700 mr-2 font-bold">✓</span>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-primary-200">
          <div>
            {product.price > 0 ? (
              <>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-primary-600">
                    ₹{product.price}
                  </p>
                  {product.mrp && product.mrp > product.price && (
                    <p className="text-sm text-primary-900 line-through">
                      ₹{product.mrp}
                    </p>
                  )}
                </div>
                <p className="text-xs text-primary-500">per {product.unit}</p>
              </>
            ) : (
              <p className="text-lg font-semibold text-primary-700">
                Contact for Price
              </p>
            )}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-sm flex items-center space-x-2 shadow-md hover:shadow-lg"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Order</span>
          </button>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </div>
  );
};

export default ProductCard;
