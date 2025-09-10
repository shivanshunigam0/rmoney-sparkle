import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Calculator,
  Calendar,
  Award,
  TrendingUp,
  Clock,
  Users,
  Lock
} from 'lucide-react';

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Smartphone,
      title: 'AI-Powered Trading',
      description: 'Advanced algorithms analyze market patterns and provide real-time insights for smarter trading decisions.',
      color: 'from-blue-500 to-purple-600',
      features: ['Smart Order Routing', 'Predictive Analytics', 'Risk Assessment']
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your investments are protected with military-grade encryption and biometric authentication.',
      color: 'from-green-500 to-emerald-600',
      features: ['2FA Authentication', 'Encrypted Data', 'Insurance Coverage']
    },
    {
      icon: Globe,
      title: 'Global Markets Access',
      description: 'Trade in Indian equities, US stocks, crypto, commodities, and international ETFs - all in one platform.',
      color: 'from-orange-500 to-red-600',
      features: ['US Stocks', 'Crypto Trading', 'Global ETFs']
    }
  ];

  const additionalFeatures = [
    { icon: Calculator, title: 'Brokerage Calculator', description: 'Calculate trading costs instantly' },
    { icon: Calendar, title: 'IPO Calendar', description: 'Never miss an IPO opportunity' },
    { icon: Award, title: 'Gamified Experience', description: 'Earn rewards for trading milestones' },
    { icon: TrendingUp, title: 'Advanced Charts', description: '100+ technical indicators' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer assistance' },
    { icon: Users, title: 'Social Trading', description: 'Follow top traders and copy strategies' },
    { icon: Brain, title: 'AI Advisor', description: 'Personalized investment recommendations' },
    { icon: Lock, title: 'WebAuthn Support', description: 'Biometric login and security' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

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
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              RMoney?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of trading with cutting-edge technology, unmatched security, 
            and features designed for both beginners and professionals.
          </p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mainFeatures.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="p-8 h-full glass hover:shadow-glow transition-all duration-300 group">
                <div className="space-y-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="p-6 h-full glass hover:shadow-soft transition-all duration-300 group hover:-translate-y-2">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button size="lg" className="gradient-primary hover:shadow-glow text-lg px-8 py-6">
            Explore All Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;