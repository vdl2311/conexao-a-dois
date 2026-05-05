import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, User, Heart } from 'lucide-react';
import { createChat, sendMessageToChat } from '../services/geminiService';

interface FunnelChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FunnelChat({ isOpen, onClose }: FunnelChatProps) {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<any>(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function initChat() {
      if (isOpen && !chat) {
        setIsLoading(true);
        try {
          const newChat = await createChat();
          setChat(newChat);
          const response = await sendMessageToChat(newChat, "Inicie a conversa executando APENAS o Passo 1 exatamente como instruído na árvore.");
          setMessages([{ role: 'model', text: response }]);
        } catch (error) {
          setMessages([{ role: 'model', text: "Desculpe, tive um problema ao iniciar a conversa." }]);
        } finally {
          setIsLoading(false);
        }
      }
    }
    initChat();
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading || !chat) return;

    setMessages(prev => [...prev, { role: 'user', text }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendMessageToChat(chat, text);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      
      // Detect if the AI is presenting the offer / 21 days challenge
      const lowerResponse = response.toLowerCase();
      if (
        lowerResponse.includes("21 dias") || 
        lowerResponse.includes("guia") || 
        lowerResponse.includes("valha a pena começar") || 
        response.includes("hotmart.com")
      ) {
        setShowStickyCTA(true);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Desculpe, tive um problema técnico. Pode tentar novamente?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-brand-navy/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-[500px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/20"
          >
            {/* Header */}
            <div className="bg-brand-navy p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                  <Heart className="text-brand-navy w-5 h-5 fill-brand-navy" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[16px]">Diagnóstico de Conexão</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white/50 text-[12px]">Assistente Virtual • Conexão a Dois</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Botão para fechar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Chat Content */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-cream/30 relative"
            >
              <div className="text-center mb-4">
                <span className="text-[11px] text-brand-navy/40 uppercase tracking-widest font-bold">
                  Você vai conversar com um assistente virtual
                </span>
              </div>

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[15px] leading-[1.6] ${
                    msg.role === 'user' 
                      ? 'bg-brand-navy text-white rounded-tr-none shadow-lg' 
                      : 'bg-white text-brand-navy border border-brand-navy/10 rounded-tl-none shadow-sm shadow-brand-navy/5'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-brand-navy/10">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky CTA */}
            <AnimatePresence>
              {showStickyCTA && (
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="px-4 py-2 bg-white border-t border-brand-gold/20"
                >
                  <a 
                    href="https://pay.hotmart.com/N105586857E" 
                    className="flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-navy font-bold py-3 px-6 rounded-xl hover:scale-[1.02] transition-transform shadow-md text-[14px]"
                  >
                    <span>COMEÇAR OS 21 DIAS AGORA</span>
                    <Heart size={16} className="fill-brand-navy" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
              className="p-4 bg-white border-t border-brand-navy/10 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escreva sua resposta..."
                className="flex-1 bg-brand-cream/50 border border-brand-navy/10 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-brand-navy text-white p-3 rounded-xl disabled:opacity-50 hover:bg-brand-navy/90 transition-colors"
                aria-label="Botão para enviar mensagem"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
