
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import EnergyCredit from "@/components/EnergyCredit";
import P2PTrading from "@/components/P2PTrading";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Dashboard />
      <P2PTrading />
      <EnergyCredit />
      <Footer />
    </div>
  );
};

export default Index;
