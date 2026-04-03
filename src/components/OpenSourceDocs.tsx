import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
   Cpu,
   Book,
   Github,
   Zap,
   Terminal,
   Layers,
   Code,
   ShieldCheck,
   Package,
   Wrench,
   ChevronRight,
   Database,
   Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const OpenSourceDocs = () => {
   const firmwareModules = [
      { name: "Telemetry Engine", description: "C-based sensor polling and data aggregation with 10ms sampling precision.", file: "telemetry.c" },
      { name: "Store-and-Forward", description: "Circular buffer queue with EEPROM persistence for low-GSM rural environments.", file: "storage.c" },
      { name: "JSON Protocol", description: "Lightweight payload serialization for MQTT/HTTPS transmission to health servers.", file: "protocol.c" },
      { name: "Security Core", description: "Hardware-backed encryption for AES-256 telemetry signing and SHA-2 authn.", file: "security.c" }
   ];

   const apiEndpoints = [
      { method: "POST", path: "/telemetry/v1/clinic", desc: "Report sensor data" },
      { method: "GET", path: "/readiness/v1/status", desc: "Check facility readiness" },
      { method: "PATCH", path: "/firmware/v1/ota", desc: "Trigger remote update" }
   ];

   return (
      <section id="opensource" className="py-24 bg-slate-50 relative overflow-hidden">
         {/* Background structural elements */}
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
         <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />

         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16">

               {/* Main Content Column */}
               <div className="lg:col-span-12 space-y-16">
                  <div className="space-y-6 max-w-3xl">
                     <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                        <Code className="h-3 w-3 text-primary" />
                        <span>Open Source Repository</span>
                     </div>
                     <h2 className="text-4xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-none">
                        Powerbox <span className="text-primary italic">Developer</span> Documentation
                     </h2>
                     <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        An open ecosystem for healthcare-centric energy telemetry. We provide
                        everything needed to build, deploy, and scale reliability monitoring kits.
                     </p>
                     <div className="flex space-x-4 pt-4">
                        <Button className="bg-slate-950 text-white hover:bg-primary hover:pb-glow-teal rounded-2xl h-14 px-8 font-black uppercase tracking-widest text-xs flex items-center shadow-xl">
                           <Github className="mr-3 h-5 w-5" />
                           Visit GitHub
                        </Button>
                        <Button variant="outline" className="rounded-2xl h-14 px-8 font-black uppercase tracking-widest text-xs border-gray-200 hover:bg-white shadow-sm">
                           Read Full API Specs
                        </Button>
                     </div>
                  </div>

                  {/* Firmware Architecture Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {firmwareModules.map((module) => (
                        <Card key={module.name} className="p-8 rounded-[2.5rem] bg-white border-gray-100 shadow-xl shadow-gray-200/40 hover:pb-glow-teal transition-all duration-500 flex flex-col justify-between group h-full cursor-pointer relative overflow-hidden">
                           <div className="space-y-6 relative z-10">
                              <div className="bg-slate-50 p-4 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                                 <Cpu className="h-7 w-7 text-gray-400 group-hover:text-primary transition-colors" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">{module.name}</h3>
                              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                 {module.description}
                              </p>
                           </div>
                           <div className="pt-8 flex items-center justify-between border-t border-gray-50 mt-6 relative z-10">
                              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 font-mono">
                                 src/{module.file}
                              </span>
                              <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-primary transition-colors" />
                           </div>

                           {/* Background accent */}
                           <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                              <Layers className="h-24 w-24 text-primary" />
                           </div>
                        </Card>
                     ))}
                  </div>

                  {/* Deep Dive Sections */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                     {/* Protocol Specs */}
                     <Card className="p-10 lg:p-12 rounded-[3.5rem] bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                           <Terminal className="h-64 w-64 text-white" />
                        </div>

                        <div className="relative z-10 space-y-10">
                           <div className="space-y-4">
                              <Badge className="bg-primary/20 text-primary border-primary/30 uppercase tracking-[0.25em] font-black text-[10px] py-1 px-3">Protocol v1.4</Badge>
                              <h3 className="text-3xl font-black tracking-tight">Telemetry Definition</h3>
                              <p className="text-gray-400 font-medium leading-relaxed max-w-md">
                                 Our telemetry payloads are structured for minimal bandwidth consumption
                                 over LoRaWAN and GSM networks.
                              </p>
                           </div>

                           <div className="space-y-4 bg-slate-800/80 p-8 rounded-[2rem] border border-white/5 font-mono group-hover:border-primary/20 transition-colors">
                              <div className="flex items-center space-x-2 pb-4 border-b border-white/5 mb-4 opacity-50">
                                 <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                                 <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                              </div>
                              <pre className="text-xs text-blue-300 leading-relaxed overflow-x-auto">
                                 {`{
  "clinic_id": "K-SOUTH-001",
  "ts": 1775211993,
  "batt": { "V": 52.1, "soc": 88.5 },
  "cc": { "stable": true, "temp": 4.2 },
  "grid": { "on": false }
}`}
                              </pre>
                           </div>

                           <div className="flex space-x-6">
                              <div className="flex items-center space-x-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
                                 <ShieldCheck className="h-4 w-4 text-emerald-500" />
                                 <span>AES-256 Signed</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
                                 <Globe className="h-4 w-4 text-blue-500" />
                                 <span>MQTT Ready</span>
                              </div>
                           </div>
                        </div>
                     </Card>

                     {/* API Integration */}
                     <Card className="p-10 lg:p-12 rounded-[3.5rem] bg-white border-gray-100 shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10 space-y-10">
                           <div className="space-y-4">
                              <div className="flex items-center space-x-4">
                                 <div className="p-3 bg-primary/5 rounded-2xl">
                                    <Database className="h-7 w-7 text-primary" />
                                 </div>
                                 <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-none">Cloud API</h3>
                              </div>
                              <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
                                 Integrated with regional health planning systems via our
                                 standardized RESTful endpoints.
                              </p>
                           </div>

                           <div className="space-y-4">
                              {apiEndpoints.map(endpoint => (
                                 <div key={endpoint.path} className="flex items-center p-6 border border-gray-100 rounded-3xl group/item hover:bg-primary/5 hover:border-primary/20 transition-all">
                                    <Badge className={cn(
                                       "text-[10px] font-black tracking-widest w-14 flex justify-center py-1.5 uppercase leading-none",
                                       endpoint.method === 'POST' ? 'bg-emerald-100 text-emerald-700' :
                                          endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                                    )}>
                                       {endpoint.method}
                                    </Badge>
                                    <div className="ml-6 flex-1">
                                       <p className="font-mono text-sm font-bold text-gray-900 group-hover/item:text-primary transition-colors">{endpoint.path}</p>
                                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{endpoint.desc}</p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
                                 </div>
                              ))}
                           </div>

                           <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-[1.5rem] py-7 font-black uppercase text-xs tracking-[0.25em] shadow-lg pb-glow-teal">
                              Developer Portal Access
                           </Button>
                        </div>
                     </Card>
                  </div>

                  {/* Hardware & Kit Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     <Card className="p-10 rounded-[2.5rem] bg-indigo-50 border-none relative overflow-hidden group">
                        <div className="relative z-10 space-y-6">
                           <Package className="h-10 w-10 text-indigo-600 mb-2" />
                           <h4 className="text-2xl font-black text-indigo-950 tracking-tight">Reliability Kit</h4>
                           <p className="text-indigo-900/60 font-medium text-sm leading-relaxed">
                              Pre-assembled kits including ESP32 core, battery shunt, and DS18B20
                              cold-chain sensors for rapid deployment.
                           </p>
                           <Button variant="link" className="p-0 h-auto text-indigo-600 text-xs font-black uppercase tracking-widest group">
                              Order Kit <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                           </Button>
                        </div>
                     </Card>

                     <Card className="p-10 rounded-[2.5rem] bg-emerald-50 border-none relative overflow-hidden group">
                        <div className="relative z-10 space-y-6">
                           <Wrench className="h-10 w-10 text-emerald-600 mb-2" />
                           <h4 className="text-2xl font-black text-emerald-950 tracking-tight">Self-Assembly</h4>
                           <p className="text-emerald-900/60 font-medium text-sm leading-relaxed">
                              Download Bill of Materials (BOM) and schematics to source
                              locally and support Nigerian manufacturing.
                           </p>
                           <Button variant="link" className="p-0 h-auto text-emerald-600 text-xs font-black uppercase tracking-widest group">
                              Get Schematics <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                           </Button>
                        </div>
                     </Card>

                     <Card className="p-10 rounded-[2.5rem] bg-gray-100 border-none relative overflow-hidden group">
                        <div className="relative z-10 space-y-6">
                           <Book className="h-10 w-10 text-gray-700 mb-2" />
                           <h4 className="text-2xl font-black text-gray-950 tracking-tight">Contributing</h4>
                           <p className="text-gray-900/60 font-medium text-sm leading-relaxed">
                              Help us improve sensor accuracy or refine the predictive
                              failure models on our community discord.
                           </p>
                           <Button variant="link" className="p-0 h-auto text-gray-700 text-xs font-black uppercase tracking-widest group">
                              Join Discord <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                           </Button>
                        </div>
                     </Card>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

const ArrowRight = ({ className }: { className?: string }) => (
   <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
);

export default OpenSourceDocs;
