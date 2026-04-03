import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import FacilityReadiness from "@/components/FacilityReadiness";
import MaintenanceAlerts from "@/components/MaintenanceAlerts";
import OpenSourceDocs from "@/components/OpenSourceDocs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Dashboard />
        <FacilityReadiness />
        <MaintenanceAlerts />
        <OpenSourceDocs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
