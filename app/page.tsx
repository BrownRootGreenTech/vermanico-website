import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import {
  Leaf,
  Sprout,
  TreeDeciduous,
  Shield,
  Award,
  Truck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/static/home_page.jpeg')] bg-cover bg-center opacity-50 animate-ken-burns"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Leaf className="h-4 w-4" />
                <span className="text-sm font-medium">100% Organic & Natural</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-grey-800">
                Premium Organic Products from
                <span className="block text-primary-100">VERMANICO™</span>
              </h1>

              <p className="text-lg sm:text-xl text-primary-50 mb-8 leading-relaxed">
                Experience the power of nature with our premium vermicompost, eggshell powder,
                and fresh mushrooms - all produced in our state-of-the-art in-house facilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold text-center shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-700 transition-colors duration-200 font-semibold text-center flex items-center justify-center"
                >
                  Order Now
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-400/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Sprout, label: 'Vermicompost', count: '1kg - Bulk' },
                      { icon: Shield, label: 'Eggshell Powder', count: '500g - 1kg' },
                      { icon: TreeDeciduous, label: 'Fresh Mushrooms', count: '250g' },
                      { icon: Award, label: 'Premium Quality', count: '100% Organic' },
                    ].map((item, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <item.icon className="h-8 w-8 text-primary-500 mb-3" />
                        <p className="text-sm font-medium mb-1 text-primary-800">{item.label}</p>
                        <p className="text-xs text-primary-200 text-primary-800">{item.count}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: '100% Organic',
                description: 'All our products are completely organic and chemical-free, produced in controlled environments.',
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: Award,
                title: 'In-House Production',
                description: 'We maintain our own vermicompost beds and mushroom cultivation facilities for quality control.',
                color: 'text-amber-600',
                bg: 'bg-amber-50',
              },
              {
                icon: Truck,
                title: 'Flexible Delivery',
                description: 'Available in multiple sizes from 1kg to bulk orders with convenient delivery options.',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`${feature.bg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-10 w-10 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{feature.title}</h3>
                <p className="text-primary-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              Explore our premium range of organic products, carefully produced to ensure the highest quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-6">
                Why Choose VERMANICO?
              </h2>
              <p className="text-lg text-primary-700 mb-8">
                We are committed to providing the finest organic agricultural products,
                backed by sustainable practices and in-house production facilities.
              </p>

              <div className="space-y-4">
                {[
                  'State-of-the-art in-house vermicompost beds',
                  'Controlled mushroom cultivation environment',
                  'Premium quality eggshell processing',
                  'Flexible packaging options (1kg, 5kg, 10kg, bulk)',
                  'Sustainable and eco-friendly practices',
                  'Direct from producer to customer',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Sprout className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900">Vermicompost</h3>
                  </div>
                  <p className="text-primary-700">
                    Premium organic vermicompost rich in nutrients, perfect for all types of plants and gardens.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900">Eggshell Powder</h3>
                  </div>
                  <p className="text-primary-700">
                    Calcium-rich eggshell powder to strengthen plants and prevent common deficiencies.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-rose-100 p-3 rounded-lg">
                      <TreeDeciduous className="h-6 w-6 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900">Fresh Mushrooms</h3>
                  </div>
                  <p className="text-primary-700">
                    Freshly harvested mushrooms grown in optimal conditions for maximum nutrition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Grow Naturally?
          </h2>
          <p className="text-xl text-primary-50 mb-8">
            Order our premium organic products today and experience the VERMANICO difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-700 transition-colors duration-200 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
