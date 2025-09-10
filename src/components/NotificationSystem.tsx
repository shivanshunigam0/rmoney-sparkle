import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, TrendingUp, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Notification {
  id: string;
  type: 'alert' | 'ipo' | 'trade' | 'news';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'ipo',
      title: 'IPO Allotment Result',
      message: 'Your application for TechCorp IPO has been allotted 50 shares',
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      read: false,
      actionUrl: '/ipo/results'
    },
    {
      id: '2',
      type: 'alert',
      title: 'Price Alert: RELIANCE',
      message: 'RELIANCE has crossed your target price of ₹2,400',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      read: false
    },
    {
      id: '3',
      type: 'trade',
      title: 'Order Executed',
      message: 'Your buy order for 100 shares of TCS at ₹3,450 has been executed',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      read: true
    },
    {
      id: '4',
      type: 'news',
      title: 'Market Update',
      message: 'NIFTY 50 closes at record high, up 1.2% for the day',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      read: true
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [showPwaPrompt, setShowPwaPrompt] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'ipo': return Calendar;
      case 'alert': return AlertCircle;
      case 'trade': return CheckCircle;
      case 'news': return TrendingUp;
      default: return Bell;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ipo': return 'bg-blue-500';
      case 'alert': return 'bg-orange-500';
      case 'trade': return 'bg-green-500';
      case 'news': return 'bg-purple-500';
      default: return 'bg-primary';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  // PWA Installation Prompt
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('pwa-prompt-dismissed')) {
        setShowPwaPrompt(true);
      }
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const dismissPwaPrompt = () => {
    setShowPwaPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  const installPwa = () => {
    // PWA installation logic would go here
    alert('Install feature will be implemented with actual PWA setup');
    dismissPwaPrompt();
  };

  return (
    <>
      {/* Notification Bell - This would be integrated into the header */}
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="relative"
        >
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary">
              {unreadCount}
            </Badge>
          )}
        </Button>

        {/* Notification Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute right-0 top-full mt-2 w-96 max-h-96 z-50"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="glass shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h3 className="font-semibold">Notifications</h3>
                  <div className="flex items-center space-x-2">
                    {unreadCount > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={markAllAsRead}
                        className="text-xs"
                      >
                        Mark all read
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="p-1"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Notifications List */}
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center text-muted-foreground">
                      <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No notifications yet</p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {notifications.map((notification) => {
                        const Icon = getIcon(notification.type);
                        return (
                          <motion.div
                            key={notification.id}
                            className={`p-4 border-b border-border last:border-b-0 cursor-pointer hover:bg-muted/50 transition-colors ${
                              !notification.read ? 'bg-primary/5' : ''
                            }`}
                            onClick={() => markAsRead(notification.id)}
                            whileHover={{ x: 4 }}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`w-8 h-8 rounded-full ${getTypeColor(notification.type)} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className={`text-sm font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    {notification.title}
                                  </p>
                                  <span className="text-xs text-muted-foreground">
                                    {formatTime(notification.timestamp)}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {notification.message}
                                </p>
                                {notification.actionUrl && (
                                  <Button variant="link" size="sm" className="p-0 h-auto text-xs mt-1">
                                    View Details
                                  </Button>
                                )}
                              </div>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-border">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Notifications
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* PWA Install Prompt */}
      <AnimatePresence>
        {showPwaPrompt && (
          <motion.div
            className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            <Card className="glass p-4 shadow-xl">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-xl">R</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">Install RMoney App</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Get instant access to markets, notifications, and trading tools
                  </p>
                  <div className="flex items-center space-x-2 mt-3">
                    <Button size="sm" onClick={installPwa} className="text-xs">
                      Install
                    </Button>
                    <Button variant="ghost" size="sm" onClick={dismissPwaPrompt} className="text-xs">
                      Later
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={dismissPwaPrompt}
                  className="p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NotificationSystem;