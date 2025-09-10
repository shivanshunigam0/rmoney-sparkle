import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Mic, Search, Bell } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const RMoneyHeader = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVoiceListening, setIsVoiceListening] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const startVoiceSearch = () => {
    setIsVoiceListening(true);
    // Voice search functionality
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.start();
      
      recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript;
        console.log('Voice command:', command);
        setIsVoiceListening(false);
      };
      
      recognition.onerror = () => {
        setIsVoiceListening(false);
      };
    }
  };

  const navItems = [
    { name: 'Trade', href: '#trade' },
    { name: 'Invest', href: '#invest' },
    { name: 'IPO', href: '#ipo' },
    { name: 'Mutual Funds', href: '#mf' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 glass shadow-soft"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/lovable-uploads/b86d49b9-32d4-4cf9-8318-80a245ad2185.png" 
              alt="Raghunandan Money Logo"
              className="h-12 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Search & Voice */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search stocks, MFs..."
                className="pl-10 pr-12 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-64"
              />
              <Button
                size="sm"
                variant="ghost"
                className={`absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-8 p-0 ${
                  isVoiceListening ? 'text-primary animate-pulse' : 'text-muted-foreground'
                }`}
                onClick={startVoiceSearch}
              >
                <Mic className="w-4 h-4" />
              </Button>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full text-xs"></span>
            </Button>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4" />
              <Switch
                checked={isDark}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-primary"
              />
              <Moon className="w-4 h-4" />
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button size="sm" className="gradient-primary hover:shadow-glow">
                Open Account
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 pb-4 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  Login
                </Button>
                <Button size="sm" className="flex-1 gradient-primary">
                  Open Account
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default RMoneyHeader;