import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const LiveTicker = () => {
  const marketData = [
    { symbol: 'NIFTY 50', price: '19,674.25', change: '+127.35', changePercent: '+0.65%', isPositive: true },
    { symbol: 'SENSEX', price: '66,174.20', change: '+423.75', changePercent: '+0.64%', isPositive: true },
    { symbol: 'RELIANCE', price: '2,387.60', change: '-12.40', changePercent: '-0.52%', isPositive: false },
    { symbol: 'TCS', price: '3,456.80', change: '+45.20', changePercent: '+1.32%', isPositive: true },
    { symbol: 'INFY', price: '1,542.30', change: '+28.70', changePercent: '+1.90%', isPositive: true },
    { symbol: 'HDFC BANK', price: '1,675.45', change: '-8.30', changePercent: '-0.49%', isPositive: false },
    { symbol: 'ICICI BANK', price: '987.20', change: '+15.60', changePercent: '+1.61%', isPositive: true },
    { symbol: 'BHARTI AIRTEL', price: '876.35', change: '+12.25', changePercent: '+1.42%', isPositive: true },
  ];

  return (
    <div className="bg-card border-b border-border overflow-hidden py-2">
      <div className="flex items-center">
        <div className="px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold mr-4 rounded-r-lg">
          LIVE MARKET
        </div>
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex space-x-8 whitespace-nowrap"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ 
              duration: 60, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
          >
            {[...marketData, ...marketData].map((stock, index) => (
              <div key={`${stock.symbol}-${index}`} className="flex items-center space-x-2 min-w-max">
                <span className="font-semibold text-foreground">{stock.symbol}</span>
                <span className="text-muted-foreground">₹{stock.price}</span>
                <div className={`flex items-center space-x-1 ${
                  stock.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stock.isPositive ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span className="text-sm font-medium">{stock.change}</span>
                  <span className="text-sm">({stock.changePercent})</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LiveTicker;