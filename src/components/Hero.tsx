import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  ShieldCheck, 
  Box, 
  Cpu, 
  TrendingUp, 
  Zap,
  ArrowRight,
  Database,
  ThermometerSnowflake,
  Wind
} from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-50/50">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')] opacity-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold tracking-wider uppercase animate-bounce duration-3000">
                <span className="flex h-2 w-2 rounded-full bg-primary pb-pulse-live" />
                <span>Active Across 8 Regions</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Resilient Energy for{" "}
                <span className="relative">
                  <span className="relative z-10 text-primary">Healthcare</span>
                  <span className="absolute bottom-0 left-0 w-full h-[15%] bg-primary/10 z-0" />
                </span>{" "}
                That Never Stops
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed font-normal max-w-lg">
                Powerbox is an open-source reliability platform ensuring continuous 
                operation for vaccine refrigeration, neonatal care, and essential health 
                services across climate-exposed clinic networks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg rounded-2xl pb-glow-teal font-semibold group h-auto"
              >
                Access Real-time Telemetry
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-200 text-gray-700 hover:bg-white hover:border-primary/20 hover:text-primary px-8 py-7 text-lg rounded-2xl h-auto"
              >
                Explore OSS Specs
              </Button>
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-10 pt-10 border-t border-gray-100">
              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-gray-900">42</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center">
                  <Box className="h-3 w-3 mr-1.5 text-primary" />
                  Facilties Monitored
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-gray-900 tracking-tight">99.8%</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center">
                  <Activity className="h-3 w-3 mr-1.5 text-accent" />
                  Avg. Power Uptime
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-gray-900 tracking-tight">18,500+</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center">
                  <ThermometerSnowflake className="h-3 w-3 mr-1.5 text-blue-500" />
                  Cold-Chain Hours
                </div>
              </div>
            </div>
          </div>

          {/* Visualization / Media */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-3xl -rotate-2" />
            <div className="relative grid grid-cols-2 gap-4 p-4 lg:p-8">
              <Card className="p-6 rounded-3xl bg-white/90 pb-glass border-white/50 hover:pb-glow-teal transition-all duration-500 pb-float shadow-xl">
                <div className="space-y-5">
                  <div className="bg-primary/10 p-3 rounded-2xl w-fit">
                    <Activity className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900">Embedded Sensing</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Real-time telemetry from batteries, solar, and climate sensors at the edge.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 rounded-3xl bg-white/90 pb-glass border-white/50 hover:pb-glow-amber transition-all duration-500 pb-float-slow mt-8 shadow-xl">
                <div className="space-y-5">
                  <div className="bg-accent/10 p-3 rounded-2xl w-fit">
                    <TrendingUp className="h-7 w-7 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900">Predictive Modeling</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      AI-driven models forecasting facility uptime and cold-chain risk before failure.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 rounded-3xl bg-white/90 pb-glass border-white/50 hover:pb-glow-teal transition-all duration-500 pb-float mt-[-2rem] shadow-xl">
                <div className="space-y-5">
                  <div className="bg-primary/10 p-3 rounded-2xl w-fit">
                    <ShieldCheck className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900">Clinic Readiness</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Continuous monitoring ensuring neonatal care and surgical readiness 24/7.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 rounded-3xl bg-white/90 pb-glass border-white/50 hover:pb-glow-rose transition-all duration-500 pb-float-slow mt-6 shadow-xl">
                <div className="space-y-5">
                  <div className="bg-rose-100/50 p-3 rounded-2xl w-fit">
                    <Cpu className="h-7 w-7 text-rose-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900">Open Source Core</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Fully documented firmware and schematics for local adaptation and scale.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Pulsing signal line - artistic element */}
            <div className="absolute -bottom-10 -left-10 right-10 h-24 pointer-events-none opacity-20">
               <svg className="w-full h-full" overflow="visible">
                 <path d="M 0 50 Q 50 10 100 50 T 200 50 T 300 50 T 400 50" fill="none" stroke="currentColor" strokeWidth="4" className="text-primary animate-pulse" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
