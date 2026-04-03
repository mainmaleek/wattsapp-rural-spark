import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Box, Activity, ShieldCheck, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Dashboard", href: "#dashboard", icon: <Activity className="h-4 w-4" /> },
    { name: "Facilities", href: "#facilities", icon: <Box className="h-4 w-4" /> },
    { name: "Reliability", href: "#reliability", icon: <ShieldCheck className="h-4 w-4" /> },
    { name: "Documentation", href: "#opensource", icon: <Cpu className="h-4 w-4" /> },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-primary p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 pb-glow-teal">
              <Box className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-primary leading-none">
                Powerbox
              </span>
              <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase mt-0.5">
                Reliability Platform
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
            <div className="h-6 w-[1px] bg-gray-200 mx-2" />
            <Button className="bg-primary hover:bg-primary/90 text-white pb-glow-teal rounded-full px-6">
              Open Telemetry
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col space-y-1 p-2 bg-white rounded-2xl shadow-xl border border-gray-100">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5"
                >
                  <span className="p-2 bg-gray-50 rounded-lg text-gray-400">
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
              <div className="p-2 pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl pb-glow-teal py-6">
                  Open Telemetry
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
