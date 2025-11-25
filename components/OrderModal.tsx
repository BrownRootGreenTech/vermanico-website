'use client';

import { useState } from 'react';
import { X, ShoppingCart, Package } from 'lucide-react';
import { Product } from '@/types/product';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '1',
    address: '',
    pincode: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate total amount
  const totalAmount = product.price > 0 ? product.price * parseInt(formData.quantity || '1') : 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const orderPayload = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        pincode: formData.pincode,
        quantity: parseInt(formData.quantity),
        message: formData.message,
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        productUnit: product.unit,
        totalAmount: totalAmount,
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit order');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        quantity: '1',
        address: '',
        pincode: '',
        message: '',
      });

      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit order');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Order Product</h2>
              <p className="text-sm text-primary-50">Fill in your details</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-6 bg-primary-50 border-b border-primary-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Package className="h-5 w-5 text-primary-600" />
              <div className="flex-1">
                <h3 className="font-semibold text-primary-900">{product.name}</h3>
                <p className="text-sm text-primary-700">
                  {product.price > 0 ? `₹${product.price} per ${product.unit}` : 'Contact for pricing'}
                </p>
              </div>
            </div>
          </div>
          {totalAmount > 0 && (
            <div className="mt-4 pt-4 border-t border-primary-200">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-primary-700">Total Amount:</span>
                <span className="text-2xl font-bold text-primary-600">₹{totalAmount}</span>
              </div>
              <p className="text-xs text-primary-600 mt-1">
                {formData.quantity} × ₹{product.price} per {product.unit}
              </p>
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              <p className="font-medium">Order submitted successfully!</p>
              <p className="text-sm">We'll contact you soon.</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              <p className="font-medium">Failed to submit order</p>
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Name, Phone, Quantity Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Name Field */}
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
                className="w-full px-4 py-3 border text-primary-700 border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone Field */}
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
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border text-primary-700 border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            {/* Quantity Field */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-semibold text-primary-900 mb-2">
                Quantity ({product.unit}) *
              </label>
              <select
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border text-primary-700 border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>

          {/* Address and Pincode Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Field */}
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-semibold text-primary-900 mb-2">
                Delivery Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-primary-300 text-primary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Enter your complete delivery address"
              />
            </div>

            {/* Pincode Field */}
            <div>
              <label htmlFor="pincode" className="block text-sm font-semibold text-primary-900 mb-2">
                Pincode *
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                pattern="[0-9]{6}"
                maxLength={6}
                className="w-full px-4 py-3 border border-primary-300 text-primary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter 6-digit pincode"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-primary-300 text-primary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Any special requirements or questions..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  <span>Submit Order</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-primary-600 text-center">
            We&apos;ll contact you to confirm your order and delivery details.
          </p>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
