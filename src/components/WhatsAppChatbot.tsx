import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
}

const WhatsAppChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! Welcome to RMoney 👋 I'm here to help you with trading, investments, and account queries. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      options: [
        "Open Trading Account",
        "Check IPO Status",
        "Talk to Advisor",
        "Brokerage Calculator",
        "Help & Support"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickResponses = {
    "Open Trading Account": {
      text: "Great choice! Opening a trading account with RMoney is super easy. You can start with zero brokerage for the first month! 🎉\n\nWould you like me to:",
      options: ["Send account opening link", "Schedule a callback", "Check required documents"]
    },
    "Check IPO Status": {
      text: "I can help you check your IPO application status and upcoming IPOs. What would you like to know?",
      options: ["Current IPO applications", "Upcoming IPOs this week", "IPO allotment results"]
    },
    "Talk to Advisor": {
      text: "I'll connect you with our relationship manager right away! 📞\n\nOur advisors are available:\n• Monday to Friday: 9 AM - 6 PM\n• Saturday: 9 AM - 1 PM",
      options: ["Connect now", "Schedule a call", "Chat on WhatsApp"]
    },
    "Brokerage Calculator": {
      text: "Let me help you calculate your trading costs! RMoney offers:\n\n📈 Equity: ₹20 per order\n📊 F&O: ₹20 per order\n💰 No hidden charges\n\nEnter your trade details:",
      options: ["Calculate Equity", "Calculate F&O", "View all charges"]
    },
    "Help & Support": {
      text: "I'm here to help! You can reach our support team 24/7 through multiple channels:",
      options: ["WhatsApp Support", "Email Support", "Call Support", "FAQ"]
    }
  };

  const sendMessage = (text: string, isUserMessage = true) => {
    if (isUserMessage) {
      const userMessage: Message = {
        id: messages.length + 1,
        text,
        isBot: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
    }

    // Simulate bot response
    setTimeout(() => {
      const response = quickResponses[text as keyof typeof quickResponses];
      const botMessage: Message = {
        id: messages.length + 2,
        text: response?.text || "Thank you for your message! Our team will get back to you shortly. You can also reach us directly on WhatsApp at +91-9876543210 📱",
        isBot: true,
        timestamp: new Date(),
        options: response?.options
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage.trim());
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg animate-float"
          size="lg"
        >
          <MessageCircle className="w-8 h-8 text-white" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xs text-primary-foreground font-bold">!</span>
          </div>
        </Button>
      </motion.div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Card className="glass shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-green-500 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">RMoney Assistant</h3>
                    <p className="text-sm opacity-90">Typically replies instantly</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowQR(!showQR)}
                    className="text-white hover:bg-white/20 p-2"
                  >
                    <QrCode className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 p-2"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* QR Code Section */}
              {showQR && (
                <div className="p-4 bg-muted text-center border-b">
                  <div className="w-32 h-32 bg-white mx-auto mb-2 rounded-lg flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scan to chat on WhatsApp
                  </p>
                </div>
              )}

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className={`max-w-[80%] ${message.isBot ? 'bg-muted' : 'bg-primary text-primary-foreground'} rounded-lg p-3`}>
                      <div className="flex items-start space-x-2">
                        {message.isBot && <Bot className="w-4 h-4 mt-1 flex-shrink-0" />}
                        {!message.isBot && <User className="w-4 h-4 mt-1 flex-shrink-0" />}
                        <div className="flex-1">
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          {message.options && (
                            <div className="mt-2 space-y-1">
                              {message.options.map((option, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  className="w-full text-left justify-start text-xs"
                                  onClick={() => sendMessage(option)}
                                >
                                  {option}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Button type="submit" size="sm" className="px-3">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChatbot;