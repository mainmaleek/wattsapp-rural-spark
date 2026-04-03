import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Wrench,
  Activity,
  ArrowRightLeft,
  Clock,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Zap,
  Cpu,
  Mail,
  ChevronRight,
  TrendingUp,
  History
} from "lucide-react";
import { cn } from "@/lib/utils";

const MaintenanceAlerts = () => {
  const activeAlerts = [
    {
      id: 1,
      technician: "Musa Ibrahim",
      avatar: "MI",
      location: "Kaduna South Unit A",
      issue: "Solar Array Shading",
      priority: "high",
      eta: "14 minutes",
      history: "3 visits in 6 months",
      distance: "2.5 km"
    },
    {
      id: 2,
      technician: "Hadiza Ahmed",
      avatar: "HA",
      location: "Zaria Clinic B",
      issue: "Battery Efficiency Gap",
      priority: "medium",
      eta: "45 minutes",
      history: "1 visit in 6 months",
      distance: "8.2 km"
    },
    {
      id: 3,
      technician: "Yusuf Tanko",
      avatar: "YT",
      location: "Barnawa Health",
      issue: "Inverter Harmonic Overload",
      priority: "critical",
      eta: "Just Arrived",
      history: "New Install",
      distance: "0.5 km"
    }
  ];

  const maintenanceHistory = [
    {
      id: 1,
      type: "Preventative",
      tech: "Musa Ibrahim",
      facility: "Sokoto Maternal",
      cost: "₦12,500",
      date: "2 days ago",
      status: "verified"
    },
    {
      id: 2,
      type: "Emergency",
      tech: "Aisha Mohammed",
      facility: "Kaduna Central",
      cost: "₦48,000",
      date: "1 week ago",
      status: "verified"
    },
    {
      id: 3,
      type: "Update",
      tech: "Powerbox-OTA",
      facility: "Global Network",
      cost: "N/A",
      date: "2 weeks ago",
      status: "deploying"
    }
  ];

  const networkReports = [
    { id: 1, name: "Seasonal Grid Resilience Report", type: "PDF", size: "3.4MB" },
    { id: 2, name: "Battery Health Trends - Q1 2025", type: "CSV", size: "1.2MB" },
    { id: 3, name: "Cold Chain Reliability (Nigeria-Wide)", type: "PDF", size: "5.8MB" }
  ];

  return (
    <section id="reliability" className="py-24 bg-white relative overflow-hidden">
       {/* Aesthetic section break */}
       <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
       
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-6">
           <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest border border-accent/20">
             <Wrench className="h-3 w-3" />
             <span>Reliability Intelligence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
             Maintenance <span className="text-accent underline underline-offset-[12px] decoration-4 decoration-accent/20">Operations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
             Coordinating rapid-response technician intervention through local maintenance 
             alert workflows and predictive fault detection.
          </p>
        </div>

        {/* Real-time Field Network Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-8 rounded-[2.5rem] bg-white border-gray-100 shadow-xl shadow-gray-50 flex flex-col items-center text-center space-y-4 group transition-all hover:bg-primary/5">
             <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
               <Activity className="h-6 w-6 text-primary" />
             </div>
             <div>
               <p className="text-2xl font-black text-gray-900 leading-none">1,842</p>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Active Telemetry Hooks</p>
             </div>
          </Card>

          <Card className="p-8 rounded-[2.5rem] bg-white border-gray-100 shadow-xl shadow-gray-50 flex flex-col items-center text-center space-y-4 group transition-all hover:bg-accent/5">
             <div className="p-4 bg-accent/10 rounded-2xl group-hover:scale-110 transition-transform">
               <Wrench className="h-6 w-6 text-accent" />
             </div>
             <div>
               <p className="text-2xl font-black text-gray-900 leading-none">12</p>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Active Field Techs</p>
             </div>
          </Card>

          <Card className="p-8 rounded-[2.5rem] bg-white border-gray-100 shadow-xl shadow-gray-50 flex flex-col items-center text-center space-y-4 group transition-all hover:bg-blue-50">
             <div className="p-4 bg-blue-100 rounded-2xl group-hover:scale-110 transition-transform">
               <Zap className="h-6 w-6 text-blue-600" />
             </div>
             <div>
               <p className="text-2xl font-black text-gray-900 leading-none">2.8 MWh</p>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Energy Monitored Today</p>
             </div>
          </Card>

          <Card className="p-8 rounded-[2.5rem] bg-white border-gray-100 shadow-xl shadow-gray-50 flex flex-col items-center text-center space-y-4 group transition-all hover:bg-emerald-50">
             <div className="p-4 bg-emerald-100 rounded-2xl group-hover:scale-110 transition-transform">
               <TrendingUp className="h-6 w-6 text-emerald-600" />
             </div>
             <div>
               <p className="text-2xl font-black text-gray-900 leading-none">₦95</p>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Avg. OPEX Sav/Unit</p>
             </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Operations Terminal */}
          <div className="lg:col-span-8">
            <Tabs defaultValue="field" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-10 h-auto p-1.5 bg-gray-50 rounded-[1.5rem] border border-gray-100 shadow-inner">
                <TabsTrigger value="field" className="rounded-2xl py-4 font-bold text-xs uppercase tracking-widest space-x-2">
                   <MapPin className="h-3 w-3" />
                   <span>Field Alerts</span>
                </TabsTrigger>
                <TabsTrigger value="history" className="rounded-2xl py-4 font-bold text-xs uppercase tracking-widest space-x-2">
                   <History className="h-3 w-3" />
                   <span>Op. History</span>
                </TabsTrigger>
                <TabsTrigger value="reports" className="rounded-2xl py-4 font-bold text-xs uppercase tracking-widest space-x-2">
                   <Activity className="h-3 w-3" />
                   <span>Health Reports</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="field" className="m-0 space-y-6">
                <div className="flex items-center justify-between mb-8 pl-2">
                   <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">Active Maintenance Hooks</h3>
                   <div className="flex items-center space-x-2 px-3 py-1 bg-rose-50 rounded-lg text-[10px] font-bold text-rose-600 uppercase tracking-widest border border-rose-100">
                      <div className="w-2 h-2 rounded-full bg-rose-500 pb-pulse-live" />
                      <span>{activeAlerts.length} Active Dispatches</span>
                   </div>
                </div>

                {activeAlerts.map((alert) => (
                  <Card key={alert.id} className="p-8 lg:p-10 rounded-[2.5rem] hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500 bg-white border-gray-50 relative overflow-hidden group">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
                      <div className="flex items-center space-x-6">
                        <div className="relative">
                          <Avatar className="h-16 w-16 border-2 border-gray-100 rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-sm">
                            <AvatarFallback className="bg-slate-900 text-white font-black rounded-2xl">{alert.avatar}</AvatarFallback>
                          </Avatar>
                          <div className={cn(
                            "absolute -bottom-1 -right-1 w-5 h-5 rounded-lg border-2 border-white z-20",
                            alert.priority === 'critical' ? 'bg-rose-500 pb-pulse-live' : 'bg-primary'
                          )} />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-lg text-gray-900 mb-1 leading-none">{alert.technician}</h4>
                          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1.5 text-primary" />
                              {alert.location}
                            </div>
                            <div className="flex items-center">
                              <History className="h-3 w-3 mr-1.5" />
                              {alert.history}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 w-full md:w-auto">
                         <div className="p-5 bg-slate-50 rounded-2xl border border-gray-100 space-y-2 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                            <div className="flex items-center justify-between">
                               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Issue Discovered</p>
                               <Badge className={cn(
                                 "text-[10px] font-black uppercase tracking-widest rounded-lg border-none px-2",
                                 alert.priority === 'critical' ? 'bg-rose-100 text-rose-600' : 
                                 alert.priority === 'high' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
                               )}>
                                 {alert.priority} Priority
                               </Badge>
                            </div>
                            <p className="text-sm font-extrabold text-gray-900 group-hover:text-primary transition-colors">{alert.issue}</p>
                         </div>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                         <div className="flex flex-col items-end">
                            <p className="text-lg font-black text-primary leading-none">{alert.eta}</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Dispatch ETA</p>
                         </div>
                         <Button className="bg-slate-900 text-white hover:bg-primary hover:pb-glow-teal rounded-xl h-11 px-6 font-bold uppercase tracking-widest text-[10px]">
                           Connect
                         </Button>
                      </div>
                    </div>
                    
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 translate-x-16 -translate-y-16 rotate-45 pointer-events-none group-hover:bg-primary/5 transition-colors" />
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="history" className="m-0 space-y-6">
                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-50 overflow-hidden">
                   <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                      <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">Recent Interventions</h3>
                      <Button variant="outline" size="sm" className="rounded-xl h-10 px-4 font-bold text-[10px] uppercase tracking-widest">Download Full Audit</Button>
                   </div>
                   <div className="divide-y divide-gray-50">
                      {maintenanceHistory.map((item) => (
                        <div key={item.id} className="p-8 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
                           <div className="flex items-center space-x-6">
                              <div className={cn(
                                "p-4 rounded-2xl",
                                item.type === 'Emergency' ? 'bg-rose-50 text-rose-600' : 
                                item.type === 'Update' ? 'bg-blue-50 text-blue-600' : 'bg-primary/10 text-primary'
                              )}>
                                 {item.type === 'Emergency' ? <AlertTriangle className="h-6 w-6" /> : 
                                  item.type === 'Update' ? <Cpu className="h-6 w-6" /> : <Wrench className="h-6 w-6" />}
                              </div>
                              <div>
                                 <div className="flex items-center space-x-3 mb-1">
                                    <h4 className="text-lg font-extrabold text-gray-900">{item.facility}</h4>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">• {item.date}</span>
                                 </div>
                                 <p className="text-xs font-semibold text-gray-500 flex items-center">
                                    <span className="bg-gray-200 px-1.5 py-0.5 rounded mr-2 text-[10px] font-black uppercase text-gray-600 tracking-wider">Tech</span>
                                    {item.tech}
                                 </p>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-lg font-black text-gray-900 mb-1">{item.cost}</p>
                              <Badge variant="outline" className="rounded-lg font-black uppercase text-[10px] tracking-widest border-emerald-200 text-emerald-600 px-3 py-1">
                                <CheckCircle className="h-3 w-3 mr-1.5" />
                                {item.status}
                              </Badge>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </TabsContent>

              <TabsContent value="reports" className="m-0">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {networkReports.map(report => (
                      <Card key={report.id} className="p-8 rounded-[2.5rem] bg-white border-gray-100 shadow-xl shadow-gray-50 hover:pb-glow-teal transition-all duration-500 group flex items-start gap-6 cursor-pointer">
                         <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-primary/10 transition-colors">
                            <Activity className="h-8 w-8 text-gray-400 group-hover:text-primary transition-colors" />
                         </div>
                         <div className="space-y-4">
                            <h4 className="font-extrabold text-lg text-gray-900 leading-snug group-hover:text-primary transition-colors">{report.name}</h4>
                            <div className="flex items-center space-x-4">
                               <Badge className="bg-slate-100 text-slate-600 border-none rounded-lg text-[10px] font-black uppercase px-2">{report.type}</Badge>
                               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{report.size}</span>
                            </div>
                            <Button variant="link" className="p-0 h-auto text-primary text-xs font-bold uppercase tracking-widest flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                               Download <ChevronRight className="ml-1 h-3 w-3" />
                            </Button>
                         </div>
                      </Card>
                    ))}
                 </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Side Intelligence Panel */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="p-10 rounded-[3rem] bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 opacity-5">
                  <Cpu className="h-32 w-32" />
               </div>
               <h3 className="text-2xl font-black mb-6 tracking-tight">Intelligence Map</h3>
               <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Network Load</span>
                    <span className="font-black text-emerald-400">OPTIMAL</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Grid Stability</span>
                    <span className="font-black text-amber-400">UNSTABLE</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Field MTTR</span>
                    <span className="font-black text-white">42 MIN</span>
                  </div>
               </div>

               <div className="mt-10 p-6 bg-white/5 rounded-[2rem] border border-white/10 space-y-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Community Pulse</p>
                  <p className="text-sm leading-relaxed text-gray-300 italic font-medium">
                    "Since the Powerbox install, we haven't lost a single vaccine batch during the seasonal grid failure."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10 border border-white/10">
                      <AvatarFallback className="bg-primary text-[10px] font-bold">DR</AvatarFallback>
                    </Avatar>
                    <p className="text-[10px] font-black uppercase tracking-widest">Dr. Amina - Kaduna S.</p>
                  </div>
               </div>
            </Card>

            <Card className="p-10 rounded-[3rem] bg-accent text-white border-none pb-glow-amber relative overflow-hidden group">
               <div className="relative z-10 space-y-6">
                 <h3 className="text-3xl font-black leading-tight tracking-tight">Expand the Reliability Platform</h3>
                 <p className="text-accent-foreground/80 text-sm leading-relaxed font-medium">
                    Powerbox is built by local developers for Nigerian contexts. Subscriptions 
                    fund open-source hardware improvements for ALL facilities.
                 </p>
                 <div className="space-y-3">
                   <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-2xl h-14 font-black uppercase tracking-widest text-[10px] pb-glow-teal">
                      Become a Partner
                   </Button>
                   <Button variant="ghost" className="w-full text-white hover:bg-white/10 rounded-2xl h-12 font-black uppercase tracking-widest text-[10px]">
                      View Integration API
                   </Button>
                 </div>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceAlerts;
