
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">WattsApp</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering underserved communities with AI-powered energy solutions, 
              flexible payment systems, and peer-to-peer energy trading.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#dashboard" className="text-gray-300 hover:text-green-400 transition-colors">Dashboard</a></li>
              <li><a href="#trading" className="text-gray-300 hover:text-green-400 transition-colors">P2P Trading</a></li>
              <li><a href="#credit" className="text-gray-300 hover:text-green-400 transition-colors">Energy Credit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Training Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">System Status</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">contact@wattsapp.ng</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">+234 (0) 800 WATTS APP</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5" />
                <span className="text-gray-300">
                  A11, Lodge Layout<br />
                  Kaduna, Kaduna State<br />
                  Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Powerbox Energy Systems Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
