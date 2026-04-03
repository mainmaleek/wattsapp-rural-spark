import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Activity,
  Battery,
  Sun,
  ThermometerSnowflake,
  ShieldCheck,
  AlertTriangle,
  History,
  CloudLightning,
  MapPin,
  Clock,
  ArrowUpRight,
  Play,
  Pause
} from "lucide-react";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const [isLive, setIsLive] = useState(false);
  const [telemetryData, setTelemetryData] = useState([
    { time: "00:00", solar: 0, load: 15, temp: 24, voltage: 52.1 },
    { time: "04:00", solar: 0, load: 12, temp: 22, voltage: 51.8 },
    { time: "08:00", solar: 45, load: 35, temp: 28, voltage: 52.4 },
    { time: "12:00", solar: 180, load: 120, temp: 34, voltage: 53.6 },
    { time: "16:00", solar: 120, load: 95, temp: 36, voltage: 53.2 },
    { time: "20:00", solar: 0, load: 45, temp: 30, voltage: 52.8 },
    { time: "00:00", solar: 0, load: 20, temp: 26, voltage: 52.3 }
  ]);

  const [currentStats, setCurrentStats] = useState({
    uptime: 99.8,
    temp: 4.2,
    health: 88,
    solar: 2.4
  });

  // Live simulation loop
  useEffect(() => {
    let interval: any;
    if (isLive) {
      interval = setInterval(() => {
        // Update charts with a "sliding" effect
        setTelemetryData(prev => {
          const newData = [...prev];
          const last = newData[newData.length - 1];
          const newTime = new Date();
          const timeStr = `${newTime.getHours()}:${newTime.getMinutes()}:${newTime.getSeconds()}`;
          
          newData.shift();
          newData.push({
            ...last,
            time: timeStr,
            solar: Math.max(0, last.solar + (Math.random() * 20 - 10)),
            load: Math.max(10, last.load + (Math.random() * 10 - 5))
          });
          return newData;
        });

        // Update random stats
        setCurrentStats(prev => ({
          ...prev,
          temp: Number((prev.temp + (Math.random() * 0.2 - 0.1)).toFixed(1)),
          solar: Number((prev.solar + (Math.random() * 0.1 - 0.05)).toFixed(1))
        }));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isLive]);

  const maintenanceData = [
    { name: "Unit A", status: 98, color: "var(--pb-emerald)" },
    { name: "Unit B", status: 85, color: "var(--pb-amber)" },
    { name: "Unit C", status: 92, color: "var(--pb-emerald)" },
    { name: "Unit D", status: 72, color: "var(--pb-rose)" }
  ];

  const facilityAlerts = [
    { id: 1, type: "warning", text: "Battery Temp approaching 42°C in Kaduna Unit A", time: "12 min ago" },
    { id: 2, type: "critical", text: "Low voltage (48.2V) detected - Vaccine cooler critical level", time: "45 min ago" },
    { id: 3, type: "info", text: "Over-the-air firmware (v2.4.1) deployed to 5 units", time: "3 hours ago" }
  ];

  return (
    <section id="dashboard" className="py-24 bg-white relative">
       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
       
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/10">
              <Activity className={cn("h-3 w-3", isLive && "pb-pulse-live")} />
              <span>{isLive ? "Live Telemetry Active" : "Static Historical View"}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Facility Reliability Dashboard
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Continuous operational telemetry and predictive uptime signaling for 
              distributed healthcare clinics in climate-stressed regions.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setIsLive(!isLive)}
              className={cn(
                "rounded-xl px-6 py-6 h-auto text-sm font-semibold border-gray-200 transition-all",
                isLive ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "hover:bg-gray-50"
              )}
            >
              {isLive ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
              {isLive ? "Stop Live Stream" : "Start Live Stream"}
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-6 h-auto text-sm font-bold pb-glow-teal">
              Generate Readiness Report
            </Button>
          </div>
        </div>

        {/* Global Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="p-8 rounded-3xl border-none bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col h-full justify-between space-y-8">
              <div className="flex items-center justify-between">
                <div className="bg-emerald-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="h-7 w-7 text-emerald-600" />
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-3 py-1">
                  Optimal
                </Badge>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">{currentStats.uptime}%</p>
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Average Uptime</p>
                  <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 rounded-3xl border-none bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col h-full justify-between space-y-8">
              <div className="flex items-center justify-between">
                <div className="bg-blue-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <ThermometerSnowflake className="h-7 w-7 text-blue-600" />
                </div>
                <Badge className={cn(
                  "border-none px-3 py-1",
                  currentStats.temp > 8 ? "bg-rose-100 text-rose-700" : "bg-blue-100 text-blue-700"
                )}>
                  {currentStats.temp > 8 ? "Risk" : "Reliable"}
                </Badge>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900 transition-all duration-500">{currentStats.temp}°C</p>
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Cold Chain Temp</p>
                  <ArrowUpRight className="h-4 w-4 text-blue-500" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 rounded-3xl border-none bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col h-full justify-between space-y-8">
              <div className="flex items-center justify-between">
                <div className="bg-amber-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Battery className="h-7 w-7 text-amber-600" />
                </div>
                <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-none px-3 py-1">
                   Monitoring
                </Badge>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">{currentStats.health}%</p>
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Avg. Battery Health</p>
                  <ArrowUpRight className="h-4 w-4 text-amber-500" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 rounded-3xl border-none bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
            <div className="flex flex-col h-full justify-between space-y-8">
              <div className="flex items-center justify-between">
                <div className="bg-primary/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Sun className={cn("h-7 w-7 text-primary", isLive && "animate-spin-slow")} />
                </div>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none px-3 py-1">
                  Active
                </Badge>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">{currentStats.solar}<span className="text-lg">kW</span></p>
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Curr. Solar Yield</p>
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <Card className="p-8 rounded-[2.5rem] bg-white border-gray-100/100 shadow-2xl shadow-gray-100">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Energy Generation vs Load</h3>
                  <p className="text-sm text-gray-500">24-hour cycle showing supply continuity across all clinics</p>
                </div>
                <div className="hidden sm:flex space-x-3">
                   <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-primary/5 rounded-lg border border-primary/10">
                     <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                     <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Solar Production</span>
                   </div>
                   <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
                     <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                     <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Facility Load</span>
                   </div>
                </div>
              </div>

              <div className="h-[340px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={telemetryData}>
                    <defs>
                      <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--pb-emerald)" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="var(--pb-emerald)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis 
                      dataKey="time" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 11}} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 11}} 
                    />
                    <Tooltip 
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="solar" 
                      stroke="var(--pb-emerald)" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorSolar)" 
                      stackId="1"
                      isAnimationActive={!isLive}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="load" 
                      stroke="#94a3b8" 
                      strokeWidth={2} 
                      strokeDasharray="5 5"
                      fillOpacity={1} 
                      fill="url(#colorLoad)" 
                      stackId="0"
                      isAnimationActive={!isLive}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <Card className="p-8 rounded-[2rem] bg-white border-gray-100 shadow-xl shadow-gray-50 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <CloudLightning className="h-32 w-32 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <History className="h-5 w-5 mr-2 text-primary" />
                    Unit Maintenance Status
                  </h3>
                  <div className="space-y-6">
                    {maintenanceData.map((unit) => (
                      <div key={unit.name} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="text-sm font-bold text-gray-700">{unit.name} Reliability Map</span>
                          <span className="text-xs font-bold text-primary">{unit.status}% Health</span>
                        </div>
                        <Progress value={unit.status} className="h-2.5 bg-gray-100 rounded-full" />
                      </div>
                    ))}
                  </div>
               </Card>

               <Card className="p-8 rounded-[2rem] bg-slate-900 text-white border-none shadow-xl shadow-blue-900/10 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldCheck className="h-32 w-32" />
                  </div>
                  <Badge className="bg-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    Reliability Assurance
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Predictive Health Score</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    AI analysis of battery charge/discharge telemetry suggests v-cooler 
                    stability for the next 72 hours despite predicted cloud cover.
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-xl bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">
                          K{i}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-blue-400">+5 Protected Clinics</span>
                  </div>
               </Card>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card className="p-8 rounded-[2.5rem] bg-slate-50 border-none h-fit">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">Active Alerts</h3>
                  <Badge className="bg-rose-100 text-rose-600 hover:bg-rose-100 border-none">3 Actions Needed</Badge>
               </div>
               
               <div className="space-y-4">
                 {facilityAlerts.map(alert => (
                   <div key={alert.id} className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-3 group hover:border-primary/20 transition-all cursor-pointer">
                      <div className="flex items-center justify-between">
                         <div className={cn(
                           "p-2 rounded-lg",
                           alert.type === 'critical' ? 'bg-rose-50' : alert.type === 'warning' ? 'bg-amber-50' : 'bg-blue-50'
                         )}>
                            {alert.type === 'critical' ? <AlertTriangle className="h-4 w-4 text-rose-500" /> : 
                             alert.type === 'warning' ? <ShieldCheck className="h-4 w-4 text-amber-500" /> : 
                             <Clock className="h-4 w-4 text-blue-500" />}
                         </div>
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{alert.time}</span>
                      </div>
                      <p className={cn(
                        "text-sm font-semibold leading-relaxed",
                        alert.type === 'critical' ? 'text-gray-900' : 'text-gray-700'
                      )}>
                        {alert.text}
                      </p>
                   </div>
                 ))}
               </div>

               <div className="mt-10 p-6 bg-primary rounded-2xl text-white relative overflow-hidden pb-glow-teal">
                  <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-2">Technician Protocol</h4>
                    <p className="text-primary-foreground/80 text-xs leading-relaxed mb-6">
                       Seasonal grid failures expected. Ensure all backup diesel reserves are verified.
                    </p>
                    <Button size="sm" className="bg-white text-primary hover:bg-white/90 rounded-xl font-bold text-[10px] uppercase px-4 h-9">
                      Send Mass Alert
                    </Button>
                  </div>
                  <MapPin className="absolute -bottom-4 -right-4 h-24 w-24 text-white/10" />
               </div>
            </Card>

            <Card className="p-8 rounded-[2.5rem] bg-accent text-white border-none h-fit pb-glow-amber">
               <h3 className="text-xl font-bold mb-4 flex items-center">
                 <ThermometerSnowflake className="mr-2 h-6 w-6" />
                 Environmental Stress
               </h3>
               <p className="text-accent-foreground/80 text-sm mb-6 leading-relaxed font-medium">
                 Heat index in Sokoto region is 15% above seasonal norm. 
               </p>
               <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Peak Temp Today</p>
                    <p className="text-2xl font-black">41.8°C</p>
                  </div>
                  <Sun className="h-10 w-10 text-white/50" />
               </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
