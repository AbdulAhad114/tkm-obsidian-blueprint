import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Hello! I am your TKM Trading specialist. I can help you find the perfect fittings for your bathroom or kitchen. What are you looking for today?',
      timestamp: Date.now()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const systemInstruction = `You are a helpful, polite, and knowledgeable sales assistant for TKM Trading Shop, Pakistan's premium retailer of sanitaryware and kitchen fittings.
      Your tone should be professional, elegant, yet accessible.
      
      Our Offerings:
      - Imported Bathroom Faucets (Gold, Chrome, Matt Black)
      - Rain Showers & Thermostatic Systems
      - Kitchen Mixers (Pull-out, Spring Neck)
      - Stainless Steel Sinks & Organizers
      
      Key selling points: 
      - Nationwide Delivery in Pakistan
      - Cash on Delivery available
      - Premium Quality Guarantee

      If a user asks about "Prices", all prices are in PKR.
      If a user asks about "Location", we deliver nationwide in Pakistan.
      Keep responses concise (under 100 words) and helpful.`;

      const response = await ai.models.generateContent({
        model: model,
        contents: userMessage.text,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const responseText = response.text || "I'm sorry, I couldn't process that request right now.";

      setMessages(prev => [...prev, {
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      }]);

    } catch (error) {
      console.error("Gemini API Error", error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: "I apologize, but I'm having trouble connecting to the product database right now. Please try again later.",
        timestamp: Date.now()
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] shadow-2xl rounded-2xl flex flex-col mb-4 overflow-hidden border border-gray-100 animate-fade-in-up">
          {/* Header */}
          <div className="bg-tkm-teal p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">TKM Assistant</h3>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-black transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-tkm-teal text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
               <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                    <Loader2 size={16} className="animate-spin text-tkm-teal" />
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-tkm-teal focus-within:ring-1 focus-within:ring-tkm-teal transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about faucets..."
                className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="text-tkm-teal disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-transform"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-tkm-teal hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded shadow text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
             Need help?
          </span>
        </button>
      )}
    </div>
  );
};