
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  TrendingUp,
  ArrowRightLeft,
  Clock,
  MapPin,
  Star,
  Zap,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const P2PTrading = () => {
  const availableOffers = [
    {
      id: 1,
      seller: "Amina Hassan",
      avatar: "/api/placeholder/40/40",
      location: "Kaduna Central",
      energy: "15 kWh",
      price: "₦1,350",
      pricePerKwh: "₦90",
      timeLeft: "2 hours",
      rating: 4.8,
      distance: "0.5 km",
      source: "Solar Panel"
    },
    {
      id: 2,
      seller: "Ibrahim Musa",
      avatar: "/api/placeholder/40/40",
      location: "Barnawa",
      energy: "8 kWh",
      price: "₦800",
      pricePerKwh: "₦100",
      timeLeft: "45 minutes",
      rating: 4.9,
      distance: "1.2 km",
      source: "Wind Generator"
    },
    {
      id: 3,
      seller: "Fatima Abubakar",
      avatar: "/api/placeholder/40/40",
      location: "Ungwan Rimi",
      energy: "22 kWh",
      price: "₦1,980",
      pricePerKwh: "₦90",
      timeLeft: "4 hours",
      rating: 4.7,
      distance: "2.1 km",
      source: "Solar + Battery"
    }
  ];

  const recentTrades = [
    {
      id: 1,
      type: "bought",
      partner: "Aisha Tanko",
      energy: "12 kWh",
      amount: "₦1,080",
      date: "2 hours ago",
      status: "completed"
    },
    {
      id: 2,
      type: "sold",
      partner: "Yusuf Ahmed",
      energy: "6 kWh",
      amount: "₦540",
      date: "1 day ago",
      status: "completed"
    },
    {
      id: 3,
      type: "bought",
      partner: "Khadija Ibrahim",
      energy: "18 kWh",
      amount: "₁,620",
      date: "3 days ago",
      status: "completed"
    }
  ];

  const myListings = [
    {
      id: 1,
      energy: "10 kWh",
      price: "₦900",
      pricePerKwh: "₦90",
      timeLeft: "3 hours",
      views: 12,
      interested: 3,
      status: "active"
    },
    {
      id: 2,
      energy: "5 kWh",
      price: "₦500",
      pricePerKwh: "₦100",
      timeLeft: "Expired",
      views: 8,
      interested: 1,
      status: "expired"
    }
  ];

  return (
    <section id="trading" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Peer-to-Peer Energy Trading
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trade excess energy directly with your community members through our secure blockchain platform
          </p>
        </div>

        {/* Trading Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center bg-white border-l-4 border-l-green-500">
            <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
              <ArrowRightLeft className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">1,247</p>
            <p className="text-sm text-gray-600">Total Trades</p>
          </Card>

          <Card className="p-6 text-center bg-white border-l-4 border-l-blue-500">
            <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">342</p>
            <p className="text-sm text-gray-600">Active Traders</p>
          </Card>

          <Card className="p-6 text-center bg-white border-l-4 border-l-yellow-500">
            <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-3">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">2.8 MWh</p>
            <p className="text-sm text-gray-600">Energy Traded Today</p>
          </Card>

          <Card className="p-6 text-center bg-white border-l-4 border-l-purple-500">
            <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">₦95</p>
            <p className="text-sm text-gray-600">Avg. Price/kWh</p>
          </Card>
        </div>

        {/* Trading Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="buy">Buy Energy</TabsTrigger>
                <TabsTrigger value="sell">Sell Energy</TabsTrigger>
                <TabsTrigger value="history">Trade History</TabsTrigger>
              </TabsList>

              <TabsContent value="buy" className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Available Energy Offers
                  </h3>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    {availableOffers.length} Active Offers
                  </Badge>
                </div>

                {availableOffers.map((offer) => (
                  <Card key={offer.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={offer.avatar} />
                          <AvatarFallback>{offer.seller.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">{offer.seller}</h4>
                          <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {offer.location} • {offer.distance}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 mr-1 text-yellow-500" />
                              {offer.rating}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="text-lg font-bold text-gray-900">{offer.energy}</p>
                            <p className="text-sm text-gray-600">{offer.source}</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-green-600">{offer.price}</p>
                            <p className="text-sm text-gray-600">{offer.pricePerKwh}/kWh</p>
                          </div>
                          <div>
                            <Button className="bg-green-500 hover:bg-green-600">
                              Buy Now
                            </Button>
                            <p className="text-xs text-gray-500 mt-1 text-center">
                              <Clock className="h-3 w-3 inline mr-1" />
                              {offer.timeLeft}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="sell" className="space-y-6">
                <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Create New Energy Listing
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Energy Amount (kWh)
                      </label>
                      <input 
                        type="number" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter kWh"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price per kWh (₦)
                      </label>
                      <input 
                        type="number" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Suggested: ₦95"
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    List Energy for Sale
                  </Button>
                </Card>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">My Active Listings</h3>
                  {myListings.map((listing) => (
                    <Card key={listing.id} className="p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{listing.energy} • {listing.price}</p>
                          <p className="text-sm text-gray-600">{listing.pricePerKwh}/kWh</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={listing.status === "active" ? "default" : "secondary"}
                            className={listing.status === "active" ? "bg-green-500" : ""}
                          >
                            {listing.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">
                            {listing.views} views • {listing.interested} interested
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Trades</h3>
                {recentTrades.map((trade) => (
                  <Card key={trade.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${
                          trade.type === "bought" ? "bg-blue-100" : "bg-green-100"
                        }`}>
                          <ArrowRightLeft className={`h-4 w-4 ${
                            trade.type === "bought" ? "text-blue-600" : "text-green-600"
                          }`} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {trade.type === "bought" ? "Bought from" : "Sold to"} {trade.partner}
                          </p>
                          <p className="text-sm text-gray-600">{trade.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{trade.energy}</p>
                        <p className="text-sm text-gray-600">{trade.amount}</p>
                        <Badge variant="outline" className="mt-1">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {trade.status}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Market Insights & Community */}
          <div className="space-y-6">
            {/* Market Insights */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Insights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Current Market Price</span>
                  <span className="font-semibold text-gray-900">₦95/kWh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">24h Price Change</span>
                  <span className="font-semibold text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +2.1%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Volume Today</span>
                  <span className="font-semibold text-gray-900">2.8 MWh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Peak Trading Hours</span>
                  <span className="font-semibold text-gray-900">6-9 PM</span>
                </div>
              </div>
            </Card>

            {/* Top Traders */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Community Traders</h3>
              <div className="space-y-3">
                {[
                  { name: "Amina Hassan", trades: 45, rating: 4.9 },
                  { name: "Ibrahim Musa", trades: 38, rating: 4.8 },
                  { name: "Fatima Abubakar", trades: 32, rating: 4.7 }
                ].map((trader, index) => (
                  <div key={trader.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center">
                        {index + 1}
                      </Badge>
                      <div>
                        <p className="font-medium text-gray-900">{trader.name}</p>
                        <p className="text-xs text-gray-600">{trader.trades} trades</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{trader.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default P2PTrading;
