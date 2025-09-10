import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Download,
  Shield,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FooterSection = () => {
  const quickLinks = [
    { name: 'Trading Platform', href: '#platform' },
    { name: 'Market Research', href: '#research' },
    { name: 'IPO Center', href: '#ipo' },
    { name: 'Mutual Funds', href: '#mf' },
    { name: 'Portfolio Tracker', href: '#portfolio' },
    { name: 'Educational Resources', href: '#education' }
  ];

  const support = [
    { name: 'Help Center', href: '#help' },
    { name: 'Contact Support', href: '#support' },
    { name: 'Live Chat', href: '#chat' },
    { name: 'Video Tutorials', href: '#tutorials' },
    { name: 'Webinars', href: '#webinars' },
    { name: 'FAQ', href: '#faq' }
  ];

  const legal = [
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Risk Disclosure', href: '#risk' },
    { name: 'Grievance Policy', href: '#grievance' },
    { name: 'Regulatory Info', href: '#regulatory' },
    { name: 'Investor Charter', href: '#charter' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const awards = [
    { name: 'Best Broker 2024', org: 'ET Money' },
    { name: 'Fastest Growing', org: 'BSE' },
    { name: 'Customer Choice', org: 'NSE' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">R</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Raghunandan Money
                  </span>
                  <span className="text-xs text-muted-foreground">investment khuzhiyon ka</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                India's fastest growing discount broker offering zero brokerage equity delivery trades, 
                advanced trading platforms, and comprehensive investment solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91-9876543210</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>support@rmoney.in</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <div>RMoney Securities Pvt Ltd</div>
                    <div className="text-muted-foreground">
                      123 Business District, Financial Center<br />
                      Mumbai, Maharashtra 400001
                    </div>
                  </div>
                </div>
              </div>

              {/* App Download */}
              <div className="space-y-3">
                <p className="font-semibold">Download Our App</p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Google Play
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    App Store
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Awards & Recognition */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-sm">{award.name}</div>
                  <div className="text-xs text-muted-foreground">{award.org}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social Media & Newsletter */}
        <motion.div
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Stay updated:</span>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm w-64"
              />
              <Button size="sm" className="gradient-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>SEBI Registered</span>
              </div>
              <div>Member: NSE, BSE, MCX</div>
              <div>CDSL: 12345678</div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 Raghunandan Money. All rights reserved.
            </div>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground leading-relaxed">
            <p>
              <strong>Risk Disclosure:</strong> Securities trading and investment in Mutual Fund are subject to market risks. 
              Please read all the related documents carefully before investing. Registration with SEBI and certification 
              from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;