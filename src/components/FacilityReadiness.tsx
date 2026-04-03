import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ThermometerSnowflake,
  Activity,
  ShieldCheck,
  Package,
  Calendar,
  AlertCircle,
  CheckCircle,
  Zap,
  Clock,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const FacilityReadiness = () => {
  const coldChainUnits = [
    { id: 1, location: "Kaduna South Primary", temp: 3.8, status: "stable", battery: 94, vaccines: 1250 },
    { id: 2, location: "Zaria Health Center", temp: 4.2, status: "stable", battery: 88, vaccines: 840 },
    { id: 3, location: "Barnawa Clinic", temp: 6.1, status: "warning", battery: 42, vaccines: 600 },
    { id: 4, location: "Rigasa Maternal", temp: 3.9, status: "stable", battery: 91, vaccines: 1540 }
  ];

  const readinessMilestones = [
    { id: 1, task: "Remote Telemetry Sync", status: "completed", date: "Daily" },
    { id: 2, task: "Battery Stress Calibration", status: "completed", date: "Weekly" },
    { id: 3, task: "Cold Chain Continuity Check", status: "active", date: "Every 4 Hours" },
    { id: 4, task: "Inverter Harmonic Analysis", status: "pending", date: "Monthly" }
  ];

  return (
    <section id="facilities" className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2 pointer-events-none opacity-50" />
       
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest border border-blue-200">
             <ShieldCheck className="h-3 w-3" />
             <span>Clinic Readiness Protocol</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
            Cold Chain & <span className="text-primary italic">Neonatal</span> Readiness
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
             Ensuring 24/7 reliability for critical healthcare infrastructure across Nigeria's
             most remote primary facilities through AI-monitored energy continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Cold Chain Tracker */}
          <div className="lg:col-span-8">
            <Card className="p-8 lg:p-10 rounded-[3rem] bg-white border-gray-100 shadow-2xl shadow-gray-200/50">
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                      <ThermometerSnowflake className="mr-3 h-7 w-7 text-blue-500" />
                      Vaccine Cold Chain Registry
                    </h3>
                    <p className="text-gray-500 text-sm font-medium mt-1">Real-time status of solar-powered refrigeration units</p>
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 font-bold uppercase tracking-widest text-[10px] h-auto p-0 group">
                    Full Network Audit <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </div>

               <div className="space-y-6">
                 {coldChainUnits.map((unit) => (
                   <div key={unit.id} className="p-6 bg-slate-50/50 rounded-3xl border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                         <div className="md:col-span-4 space-y-2">
                            <div className="flex items-center space-x-2">
                               <div className={cn(
                                 "w-2.5 h-2.5 rounded-full",
                                 unit.status === 'stable' ? 'bg-emerald-500' : 'bg-amber-500 pb-pulse-live'
                               )} />
                               <span className="text-sm font-bold text-gray-900">{unit.location}</span>
                            </div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold flex items-center">
                              <Package className="h-3 w-3 mr-1.5" />
                              {unit.vaccines.toLocaleString()} doses protected
                            </p>
                         </div>

                         <div className="md:col-span-3 flex items-center justify-between md:justify-center px-6 border-x border-gray-200/50">
                            <div className="text-center">
                               <p className="text-2xl font-black text-gray-900">{unit.temp}°C</p>
                               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Int. Temperature</p>
                            </div>
                         </div>

                         <div className="md:col-span-3 space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                               <span className="text-gray-400">Power Reserve</span>
                               <span className={cn(
                                 unit.battery > 50 ? 'text-primary' : 'text-amber-600'
                               )}>{unit.battery}% SOC</span>
                            </div>
                            <Progress value={unit.battery} className="h-2 rounded-full bg-white border border-gray-100" />
                         </div>

                         <div className="md:col-span-2 text-right">
                            <Button size="sm" className="bg-white text-gray-900 border border-gray-200 hover:bg-primary hover:text-white hover:border-primary rounded-xl font-bold text-[10px] uppercase tracking-widest px-4 h-10 transition-all">
                               Manage
                            </Button>
                         </div>
                      </div>
                   </div>
                 ))}
               </div>

               <div className="mt-12 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] text-white relative overflow-hidden">
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                     <div className="space-y-4">
                        <div className="p-3 bg-white/10 rounded-2xl w-fit">
                           <Activity className="h-8 w-8 text-blue-400" />
                        </div>
                        <h4 className="text-2xl font-extrabold tracking-tight">System Continuity Forecast</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                           Based on atmospheric sensing and battery health datasets, your network 
                           uptime is estimated at 100% for the upcoming 48 hours.
                        </p>
                     </div>
                     <div className="flex flex-col space-y-4">
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group cursor-pointer hover:bg-white/10 transition-all">
                           <div className="flex justify-between items-center mb-2">
                              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Atmospheric Stress</span>
                              <span className="text-xs font-bold text-white">LOW RISK</span>
                           </div>
                           <div className="flex items-center space-x-2">
                              {/* Aesthetic frequency visualizer */}
                              {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4, 0.5].map((h, i) => (
                                <div key={i} className="flex-1 rounded-full bg-blue-500/30 overflow-hidden h-6">
                                   <div className="w-full bg-blue-500 animate-pulse duration-3000" style={{height: `${h * 100}%`, transitionDelay: `${i * 100}ms`}} />
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Card>
          </div>

          {/* Side Readiness Protocol */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="p-8 lg:p-10 rounded-[3rem] bg-white border-gray-100 shadow-xl shadow-gray-200/50">
               <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <ShieldCheck className="mr-3 h-6 w-6 text-primary" />
                  Readiness Timeline
               </h3>
               
               <div className="space-y-10 relative">
                  {/* Timeline path line */}
                  <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-100" />
                  
                  {readinessMilestones.map((item) => (
                    <div key={item.id} className="relative pl-10 group">
                       <div className={cn(
                         "absolute left-0 top-1 w-8 h-8 rounded-xl flex items-center justify-center z-10 transition-all duration-300",
                         item.status === 'completed' ? 'bg-primary pb-glow-teal' : item.status === 'active' ? 'bg-blue-500 pb-glow-blue border-white border-2' : 'bg-gray-100'
                       )}>
                          {item.status === 'completed' ? <CheckCircle className="h-4 w-4 text-white" /> : 
                           item.status === 'active' ? <Clock className="h-4 w-4 text-white animate-spin duration-3000" /> : 
                           <Calendar className="h-4 w-4 text-gray-400" />}
                       </div>
                       
                       <div className="space-y-1">
                          <p className={cn(
                            "text-sm font-extrabold uppercase tracking-widest",
                            item.status === 'completed' ? 'text-primary' : item.status === 'active' ? 'text-blue-500' : 'text-gray-400'
                          )}>{item.date}</p>
                          <h4 className="text-lg font-bold text-gray-900">{item.task}</h4>
                          {item.id === 3 && (
                            <div className="mt-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                               <p className="text-xs font-semibold text-blue-700 leading-relaxed">
                                  Verifying K-South Unit-A cooling cycle efficiency against regional heat surge.
                               </p>
                            </div>
                          )}
                       </div>
                    </div>
                  ))}
               </div>
            </Card>

            <Card className="p-8 lg:p-10 rounded-[3rem] bg-primary text-white border-none pb-glow-teal relative overflow-hidden group">
               {/* Aesthetic circle */}
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
               
               <div className="relative z-10 space-y-6">
                  <div className="flex items-center space-x-3 mb-2">
                     <AlertCircle className="h-6 w-6 text-white" />
                     <p className="text-[10px] font-black uppercase tracking-[0.2em]">Open Source Mission</p>
                  </div>
                  <h3 className="text-3xl font-black leading-[1.1] tracking-tight">Deploy Locally</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed font-medium">
                     The Powerbox firmware core is open-source. Help us expand neonatal 
                     care reliability to all climate-exposed clinics.
                  </p>
                  <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-2xl font-bold py-6 h-auto tracking-widest uppercase text-xs">
                     View Repository
                  </Button>
               </div>
               
               <div className="absolute bottom-[-10%] right-[-10%] opacity-5">
                  <Zap className="h-48 w-48 text-white rotate-12" />
               </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityReadiness;
