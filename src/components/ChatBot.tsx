
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  id: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "👋 Welcome to Baker & Davis! I'm your virtual assistant. How can I help you with our pharmaceutical distribution and trading services today?", 
      isUser: false,
      timestamp: new Date(),
      id: '1'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Enhanced predefined quick questions for pharmaceutical industry
  const quickQuestions = [
    "How can I become a distributor partner?",
    "What pharmaceutical products do you distribute?",
    "Do you export medicines internationally?",
    "What are your quality certifications?",
    "How to place bulk orders?",
    "What are your payment terms?",
    "Do you provide cold chain logistics?",
    "What regions do you cover in India?"
  ];

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Generate unique message ID
  const generateMessageId = () => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      text,
      isUser,
      timestamp: new Date(),
      id: generateMessageId()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    
    const userMessage = input.trim();
    addMessage(userMessage, true);
    setConversationHistory(prev => [...prev, userMessage]);
    setInput('');
    setShowSuggestions(false);
    setIsTyping(true);
    
    // Enhanced bot responses with context awareness
    setTimeout(() => {
      setIsTyping(false);
      const response = findEnhancedResponse(userMessage.toLowerCase(), conversationHistory);
      addMessage(response, false);
      
      // Show suggestions again after bot responds, but less frequently as conversation progresses
      setTimeout(() => {
        if (messages.length < 8) {
          setShowSuggestions(true);
        }
      }, 1500);
    }, Math.random() * 1000 + 800); // Realistic typing delay
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestionClick = (question: string) => {
    addMessage(question, true);
    setConversationHistory(prev => [...prev, question]);
    setShowSuggestions(false);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const response = findEnhancedResponse(question.toLowerCase(), conversationHistory);
      addMessage(response, false);
      
      setTimeout(() => {
        if (messages.length < 8) {
          setShowSuggestions(true);
        }
      }, 1500);
    }, Math.random() * 1000 + 800);
  };

  // Enhanced response system with context awareness
  const findEnhancedResponse = (input: string, history: string[]): string => {
    // Check for common greetings first
    if (/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/i.test(input)) {
      const greetings = [
        "Hello! Welcome to Baker & Davis - your trusted pharmaceutical distribution partner. How may I assist you today?",
        "Hi there! Thank you for choosing Baker & Davis. I'm here to help with all your pharmaceutical distribution and trading needs.",
        "Greetings! Baker & Davis is delighted to serve you. What can I help you with regarding our pharmaceutical services?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Context-aware responses based on conversation history
    const hasAskedAboutPartnership = history.some(msg => msg.includes('partner') || msg.includes('distributor'));
    const hasAskedAboutProducts = history.some(msg => msg.includes('product') || msg.includes('medicine'));
    
    // Enhanced pharmaceutical industry responses
    const queryResponses = [
      // Partnership & Distribution
      { 
        keywords: ["partner", "distributor", "franchise", "business opportunity", "collaboration", "become a partner", "distributorship"],
        responses: [
          "Excellent! Baker & Davis offers lucrative partnership opportunities in pharmaceutical distribution. Our distributor network spans across India and internationally through BD India. Please contact our partnerships team at partnerships@bakerdavis.com or call +91 93722 41102. We'll discuss investment requirements, territory allocation, and profit margins within 24 hours.",
          "Great to hear your interest in partnering with Baker & Davis! We're always looking for reliable distributors. Our partnership program includes comprehensive training, marketing support, and exclusive territory rights. Would you like me to connect you with our business development team for detailed discussions?"
        ]
      },
      
      // Products & Pharmaceuticals
      { 
        keywords: ["products", "medicines", "drugs", "pharmaceutical", "catalog", "what do you distribute", "inventory"],
        responses: [
          "Baker & Davis distributes a comprehensive range of pharmaceuticals including generic medicines, branded drugs, medical devices, surgical instruments, and healthcare products. We work with leading manufacturers and maintain WHO-GMP standards. Our product categories include antibiotics, cardiovascular drugs, diabetes medications, and specialty medicines.",
          "Our extensive pharmaceutical portfolio covers therapeutic areas like cardiology, neurology, gastroenterology, and more. We also distribute medical equipment, diagnostic tools, and hospital supplies. Would you like specific information about any particular therapeutic category or brand?"
        ]
      },
      
      // International Trade & Export
      { 
        keywords: ["export", "international", "overseas", "global", "bd india", "baker india", "foreign"],
        responses: [
          "Yes! Baker & Davis operates robust international pharmaceutical trading through our BD India division. We export quality Indian pharmaceuticals to over 20+ countries including Africa, Middle East, and Southeast Asia. Our export services include regulatory compliance, documentation, quality certifications, and end-to-end logistics support.",
          "Our BD India export division handles international pharmaceutical trading with complete regulatory compliance. We ensure all exported medicines meet destination country standards and provide certificates of analysis, WHO-GMP certificates, and proper documentation for smooth customs clearance."
        ]
      },
      
      // Quality & Certifications
      { 
        keywords: ["quality", "certification", "gmp", "who", "standards", "license", "regulatory"],
        responses: [
          "Quality is paramount at Baker & Davis. We maintain WHO-GMP standards and hold certifications from Drug Controller General of India (DCGI). Our facilities are ISO certified, and we follow strict quality assurance protocols including temperature-controlled storage, batch tracking, and regular quality audits.",
          "All our pharmaceutical products undergo rigorous quality checks. We maintain proper cold chain logistics, have validated storage facilities, and our quality team ensures compliance with all regulatory requirements. Every batch comes with certificates of analysis and proper documentation."
        ]
      },
      
      // Orders & Business Process
      { 
        keywords: ["order", "bulk", "purchase", "buy", "minimum", "quantity", "pricing"],
        responses: [
          "For bulk orders, Baker & Davis offers competitive pricing and flexible terms. Our minimum order quantities vary by product category. We provide volume discounts, credit facilities for established partners, and prompt delivery across India. Please share your requirements at orders@bakerdavis.com for customized quotations.",
          "We handle bulk pharmaceutical orders efficiently with our advanced inventory management system. Our sales team can provide detailed quotations, delivery schedules, and payment terms based on your specific requirements. What products are you interested in ordering?"
        ]
      },
      
      // Payment & Terms
      { 
        keywords: ["payment", "credit", "terms", "advance", "bank", "finance"],
        responses: [
          "Baker & Davis offers flexible payment terms including advance payment discounts, credit facilities for verified partners, and various payment modes like NEFT, RTGS, and LC for international trades. Credit terms are decided based on business volume and creditworthiness assessment.",
          "Our payment options include immediate payment with discounts, 30-60-90 days credit terms for established distributors, and letter of credit for international transactions. We also provide financing assistance through our banking partners for bulk purchases."
        ]
      },
      
      // Logistics & Cold Chain
      { 
        keywords: ["logistics", "delivery", "cold chain", "storage", "temperature", "transport"],
        responses: [
          "Baker & Davis maintains state-of-the-art cold chain logistics with temperature-controlled warehouses and refrigerated transportation. We ensure proper storage conditions for all pharmaceutical products and provide real-time temperature monitoring during transit to maintain product efficacy.",
          "Our logistics network covers pan-India with specialized cold chain facilities. We use GPS-enabled vehicles, temperature loggers, and have backup power systems to maintain cold chain integrity. Same-day delivery available in major metros for urgent requirements."
        ]
      },
      
      // Coverage & Regions
      { 
        keywords: ["regions", "coverage", "states", "cities", "locations", "where", "areas"],
        responses: [
          "Baker & Davis serves all major states in India through our extensive distribution network. We have regional hubs in Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Kolkata. Our delivery network covers over 500+ cities and towns across India, with same-day delivery in metro cities.",
          "Our pharmaceutical distribution network spans across North, South, East, and West India. We have strategic partnerships with local distributors in tier-2 and tier-3 cities ensuring last-mile connectivity. International coverage through BD India includes Middle East, Africa, and Southeast Asian markets."
        ]
      }
    ];

    // Find matching responses
    for (const query of queryResponses) {
      if (query.keywords.some(keyword => input.includes(keyword))) {
        const responses = query.responses;
        let selectedResponse = responses[Math.floor(Math.random() * responses.length)];
        
        // Add context-aware follow-ups
        if (hasAskedAboutPartnership && query.keywords.includes("partner")) {
          selectedResponse += " Since you're interested in partnership, I can also share information about our training programs and support systems.";
        }
        if (hasAskedAboutProducts && query.keywords.includes("products")) {
          selectedResponse += " I can provide detailed product catalogs and pricing information if you share your specific therapeutic area of interest.";
        }
        
        return selectedResponse;
      }
    }

    // Thank you responses
    if (/\b(thanks|thank you|thx|appreciate)\b/i.test(input)) {
      return "You're most welcome! Baker & Davis is committed to excellence in pharmaceutical distribution and trading. Feel free to reach out anytime for more information about our services, partnerships, or products. Is there anything else I can help you with today?";
    }
    
    // Goodbye responses
    if (/\b(bye|goodbye|see you|talk later|have a good day)\b/i.test(input)) {
      return "Thank you for choosing Baker & Davis! Have a wonderful day ahead. Remember, we're your trusted partner for all pharmaceutical distribution and trading needs. Don't hesitate to contact us at +91 93722 41102 for any urgent requirements. Take care!";
    }

    // Enhanced default response with helpful suggestions
    return `Thank you for your inquiry! While I may not have specific information about "${input}", Baker & Davis specializes in pharmaceutical distribution, trading, and exports through BD India. Our experts can provide detailed information about our services. Please call +91 93722 41102 or email info@bakerdavis.com. Would you like to know about our partnership opportunities, product range, or export services?`;
  };

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!isOpen) {
    return (
      <button 
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "w-16 h-16 bg-pharma-navy hover:bg-primary-dark rounded-full shadow-lg",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-110"
        )}
        aria-label="Open chat with Baker & Davis"
        title="Chat with Baker & Davis Support"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-pharma-navy to-primary-dark text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
          <div>
            <h3 className="font-semibold text-sm">Baker & Davis Support</h3>
            <p className="text-xs opacity-90">Pharmaceutical Distribution & Trading</p>
          </div>
        </div>
        <button 
          onClick={toggleChat}
          className="text-white hover:bg-white/10 p-1 rounded-full transition-colors"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-4 bg-gradient-to-b from-white to-gray-50">
        {messages.map((message, index) => (
          <div 
            key={message.id}
            className={cn(
              "max-w-[85%] p-3 rounded-2xl shadow-sm animate-fade-in",
              message.isUser 
                ? "bg-pharma-navy text-white self-end rounded-tr-none"
                : "bg-white self-start rounded-tl-none border border-gray-100"
            )}
          >
            <div className="flex items-start gap-2 mb-1">
              {!message.isUser && <Bot size={14} className="text-pharma-navy mt-1 flex-shrink-0" />}
              {message.isUser && <User size={14} className="text-white mt-1 flex-shrink-0 ml-auto" />}
            </div>
            <p className="text-sm leading-relaxed">{message.text}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[10px] opacity-70">
                {message.isUser ? 'You' : 'BD Support'}
              </span>
              <span className="text-[10px] opacity-70">
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-center space-x-2 p-3 bg-white self-start rounded-2xl max-w-[85%] animate-fade-in shadow-sm border border-gray-100">
            <Bot size={14} className="text-pharma-navy flex-shrink-0" />
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        )}
        
        {showSuggestions && messages.length < 10 && (
          <div className="pt-2 pb-1 animate-fade-in self-center">
            <p className="text-xs text-center text-gray-500 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickQuestions.slice(0, messages.length < 3 ? 6 : 4).map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickQuestionClick(question)}
                  className="bg-white text-pharma-navy text-xs py-1.5 px-3 rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors animate-fade-in whitespace-nowrap"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
        <div className="flex items-center bg-gray-50 rounded-full overflow-hidden border border-gray-200 focus-within:border-pharma-navy transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about pharmaceutical distribution..."
            className="flex-1 px-4 py-3 bg-transparent border-none focus:outline-none text-sm"
            maxLength={500}
          />
          <Button 
            onClick={handleSend}
            className="rounded-full h-9 w-9 p-0 mr-1 bg-pharma-navy hover:bg-primary-dark flex items-center justify-center"
            disabled={input.trim() === ''}
            aria-label="Send message"
          >
            <Send size={16} />
          </Button>
        </div>
        <div className="text-center mt-2">
          <p className="text-xs text-gray-400">Powered by Baker & Davis AI Assistant</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
