import { Box, Mail, Phone, MapPin, Github, Twitter, Linkedin, Activity, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="bg-primary p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 pb-glow-teal">
                <Box className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">
                  Powerbox
                </span>
                <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mt-1">
                   Reliability Platform
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Revolutionizing healthcare resilience through open-source embedded energy monitoring. 
              Ensuring no life-critical equipment fails due to power instability across 
              the most remote clinics in Nigeria.
            </p>
            
            <div className="flex space-x-5">
              <a href="https://github.com/powerbox-energy" target="_blank" className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-primary/20 transition-all border border-white/5">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all border border-white/5">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-blue-600/20 transition-all border border-white/5">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Navigation */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500">The Platform</h3>
            <ul className="space-y-4">
              <li><a href="#dashboard" className="text-gray-400 hover:text-primary transition-colors text-sm font-bold flex items-center group">
                 <Activity className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                 Clinic Dashboard
              </a></li>
              <li><a href="#facilities" className="text-gray-400 hover:text-primary transition-colors text-sm font-bold flex items-center group">
                 <ShieldCheck className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                 Cold Chain Monitoring
              </a></li>
              <li><a href="#reliability" className="text-gray-400 hover:text-primary transition-colors text-sm font-bold flex items-center group">
                 <Cpu className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                 Open Source Specs
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-bold flex items-center group">
                 <Box className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                 Field Technician App
              </a></li>
            </ul>
          </div>

          {/* Mission & Support */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500">Our Mission</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-bold">Nigeria Rural Health</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-bold">Climate Stress Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-bold">Embedded Telemetry OSS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-bold">Implementation Partners</a></li>
            </ul>
          </div>

          {/* Regional Impact Hub */}
          <div className="space-y-8 bg-white/5 p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 relative z-10">Regional HQ</h3>
            <div className="space-y-6 text-sm relative z-10">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400 leading-relaxed font-semibold">
                  A11, Lodge Layout<br />
                  Kaduna, Kaduna State<br />
                  Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <span className="text-gray-400 font-semibold tracking-wide">contact@powerbox.tech</span>
              </div>
              <div className="pt-4">
                 <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 font-black uppercase tracking-widest text-[10px] pb-glow-teal">
                    Partner With Us
                 </Button>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 opacity-5 transition-transform duration-1000 group-hover:scale-150">
               <Box className="h-48 w-48 text-white rotate-12" />
            </div>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="border-t border-white/5 mt-24 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-[11px] font-bold uppercase tracking-[0.2em] flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            <span>© 2025 Powerbox Energy Systems Ltd.</span>
            <span className="hidden md:inline">|</span>
            <span>All rights reserved internationally</span>
          </div>
          
          <div className="flex space-x-8 text-[11px] font-black uppercase tracking-[0.25em]">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">OSS License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
