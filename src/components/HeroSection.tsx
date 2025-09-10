import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TrendingUp, Shield, Zap, Globe, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: Shield, label: 'Zero Brokerage*', color: 'text-green-500' },
    { icon: Zap, label: 'Instant Trading', color: 'text-blue-500' },
    { icon: TrendingUp, label: 'Smart Analytics', color: 'text-purple-500' },
    { icon: Globe, label: 'Global Markets', color: 'text-orange-500' },
  ];

  const stats = [
    { value: '2M+', label: 'Active Traders' },
    { value: '₹50K Cr', label: 'Daily Volume' },
    { value: '0.01s', label: 'Order Execution' },
    { value: '99.9%', label: 'Uptime SLA' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-30"></div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20"
              >
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">India's Fastest Growing Broker</span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Your Partner in{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Wealth
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Trade, Invest, Diversify. All markets. One app. Equity, F&O, Mutual Funds, IPOs, Global ETFs.
              </motion.p>
            </div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  className="flex items-center space-x-2 bg-card/80 px-4 py-2 rounded-full border border-border/50 shadow-soft"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="text-sm font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="gradient-primary hover:shadow-glow text-lg px-8 py-6 group"
              >
                Open Free Account
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass shadow-xl p-6 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />
              
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Portfolio Overview</h3>
                  <div className="flex items-center space-x-2 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium">+₹12,450 (7.8%)</span>
                  </div>
                </div>

                {/* Chart Area */}
                <motion.div
                  className="h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg flex items-end justify-center space-x-1 p-4"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-primary/60 rounded-t"
                      style={{ 
                        width: '20px',
                        height: `${Math.random() * 80 + 20}px`
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.random() * 80 + 20}px` }}
                      transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </motion.div>

                {/* Holdings */}
                <div className="space-y-3">
                  {[
                    { name: 'RELIANCE', qty: '50', value: '₹1,19,380', change: '+2.34%', positive: true },
                    { name: 'TCS', qty: '25', value: '₹86,420', change: '+1.87%', positive: true },
                    { name: 'HDFC BANK', qty: '30', value: '₹50,265', change: '-0.89%', positive: false },
                  ].map((stock, index) => (
                    <motion.div
                      key={stock.name}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                    >
                      <div>
                        <div className="font-medium text-sm">{stock.name}</div>
                        <div className="text-xs text-muted-foreground">Qty: {stock.qty}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm">{stock.value}</div>
                        <div className={`text-xs ${stock.positive ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.change}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Floating Action Button */}
            <motion.div
              className="absolute -bottom-4 -right-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, type: "spring" }}
            >
              <Button className="w-16 h-16 rounded-full gradient-primary shadow-glow animate-pulse-glow">
                <TrendingUp className="w-8 h-8" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;