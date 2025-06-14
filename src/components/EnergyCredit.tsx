
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CreditCard,
  Wallet,
  Clock,
  TrendingUp,
  Calendar,
  CheckCircle,
  AlertCircle,
  Smartphone,
  DollarSign
} from "lucide-react";

const EnergyCredit = () => {
  const creditTransactions = [
    {
      id: 1,
      type: "Purchase",
      amount: "₦2,500",
      energy: "25 kWh",
      date: "Today, 2:30 PM",
      status: "Completed",
      method: "Mobile Money"
    },
    {
      id: 2,
      type: "Auto Payment",
      amount: "₦1,200",
      energy: "12 kWh",
      date: "Yesterday, 6:00 PM",
      status: "Completed",
      method: "Credit Plan"
    },
    {
      id: 3,
      type: "P2P Purchase",
      amount: "₦800",
      energy: "8 kWh",
      date: "2 days ago",
      status: "Completed",
      method: "Community Trade"
    }
  ];

  const paymentPlans = [
    {
      name: "Daily Plan",
      amount: "₦150",
      energy: "1.5 kWh",
      duration: "24 hours",
      popular: false
    },
    {
      name: "Weekly Plan",
      amount: "₦900",
      energy: "12 kWh",
      duration: "7 days",
      popular: true
    },
    {
      name: "Monthly Plan",
      amount: "₦3,200",
      energy: "45 kWh",
      duration: "30 days",
      popular: false
    }
  ];

  return (
    <section id="credit" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Smart Energy Credit System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible payment options designed for rural income patterns with AI-powered credit scoring
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Credit Overview */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="plans">Payment Plans</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Current Balance & Usage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-green-800">Current Balance</h3>
                      <div className="bg-green-200 p-2 rounded-full">
                        <CreditCard className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-3xl font-bold text-green-900">34.2 kWh</p>
                      <p className="text-sm text-green-700">≈ ₦3,420 remaining</p>
                      <div className="flex items-center space-x-2 text-xs text-green-600">
                        <TrendingUp className="h-3 w-3" />
                        <span>Lasts approximately 8 days</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-blue-800">Credit Score</h3>
                      <div className="bg-blue-200 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold text-blue-900">850</p>
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          Excellent
                        </Badge>
                      </div>
                      <Progress value={85} className="h-2" />
                      <p className="text-xs text-blue-600">
                        Eligible for extended payment terms
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Monthly Usage Trend */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Usage Pattern</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Week 1</span>
                      <div className="flex items-center space-x-3">
                        <Progress value={75} className="w-32 h-2" />
                        <span className="text-sm font-medium">12.5 kWh</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Week 2</span>
                      <div className="flex items-center space-x-3">
                        <Progress value={60} className="w-32 h-2" />
                        <span className="text-sm font-medium">10.2 kWh</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Week 3</span>
                      <div className="flex items-center space-x-3">
                        <Progress value={85} className="w-32 h-2" />
                        <span className="text-sm font-medium">14.8 kWh</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Week 4 (Current)</span>
                      <div className="flex items-center space-x-3">
                        <Progress value={45} className="w-32 h-2" />
                        <span className="text-sm font-medium">7.3 kWh</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="transactions" className="space-y-4">
                {creditTransactions.map((transaction) => (
                  <Card key={transaction.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          {transaction.type === "P2P Purchase" ? (
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          ) : (
                            <CreditCard className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.type}</p>
                          <p className="text-sm text-gray-600">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{transaction.amount}</p>
                        <p className="text-sm text-gray-600">{transaction.energy}</p>
                        <Badge 
                          variant={transaction.status === "Completed" ? "default" : "secondary"}
                          className="mt-1"
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="plans" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentPlans.map((plan) => (
                    <Card 
                      key={plan.name} 
                      className={`p-6 relative ${
                        plan.popular ? 'border-green-500 border-2' : 'border-gray-200'
                      }`}
                    >
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500">
                          Most Popular
                        </Badge>
                      )}
                      <div className="text-center space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{plan.amount}</p>
                          <p className="text-sm text-gray-600">{plan.energy}</p>
                        </div>
                        <p className="text-sm text-gray-600">Valid for {plan.duration}</p>
                        <Button 
                          className={`w-full ${
                            plan.popular 
                              ? 'bg-green-500 hover:bg-green-600' 
                              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                          }`}
                        >
                          Select Plan
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Quick Actions & AI Recommendations */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-green-500 hover:bg-green-600">
                  <CreditCard className="mr-3 h-4 w-4" />
                  Buy Energy Credit
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Smartphone className="mr-3 h-4 w-4" />
                  Mobile Money Top-up
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-3 h-4 w-4" />
                  Set Auto-Payment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-3 h-4 w-4" />
                  View P2P Market
                </Button>
              </div>
            </Card>

            {/* AI Recommendations */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                AI Recommendations
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Optimal Purchase Time</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Buy energy credits between 2-4 PM for 15% savings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-yellow-100">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Usage Alert</p>
                      <p className="text-xs text-gray-600 mt-1">
                        You're using 20% more energy this week. Consider energy-saving tips.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Credit Opportunity</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Your credit score improved! Unlock 30-day payment terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyCredit;
