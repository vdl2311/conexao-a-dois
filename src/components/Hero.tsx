import { useState } from 'react';
import { motion } from 'motion/react';
import { PrimaryButton } from './Shared';
import { FunnelQuiz } from './FunnelQuiz';

export function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section className="bg-brand-navy min-h-screen flex flex-col items-center justify-center py-[60px] px-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-brand-gold via-brand-gold2 to-brand-gold" />
      <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-brand-gold via-brand-gold2 to-brand-gold" />
      
      <motion.div 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-brand-gold/15 border border-brand-gold text-brand-gold text-[13px] font-bold tracking-[3px] uppercase py-[7px] px-5 rounded-[30px] mb-7"
      >
        Diagnóstico Gratuito de Conexão
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="text-white text-[clamp(36px,6vw,68px)] leading-[1.1] text-center max-w-[850px] mb-6 font-serif italic"
      >
        Antes de tentar salvar seu casamento… <br />
        <span className="text-brand-gold not-italic">responda isso.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-white/75 text-[clamp(18px,3vw,22px)] text-center max-w-[600px] leading-[1.7] mb-12"
      >
        Leva menos de 2 minutos. Pode mudar tudo no seu relacionamento hoje.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="flex flex-col items-center gap-6"
      >
        <PrimaryButton onClick={() => setIsChatOpen(true)} className="px-12 py-6 text-[18px]">
          QUERO RESPONDER
        </PrimaryButton>
      </motion.div>

      <FunnelQuiz isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  );
}

