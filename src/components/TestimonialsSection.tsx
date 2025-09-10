import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Day Trader, Mumbai',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: "RMoney has completely transformed my trading experience. The zero brokerage on delivery trades has saved me thousands of rupees. Their platform is lightning fast and the mobile app is incredibly user-friendly.",
      trades: '500+ trades'
    },
    {
      name: 'Priya Patel',
      role: 'Investment Advisor, Bangalore',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: "As an investment advisor, I recommend RMoney to all my clients. Their research reports are top-notch and the customer support is exceptional. The IPO application process is seamless.",
      trades: '200+ clients'
    },
    {
      name: 'Arjun Kumar',
      role: 'Software Engineer, Hyderabad',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: "Started my investment journey with RMoney and couldn't be happier. The SIP automation feature and the educational content helped me build a solid portfolio. Highly recommend for beginners!",
      trades: '50+ SIPs'
    },
    {
      name: 'Sneha Reddy',
      role: 'Freelancer, Chennai',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: "The F&O trading experience on RMoney is fantastic. Real-time data, advanced charts, and quick order execution - everything a serious trader needs. Plus, the brokerage charges are very competitive.",
      trades: '1000+ F&O trades'
    },
    {
      name: 'Vikash Singh',
      role: 'Business Owner, Delhi',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: "RMoney's mutual fund platform is excellent. The goal-based investing feature helped me plan for my daughter's education. The interface is clean and the fund selection process is very intuitive.",
      trades: '30+ MF schemes'
    },
    {
      name: 'Anita Gupta',
      role: 'Doctor, Pune',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: "Being busy with my practice, I needed a platform that's simple yet powerful. RMoney fits perfectly. The WhatsApp support is brilliant - I can get help instantly without calling customer care.",
      trades: '100+ equity trades'
    }
  ];

  const stats = [
    { value: '4.8/5', label: 'App Store Rating' },
    { value: '2M+', label: 'Happy Customers' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
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
            Trusted by{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Millions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the community of successful traders and investors who chose RMoney 
            for their financial journey.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full glass hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/60" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-primary font-medium">
                        {testimonial.trades}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Ready to join them?</h3>
                  <p className="text-muted-foreground">
                    Start your investment journey with India's most trusted platform
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Open Free Account
                  </motion.button>
                  <motion.button
                    className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download App
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;