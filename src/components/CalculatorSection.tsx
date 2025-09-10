import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, TrendingUp, DollarSign, PieChart } from 'lucide-react';

const CalculatorSection = () => {
  const [equityValues, setEquityValues] = useState({
    quantity: 100,
    price: 1000,
    brokerage: 20
  });

  const [foValues, setFoValues] = useState({
    quantity: 1,
    price: 50000,
    brokerage: 20
  });

  const [sipValues, setSipValues] = useState({
    monthly: 5000,
    years: 10,
    returns: 12
  });

  const calculateEquityCosts = () => {
    const value = equityValues.quantity * equityValues.price;
    const brokerage = equityValues.brokerage;
    const stt = value * 0.001; // 0.1% for delivery
    const exchangeCharges = value * 0.0000325;
    const gst = (brokerage + exchangeCharges) * 0.18;
    const sebiCharges = value * 0.000001;
    const stampDuty = value * 0.00003;
    
    const totalCharges = brokerage + stt + exchangeCharges + gst + sebiCharges + stampDuty;
    
    return {
      value,
      brokerage,
      stt: stt.toFixed(2),
      exchangeCharges: exchangeCharges.toFixed(2),
      gst: gst.toFixed(2),
      sebiCharges: sebiCharges.toFixed(2),
      stampDuty: stampDuty.toFixed(2),
      totalCharges: totalCharges.toFixed(2)
    };
  };

  const calculateSIP = () => {
    const monthlyAmount = sipValues.monthly;
    const years = sipValues.years;
    const annualReturn = sipValues.returns / 100;
    const monthlyReturn = annualReturn / 12;
    const totalMonths = years * 12;
    
    const futureValue = monthlyAmount * (((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn) * (1 + monthlyReturn));
    const totalInvested = monthlyAmount * totalMonths;
    const totalGains = futureValue - totalInvested;
    
    return {
      totalInvested: totalInvested.toFixed(0),
      futureValue: futureValue.toFixed(0),
      totalGains: totalGains.toFixed(0)
    };
  };

  const equityResults = calculateEquityCosts();
  const sipResults = calculateSIP();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Smart{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Calculators
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Plan your investments better with our advanced calculators. 
            Estimate costs, returns, and make informed decisions.
          </p>
        </motion.div>

        {/* Calculator Tabs */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="brokerage" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="brokerage" className="flex items-center space-x-2">
                <Calculator className="w-4 h-4" />
                <span>Brokerage</span>
              </TabsTrigger>
              <TabsTrigger value="sip" className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>SIP</span>
              </TabsTrigger>
              <TabsTrigger value="lumpsum" className="flex items-center space-x-2">
                <PieChart className="w-4 h-4" />
                <span>Lumpsum</span>
              </TabsTrigger>
            </TabsList>

            {/* Brokerage Calculator */}
            <TabsContent value="brokerage">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="glass p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Calculator className="w-6 h-6 mr-2 text-primary" />
                    Equity Brokerage Calculator
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={equityValues.quantity}
                        onChange={(e) => setEquityValues({...equityValues, quantity: Number(e.target.value)})}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="price">Price per share (₹)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={equityValues.price}
                        onChange={(e) => setEquityValues({...equityValues, price: Number(e.target.value)})}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="brokerage">Brokerage (₹)</Label>
                      <Input
                        id="brokerage"
                        type="number"
                        value={equityValues.brokerage}
                        onChange={(e) => setEquityValues({...equityValues, brokerage: Number(e.target.value)})}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="glass p-8">
                  <h3 className="text-2xl font-bold mb-6">Cost Breakdown</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Trade Value:</span>
                      <span>₹{equityResults.value.toLocaleString()}</span>
                    </div>
                    
                    <div className="space-y-3 border-t pt-4">
                      <div className="flex justify-between">
                        <span>Brokerage:</span>
                        <span>₹{equityResults.brokerage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>STT:</span>
                        <span>₹{equityResults.stt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Exchange Charges:</span>
                        <span>₹{equityResults.exchangeCharges}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST:</span>
                        <span>₹{equityResults.gst}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SEBI Charges:</span>
                        <span>₹{equityResults.sebiCharges}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Stamp Duty:</span>
                        <span>₹{equityResults.stampDuty}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-lg font-bold border-t pt-4 text-primary">
                      <span>Total Charges:</span>
                      <span>₹{equityResults.totalCharges}</span>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full gradient-primary">
                        Share Calculation
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* SIP Calculator */}
            <TabsContent value="sip">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="glass p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                    SIP Calculator
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="monthly">Monthly Investment (₹)</Label>
                      <Input
                        id="monthly"
                        type="number"
                        value={sipValues.monthly}
                        onChange={(e) => setSipValues({...sipValues, monthly: Number(e.target.value)})}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="years">Investment Period (Years)</Label>
                      <Input
                        id="years"
                        type="number"
                        value={sipValues.years}
                        onChange={(e) => setSipValues({...sipValues, years: Number(e.target.value)})}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="returns">Expected Annual Returns (%)</Label>
                      <Input
                        id="returns"
                        type="number"
                        value={sipValues.returns}
                        onChange={(e) => setSipValues({...sipValues, returns: Number(e.target.value)})}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="glass p-8">
                  <h3 className="text-2xl font-bold mb-6">Investment Projection</h3>
                  
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <div className="bg-muted/50 rounded-lg p-6">
                        <div className="text-sm text-muted-foreground">Total Investment</div>
                        <div className="text-2xl font-bold">₹{Number(sipResults.totalInvested).toLocaleString()}</div>
                      </div>
                      
                      <div className="bg-primary/10 rounded-lg p-6">
                        <div className="text-sm text-muted-foreground">Future Value</div>
                        <div className="text-3xl font-bold text-primary">₹{Number(sipResults.futureValue).toLocaleString()}</div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                        <div className="text-sm text-muted-foreground">Total Gains</div>
                        <div className="text-2xl font-bold text-green-600">₹{Number(sipResults.totalGains).toLocaleString()}</div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full gradient-primary">
                        Start SIP Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Lumpsum Calculator */}
            <TabsContent value="lumpsum">
              <div className="text-center py-12">
                <PieChart className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Lumpsum Calculator</h3>
                <p className="text-muted-foreground">Coming Soon</p>
                <Button className="mt-6 gradient-primary">Get Notified</Button>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;