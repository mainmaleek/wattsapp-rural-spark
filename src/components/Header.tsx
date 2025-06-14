
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              WattsApp
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors">
              Home
            </a>
            <a href="#dashboard" className="text-gray-600 hover:text-green-600 transition-colors">
              Dashboard
            </a>
            <a href="#trading" className="text-gray-600 hover:text-green-600 transition-colors">
              P2P Trading
            </a>
            <a href="#credit" className="text-gray-600 hover:text-green-600 transition-colors">
              Energy Credit
            </a>
            <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">
              About
            </a>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors">
                Home
              </a>
              <a href="#dashboard" className="text-gray-600 hover:text-green-600 transition-colors">
                Dashboard
              </a>
              <a href="#trading" className="text-gray-600 hover:text-green-600 transition-colors">
                P2P Trading
              </a>
              <a href="#credit" className="text-gray-600 hover:text-green-600 transition-colors">
                Energy Credit
              </a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">
                About
              </a>
              <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
