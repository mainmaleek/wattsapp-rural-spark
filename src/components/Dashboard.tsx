
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Zap,
  TrendingUp,
  Users,
  DollarSign,
  Battery,
  Sun,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const energyData = [
    { time: "00:00", demand: 120, supply: 150 },
    { time: "06:00", demand: 200, supply: 180 },
    { time: "12:00", demand: 350, supply: 400 },
    { time: "18:00", demand: 450, supply: 380 },
    { time: "24:00", demand: 180, supply: 200 }
  ];

  const usageData = [
    { name: "Residential", value: 65, color: "#10B981" },
    { name: "Commercial", value: 25, color: "#3B82F6" },
    { name: "Industrial", value: 10, color: "#F59E0B" }
  ];

  const paymentData = [
    { month: "Jan", collected: 85, pending: 15 },
    { month: "Feb", collected: 92, pending: 8 },
    { month: "Mar", collected: 78, pending: 22 },
    { month: "Apr", collected: 95, pending: 5 },
    { month: "May", collected: 88, pending: 12 }
  ];

  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mini-Grid Operator Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time insights and AI-powered analytics for optimal mini-grid management
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white border-l-4 border-l-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Energy Generated</p>
                <p className="text-2xl font-bold text-gray-900">2.4 MWh</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% from last month
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-l-4 border-l-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-xs text-blue-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8% from last month
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-l-4 border-l-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue This Month</p>
                <p className="text-2xl font-bold text-gray-900">₦485,200</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15% from last month
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-l-4 border-l-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">System Efficiency</p>
                <p className="text-2xl font-bold text-gray-900">94.2%</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Optimal performance
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Battery className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Energy Supply vs Demand */}
          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Energy Supply vs Demand
              </h3>
              <Badge variant="outline" className="text-green-600 border-green-200">
                Live Data
              </Badge>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="supply" stroke="#10B981" strokeWidth={3} />
                <Line type="monotone" dataKey="demand" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Usage Distribution */}
          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Usage Distribution
              </h3>
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                Today
              </Badge>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={usageData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {usageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Payment Collection & AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Payment Collection Rate
              </h3>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={paymentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="collected" fill="#10B981" />
                <Bar dataKey="pending" fill="#F87171" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Sun className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Peak Demand Predicted</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Tomorrow 7-9 PM: 520kW expected. Prepare backup.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-yellow-100">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Payment Alert</p>
                    <p className="text-xs text-gray-600 mt-1">
                      23 users at high default risk. Offer flexible plans.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Growth Opportunity</p>
                    <p className="text-xs text-gray-600 mt-1">
                      New area expansion could serve 200+ households.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
