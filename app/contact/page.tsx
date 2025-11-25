'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    quantity: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        productInterest: '',
        quantity: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-50 max-w-3xl">
            Get in touch with us for orders, inquiries, or to learn more about our organic products.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Get In Touch</h2>
              <p className="text-primary-700 mb-8">
                We&apos;re here to help! Reach out to us through any of the following channels or use the contact form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-md border border-primary-200">
                <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Phone</h3>
                  <a href="tel:+911234567890" className="text-primary-700 hover:text-primary-600 transition-colors">
                    +91 9957607120

                  </a>
                  <p className="text-sm text-primary-600 mt-1">Mon-Sat, 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-md border border-primary-200">
                <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Email</h3>
                  <a href="mailto:info@vermanico.com" className="text-primary-700 hover:text-primary-600 transition-colors break-all">
                    vermanicoharvest@gmail.com
                  </a>
                  <p className="text-sm text-primary-600 mt-1">We&apos;ll respond within an hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-md border border-primary-200">
                <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Location</h3>
                  <p className="text-primary-700">
                    Bamundi, Kamrup, Assam, 781103<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-md border border-primary-200">
                <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Business Hours</h3>
                  <p className="text-primary-700 text-sm">
                    Monday - Sunday<br />
                    9:00 AM - 6:00 PM<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-primary-200">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-primary-900">Send Us a Message</h2>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">We&apos;ll get back to you as soon as possible.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="productInterest" className="block text-sm font-semibold text-primary-900 mb-2">
                      Product Interest
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a product</option>
                      <option value="vermicompost">Vermicompost</option>
                      <option value="eggshell">Eggshell Powder</option>
                      <option value="mushroom">Fresh Mushrooms</option>
                      <option value="bulk">Bulk Order</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-primary-900 mb-2">
                    Quantity Required
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="e.g., 5kg, 10kg, Bulk"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-primary-600 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-primary-700">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
              <h3 className="font-semibold text-primary-900 mb-2">What are your minimum order quantities?</h3>
              <p className="text-primary-700 text-sm">
                We offer products starting from 500g up to bulk orders. There&apos;s no minimum order requirement.
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
              <h3 className="font-semibold text-primary-900 mb-2">Do you deliver?</h3>
              <p className="text-primary-700 text-sm">
                Yes, we offer delivery services. Contact us for delivery options and charges based on your location.
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
              <h3 className="font-semibold text-primary-900 mb-2">Are your products certified organic?</h3>
              <p className="text-primary-700 text-sm">
                Yes, all our products are 100% organic and produced in our controlled in-house facilities.
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
              <h3 className="font-semibold text-primary-900 mb-2">Can I visit your facility?</h3>
              <p className="text-primary-700 text-sm">
                Yes! We welcome visitors. Please contact us in advance to schedule a visit to our facilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
