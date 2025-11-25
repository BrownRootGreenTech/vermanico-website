'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ProductCategory, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS } from '@/types/product';
import { Filter } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const categories = [
    { value: 'all' as const, label: 'All Products', description: 'View our complete range of products' },
    { value: ProductCategory.VERMICOMPOST, label: CATEGORY_LABELS[ProductCategory.VERMICOMPOST], description: CATEGORY_DESCRIPTIONS[ProductCategory.VERMICOMPOST] },
    { value: ProductCategory.EGGSHELL, label: CATEGORY_LABELS[ProductCategory.EGGSHELL], description: CATEGORY_DESCRIPTIONS[ProductCategory.EGGSHELL] },
    { value: ProductCategory.MUSHROOM, label: CATEGORY_LABELS[ProductCategory.MUSHROOM], description: CATEGORY_DESCRIPTIONS[ProductCategory.MUSHROOM] },
    { value: ProductCategory.COW_DUNG, label: CATEGORY_LABELS[ProductCategory.COW_DUNG], description: CATEGORY_DESCRIPTIONS[ProductCategory.COW_DUNG] },
    { value: ProductCategory.MUSTARD_CAKE, label: CATEGORY_LABELS[ProductCategory.MUSTARD_CAKE], description: CATEGORY_DESCRIPTIONS[ProductCategory.MUSTARD_CAKE] },
    { value: ProductCategory.POTTING_SOIL, label: CATEGORY_LABELS[ProductCategory.POTTING_SOIL], description: CATEGORY_DESCRIPTIONS[ProductCategory.POTTING_SOIL] },
    { value: ProductCategory.VERMIWASH, label: CATEGORY_LABELS[ProductCategory.VERMIWASH], description: CATEGORY_DESCRIPTIONS[ProductCategory.VERMIWASH] },
  ];

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header with Filter */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-8 lg:sticky lg:top-16 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Title Section */}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">Our Products</h1>
              <p className="text-base text-primary-50">
                Explore our premium range of organic agricultural products, all produced in our in-house facilities.
              </p>
            </div>

            {/* Filter Section */}
            <div className="flex items-center gap-4 lg:min-w-[400px]">
              <div className="flex items-center flex-1">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg mr-3">
                  <Filter className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <label htmlFor="category-select" className="text-xs font-medium text-primary-100 block mb-1">
                    Filter by Category
                  </label>
                  <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value as ProductCategory | 'all')}
                    className="w-full px-3 py-2 bg-white/95 backdrop-blur-sm border border-white/30 rounded-lg text-primary-900 text-sm font-medium focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition-all cursor-pointer hover:bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="hidden md:block text-sm text-primary-50 whitespace-nowrap">
                <span className="font-bold text-white">{filteredProducts.length}</span> products
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-primary-700">
                  Showing <span className="font-semibold text-primary-900">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
                  {selectedCategory !== 'all' && (
                    <span> in <span className="font-semibold text-primary-900">{categories.find(c => c.value === selectedCategory)?.label}</span></span>
                  )}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-primary-700">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-12 border-t border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-700">1 kg</span>
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Small Packages</h3>
              <p className="text-primary-700 text-sm">Perfect for home gardens and potted plants</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-700">5 kg</span>
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Medium Packages</h3>
              <p className="text-primary-700 text-sm">Ideal for larger gardens and farms</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-700">Bulk</span>
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Bulk Orders</h3>
              <p className="text-primary-700 text-sm">Custom quantities for commercial use</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
