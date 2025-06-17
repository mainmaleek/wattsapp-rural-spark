
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Brain, 
  CreditCard, 
  Users, 
  TrendingUp, 
  Shield,
  ArrowRight 
} from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-Powered{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Energy Credit
                </span>{" "}
                for Rural Communities
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Revolutionizing energy access through intelligent demand management, 
                flexible payment systems, and peer-to-peer energy trading for 
                underserved communities across Nigeria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3"
              >
                Start Trading Energy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
{/*               <Button 
                size="lg" 
                variant="outline" 
                className="border-green-200 text-green-700 hover:bg-green-50 px-8 py-3"
              >
                Watch Demo
              </Button> */}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1,500+</div>
                <div className="text-sm text-gray-600">Households Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1MW</div>
                <div className="text-sm text-gray-600">Clean Energy Added</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">400T</div>
                <div className="text-sm text-gray-600">CO₂ Reduced Annually</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="bg-green-100 p-3 rounded-lg w-fit">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">AI Demand Forecasting</h3>
                <p className="text-sm text-gray-600">
                  Smart algorithms optimize energy distribution and pricing
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="bg-blue-100 p-3 rounded-lg w-fit">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Flexible Payments</h3>
                <p className="text-sm text-gray-600">
                  Buy now, pay later system matched to rural income patterns
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="bg-green-100 p-3 rounded-lg w-fit">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">P2P Trading</h3>
                <p className="text-sm text-gray-600">
                  Community members trade excess energy directly
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="bg-blue-100 p-3 rounded-lg w-fit">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Secure & Transparent</h3>
                <p className="text-sm text-gray-600">
                  Blockchain-powered transactions with full transparency
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
