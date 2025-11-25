import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-10 w-10 bg-primary-100 rounded-lg p-1.5">
                <Image
                  src="/static/logo.png"
                  alt="VERMANICO Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                VERMANICO<span className="text-xs align-top">™</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium organic vermicompost and agricultural products from our in-house facilities.
              Growing nature, naturally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=vermicompost" className="text-white/70 hover:text-white transition-colors text-sm">
                  Vermicompost
                </Link>
              </li>
              <li>
                <Link href="/products?category=eggshell" className="text-white/70 hover:text-white transition-colors text-sm">
                  Eggshell Powder
                </Link>
              </li>
              <li>
                <Link href="/products?category=mushroom" className="text-white/70 hover:text-white transition-colors text-sm">
                  Fresh Mushrooms
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors text-sm">
                  Bulk Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                <a href="mailto:vermanicoharvest@gmail.com" className="text-white/70 hover:text-white transition-colors text-sm">
                    vermanicoharvest@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                <a href="tel:+919957607120" className="text-white/70 hover:text-white transition-colors text-sm">
                  +91 9957607120
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Bamundi, Kamrup, Assam, 781103
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/share/17WuCP44sF/" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/vermanicoo?igsh=MWFma2l2bm1nMnM4dQ==" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-900 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} VERMANICO™. All rights reserved. | Organic Excellence Since Inception
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
