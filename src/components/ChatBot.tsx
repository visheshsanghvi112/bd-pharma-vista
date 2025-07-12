
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "👋 Welcome to Baker & Davis! How can we assist you with your pharmaceutical needs today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined quick questions for pharmaceutical industry
  const quickQuestions = [
    "How can I partner with Baker & Davis?",
    "What products do you distribute?",
    "Do you export pharmaceuticals?",
    "What are your business hours?",
    "How to contact customer support?",
    "What is your quality assurance process?"
  ];

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput('');
    
    // Hide suggestions after user asks a question
    setShowSuggestions(false);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Enhanced bot responses based on keywords
    setTimeout(() => {
      setIsTyping(false);
      const userInput = input.toLowerCase();
      
      // Find matching response based on keywords
      const response = findResponse(userInput);
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      
      // Show suggestions again after bot responds
      setTimeout(() => {
        setShowSuggestions(true);
      }, 1000);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestionClick = (question: string) => {
    setInput(question);
    setMessages(prev => [...prev, { text: question, isUser: true }]);
    
    // Hide suggestions after clicking a quick question
    setShowSuggestions(false);
    
    // Show typing indicator
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const response = findResponse(question.toLowerCase());
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      
      // Show suggestions again after bot responds
      setTimeout(() => {
        setShowSuggestions(true);
      }, 1000);
    }, 1000);
  };

  // Function to find appropriate response based on user input
  const findResponse = (input: string): string => {
    // Check for common greetings first
    if (/\b(hi|hello|hey|greetings)\b/i.test(input)) {
      return "Hello! Welcome to Baker & Davis - your trusted pharmaceutical distributor and trader. How can I assist you today?";
    }
    
    // Check for thank you messages
    if (/\b(thanks|thank you|thx)\b/i.test(input)) {
      return "You're welcome! Feel free to reach out if you need anything else. Baker & Davis is here to support all your pharmaceutical distribution and trading needs.";
    }
    
    // Check for goodbye messages
    if (/\b(bye|goodbye|see you|talk later)\b/i.test(input)) {
      return "Thank you for chatting with Baker & Davis! Have a great day and remember, we're your trusted partner for pharmaceutical distribution and trading.";
    }

    // Comprehensive list of pharmaceutical-related queries and responses
    const queryResponses = [
      // Partnership
      { keywords: ["partner", "franchise", "business opportunity", "collaboration", "how can i partner", "become a partner"],
        response: "Baker & Davis offers excellent partnership opportunities in pharmaceutical distribution and trading! Please email us at partnerships@bakerdavis.com or call +91 93722 41102. Our business development team will contact you within 48 hours with details about our distributor network, trading partnerships, and growth opportunities." },
      
      // Products & Distribution
      { keywords: ["products", "distribute", "medicines", "drugs", "pharmaceutical", "what do you"],
        response: "Baker & Davis is a leading pharmaceutical distributor and trader in India. We distribute a wide range of medicines including generic drugs, branded pharmaceuticals, medical devices, and healthcare products. Our distribution network covers hospitals, pharmacies, and healthcare providers across India and international markets through BD India exports." },
      
      // Export Services
      { keywords: ["export", "international", "global", "overseas", "bd india", "baker india"],
        response: "Yes! Baker & Davis operates a robust pharmaceutical export division under BD India. We export quality Indian pharmaceuticals to international markets, ensuring compliance with global regulatory standards. Our export services include documentation, quality certification, and logistics support for pharmaceutical trading worldwide." },
      
      // Business Hours
      { keywords: ["business hour", "opening hour", "timing", "when open", "when close"], 
        response: "Baker & Davis operates Monday to Saturday from 9:00 AM to 6:00 PM IST. Our pharmaceutical distribution and trading support team is available during these hours. For urgent pharmaceutical supply needs, please call our emergency line at +91 93722 41102." },
      
      // Contact Info
      { keywords: ["contact", "phone", "call", "number", "email", "customer support", "helpline"],
        response: "You can reach Baker & Davis customer support at +91 93722 41102 or email us at info@bakerdavis.com. For pharmaceutical distribution inquiries, use distribution@bakerdavis.com. For trading and export queries, contact exports@bakerdavis.com. Our team is ready to assist with all your pharmaceutical needs." },
      
      // Quality Assurance
      { keywords: ["quality", "assurance", "standards", "certification", "gmp", "who"],
        response: "Baker & Davis maintains the highest quality standards in pharmaceutical distribution and trading. All our products meet WHO-GMP standards, and we have certifications from drug regulatory authorities. Our quality assurance process includes temperature-controlled storage, batch tracking, and rigorous quality checks for all distributed and traded pharmaceuticals." },
      
      // Company Info
      { keywords: ["baker davis", "baker & davis", "bd india", "baker india", "about", "company"],
        response: "Baker & Davis is a trusted pharmaceutical distributor and trading company based in India. We specialize in pharmaceutical distribution, medicine trading, and pharmaceutical exports under our BD India division. Since our establishment, we've been committed to making quality healthcare accessible through reliable pharmaceutical distribution and trading services." },
      
      // Locations & Coverage
      { keywords: ["location", "where", "address", "coverage", "areas", "states"],
        response: "Baker & Davis headquarters serves as the hub for our pharmaceutical distribution network across India. We have distribution centers in major cities and our trading network covers pan-India. Our BD India export division serves international markets. Contact us at +91 93722 41102 for specific location and coverage details." },
    ];

    // Find the best matching response
    for (const query of queryResponses) {
      if (query.keywords.some(keyword => input.includes(keyword))) {
        return query.response;
      }
    }

    // Default response for unmatched queries
    return "Thank you for your question! Baker & Davis specializes in pharmaceutical distribution, trading, and exports. For detailed information about our services, please call +91 93722 41102 or email info@bakerdavis.com. Our pharmaceutical experts will be happy to assist you with your specific requirements.";
  };

  if (!isOpen) {
    return (
      <button 
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "w-16 h-16 bg-pharma-navy hover:bg-primary-dark rounded-full shadow-lg",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-110",
          "animate-pulse"
        )}
        aria-label="Open chat with Baker & Davis"
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
          <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
          <div>
            <h3 className="font-semibold text-sm">Baker & Davis</h3>
            <p className="text-xs opacity-90">Pharmaceutical Distribution & Trading</p>
          </div>
        </div>
        <button 
          onClick={toggleChat}
          className="text-white hover:bg-white/10 p-1 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-4 bg-gradient-to-b from-white to-gray-50">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={cn(
              "max-w-[85%] p-3 rounded-2xl shadow-sm animate-fade-in",
              message.isUser 
                ? "bg-pharma-navy text-white self-end rounded-tr-none"
                : "bg-white self-start rounded-tl-none border border-gray-100"
            )}
          >
            <p className="text-sm">{message.text}</p>
            <span className="text-[10px] opacity-70 block text-right mt-1">
              {message.isUser ? 'You' : 'BD Support'}
            </span>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex space-x-2 p-3 bg-white self-start rounded-2xl max-w-[85%] animate-fade-in shadow-sm border border-gray-100">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        )}
        
        {showSuggestions && messages.length < 5 && (
          <div className="pt-2 pb-1 animate-fade-in self-center">
            <p className="text-xs text-center text-gray-500 mb-2">Frequently asked questions:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickQuestions.map((question, idx) => (
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
          />
          <Button 
            onClick={handleSend}
            className="rounded-full h-9 w-9 p-0 mr-1 bg-pharma-navy hover:bg-primary-dark flex items-center justify-center"
            disabled={input.trim() === ''}
          >
            <Send size={16} />
          </Button>
        </div>
        <div className="text-center mt-2">
          <p className="text-xs text-gray-400">Powered by Baker & Davis</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
