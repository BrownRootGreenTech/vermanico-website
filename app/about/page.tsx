import Image from 'next/image';
import { Factory, Leaf, Users, Award, Target, Heart, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About VERMANICO™</h1>
          <p className="text-xl text-primary-50 max-w-3xl">
            Your trusted partner in organic agricultural excellence, committed to sustainable farming and premium quality products.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Mission</h2>
              <p className="text-primary-700 leading-relaxed mb-4">
                To provide farmers, gardeners, and agricultural enthusiasts with the highest quality organic products
                that promote sustainable farming practices and environmental stewardship.
              </p>
              <p className="text-primary-700 leading-relaxed">
                We believe in the power of nature and work diligently to harness it through our carefully controlled
                production processes, ensuring every product meets our stringent quality standards.
              </p>
            </div>

            <div>
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Vision</h2>
              <p className="text-primary-700 leading-relaxed mb-4">
                To become the leading provider of organic agricultural products in India, recognized for our commitment
                to quality, sustainability, and customer satisfaction.
              </p>
              <p className="text-primary-700 leading-relaxed">
                We envision a future where organic farming is the norm, not the exception, and VERMANICO plays a
                pivotal role in making this transformation possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-6">Our Story</h2>
            <p className="text-lg text-primary-700 leading-relaxed">
              VERMANICO was born from a passion for sustainable agriculture and a commitment to providing
              farmers and gardeners with the finest organic products. What started as a small-scale vermicompost
              production facility has grown into a comprehensive agricultural enterprise.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-primary-700">
              <p className="leading-relaxed mb-6">
                Our journey began with the establishment of our in-house vermicompost beds, where we carefully
                cultivate earthworms in optimal conditions to produce nutrient-rich organic compost. This foundation
                allowed us to understand the intricacies of organic production and maintain complete quality control
                over our flagship product.
              </p>
              <p className="leading-relaxed mb-6">
                Recognizing the diverse needs of modern agriculture, we expanded our operations to include eggshell
                powder processing, providing a valuable source of calcium for plants, and mushroom cultivation in
                controlled environments. Each addition to our product line reflects our commitment to offering
                comprehensive organic solutions.
              </p>
              <p className="leading-relaxed">
                Today, VERMANICO stands as a testament to what can be achieved when quality, sustainability, and
                customer satisfaction are placed at the forefront of agricultural production. We continue to innovate
                and improve, ensuring that every product bearing the VERMANICO name meets the highest standards of
                organic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto">
              The passionate individuals behind VERMANICO, dedicated to bringing you the finest organic products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Niraj Mahanta */}
            <div className="group">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200 hover:shadow-xl transition-all duration-300">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/static/niraj.jpeg"
                    alt="Niraj Mahanta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Niraj Mahanta</h3>
                  <p className="text-primary-600 font-semibold mb-4">Co-Founder</p>
                  <p className="text-primary-700 text-sm leading-relaxed">
                    Passionate about sustainable agriculture and driving innovation in organic farming practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Arnab Baishya */}
            <div className="group">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200 hover:shadow-xl transition-all duration-300">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/static/arnab.jpeg"
                    alt="Arnab Baishya"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Arnab Baishya</h3>
                  <p className="text-primary-600 font-semibold mb-4">Co-Founder</p>
                  <p className="text-primary-700 text-sm leading-relaxed">
                    Dedicated to quality control and ensuring excellence in every product we deliver.
                  </p>
                </div>
              </div>
            </div>

            {/* Rinku Baishya */}
            <div className="group">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200 hover:shadow-xl transition-all duration-300">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/static/dhan.png"
                    alt="Rinku Baishya"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Rinku Baishya</h3>
                  <p className="text-primary-600 font-semibold mb-4">Co-Founder</p>
                  <p className="text-primary-700 text-sm leading-relaxed">
                    Committed to building strong customer relationships and expanding our organic product range.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-House Facilities */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Our In-House Facilities
            </h2>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto">
              Complete control over production ensures the highest quality and consistency in every product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 border border-primary-200">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Leaf className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Vermicompost Beds</h3>
              <p className="text-primary-700 leading-relaxed mb-4">
                Our state-of-the-art vermicompost beds are carefully designed and maintained to provide optimal
                conditions for earthworm activity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Temperature-controlled environment</span>
                </li>
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Optimal moisture levels</span>
                </li>
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular quality monitoring</span>
                </li>
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>100% organic feed materials</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 border border-amber-200">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Factory className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Processing Unit</h3>
              <p className="text-primary-700 leading-relaxed mb-4">
                Our dedicated processing facility handles eggshell cleaning, grinding, and packaging with precision
                and care.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hygienic processing standards</span>
                </li>
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fine grinding technology</span>
                </li>
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Quality packaging solutions</span>
                </li>
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Multiple size options</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-8 border border-rose-200">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Mushroom Cultivation</h3>
              <p className="text-primary-700 leading-relaxed mb-4">
                Our controlled mushroom cultivation setup ensures fresh, high-quality mushrooms year-round.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-rose-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Climate-controlled rooms</span>
                </li>
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-rose-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sterile growing conditions</span>
                </li>
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-rose-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fresh harvest on demand</span>
                </li>
                <li className="flex items-start text-primary-800 text-sm">
                  <CheckCircle className="h-4 w-4 text-rose-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Multiple mushroom varieties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              The principles that guide everything we do at VERMANICO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Quality First',
                description: 'We never compromise on the quality of our products or processes.',
                color: 'text-primary-600',
                bg: 'bg-primary-50',
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                description: 'Environmental responsibility is at the heart of our operations.',
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Your satisfaction and success drive our innovation and service.',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                icon: Heart,
                title: 'Integrity',
                description: 'We operate with transparency, honesty, and ethical practices.',
                color: 'text-rose-600',
                bg: 'bg-rose-50',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className={`${value.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <value.icon className={`h-7 w-7 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{value.title}</h3>
                <p className="text-primary-700 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
