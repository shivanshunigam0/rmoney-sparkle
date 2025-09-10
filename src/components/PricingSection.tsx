import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '₹0',
      period: 'Forever',
      description: 'Perfect for beginners starting their investment journey',
      badge: null,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Free account opening',
        'Zero AMC for first year',
        'Basic market research',
        'Mobile & web platform',
        'Email support',
        'Basic portfolio tracking'
      ],
      brokerage: {
        equity: '₹20 per order',
        fo: '₹20 per order',
        currency: '₹20 per order'
      },
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Professional',
      icon: Star,
      price: '₹499',
      period: 'per month',
      description: 'Advanced tools and features for serious traders',
      badge: 'Most Popular',
      color: 'from-primary to-accent',
      features: [
        'Everything in Starter',
        'Advanced charting tools',
        'Real-time market data',
        'Premium research reports',
        'Priority support',
        'Advanced portfolio analytics',
        'Multiple watchlists',
        'Options strategies'
      ],
      brokerage: {
        equity: '₹15 per order',
        fo: '₹15 per order',
        currency: '₹15 per order'
      },
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: '₹1,999',
      period: 'per month',
      description: 'Institutional-grade features for power users',
      badge: 'Premium',
      color: 'from-purple-500 to-purple-600',
      features: [
        'Everything in Professional',
        'Dedicated relationship manager',
        'Custom research reports',
        'API access for algo trading',
        'White-label solutions',
        'Priority order execution',
        'Risk management tools',
        'Institutional pricing'
      ],
      brokerage: {
        equity: '₹10 per order',
        fo: '₹10 per order',
        currency: '₹10 per order'
      },
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const additionalCharges = [
    { service: 'Account Opening', charge: 'Free' },
    { service: 'Account Maintenance (AMC)', charge: '₹300/year (Free for first year)' },
    { service: 'Demat Transaction', charge: '₹13 + GST per transaction' },
    { service: 'Physical Settlement', charge: '₹25 + GST per scrip' },
    { service: 'Pledge/Unpledge', charge: '₹20 + GST per request' },
    { service: 'Call & Trade', charge: '₹50 per order' }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-muted/30 to-background">
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
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            No hidden charges, no surprises. Choose the plan that fits your trading style.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={plan.popular ? 'lg:scale-105' : ''}
            >
              <Card className={`relative p-8 h-full glass ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''} hover:shadow-xl transition-all duration-300`}>
                {plan.badge && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    {plan.badge}
                  </Badge>
                )}
                
                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center">
                    <div className="text-4xl font-bold">{plan.price}</div>
                    <div className="text-muted-foreground">{plan.period}</div>
                  </div>

                  {/* Brokerage */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Brokerage Charges</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Equity Delivery</span>
                        <span className="font-medium">{plan.brokerage.equity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>F&O</span>
                        <span className="font-medium">{plan.brokerage.fo}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Currency</span>
                        <span className="font-medium">{plan.brokerage.currency}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    className={`w-full ${plan.popular ? 'gradient-primary hover:shadow-glow' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Charges */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Charges</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalCharges.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0">
                  <span className="text-muted-foreground">{item.service}</span>
                  <span className="font-medium">{item.charge}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-accent/10 rounded-lg">
              <p className="text-sm text-center text-muted-foreground">
                * All charges are exclusive of applicable taxes. 
                <a href="#" className="text-primary hover:underline ml-1">View detailed pricing</a>
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to start trading?</h3>
            <p className="text-muted-foreground mb-6">
              Join millions of traders who trust RMoney for their investment journey.
            </p>
            <Button size="lg" className="gradient-primary hover:shadow-glow text-lg px-8 py-6">
              Open Free Account Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;