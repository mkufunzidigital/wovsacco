import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../constants';
import { Phone, Mail, MapPin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wov-blue-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/">
                <img src="https://firebasestorage.googleapis.com/v0/b/gen-code.appspot.com/o/logo.png?alt=media&token=8770a312-32a2-4a25-9610-d83219335a14" alt="Women of Valour SACCO Logo" className="h-16 w-auto" />
              </Link>
            </div>
            <p className="text-gray-300 text-sm">Building Futures, Empowering Generations. Your trusted partner in financial freedom and economic empowerment in Bungoma County.</p>
            <div className="flex space-x-4 mt-6">
                <a href="#" aria-label="GitHub Profile" className="text-gray-300 hover:text-white transition-colors">
                    <Github size={24} />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-wov-green-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-300 hover:text-white hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-wov-green-light mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-gray-300 hover:text-white">Development Loans</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Agribusiness Loans</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Business & Trade Loans</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Education Loans</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Emergency & Medical Loans</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-wov-green-light mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-wov-teal flex-shrink-0" />
                <span>Kenya Red Cross Building, Stadium Road, Bungoma, Kenya</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-wov-teal flex-shrink-0" />
                <a href="mailto:valour@gmail.com" className="hover:text-white">valour@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-wov-teal flex-shrink-0" />
                <a href="tel:+254716458206" className="hover:text-white">+254 716 458 206</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900/50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Women of Valour SACCO Society Limited. All Rights Reserved.</p>
          <p className="mt-1">Certificate No. CS/229228 | Regulated by the Ministry of Cooperatives</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;